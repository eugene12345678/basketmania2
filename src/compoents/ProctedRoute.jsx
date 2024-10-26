import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // Redirect user to the Sign Up page if not authenticated
    return <Navigate to="/signup" replace />;
  }

  return children;
};

export default ProtectedRoute;
