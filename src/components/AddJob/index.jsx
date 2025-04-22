import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

export default function AddJob() {
  const [form, setForm] = useState({ company: '', role: '', status: 'Applied', date: '', link: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('https://jobs-backend-3.onrender.com/api/jobs/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    navigate('/');
  };

  return (
    <>
      <div  className='add-job'>
      <h1>Add Job</h1>
      <form className='job-form' onSubmit={handleSubmit}>
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} required />
        <input name="role" placeholder="Role" value={form.role} onChange={handleChange} required />
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <input name="link" placeholder="Link" value={form.link} onChange={handleChange} required />
        <button type="submit">Add Job</button>
      </form>
    </div>
    </>
  );
}
