import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminHeroPostForm from '../components/AdminHeroPostForm';
import { getToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const AdminHeroPostManager = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate('/admin/login');
      return;
    }
    fetchItems();
  }, [navigate]);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/hero-post`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      });
      if (Array.isArray(res.data)) {
        setItems(res.data);
      } else {
        setItems([]);
      }
    } catch (error) {
      console.error('Error fetching hero posts:', error);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleActive = async (id) => {
    try {
      // FIXED: Added 's' to endpoint
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/hero-post/${id}/toggle`,
        {},
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );
      
      alert(response.data.message);
      fetchItems();
    } catch (err) {
      console.error('Failed to toggle active status:', err);
      alert('Failed to toggle status: ' + (err.response?.data?.message || err.message));
    }
  };

  if (loading) {
    return (
      <div className="container py-4">
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2>Hero Post Manager</h2>
      <p className="text-muted">
        Manage the hero section that appears on the homepage. You can select multiple posts to display.
      </p>

      <AdminHeroPostForm
        onItemAdded={() => {
          fetchItems();
          setEditingItem(null);
        }}
        editingItem={editingItem}
      />

      <hr />

      <h4 className="mt-4">Existing Hero Posts</h4>
      
      {/* Active Posts Count */}
      {items.filter(item => item.is_active).length > 0 && (
        <div className="alert alert-success mb-3">
          <strong>
            {items.filter(item => item.is_active).length} post(s) currently active on homepage
          </strong>
        </div>
      )}
      
      {items.length === 0 ? (
        <div className="alert alert-info">
          No hero posts found. Create your first hero post above.
        </div>
      ) : (
        <div className="row g-3">
          {items.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div className={`card h-100 shadow-sm ${item.is_active ? 'border-success border-2' : ''}`}>
                {item.image && (
                  <img
                    src={`${process.env.REACT_APP_API_URL}/uploads/${item.image}`}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                    alt={`Hero post by ${item.author}`}
                  />
                )}
                
                <div className="card-body d-flex flex-column">
                  <h6 className="text-muted mb-2">By: {item.author}</h6>
                  <p className="card-text flex-grow-1">{item.description}</p>
                  
                  <div className="mt-2">
                    <span className={`badge ${item.is_active ? 'bg-success' : 'bg-secondary'}`}>
                      {item.is_active ? '✅ Active on Homepage' : 'Inactive'}
                    </span>
                  </div>

                  <div className="mt-3 d-flex gap-2 flex-wrap">
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => setEditingItem(item)}
                    >
                      Edit
                    </button>
                    
                    <button
                      className={`btn btn-sm ${item.is_active ? 'btn-warning' : 'btn-success'}`}
                      onClick={() => handleToggleActive(item.id)}
                    >
                      {item.is_active ? '❌ Remove from Homepage' : '✅ Add to Homepage'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminHeroPostManager;