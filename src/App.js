import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  nav: {
    marginBottom: '20px',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  li: {
    display: 'inline',
    marginRight: '10px',
  },
  a: {
    textDecoration: 'none',
    color: '#333',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  aHover: {
    backgroundColor: '#f3f3f3',
  },
};

const App = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <div style={styles.container}>
        <h1 style={styles.heading}>Task Manager</h1>
        <nav style={styles.nav}>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <a href="/" style={styles.a}>Home</a>
            </li>
            <li style={styles.li}>
              <a href="/dashboard" style={styles.a}>Dashboard</a>
            </li>
            
            {localStorage.getItem('token') ? (
              <li style={styles.li}>
                <button onClick={handleLogout} style={styles.a}>Logout</button>
              </li>
            ) : (
              <>
                <li style={styles.li}>
                  <a href="/login" style={styles.a}>Login</a>
                </li>
                <li style={styles.li}>
                  <a href="/register" style={styles.a}>Register</a>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/taskform" element={<TaskForm />} />
          <Route path="/tasklist" element={<TaskList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
