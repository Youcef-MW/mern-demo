import React, { useEffect, useState } from 'react';

function App() {
  const [health, setHealth] = useState('Checking...');

  useEffect(() => {
    fetch('http://localhost:4000/api/health')
      .then((res) => res.json())
      .then((data) => setHealth(data.status))
      .catch(() => setHealth('Offline / Mock Mode'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>MERN Stack Jenkins Pipeline Demo</h1>
      <p>Frontend status: Running</p>
      <p>Backend API status: <strong>{health}</strong></p>
    </div>
  );
}

export default App;