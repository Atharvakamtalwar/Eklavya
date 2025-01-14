import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { GraduationCap, User, BookOpen } from 'lucide-react';
import LearningPath from './components/LearningPath';
import TopicContent from './components/TopicContent';
import ProfilePage from './components/ProfilePage';
import Home from './components/Home'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link to="/" className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600">
                <GraduationCap className="w-5 h-5 mr-2" />
                Learning Path
              </Link>
              <Link to="/topic/1" className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600">
                <BookOpen className="w-5 h-5 mr-2" />
                Current Topic
              </Link>
              <Link to="/profile" className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600">
                <User className="w-5 h-5 mr-2" />
                Profile
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning-path" element={<LearningPath/>}/>
          <Route path="/topic/:topicId" element={<TopicContent />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;