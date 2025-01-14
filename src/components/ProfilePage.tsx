import React from 'react';
import ProgressBar from './ProgressBar';

const ProfilePage = () => {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex items-center space-x-6">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
          <p className="text-gray-500">Machine Learning Enthusiast</p>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Overall Progress</h2>
        <ProgressBar progress={60} />
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h2>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((badge) => (
            <div key={badge} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                🏆
              </div>
              <span className="text-sm text-gray-600">Achievement {badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            'Completed Python Basics',
            'Started Data Preprocessing',
            'Earned "Quick Learner" Badge',
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{activity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;