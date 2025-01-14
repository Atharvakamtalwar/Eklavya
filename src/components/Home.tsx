import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const topics = [
  'Web development',
  'Computer science',
  'Artificial intelligence',
  'Game development',
  'Data visualization',
  'Data science',
  'Web design',
  'Machine learning',
  'Cloud computing',
  'Cybersecurity',
];

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fdf2f8] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Find what's right for you
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Answer 3 quick questions to get recommendations that match your interests
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">
            What do you want to learn about?
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => topic === 'Artificial intelligence' && navigate('/learning-path')}
                className="p-4 text-left rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  <span>{topic}</span>
                </div>
              </button>
            ))}
          </div>

          <button className="mt-6 w-full p-4 text-left rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all">
            Not sure yet
          </button>

          <p className="mt-8 text-center text-gray-600">
            We have hundreds of courses that cover just about everything
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;