import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Shield, Brain, Code, Database, LucideProps } from 'lucide-react';

export const topics = [
  {
    id: 1,
    title: 'Introduction',
    completed: true,
    icon: BookOpen,
    side: 'left',
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
    side: 'right',
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
    side: 'left',
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
    side: 'right',
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
    side: 'left',
    subtopics: [
      'Popular Open Source Models',
      'Community Contributions',
      'Implementation Strategies'
    ]
  }
];

interface Topic {
  id: number;
  title: string;
  completed: boolean;
  icon: React.ComponentType<LucideProps>;
  side: string;
  subtopics: string[];
}

const TopicCard = ({ topic }: { topic: Topic }) => {
  const IconComponent = topic.icon;
  
  return (
    <Link to={`/topic/${topic.id}`}>
      <div className={`
        relative bg-white border-2 rounded-lg p-4 transition-all duration-200
        hover:shadow-lg transform hover:-translate-y-1 w-64
        ${topic.completed ? 'border-blue-500' : 'border-gray-200'}
      `}>
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg ${
            topic.completed ? 'bg-blue-50 text-blue-500' : 'bg-gray-50 text-gray-400'
          }`}>
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-2">{topic.title}</h3>
            <div className="space-y-1">
              {topic.subtopics.map((subtopic: string, idx: number) => (
                <p key={idx} className="text-gray-500 text-xs flex items-center gap-1.5">
                  <span className={`w-1 h-1 rounded-full ${
                    topic.completed ? 'bg-blue-500' : 'bg-gray-300'
                  }`} />
                  {subtopic}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const LearningPath = () => {
  const progress = (topics.filter(t => t.completed).length / topics.length) * 100;
  
  // Find the index where completion status changes
  const lastCompletedIndex = topics.findIndex(topic => !topic.completed) - 1;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">AI Engineer Learning Path</h1>
        <p className="text-gray-500 mb-4">Master the fundamentals of AI Engineering</p>
        <div className="inline-flex items-center gap-3">
          <div className="h-2 w-40 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm font-medium text-gray-600">
            {Math.round(progress)}% Complete
          </span>
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Central timeline with gradient transition */}
        <div className="absolute left-1/2 top-0 w-0.5 h-full transform -translate-x-1/2">
          <div 
            className="absolute top-0 left-0 w-full bg-blue-500 transition-all duration-500"
            style={{ 
              height: lastCompletedIndex >= 0 
                ? `${((lastCompletedIndex + 1) / topics.length) * 100}%` 
                : '0%' 
            }} 
          />
          <div 
            className="absolute left-0 w-full bg-gray-200 transition-all duration-500"
            style={{ 
              top: lastCompletedIndex >= 0 
                ? `${((lastCompletedIndex + 1) / topics.length) * 100}%` 
                : '0%',
              height: lastCompletedIndex >= 0 
                ? `${100 - (((lastCompletedIndex + 1) / topics.length) * 100)}%` 
                : '100%' 
            }} 
          />
        </div>
        
        <div className="relative">
          {topics.map((topic, index) => (
            <div key={topic.id} 
                 className={`flex items-center justify-center mb-8 relative ${
                   topic.side === 'left' ? 'flex-row' : 'flex-row-reverse'
                 }`}>
              {/* Content side */}
              <div className={`w-1/2 ${topic.side === 'left' ? 'pr-8 text-right' : 'pl-8'}`}>
                <TopicCard topic={topic} />
              </div>
              
              {/* Timeline marker */}
              <div className="relative">
                <div className={`
                  w-6 h-6 rounded-full border-4 z-10 relative transition-colors duration-300
                  ${topic.completed ? 'bg-blue-500 border-blue-200' : 'bg-white border-gray-300'}
                `} />
                {index !== topics.length - 1 && (
                  <div className={`
                    absolute top-6 left-1/2 w-0.5 h-16 -translate-x-1/2
                    ${topic.completed && topics[index + 1].completed ? 'bg-blue-500' : 'bg-gray-200'}
                  `} />
                )}
              </div>
              
              {/* Empty side for spacing */}
              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPath;