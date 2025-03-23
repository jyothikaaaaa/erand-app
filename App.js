import React from 'react';
import './App.css';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import CreateRequestForm from './CreateRequestForm';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { AuthProvider, useAuth } from './AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';

const AppContent = () => {
  const { user } = useAuth();
  const [showSignIn, setShowSignIn] = React.useState(true);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/seek-help" element={<CreateRequestForm />} />
      <Route path="/give-help" element={user ? <Navigate to="/" /> : (
        showSignIn ? (
          <SignIn onToggleForm={() => setShowSignIn(false)} />
        ) : (
          <SignUp onToggleForm={() => setShowSignIn(true)} />
        )
      )} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <AppContent />
    </AuthProvider>
  );
}

export default App;
