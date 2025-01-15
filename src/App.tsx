import React, { useState } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { GraduationCap, User, BookOpen, Menu, X } from 'lucide-react';
import LearningPath from './components/LearningPath';
import TopicContent from './components/TopicContent';
import ProfilePage from './components/ProfilePage';
import Home from './components/Home';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className="relative group px-4 py-2 rounded-full transition-all duration-200"
    >
      <div className={`flex items-center space-x-2 relative z-10
        ${isActive ? 'text-white' : 'text-gray-600 hover:text-gray-900'}`}>
        {children}
      </div>
      {isActive && (
        <div className="absolute inset-0 bg-black rounded-full -z-0 
                      transition-all duration-300 ease-in-out" />
      )}
    </Link>
  );
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-black font-semibold text-lg"
              >
                <GraduationCap className="w-6 h-6" />
                <span>Eklavya</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <NavLink to="/">
                <GraduationCap className="w-5 h-5" />
                <span>Learning Path</span>
              </NavLink>
              <NavLink to="/profile">
                <User className="w-5 h-5" />
                <span>Profile</span>
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Learning Path
              </Link>
              <Link
                to="/topic/1"
                className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Current Topic
              </Link>
              <Link
                to="/profile"
                className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="w-5 h-5 mr-2" />
                Profile
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/topic/:topicId" element={<TopicContent />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;