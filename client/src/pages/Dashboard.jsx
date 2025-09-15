import React from 'react';

// --- MOCK DATA ---
const mockRecommendedEvents = [
  {
    id: 1,
    title: 'Global AI Hackathon 2024',
    category: 'hackathon',
    color: 'purple',
    icon: 'trophy'
  },
  {
    id: 2,
    title: 'Future of Web Development...',
    category: 'conference',
    color: 'cyan',
    icon: 'users'
  },
  {
    id: 3,
    title: 'Startup Pitch Competition 2024',
    category: 'competition',
    color: 'orange',
    icon: 'star'
  },
];

// --- SVG ICONS ---
const ICONS = {
    calendar: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>,
    zap: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>,
    network: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>,
    trophy: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 001.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>,
    rocket: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>,
    users: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>,
    star: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8-2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>,

};

const StatCard = ({ icon, label, value }) => (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4">
        <div className="flex-shrink-0">{icon}</div>
        <div>
            <p className="text-gray-500 text-sm font-medium">{label}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
);


const RecommendedEventCard = ({ event }) => {
    const colorClasses = {
        purple: { bg: 'bg-purple-100', text: 'text-purple-800', iconBg: 'bg-purple-200' },
        cyan: { bg: 'bg-cyan-100', text: 'text-cyan-800', iconBg: 'bg-cyan-200' },
        orange: { bg: 'bg-orange-100', text: 'text-orange-800', iconBg: 'bg-orange-200' },
    };

    const cardColor = colorClasses[event.color] || colorClasses.purple;

    const getIcon = (iconName) => {
        const iconStyle = `h-5 w-5 ${cardColor.text}`;
        switch(iconName) {
            case 'trophy': return <div className={`${cardColor.iconBg} p-2 rounded-full`}>{React.cloneElement(ICONS.trophy, { className: iconStyle })}</div>;
            case 'users': return <div className={`${cardColor.iconBg} p-2 rounded-full`}>{React.cloneElement(ICONS.users, { className: iconStyle })}</div>;
            case 'star': return <div className={`${cardColor.iconBg} p-2 rounded-full`}>{React.cloneElement(ICONS.star, { className: iconStyle })}</div>;
            default: return null;
        }
    };

    return (
        <div className={`rounded-xl p-4 flex flex-col justify-between h-48 ${cardColor.bg}`}>
            <div>
                <div className="flex justify-between items-start">
                    <span className={`text-xs font-semibold uppercase px-2 py-1 rounded-full ${cardColor.text} ${cardColor.iconBg}`}>
                        {event.category}
                    </span>
                    {getIcon(event.icon)}
                </div>
                <h3 className={`mt-4 font-bold text-lg ${cardColor.text}`}>{event.title}</h3>
            </div>
            <button className="text-left font-semibold text-sm text-gray-600 hover:text-gray-900">
                View Details &rarr;
            </button>
        </div>
    );
};


const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="p-8 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
        <h1 className="text-3xl font-bold">Welcome back, Uzair! {ICONS.rocket}</h1>
        <p className="mt-2 text-indigo-100">Discover amazing events and connect with like-minded innovators worldwide</p>
        <button className="mt-4 px-5 py-2.5 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors">
            Explore Events &rarr;
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={ICONS.calendar} label="Events Attended" value="0" />
        <StatCard icon={ICONS.zap} label="Skills Gained" value="0" />
        <StatCard icon={ICONS.network} label="Network Size" value="247" />
        <StatCard icon={ICONS.trophy} label="Achievement Score" value="1,847" />
      </div>

      {/* AI Recommendations */}
      <div>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">AI Recommendations</h2>
            <button className="font-semibold text-indigo-600 hover:text-indigo-800">
                View All
            </button>
        </div>
        <p className="text-gray-500 mb-6">Events curated just for you based on your interests</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockRecommendedEvents.map(event => (
            <RecommendedEventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

