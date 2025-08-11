import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from '../utils/auth';

const AdminNewsEventForm = ({ onItemAdded, editingItem = null }) => {
  const [form, setForm] = useState({
    title: '',
    type: 'News',
    shortDesc: '',
    detailedDesc: '',
    date: '',
    image: null,
  });

  useEffect(() => {
    if (editingItem) {
      setForm({
        title: editingItem.title,
        type: editingItem.type,
        shortDesc: editingItem.shortDesc,
        detailedDesc: editingItem.detailedDesc,
        date: editingItem.date?.slice(0, 16), // trim seconds
        image: null,
      });
    }
  }, [editingItem]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    Object.keys(form).forEach((key) => {
      if (form[key] !== null) {
        fd.append(key, form[key]);
      }
    });

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
        type: 'News',
        shortDesc: '',
        detailedDesc: '',
        date: '',
        image: null,
      });
      onItemAdded();
    } catch (err) {
      console.error('Failed to submit item:', err);
      alert('Failed to submit item');
    }
  };

  const handleCancelEdit = () => {
    setForm({
      title: '',
      type: 'News',
      shortDesc: '',
      detailedDesc: '',
      date: '',
      image: null,
    });
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
            <option value="News">News</option>
            <option value="Event">Event</option>
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
      <input
        className="form-control mt-2"
        name="image"
        type="file"
        accept="image/*"
        onChange={handleChange}
        required={!editingItem}
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
