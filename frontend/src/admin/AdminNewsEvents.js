
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
      navigate('/admin/login');
      return;
    }
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/news-events`);
    if (Array.isArray(res.data)) {
      // Process items to handle both single link and multiple links
      const processedItems = res.data.map(item => {
        let links = [];
        
        // Try to parse links from JSON, fallback to single link
        if (item.links) {
          try {
            links = JSON.parse(item.links);
          } catch (err) {
            console.log('Error parsing links JSON:', err);
          }
        }
        
        // If no links but has single link, convert it
        if (links.length === 0 && item.link) {
          links = [{ text: 'External Link', url: item.link }];
        }
        
        return {
          ...item,
          parsedLinks: links
        };
      });
      
      // sort by created_at descending
      const sorted = processedItems.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setItems(sorted);
    }
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
        {items.length === 0 && <p>No news or events found.</p>}
        {items.map((item) => (
          <div key={item.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              
              {/* ✅ Show video if exists, else show image */}
              <div className="card-media">
                {item.image && (
                  <img
                    src={`${process.env.REACT_APP_API_URL}/uploads/${item.image}`}
                    className="card-img-top mb-2"
                    style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                    alt={item.title}
                  />
                )}

                {item.video && (
                  <video
                    controls
                    className="card-video"
                    style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                  >
                    <source
                      src={`${process.env.REACT_APP_API_URL}/uploads/${item.video}`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              <div className="card-body d-flex flex-column">
                <span className={`badge bg-success mb-2`}>
                  {item.type}
                </span>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="small flex-grow-1">{item.shortDesc}</p>
                
                {/* ✅ Show multiple links if available */}
                {item.parsedLinks && item.parsedLinks.length > 0 && (
                  <div className="mt-2">
                    <strong className="small">Links:</strong>
                    <div className="mt-1">
                      {item.parsedLinks.map((link, index) => (
                        <div key={index} className="mb-1">
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary small text-decoration-none"
                            style={{ wordBreak: 'break-all' }}
                          >
                            {link.text || 'Link'} → {link.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* ✅ Show single link if no multiple links (backward compatibility) */}
                {(!item.parsedLinks || item.parsedLinks.length === 0) && item.link && (
                  <p className="small text-primary mt-2" style={{ wordBreak: 'break-all' }}>
                    <strong>Link:</strong>{' '}
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary text-decoration-none"
                    >
                      {item.link}
                    </a>
                  </p>
                )}

                <div className="mt-2">
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => setEditingItem(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminNewsEvents;