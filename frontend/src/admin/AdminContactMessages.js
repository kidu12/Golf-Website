import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminContactMessages = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/contact`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      if (Array.isArray(res.data)) {
        setMessages(res.data);
      } else {
        console.warn("Expected array but got:", res.data);
        setMessages([]);
      }
    } catch (err) {
      console.error("Failed to fetch contact messages:", err);
      setMessages([]);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await axios.delete(`${process.env.REACT_APP_API_URL}/api/contact/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        fetchMessages(); // refresh list
      } catch (err) {
        alert('Failed to delete message.');
        console.error(err);
      }
    }
  };

  const handleExport = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contact/export`, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'blob',
      });
      const blob = new Blob([response.data], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `contact_messages_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to export CSV:', err);
      alert('Failed to export CSV. Please ensure you are logged in.');
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Contact Form Submissions</h2>
        <button
          onClick={handleExport}
          className="btn btn-outline-success"
          type="button"
        >
          📤 Export to CSV
        </button>
      </div>

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Message</th><th>Date</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(messages) && messages.map(msg => (
            <tr key={msg.id}>
              <td>{msg.user_name}</td>
              <td>{msg.user_email}</td>
              <td>{msg.phone_no}</td>
              <td>{msg.message}</td>
              <td>{new Date(msg.created_at).toLocaleString()}</td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(msg.id)}>
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

export default AdminContactMessages;
