const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const UPLOADS_DIR = path.resolve(__dirname, '..', 'uploads');

// Ensure uploads folder exists
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Strict whitelist of allowed extensions and their corresponding MIME types
const ALLOWED_TYPES = {
  '.jpg': ['image/jpeg'],
  '.jpeg': ['image/jpeg'],
  '.png': ['image/png'],
  '.webp': ['image/webp'],
  '.mp4': ['video/mp4'],
  '.mov': ['video/quicktime', 'video/mp4']
};

// Storage configuration with cryptographically secure random filenames (never using original filename)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const rawExt = path.extname(file.originalname).toLowerCase();
    const ext = ALLOWED_TYPES[rawExt] ? rawExt : '.bin';
    const randomName = `${Date.now()}-${crypto.randomBytes(16).toString('hex')}${ext}`;
    cb(null, randomName);
  },
});

// File filter: strict validation of BOTH extension AND MIME type
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowedMimes = ALLOWED_TYPES[ext];

  if (allowedMimes && allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`Invalid file type. Allowed formats: JPG, PNG, WEBP, MP4. (Rejected: ${ext} / ${file.mimetype})`), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB hard limit for videos
    files: 5
  },
});

/**
 * Verify real file content by checking magic bytes on disk.
 * Rejects disguised files (e.g. PHP scripts or executables with a .jpg extension).
 */
function verifyMagicBytes(filePath) {
  return new Promise((resolve) => {
    fs.open(filePath, 'r', (err, fd) => {
      if (err) return resolve(false);

      const buffer = Buffer.alloc(16);
      fs.read(fd, buffer, 0, 16, 0, (readErr, bytesRead) => {
        fs.close(fd, () => {});

        if (readErr || bytesRead < 4) return resolve(false);

        // JPEG: FF D8 FF
        if (buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF) {
          return resolve('image/jpeg');
        }

        // PNG: 89 50 4E 47 0D 0A 1A 0A
        if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
          return resolve('image/png');
        }

        // WebP: 'RIFF' .... 'WEBP'
        if (buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') {
          return resolve('image/webp');
        }

        // MP4 / MOV: 'ftyp' at offset 4
        if (buffer.toString('ascii', 4, 8) === 'ftyp' || buffer.toString('ascii', 4, 8) === 'moov') {
          return resolve('video/mp4');
        }

        resolve(false);
      });
    });
  });
}

// Wrapper middleware to validate magic bytes and image size limits after multer finishes
function validateUploadedFiles(req, res, next) {
  const filesToCheck = [];

  if (req.file) {
    filesToCheck.push(req.file);
  }
  if (req.files) {
    if (Array.isArray(req.files)) {
      filesToCheck.push(...req.files);
    } else {
      Object.values(req.files).forEach((arr) => filesToCheck.push(...arr));
    }
  }

  if (filesToCheck.length === 0) {
    return next();
  }

  (async () => {
    for (const f of filesToCheck) {
      const ext = path.extname(f.filename).toLowerCase();
      const isImage = ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);

      // Phase 5 requirement: 5MB limit for images
      if (isImage && f.size > 5 * 1024 * 1024) {
        fs.unlink(f.path, () => {});
        return res.status(400).json({ message: `Image ${f.originalname} exceeds the 5MB size limit.` });
      }

      // Magic bytes check
      const detectedType = await verifyMagicBytes(f.path);
      if (!detectedType) {
        fs.unlink(f.path, () => {});
        return res.status(400).json({ message: `File ${f.originalname} content does not match its declared type.` });
      }
    }
    next();
  })().catch((err) => {
    console.error('File validation error:', err);
    res.status(500).json({ message: 'File processing error.' });
  });
}

// Attach post-upload validator helper to upload middleware methods
const originalFields = upload.fields.bind(upload);
upload.fields = (...args) => [originalFields(...args), validateUploadedFiles];

const originalSingle = upload.single.bind(upload);
upload.single = (...args) => [originalSingle(...args), validateUploadedFiles];

module.exports = upload;
