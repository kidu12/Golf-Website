import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from '../utils/auth';

const AdminHeroPostForm = ({ onItemAdded, editingItem = null }) => {
  const [form, setForm] = useState({
    detailedDesc: '',
    author: '',
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (editingItem) {
      setForm({
        detailedDesc: editingItem.description || '', // Map description to detailedDesc
        author: editingItem.author || '',
        image: null,
      });
      
      // Set preview image if editing and image exists
      if (editingItem.image) {
        setPreviewImage(`${process.env.REACT_APP_API_URL}/uploads/${editingItem.image}`);
      }
    }
  }, [editingItem]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'image' && files && files[0]) {
      const file = files[0];
      setForm(prev => ({
        ...prev,
        image: file
      }));
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setForm(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Validate required fields
    if (!form.detailedDesc.trim() || !form.author.trim()) {
      alert('Description and author are required');
      setSubmitting(false);
      return;
    }

    // For new posts, image is required
    if (!editingItem && !form.image) {
      alert('Image is required for new hero posts');
      setSubmitting(false);
      return;
    }

    const fd = new FormData();
    fd.append('detailedDesc', form.detailedDesc.trim());
    fd.append('author', form.author.trim());
    
    if (form.image) {
      fd.append('image', form.image);
    }

    try {
      // FIXED: Added 's' to endpoints
      const baseUrl = `${process.env.REACT_APP_API_URL}/api/hero-post`;
      
      if (editingItem) {
        await axios.put(`${baseUrl}/${editingItem.id}`, fd, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${getToken()}`,
          },
        });
        alert('Hero post updated successfully!');
      } else {
        await axios.post(baseUrl, fd, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${getToken()}`,
          },
        });
        alert('Hero post created successfully!');
      }

      // Reset form
      setForm({
        detailedDesc: '',
        author: '',
        image: null,
      });
      setPreviewImage(null);
      onItemAdded();
    } catch (err) {
      console.error('Failed to submit hero post:', err);
      console.error('Error response:', err.response?.data);
      alert('Failed to submit hero post: ' + (err.response?.data?.message || err.message));
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancelEdit = () => {
    setForm({
      detailedDesc: '',
      author: '',
      image: null,
    });
    setPreviewImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded">
      <h4>{editingItem ? 'Edit Hero Post' : 'Add New Hero Post'}</h4>
      
      <div className="mb-3">
        <label className="form-label fw-bold">Text to Display on Image *</label>
        <textarea
          className="form-control"
          name="detailedDesc"
          placeholder="Enter the text that will appear on the image..."
          value={form.detailedDesc}
          onChange={handleChange}
          required
          rows="3"
        />
      </div>
      
      <div className="mb-3">
        <label className="form-label fw-bold">Author *</label>
        <input
          className="form-control"
          name="author"
          placeholder="Enter author name..."
          type="text"
          value={form.author}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="mb-3">
        <label className="form-label fw-bold">
          Background Image {!editingItem && '*'}
        </label>
     {/* Image Preview */}
     {previewImage && (
      <div className="mb-4">
      <p className="small text-muted mb-2">Preview (Homepage Appearance):</p>
      <div 
       className="preview-container position-relative rounded overflow-hidden"
           style={{
            backgroundImage: `url(${previewImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '500px', // Matches homepage hero height
            width: '100%'
         }}
         >
         {/* Content positioned exactly like homepage with center alignment */}
          <div className="position-absolute top-50 start-50 translate-middle w-100 p-4 text-white text-center">
           {/* Title - matches homepage styling */}
           <h1 className="hero-title" style={{
             fontSize: '2.1rem',
             lineHeight: '1.2',
             textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
             maxWidth: '1000%',
             margin: '0 auto',
             fontWeight: '600',
             textAlign: 'center',
             whiteSpace: 'pre-line',
             wordWrap: 'break-word',
             overflowWrap: 'break-word',
             color: 'white',
             marginBottom: '1rem'
           }}>
             {form.detailedDesc || 'Your Hero Title Here'}
              </h1>
        
            {/* Author section - exact same as homepage */}
           <div className="author-section mt-2">
              <span className="author-name fw-medium" style={{ 
               fontSize: '1rem',
               textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
               opacity: '0.9'
                }}>
                     By {form.author || 'Your Name'}
                  </span>
                 </div>
               </div>
             </div>
    
          {/* Preview info */}
          <div className="mt-2 p-2 bg-light rounded small text-muted">
           This preview matches the exact appearance and dimensions of your hero post on the homepage
         </div>
         </div>
        )}
        
        <input
          className="form-control"
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          required={!editingItem}
        />
        <div className="form-text">
          {editingItem ? 'Choose a new image to replace the current one' : 'Select the background image for your hero post'}
        </div>
      </div>

      <div className="d-flex gap-2">
        <button 
          type="submit" 
          className="btn btn-success"
          disabled={submitting}
        >
          {submitting ? 'Processing...' : (editingItem ? 'Update Post' : 'Create Post')}
        </button>
        {editingItem && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancelEdit}
            disabled={submitting}
          >
            Cancel Edit
          </button>
        )}
      </div>
    </form>
  );
};

export default AdminHeroPostForm;