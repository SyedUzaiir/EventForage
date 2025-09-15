import React from 'react';
// We are not using Navigate or useSelector for now to bypass authentication
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // --- TEMPORARY CHANGE ---
  // To preview the site's layout, we will temporarily assume the user is always authenticated.
  // This line can be replaced with the commented-out Redux logic later.
  const isAuthenticated = true;

  // The original logic to redirect if not authenticated is commented out for now.
  /*
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  */

  // This will now always render the children components (i.e., the protected pages).
  return children;
};

export default ProtectedRoute;

