import React from 'react';

const ICONS = {
    trophy: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 001.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>,
    users: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>,
    star: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>,
    pin: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>,
    participantsIcon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>,
};


const EventCard = ({ event }) => {
    // Gracefully handle cases where event data is not yet available.
    if (!event) {
        return null;
    }

    const cardColors = {
        purple: { bg: 'bg-gradient-to-br from-purple-500 to-indigo-600', text: 'text-purple-200', icon: 'text-white'},
        cyan: { bg: 'bg-gradient-to-br from-cyan-400 to-blue-500', text: 'text-cyan-100', icon: 'text-white'},
        orange: { bg: 'bg-gradient-to-br from-orange-400 to-red-500', text: 'text-orange-100', icon: 'text-white'},
    };
    const { bg, text, icon: iconColor } = cardColors[event.color] || cardColors.purple;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
            <div className={`p-4 text-white ${bg}`}>
                <div className="flex justify-between items-start">
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-white/20 text-xs font-semibold px-2.5 py-1 rounded-full">{event.category}</span>
                        <span className="bg-white/20 text-xs font-semibold px-2.5 py-1 rounded-full">{event.type}</span>
                    </div>
                    <div className={iconColor}>{ICONS[event.icon]}</div>
                </div>
                <div className={`mt-12 font-semibold text-sm ${text}`}>
                    &#9679; Starts {event.date}
                </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                <p className="mt-2 text-sm text-gray-600 flex-1">{event.description}</p>
                
                <div className="mt-4 text-sm text-gray-500 space-y-2">
                    <div className="flex items-center">
                        {ICONS.pin}
                        <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                        {ICONS.participantsIcon}
                        <span>Max {event.participants} participants</span>
                    </div>
                </div>

                <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-800">Skills needed:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {event.skills.slice(0, 3).map(skill => (
                            <span key={skill} className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">{skill}</span>
                        ))}
                        {event.skills.length > 3 && (
                            <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full">+{event.skills.length - 3}</span>
                        )}
                    </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                    <button className="w-full text-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                        Learn More
                    </button>
                    <button className="w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700">
                        Quick Join
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;

