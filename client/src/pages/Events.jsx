import React from 'react';
import EventCard from '../components/EventCard';

// --- MOCK DATA ---
const mockEvents = [
  {
    id: 1,
    title: 'Global AI Hackathon 2024',
    date: 'Feb 15',
    category: 'hackathon',
    type: 'hybrid',
    description: 'Join the ultimate AI challenge where brilliant minds come together to solve real-world...',
    location: 'San Francisco Tech Hub & Virtual',
    participants: 500,
    skills: ['Python', 'Machine Learning', 'TensorFlow'],
    color: 'purple',
    icon: 'trophy'
  },
  {
    id: 2,
    title: 'Future of Web Development...',
    date: 'Mar 20',
    category: 'conference',
    type: 'in_person',
    description: 'Discover the latest trends and technologies shaping the future of web development...',
    location: 'Convention Center, Austin, TX',
    participants: 1000,
    skills: ['JavaScript', 'React', 'Vue.js'],
    color: 'cyan',
    icon: 'users'
  },
  {
    id: 3,
    title: 'Startup Pitch Competition 2024',
    date: 'Apr 5',
    category: 'competition',
    type: 'virtual',
    description: 'Present your innovative startup idea to a panel of expert judges including VCs...',
    location: 'Virtual Event Platform',
    participants: 100,
    skills: ['Business Development', 'Public Speaking', 'Market Analysis'],
    color: 'orange',
    icon: 'star'
  },
    {
    id: 4,
    title: 'Data Science Summit',
    date: 'May 10',
    category: 'conference',
    type: 'in_person',
    description: 'An immersive conference for data scientists to explore the latest in big data and analytics.',
    location: 'Chicago Convention Hall',
    participants: 800,
    skills: ['R', 'SQL', 'Tableau'],
    color: 'cyan',
    icon: 'users'
  },
  {
    id: 5,
    title: 'Cyber Security Challenge',
    date: 'Jun 22',
    category: 'competition',
    type: 'virtual',
    description: 'Test your ethical hacking skills in a series of intense cybersecurity challenges.',
    location: 'Online',
    participants: 300,
    skills: ['Penetration Testing', 'Cryptography', 'Networking'],
    color: 'orange',
    icon: 'star'
  },
  {
    id: 6,
    title: 'Web3 & Blockchain Hackathon',
    date: 'Jul 18',
    category: 'hackathon',
    type: 'hybrid',
    description: 'Build the next decentralized application on the blockchain. Prizes and mentorship included.',
    location: 'New York & Virtual',
    participants: 450,
    skills: ['Solidity', 'Web3.js', 'Ethers.js'],
    color: 'purple',
    icon: 'trophy'
  }
];


const Events = () => {
    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Found {mockEvents.length} events</h1>
                <div>
                    <button className="flex items-center text-sm font-medium text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50">
                        Sort by relevance
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default Events;

