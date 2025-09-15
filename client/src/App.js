import React from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Profile from './pages/Profile';

// Import Components for Layout
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';

// This component creates the main layout for the protected dashboard area
const DashboardLayout = () => (
  <div className="bg-[#f3f4f8] min-h-screen flex text-gray-800">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8 flex-grow">
        {/* The Outlet will render the matched nested route, e.g., Dashboard, Events, or Profile */}
        <Outlet />
      </main>
    </div>
  </div>
);

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes Layout */}
      <Route 
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add other protected routes here */}
      </Route>

    </Routes>
  );
}

export default App;

