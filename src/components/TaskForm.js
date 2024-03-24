
import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onSubmit, buttonText, initialValues }) => {
  const [formData, setFormData] = useState({
    title: initialValues?.title || '',
    description: initialValues?.description || '',
  });

  const { title, description } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (initialValues) {
        await axios.put(`/api/tasks/${initialValues._id}`, formData);
      } else {
        await axios.post('/api/tasks', formData);
      }
      onSubmit();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>{buttonText}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
};

export default TaskForm;
