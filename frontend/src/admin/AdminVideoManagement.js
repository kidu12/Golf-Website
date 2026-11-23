import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const AdminVideoManagement = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate('/admin/login');
      return;
    }
    fetchServices();
  }, [navigate]);

  const fetchServices = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/services`)
      .then((res) => setServices(Array.isArray(res.data) ? res.data : []))
      .catch((err) => {
        console.error('Error fetching services:', err);
        setServices([]);
      });
  };

  const handleAddVideo = async (serviceId, file) => {
    if (!file) return;
    setLoading(true);
    setMessage(null);

    const fd = new FormData();
    fd.append('video', file);

    try {
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${getToken()}`,
      };

      await axios.post(`${process.env.REACT_APP_API_URL}/api/services/${serviceId}/videos`, fd, { headers });
      setMessage({ type: 'success', text: 'Video added successfully!' });
      fetchServices();
    } catch (err) {
      console.error('Add video error:', err);
      setMessage({ type: 'danger', text: err.response?.data?.message || 'Failed to add video.' });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteVideo = async (serviceId, videoId) => {
    if (!window.confirm('Are you sure you want to delete this video?')) return;
    setLoading(true);
    setMessage(null);
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/services/${serviceId}/videos/${videoId}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      setMessage({ type: 'success', text: 'Video deleted successfully!' });
      fetchServices();
    } catch (err) {
      console.error('Delete failed:', err);
      setMessage({ type: 'danger', text: 'Delete failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleReplaceVideo = async (serviceId, videoId, file) => {
    if (!file) return;
    setLoading(true);
    setMessage(null);

    const fd = new FormData();
    fd.append('video', file);

    try {
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${getToken()}`,
      };

      await axios.put(`${process.env.REACT_APP_API_URL}/api/services/${serviceId}/videos/${videoId}`, fd, { headers });
      setMessage({ type: 'success', text: 'Video replaced successfully!' });
      fetchServices();
    } catch (err) {
      console.error('Replace video error:', err);
      setMessage({ type: 'danger', text: err.response?.data?.message || 'Failed to replace video.' });
    } finally {
      setLoading(false);
    }
  };

  const [selectedServiceId, setSelectedServiceId] = useState('');

  const selectedService = services.find(s => s.id.toString() === selectedServiceId.toString());

  return (
    <div className="container-fluid py-5 px-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div className="max-width-container mx-auto" style={{ maxWidth: '900px' }}>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2" style={{ color: '#1a1a1a' }}>📹 Service Video Management</h2>
          <p className="text-muted">Follow the steps below to manage your service videos.</p>
        </div>

        {message && (
          <div className={`alert alert-${message.type} border-0 shadow-sm mb-4 animate__animated animate__fadeIn`} role="alert">
            {message.type === 'success' ? '✅ ' : '❌ '}{message.text}
          </div>
        )}

        {/* STEP 1: SELECT SERVICE */}
        <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '16px' }}>
          <div className="card-body p-4">
            <h5 className="fw-bold mb-3"><span className="badge bg-primary me-2">1</span> Select Service</h5>
            <select 
              className="form-select form-select-lg border-0 bg-light rounded-3" 
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              style={{ cursor: 'pointer' }}
            >
              <option value="">-- Choose a service --</option>
              {services.map(s => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
            </select>
          </div>
        </div>

        {/* STEP 2: POST VIDEO */}
        {selectedService ? (
          <div className="card border-0 shadow-sm animate__animated animate__fadeInUp" style={{ borderRadius: '16px' }}>
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0">
                  <span className="badge bg-primary me-2">2</span> Post Video for {selectedService.title}
                </h5>
                <span className={`badge rounded-pill ${selectedService.videos?.length === 3 ? 'bg-success' : 'bg-light text-dark border'} px-3 py-2`}>
                  {selectedService.videos?.length || 0} / 3 Videos
                </span>
              </div>

              <div className="row g-4">
                {/* Info */}
                <div className="col-md-4">
                  <div className="rounded-4 overflow-hidden border mb-3" style={{ height: '180px' }}>
                    {selectedService.image ? (
                      <img
                        src={`${process.env.REACT_APP_API_URL}/uploads/${selectedService.image}`}
                        className="w-100 h-100"
                        alt={selectedService.title}
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center text-muted">No Image</div>
                    )}
                  </div>
                  <p className="small text-muted">{selectedService.description?.substring(0, 100)}...</p>
                </div>

                {/* Video Management Area */}
                <div className="col-md-8">
                  <div className="d-flex flex-wrap gap-3">
                    {/* Existing Videos */}
                    {selectedService.videos?.map((v, idx) => (
                      <div key={v.id} className="position-relative" style={{ width: '100%' }}>
                        <div className="d-flex align-items-center bg-light p-3 rounded-4 border mb-2">
                          <video
                            src={`${process.env.REACT_APP_API_URL}/uploads/${v.filename}`}
                            className="rounded-3 me-3"
                            style={{ width: '100px', height: '60px', objectFit: 'cover', background: '#000' }}
                          />
                          <div className="flex-grow-1">
                            <div className="fw-bold small">Video {idx + 1}</div>
                            <div className="text-muted smaller text-truncate" style={{ maxWidth: '200px' }}>{v.filename}</div>
                          </div>
                          <div className="d-flex gap-2">
                            <label className="btn btn-sm btn-outline-primary rounded-pill px-3 mb-0">
                              Replace
                              <input
                                type="file"
                                hidden
                                accept="video/*"
                                onChange={(e) => handleReplaceVideo(selectedService.id, v.id, e.target.files[0])}
                              />
                            </label>
                            <button
                              className="btn btn-sm btn-outline-danger rounded-pill px-3"
                              onClick={() => handleDeleteVideo(selectedService.id, v.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Add New Video Button */}
                    {(!selectedService.videos || selectedService.videos.length < 3) && (
                      <div className="w-100">
                        <label 
                          className="w-100 p-4 rounded-4 d-flex flex-column align-items-center justify-content-center transition-all"
                          style={{ 
                            border: '2px dashed #4D784E',
                            backgroundColor: '#f0fff4',
                            cursor: 'pointer'
                          }}
                        >
                          <div className="fs-1 text-success mb-2">📤</div>
                          <span className="fw-bold text-success">Upload & Post Video</span>
                          <span className="small text-muted">Click to select MP4, WebM or MOV (Max 100MB)</span>
                          <input
                            type="file"
                            hidden
                            accept="video/*"
                            onChange={(e) => handleAddVideo(selectedService.id, e.target.files[0])}
                            disabled={loading}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-5 opacity-50">
            <div className="fs-1">👆</div>
            <p className="mt-2">Select a service above to start posting videos</p>
          </div>
        )}
      </div>

      <style>{`
        .transition-all { transition: all 0.3s ease; }
        .transition-all:hover { transform: translateY(-2px); border-color: #2e4a30 !important; background-color: #e6f9e9 !important; }
        .smaller { font-size: 0.75rem; }
      `}</style>
    </div>
  );
};

export default AdminVideoManagement;
