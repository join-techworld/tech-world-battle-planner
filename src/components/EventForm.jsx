import React, { useState } from 'react';

const EventForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    hostName: '',
    featuredBattler: '',
    date: '',
    timeZones: '',
    target: '',
    prize: '',
    rules: '',
    cta: '',
    theme: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Plan Your Battle</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Epic Summer Showdown"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="hostName" className="block text-sm font-medium text-gray-700 mb-1">Host Name</label>
          <input
            type="text"
            id="hostName"
            name="hostName"
            value={formData.hostName}
            onChange={handleChange}
            placeholder="Your TikTok handle"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="featuredBattler" className="block text-sm font-medium text-gray-700 mb-1">Featured Battler / Opponent</label>
          <input
            type="text"
            id="featuredBattler"
            name="featuredBattler"
            value={formData.featuredBattler}
            onChange={handleChange}
            placeholder="Opponent's TikTok handle"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="timeZones" className="block text-sm font-medium text-gray-700 mb-1">Time & Zones</label>
          <input
            type="text"
            id="timeZones"
            name="timeZones"
            value={formData.timeZones}
            onChange={handleChange}
            placeholder="e.g., 8 PM EST / 5 PM PST"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="target" className="block text-sm font-medium text-gray-700 mb-1">Target / Goal</label>
          <input
            type="text"
            id="target"
            name="target"
            value={formData.target}
            onChange={handleChange}
            placeholder="e.g., 100k Likes, Top 10"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="prize" className="block text-sm font-medium text-gray-700 mb-1">Prize / Giveaway (if any)</label>
          <input
            type="text"
            id="prize"
            name="prize"
            value={formData.prize}
            onChange={handleChange}
            placeholder="e.g., Shoutout to top gifter"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="rules" className="block text-sm font-medium text-gray-700 mb-1">Rules</label>
          <textarea
            id="rules"
            name="rules"
            value={formData.rules}
            onChange={handleChange}
            placeholder="e.g., No snipe until last 10 seconds"
            rows="2"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="cta" className="block text-sm font-medium text-gray-700 mb-1">Call To Action (CTA)</label>
          <input
            type="text"
            id="cta"
            name="cta"
            value={formData.cta}
            onChange={handleChange}
            placeholder="e.g., Tap the screen and share!"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-1">Theme or Vibe</label>
          <input
            type="text"
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            placeholder="e.g., Neon Cyberpunk, Chill Vibes"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors mt-6"
        >
          Generate Battle Plan
        </button>
      </form>
    </div>
  );
};

export default EventForm;
