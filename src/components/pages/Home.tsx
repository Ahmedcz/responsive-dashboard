import React from 'react';
import Navbar from '../organisms/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Welcome to the Dashboard</h1>
      </div>
    </div>
  );
};

export default Home;