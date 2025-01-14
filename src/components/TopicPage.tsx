// ProgressBar.js
import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;

// TopicPage.js
import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const TopicPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-6">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        {isSidebarOpen ? 'Close Menu' : 'Show Menu'}
      </button>

      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-6">
        {/* Sidebar */}
        <div className={`
          ${isSidebarOpen ? 'block' : 'hidden'}
          lg:block lg:col-span-3
          bg-white rounded-xl shadow-sm p-4 lg:p-6
          fixed lg:relative
          top-0 left-0
          w-full lg:w-auto
          h-full lg:h-auto
          z-50 lg:z-auto
          overflow-y-auto
        `}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-gray-900">Contents</h2>
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 hover:bg-gray-100 rounded"
            >
              ✕
            </button>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center text-green-500">
              <span className="mr-2">✓</span>
              <span>Introduction</span>
            </li>
            <li className="flex items-center text-green-500">
              <span className="mr-2">✓</span>
              <span>Basic Concepts</span>
            </li>
            <li className="flex items-center text-yellow-400">
              <span className="mr-2">•</span>
              <span>Advanced Topics</span>
            </li>
            <li className="flex items-center text-gray-400">
              <span className="mr-2">•</span>
              <span>Practice Projects</span>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9 bg-white rounded-xl shadow-sm p-4 lg:p-6">
          <div className="mb-6">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              Supervised Learning
            </h1>
            <ProgressBar progress={75} />
          </div>

          <div className="prose max-w-none">
            <p>Content will go here...</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
            <button className="w-full sm:w-auto px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm lg:text-base">
              ← Previous
            </button>
            <button className="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm lg:text-base">
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;