import React from 'react';

const SavedEvents = ({ events, onSelectEvent, onClearEvents }) => {
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full mx-auto mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Saved Events</h2>
        <button
          onClick={onClearEvents}
          className="text-sm text-red-600 hover:text-red-800 focus:outline-none"
        >
          Clear All
        </button>
      </div>

      <ul className="space-y-3">
        {events.map((event, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded-md border border-gray-200">
            <div>
              <p className="font-semibold text-gray-800">{event.title}</p>
              <p className="text-sm text-gray-500">{event.date} vs {event.featuredBattler}</p>
            </div>
            <button
              onClick={() => onSelectEvent(event)}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-md transition-colors"
            >
              Load
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedEvents;
