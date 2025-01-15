import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { topics } from './LearningPath';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questionsData: Record<number, Question[]> = {
  1: [
    {
      id: 1,
      text: "What is the primary role of an AI Engineer?",
      options: [
        "Only writing documentation",
        "Developing and deploying AI solutions",
        "Managing HR",
        "Website design"
      ],
      correctAnswer: 1,
      explanation: "AI Engineers are primarily responsible for developing, implementing, and maintaining AI solutions. They work on creating models, integrating AI systems, and ensuring their effective deployment."
    },
    {
      id: 2,
      text: "Which of these is NOT typically part of an AI Engineer's responsibilities?",
      options: [
        "Model training",
        "Data preprocessing",
        "Sales and marketing",
        "System integration"
      ],
      correctAnswer: 2,
      explanation: "Sales and marketing are not typically part of an AI Engineer's core responsibilities. Their focus is on technical aspects like model development, training, and implementation."
    }
  ],
  // Add questions for other topics similarly
};

const TopicContent = () => {
  const { topicId } = useParams();
  const currentTopic = topics.find(t => t.id === Number(topicId));
  const [showQuestions, setShowQuestions] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanations, setShowExplanations] = useState<Record<number, boolean>>({});
  
  const currentIndex = topics.findIndex(t => t.id === Number(topicId));
  const prevTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;
  
  const questions = questionsData[Number(topicId)] || [];
  const readingTime = Math.ceil(currentTopic?.subtopics.length || 0 * 5);

  if (!currentTopic) {
    return <div>Topic not found</div>;
  }

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
    setShowExplanations(prev => ({ ...prev, [questionId]: true }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-6">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="text-gray-400 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center
            ${currentTopic.completed ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
            <currentTopic.icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">{currentTopic.title}</h1>
            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{readingTime} min</span>
            </div>
          </div>
        </div>

        {/* Overview Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed">
            This section covers everything you need to know about {currentTopic.title.toLowerCase()}.
            We'll explore the following topics in detail with examples and interactive elements.
          </p>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-8 overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="text-gray-300 font-mono text-sm">
            <code>{`import numpy as np

# Example code for ${currentTopic.title}
x = np.array([1, 2, 3])
y = x ** 2
print(y)  # Output: [1 4 9]`}</code>
          </pre>
        </div>

        {/* Subtopics */}
        <div className="space-y-4">
          {currentTopic.subtopics.map((subtopic, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-500 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{subtopic}</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Click to explore {subtopic.toLowerCase()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Questions */}
        <button
          onClick={() => setShowQuestions(!showQuestions)}
          className="w-full mt-8 bg-blue-500 text-white px-8 py-4 rounded-2xl hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {showQuestions ? 'Hide Practice Questions' : 'Start Practice Questions'}
        </button>

        {showQuestions && (
          <div className="mt-8 space-y-6">
            {questions.map((question) => (
              <div key={question.id} className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-medium text-gray-900 mb-6">{question.text}</h3>
                <div className="space-y-3">
                  {question.options.map((option, index) => {
                    const isSelected = selectedAnswers[question.id] === index;
                    const isCorrect = question.correctAnswer === index;
                    const showResult = showExplanations[question.id];
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(question.id, index)}
                        className={`w-full text-left p-4 rounded-xl transition-all transform hover:scale-[1.02]
                          ${isSelected && showResult
                            ? isCorrect
                              ? 'bg-green-50 border-green-500 text-green-700'
                              : 'bg-red-50 border-red-500 text-red-700'
                            : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {isSelected && showResult && (
                            isCorrect 
                              ? <CheckCircle className="w-5 h-5 text-green-500" />
                              : <XCircle className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {showExplanations[question.id] && (
                  <div className={`mt-6 p-6 rounded-xl ${
                    selectedAnswers[question.id] === question.correctAnswer
                      ? 'bg-green-50 text-green-700'
                      : 'bg-red-50 text-red-700'
                  }`}>
                    <p className="font-medium mb-2">Explanation:</p>
                    <p>{question.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 py-6 border-t border-gray-200">
          {prevTopic ? (
            <Link
              to={`/topic/${prevTopic.id}`}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous: {prevTopic.title}</span>
            </Link>
          ) : (
            <div></div>
          )}
          
          {nextTopic && (
            <Link
              to={`/topic/${nextTopic.id}`}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <span>Next: {nextTopic.title}</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicContent;