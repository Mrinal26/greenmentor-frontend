import React from 'react';

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2rem',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Task Manager</h1>
      <p style={styles.paragraph}>This is the home page of the Task Manager application.</p>
    </div>
  );
};

export default Home;
