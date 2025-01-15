import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Trophy, ArrowRight, Star, GraduationCap } from 'lucide-react';

const topics = [
  { name: 'Web Development', students: '150K+', icon: BookOpen },
  { name: 'Computer Science', students: '120K+', icon: BookOpen },
  { name: 'Artificial Intelligence', students: '90K+', icon: BookOpen },
  { name: 'Data Science', students: '80K+', icon: BookOpen },
  { name: 'Machine Learning', students: '70K+', icon: BookOpen },
  { name: 'Cloud Computing', students: '60K+', icon: BookOpen }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Developer",
    content: "This platform transformed my career. The structured learning paths made it easy to progress."
  },
  {
    name: "Mike Chen",
    role: "Data Scientist",
    content: "The hands-on projects helped me build a strong portfolio. Highly recommended!"
  }
];

export const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Learn to code, <span className="text-blue-600">transform your future</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join millions of learners and start your journey in technology today.
              Master in-demand skills with hands-on practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => navigate('/learning-path')}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900">500K+</h3>
              <p className="text-gray-600">Active Learners</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Trophy className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900">1000+</h3>
              <p className="text-gray-600">Interactive Courses</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900">95%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Topics */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <button
                key={topic.name}
                onClick={() => navigate('/learning-path')}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <topic.icon className="w-6 h-6 text-blue-600" />
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">{topic.name}</h3>
                      <p className="text-sm text-gray-600">{topic.students} students</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Learners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6" />
                <span className="font-semibold text-lg">Eklavya</span>
              </div>
              <p className="text-gray-400">Empowering learners worldwide with quality tech education.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Blog</li>
                <li>Cheat Sheets</li>
                <li>Articles</li>
                <li>Tutorials</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Forums</li>
                <li>Discord</li>
                <li>Events</li>
                <li>Projects</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Eklavya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;