import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const token = localStorage.getItem('token');

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/testimonials`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (Array.isArray(res.data)) {
        setTestimonials(res.data);
      } else {
        console.warn("Expected an array of testimonials, got:", res.data);
        setTestimonials([]);
      }
    } catch (error) {
      console.error("Failed to fetch testimonials", error);
      setTestimonials([]);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/testimonials/${id}/approve`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchTestimonials();
    } catch (error) {
      console.error("Failed to approve testimonial", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/testimonials/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTestimonials();
    } catch (error) {
      console.error("Failed to delete testimonial", error);
      alert("Delete failed");
    }
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">📋 Testimonial Review Panel</h2>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Message</th>
            <th>Status</th>
            <th>Submitted</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(testimonials) && testimonials.map((t) => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.message}</td>
              <td>
                {t.isApproved ? (
                  <span className="badge bg-success">Approved</span>
                ) : (
                  <span className="badge bg-warning text-dark">Pending</span>
                )}
              </td>
              <td>{new Date(t.created_at).toLocaleString()}</td>
              <td>
                {!t.isApproved && (
                  <button
                    onClick={() => handleApprove(t.id)}
                    className="btn btn-sm btn-success me-2"
                  >
                    Approve
                  </button>
                )}
                <button
                  onClick={() => handleDelete(t.id)}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTestimonials;
