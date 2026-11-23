
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from '../utils/auth';

const AdminNewsEventForm = ({ onItemAdded, editingItem = null }) => {
  const [form, setForm] = useState({
    title: '',
    type: 'News and Events',
    shortDesc: '',
    detailedDesc: '',
    date: '',
    image: null,
    video: null,
    link: ''
  });
  const [links, setLinks] = useState([{ text: '', url: '' }]); // Separate state for multiple links

  useEffect(() => {
    if (editingItem) {
      setForm({
        title: editingItem.title,
        type: editingItem.type,
        shortDesc: editingItem.shortDesc,
        detailedDesc: editingItem.detailedDesc,
        date: editingItem.date?.slice(0, 16), // trim seconds
        image: null,
        video: null,
        link: editingItem.link || ''
      });
      
      // Initialize links from existing data
      if (editingItem.links) {
        try {
          const parsedLinks = JSON.parse(editingItem.links);
          setLinks(parsedLinks.length > 0 ? parsedLinks : [{ text: '', url: '' }]);
        } catch (err) {
          setLinks([{ text: '', url: editingItem.link || '' }]);
        }
      } else if (editingItem.link) {
        setLinks([{ text: 'Link', url: editingItem.link }]);
      }
    }
  }, [editingItem]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  // Handle link changes
  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...links];
    updatedLinks[index][field] = value;
    setLinks(updatedLinks);
  };

  // Add new link field
  const addLink = () => {
    setLinks([...links, { text: '', url: '' }]);
  };

  // Remove link field
  const removeLink = (index) => {
    if (links.length > 1) {
      const updatedLinks = links.filter((_, i) => i !== index);
      setLinks(updatedLinks);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    Object.keys(form).forEach((key) => {
      if (form[key] !== null) {
        fd.append(key, form[key]);
      }
    });

    // Add links to FormData - KEEPING THE SAME STRUCTURE
    const validLinks = links.filter(link => link.text.trim() && link.url.trim());
    fd.append('links', JSON.stringify(validLinks));

    try {
      if (editingItem) {
        await axios.put(`${process.env.REACT_APP_API_URL}/api/news-events/${editingItem.id}`, fd, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${getToken()}`,
          },
        });
      } else {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/news-events`, fd, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${getToken()}`,
          },
        });
      }

      setForm({
        title: '',
        type: 'News and Events',
        shortDesc: '',
        detailedDesc: '',
        date: '',
        image: null,
        video: null,
        link: ''
      });
      setLinks([{ text: '', url: '' }]); // Reset links
      onItemAdded();
    } catch (err) {
      console.error('Failed to submit item:', err);
      alert('Failed to submit item');
    }
  };

  const handleCancelEdit = () => {
    setForm({
      title: '',
      type: 'News and Events',
      shortDesc: '',
      detailedDesc: '',
      date: '',
      image: null,
      video: null,
      link: ''
    });
    setLinks([{ text: '', url: '' }]);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h4>{editingItem ? 'Edit News or Event' : 'Add News or Event'}</h4>
      <div className="row g-2">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <select
            name="type"
            className="form-select"
            value={form.type}
            onChange={handleChange}
            required
          >
            <option value="News and Events">News and Events</option>
          </select>
        </div>
      </div>

      <textarea
        className="form-control mt-2"
        name="shortDesc"
        placeholder="Short Description"
        value={form.shortDesc}
        onChange={handleChange}
        required
      />
      <textarea
        className="form-control mt-2"
        name="detailedDesc"
        placeholder="Detailed Description"
        value={form.detailedDesc}
        onChange={handleChange}
      />
      <input
        className="form-control mt-2"
        name="date"
        type="datetime-local"
        value={form.date}
        onChange={handleChange}
        required
      />

      {/* Multiple Links Section - ADDED */}
      <div className="mt-3">
        <label className="form-label fw-bold">External Links</label>
        
        {links.map((link, index) => (
          <div key={index} className="link-field mb-2 p-2 border rounded">
            <div className="row g-2 align-items-center">
              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Link text (e.g., Facebook, Website)"
                  value={link.text}
                  onChange={(e) => handleLinkChange(index, 'text', e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="url"
                  className="form-control"
                  placeholder="https://example.com"
                  value={link.url}
                  onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                />
              </div>
              <div className="col-md-1">
                {links.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeLink(index)}
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        
        <button
          type="button"
          className="btn btn-outline-primary btn-sm"
          onClick={addLink}
        >
          + Add Another Link
        </button>
      </div>

      <label className="form-label mt-2">Image</label>
      <input
        className="form-control mt-2"
        name="image"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      <label className="form-label mt-2">Video</label>
      <input
         className='form-control'
         name='video'
         type='file'
         accept='video/*'
         onChange={handleChange}
        />

      <div className="d-flex mt-3">
        <button type="submit" className="btn btn-success me-2">Submit</button>
        {editingItem && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancelEdit}
          >
            Cancel Edit
          </button>
        )}
      </div>
    </form>
  );
};

export default AdminNewsEventForm;