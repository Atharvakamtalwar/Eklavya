import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { BookOpen, Shield, Brain, Code, Database } from 'lucide-react';

export const topics = [
  {
    id: 1,
    title: 'Introduction',
    completed: true,
    icon: BookOpen,
    subtopics: [
      'What is an AI Engineer?',
      'Roles and Responsibilities',
      'Impact on Product Development'
    ]
  },
  {
    id: 2,
    title: 'Pre-trained Models',
    completed: true,
    icon: Brain,
    subtopics: [
      'Using Pre-trained Models',
      'Capabilities / Context Length',
      'Benefits and Limitations'
    ]
  },
  {
    id: 3,
    title: 'OpenAI Platform',
    completed: true,
    icon: Code,
    subtopics: [
      'OpenAI Models',
      'API Integration',
      'Best Practices'
    ]
  },
  {
    id: 4,
    title: 'AI Safety and Ethics',
    completed: false,
    icon: Shield,
    subtopics: [
      'Safety Considerations',
      'Ethical Guidelines',
      'Responsible AI Development'
    ]
  },
  {
    id: 5,
    title: 'Open Source AI',
    completed: false,
    icon: Database,
    subtopics: [
      'Popular Open Source Models',
      'Community Contributions',
      'Implementation Strategies'
    ]
  }
];

const LearningPath = () => {
  const progress = (topics.filter(t => t.completed).length / topics.length) * 100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">AI Engineer Learning Path</h1>
          <Link 
            to={`/topic/1`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Learning
          </Link>
        </div>
        <ProgressBar progress={progress} />
      </div>

      {/* Learning Path Flowchart */}
      <div className="relative">
        <div className="absolute left-[120px] top-0 bottom-0 w-0.5 bg-blue-200"></div>
        
        <div className="space-y-8">
          {topics.map((topic) => (
            <Link 
              key={topic.id}
              to={`/topic/${topic.id}`}
              className="block group"
            >
              <div className="relative flex gap-8">
                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 
                  transition-colors duration-200
                  ${topic.completed 
                    ? 'bg-green-50 border-green-500 text-green-600 group-hover:bg-green-100' 
                    : 'bg-yellow-50 border-yellow-400 text-yellow-600 group-hover:bg-yellow-100'}`}>
                  <topic.icon className="w-8 h-8" />
                </div>

                {/* Content Card */}
                <div className="flex-1">
                  <div className={`bg-white rounded-xl shadow-sm p-6 border-l-4
                    transition-all duration-200 group-hover:shadow-md group-hover:scale-[1.02]
                    ${topic.completed ? 'border-l-green-500' : 'border-l-yellow-400'}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{topic.title}</h3>
                    <ul className="space-y-2">
                      {topic.subtopics.map((subtopic, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <span className={`w-1.5 h-1.5 rounded-full 
                            ${topic.completed ? 'bg-green-500' : 'bg-yellow-400'}`}>
                          </span>
                          {subtopic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPath;