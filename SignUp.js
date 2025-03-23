import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const SignUp = ({ onToggleForm }) => {
  const { signUp, error, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(email, password, name);
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Sign Up</h2>
      {error && <div className="error-message">{error}</div>}
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      <div className="auth-switch">
        Already have an account?{' '}
        <button className="auth-switch-button" onClick={onToggleForm}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUp;

