import React from 'react';

// Mock user data for demonstration
const user = {
  name: 'Uzair',
  title: 'Full Stack Developer & AI Enthusiast',
  avatarUrl: 'https://placehold.co/128x128/E0E7FF/4F46E5?text=U',
  email: 'uzair@eventforge.com',
  location: 'San Francisco, CA',
  bio: 'Passionate about building scalable web applications and exploring the future of technology. I love participating in hackathons to solve real-world problems. Let\'s connect and build something amazing together!',
  skills: ['React', 'Node.js', 'Python', 'Machine Learning', 'Firebase', 'Tailwind CSS', 'Docker', 'UI/UX Design'],
  stats: {
    eventsAttended: 12,
    hackathonsWon: 3,
    networkSize: 247,
  },
  registeredEvents: [
    { id: 1, title: 'Global AI Hackathon 2024', date: 'Feb 15', category: 'hackathon' },
    { id: 2, title: 'Future of Web Development...', date: 'Mar 20', category: 'conference' },
    { id: 5, title: 'Cyber Security Challenge', date: 'Jun 22', category: 'competition' },
  ],
};

// SVG Icons for the profile page
const ICONS = {
    edit: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z" /></svg>,
    location: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>,
    calendar: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>,
    trophy: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 001.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>,
    network: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500" viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>,
    events: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>,
};


const Profile = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="w-full bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-b-lg relative">
                        {/* Cover Image could go here */}
                    </div>
                    <div className="px-8 -mt-16">
                        <div className="flex justify-between items-end flex-wrap gap-4">
                            <div className="flex items-end space-x-5">
                                <img
                                    className="h-32 w-32 rounded-full ring-4 ring-white"
                                    src={user.avatarUrl}
                                    alt="User Avatar"
                                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/128x128/E0E7FF/4F46E5?text=U'; }}
                                />
                                <div className="pb-4">
                                    <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
                                    <p className="text-sm text-gray-500">{user.title}</p>
                                </div>
                            </div>
                            <div className="pb-4">
                                <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
                                    {ICONS.edit}
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-800 border-b pb-3">About Me</h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                {user.bio}
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-800 border-b pb-3">My Events</h3>
                            <ul className="mt-4 space-y-4">
                                {user.registeredEvents.map(event => (
                                    <li key={event.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                                            {ICONS.calendar}
                                        </div>
                                        <div className="flex-grow">
                                            <p className="font-semibold text-gray-700">{event.title}</p>
                                            <p className="text-sm text-gray-500">{event.date} - <span className="capitalize">{event.category}</span></p>
                                        </div>
                                        <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                                            View Details
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-800 border-b pb-3">Statistics</h3>
                            <div className="mt-4 space-y-5">
                                <div className="flex items-center">
                                    {ICONS.events}
                                    <div className="ml-4">
                                        <p className="text-3xl font-bold text-gray-800">{user.stats.eventsAttended}</p>
                                        <p className="text-sm text-gray-500">Events Attended</p>
                                    </div>
                                </div>
                                 <div className="flex items-center">
                                    {ICONS.trophy}
                                    <div className="ml-4">
                                        <p className="text-3xl font-bold text-gray-800">{user.stats.hackathonsWon}</p>
                                        <p className="text-sm text-gray-500">Hackathons Won</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    {ICONS.network}
                                    <div className="ml-4">
                                        <p className="text-3xl font-bold text-gray-800">{user.stats.networkSize}</p>
                                        <p className="text-sm text-gray-500">Network Size</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-800 border-b pb-3">Skills</h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {user.skills.map(skill => (
                                    <span key={skill} className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

