import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './index.css'

const API_BASE = 'https://jobs-backend-3.onrender.com/api/jobs';

export default function EditJob() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState('');
  
    useEffect(() => {
      const fetchJob = async () => {
        const res = await fetch(`${API_BASE}`);
        const data = await res.json();
        const job = data.find(j => j._id === id);
        setStatus(job.status);
      };
      fetchJob();
    }, [id]);
  
    const updateStatus = async (e) => {
      e.preventDefault();
      await fetch(`${API_BASE}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      navigate('/');
    };
  
    return (
      <form onSubmit={updateStatus} className='update'>
        <p>The Changes that you made with respecct to status of the job will be projected in job description</p>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <button type="submit" className='update-status'>Update Status</button>
      </form>
    );
  }
  
