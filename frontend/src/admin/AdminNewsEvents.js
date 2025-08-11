import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNewsEventForm from '../components/AdminNewsEventForm';
import { getToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const AdminNewsEvents = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate('/admin-login');
      return;
    }
    fetchItems();
  }, []);

  const fetchItems = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/news-events`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setItems(res.data);
        } else {
          console.warn('Expected an array but got:', res.data);
          setItems([]);
        }
      })
      .catch((err) => {
        console.error('Error fetching news-events:', err);
        setItems([]);
      });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this item?')) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/news-events/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      fetchItems();
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Delete failed');
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>News & Events Manager</h2>
      </div>

      <AdminNewsEventForm
        onItemAdded={() => {
          fetchItems();
          setEditingItem(null);
        }}
        editingItem={editingItem}
      />

      <hr />

      <h4 className="mt-4">Existing Posts</h4>
      <div className="row g-3">
        {Array.isArray(items) && items.map((item) => (
          <div key={item.id} className="col-md-6 col-lg-4">
            <div className="card h-100">
              <img
                src={`${process.env.REACT_APP_API_URL}/uploads/${item.image}`}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
                alt={item.title}
              />
              <div className="card-body">
                <span
                  className={`badge ${item.type === 'Event' ? 'bg-success' : 'bg-primary'} mb-2`}
                >
                  {item.type}
                </span>
                <h5>{item.title}</h5>
                <p className="small">{item.shortDesc}</p>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => setEditingItem(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminNewsEvents;
