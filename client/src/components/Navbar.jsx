import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// NOTE: Redux hooks (useSelector, useDispatch) have been temporarily removed 
// to bypass authentication and prevent compilation errors during setup.

const Navbar = () => {
    // Since we are bypassing authentication for now, we will always show the authenticated user's links.
    const authLinks = (
        <div className="ml-10 flex items-baseline space-x-4">
            <NavLink 
                to="/dashboard" 
                className={({ isActive }) => isActive ? "bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"}
            >
                Dashboard
            </NavLink>
            <NavLink 
                to="/events" 
                className={({ isActive }) => isActive ? "bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"}
            >
                Events
            </NavLink>
             <NavLink 
                to="/profile" 
                className={({ isActive }) => isActive ? "bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"}
            >
                Profile
            </NavLink>
            {/* The logout button is now a simple link to the login page for demonstration */}
            <Link 
                to="/login"
                className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-md text-sm font-medium shadow-sm"
            >
                Logout
            </Link>
        </div>
    );

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 3a3 3 0 013 3v2h2a3 3 0 013 3v2a3 3 0 01-3 3H9a3 3 0 01-3-3V8a3 3 0 013-3h2V6a1 1 0 10-2 0v2H8a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V8a1 1 0 00-1-1H9a1 1 0 00-1 1v2h2a3 3 0 010 6H9a5 5 0 01-5-5V6a3 3 0 013-3z" clipRule="evenodd" /></svg>
                            <span className="text-2xl font-bold text-gray-800">EventForge</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                       { authLinks }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

