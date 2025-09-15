import React from 'react';

const ICONS = {
    dashboard: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    discover: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>,
    create: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>,
    analytics: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>,
    profile: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>,
    logo: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 3a3 3 0 013 3v2h2a3 3 0 013 3v2a3 3 0 01-3 3H9a3 3 0 01-3-3V8a3 3 0 013-3h2V6a1 1 0 10-2 0v2H8a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V8a1 1 0 00-1-1H9a1 1 0 00-1 1v2h2a3 3 0 010 6H9a5 5 0 01-5-5V6a3 3 0 013-3z" clipRule="evenodd" /></svg>,
};


const Sidebar = () => {
  const handleLogout = () => {
    // In a real application, you would dispatch a logout action here.
    // e.g., dispatch(logoutUser());
    console.log("Logout action dispatched");
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: ICONS.dashboard, path: '/dashboard' },
    { id: 'discover', label: 'Discover Events', icon: ICONS.discover, path: '/events' },
    { id: 'create', label: 'Create Event', icon: ICONS.create, path: '/create-event' },
    { id: 'analytics', label: 'Analytics', icon: ICONS.analytics, path: '/analytics' },
    { id: 'profile', label: 'Profile', icon: ICONS.profile, path: '/profile' },
  ];

  return (
    <aside className="w-64 bg-white flex-shrink-0 p-4 border-r border-gray-200 flex flex-col">
      <div className="flex items-center space-x-2 p-2 mb-5">
        <div className="bg-indigo-600 p-2 rounded-lg">{ICONS.logo}</div>
        <span className="font-bold text-xl text-gray-800">EventForge</span>
      </div>
      
      <nav className="flex-1">
        <ul>
          {navItems.map(item => (
            <li key={item.id}>
              <a 
                href={item.path}
                // Note: The active link styling (changing background on the current page) is removed 
                // because NavLink was causing a crash. This requires a Router provider component 
                // higher up in your application tree.
                className="flex items-center space-x-3 p-3 my-1 rounded-lg font-medium transition-colors text-gray-600 hover:bg-gray-100"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-800">Welcome Back</h4>
            <p className="text-sm text-gray-500">Premium Member</p>
        </div>
        <button onClick={handleLogout} className="w-full mt-4 text-left p-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium">
            Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

