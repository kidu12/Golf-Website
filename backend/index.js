const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const newsEventRoutes = require('./routes/newsEventRoutes');
const contact = require('./routes/contactRoutes');
const testimonial = require('./routes/testimonialRoutes');

const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/news-events', newsEventRoutes);
app.use('/api/contact',contact );
app.use('/api/testimonials', testimonial);


app.use('/uploads', express.static('uploads'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


