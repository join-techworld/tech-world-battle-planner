import React, { useState, useEffect } from 'react';
import EventForm from './components/EventForm';
import GeneratedOutput from './components/GeneratedOutput';
import SavedEvents from './components/SavedEvents';

function App() {
  const [currentEventData, setCurrentEventData] = useState(null);
  const [savedEvents, setSavedEvents] = useState([]);

  // Load saved events from local storage on initial mount
  useEffect(() => {
    const storedEvents = localStorage.getItem('techWorldBattleEvents');
    if (storedEvents) {
      try {
        setSavedEvents(JSON.parse(storedEvents));
      } catch (err) {
        console.error("Failed to parse saved events:", err);
      }
    }
  }, []);

  const handleFormSubmit = (data) => {
    setCurrentEventData(data);

    // Save to local storage
    const newSavedEvents = [data, ...savedEvents].slice(0, 10); // Keep last 10
    setSavedEvents(newSavedEvents);
    localStorage.setItem('techWorldBattleEvents', JSON.stringify(newSavedEvents));
  };

  const handleSelectEvent = (eventData) => {
    setCurrentEventData(eventData);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearEvents = () => {
    setSavedEvents([]);
    localStorage.removeItem('techWorldBattleEvents');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 w-full flex justify-center w-full">
      <div className="max-w-4xl w-full flex flex-col items-center">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-indigo-700 tracking-tight mb-2">Tech World Battle Planner</h1>
          <p className="text-gray-600 text-lg">Plan your TikTok Live box and cohost battles like a pro.</p>
        </header>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          <div className="lg:col-span-5 w-full">
            <EventForm onSubmit={handleFormSubmit} />
            <SavedEvents
              events={savedEvents}
              onSelectEvent={handleSelectEvent}
              onClearEvents={handleClearEvents}
            />
          </div>

          <div className="lg:col-span-7 w-full">
            {currentEventData ? (
              <GeneratedOutput data={currentEventData} />
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center h-full flex flex-col justify-center items-center border-2 border-dashed border-gray-300">
                <div className="text-gray-400 mb-4">
                  <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No Event Generated Yet</h3>
                <p className="text-gray-500">Fill out the form to the left to generate your battle materials.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
