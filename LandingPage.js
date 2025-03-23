import React from 'react';
import './Landingpage.css';  // ✅ Match the casing
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      <div className="landing-header">
        <h1>Welcome to Helper App</h1>
        <p>Choose your role to proceed:</p>
      </div>

      <div className="landing-buttons">
        <div className="landing-card" onClick={() => navigate('/seek-help')}>
          <img src="/assets/request_errand.png" alt="Request an Errand" className="landing-img" />
          <h3>Request an Errand</h3>
          <p>Get assistance for your tasks from reliable helpers.</p>
        </div>

        <div className="landing-card" onClick={() => navigate('/give-help')}>
          <img src="/assets/run_errand.png" alt="Run an Errand" className="landing-img" />
          <h3>Run an Errand</h3>
          <p>Help others by fulfilling their requests efficiently.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
