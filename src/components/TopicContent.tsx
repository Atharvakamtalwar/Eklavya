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
  const readingTime = Math.ceil(currentTopic?.subtopics.length || 0 * 5); // Estimate 5 minutes per subtopic

  if (!currentTopic) {
    return <div>Topic not found</div>;
  }

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
    setShowExplanations(prev => ({ ...prev, [questionId]: true }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2
              ${currentTopic.completed ? 'bg-green-50 border-green-500 text-green-600' 
              : 'bg-yellow-50 border-yellow-400 text-yellow-600'}`}>
              <currentTopic.icon className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">{currentTopic.title}</h1>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span>{readingTime} min read</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="prose max-w-none">
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Overview</h2>
            <p className="text-gray-600">
              This section covers everything you need to know about {currentTopic.title.toLowerCase()}.
              We'll explore the following topics in detail with examples and interactive elements.
            </p>
          </div>

          {/* Code Example */}
          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <pre className="text-white overflow-x-auto">
              <code>{`import numpy as np

# Example code for ${currentTopic.title}
x = np.array([1, 2, 3])
y = x ** 2
print(y)  # Output: [1 4 9]`}</code>
            </pre>
          </div>

          {/* Subtopics */}
          <div className="space-y-6">
            {currentTopic.subtopics.map((subtopic, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{subtopic}</h3>
                <p className="text-gray-600">
                  Detailed explanation of {subtopic.toLowerCase()} will be provided here with
                  examples and interactive elements to help you understand the concept better.
                </p>
              </div>
            ))}
          </div>

          {/* Practice Questions Button */}
          <div className="mt-8">
            <button
              onClick={() => setShowQuestions(!showQuestions)}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showQuestions ? 'Hide Practice Questions' : 'Show Practice Questions'}
            </button>
          </div>

          {/* MCQ Questions */}
          {showQuestions && (
            <div className="mt-6 space-y-8">
              <h2 className="text-xl font-bold text-gray-900">Practice Questions</h2>
              {questions.map((question) => (
                <div key={question.id} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{question.text}</h3>
                  <div className="space-y-3">
                    {question.options.map((option, index) => {
                      const isSelected = selectedAnswers[question.id] === index;
                      const isCorrect = question.correctAnswer === index;
                      const showResult = showExplanations[question.id];
                      
                      return (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(question.id, index)}
                          className={`w-full text-left p-4 rounded-lg border transition-colors
                            ${isSelected && showResult
                              ? isCorrect
                                ? 'bg-green-50 border-green-500 text-green-700'
                                : 'bg-red-50 border-red-500 text-red-700'
                              : 'border-gray-200 hover:border-blue-500'
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
                    <div className={`mt-4 p-4 rounded-lg ${
                      selectedAnswers[question.id] === question.correctAnswer
                        ? 'bg-green-50 text-green-700'
                        : 'bg-red-50 text-red-700'
                    }`}>
                      <p className="font-medium">Explanation:</p>
                      <p>{question.explanation}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center bg-white rounded-xl shadow-sm p-4">
        {prevTopic ? (
          <Link
            to={`/topic/${prevTopic.id}`}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>{prevTopic.title}</span>
          </Link>
        ) : (
          <div></div>
        )}
        
        {nextTopic && (
          <Link
            to={`/topic/${nextTopic.id}`}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <span>{nextTopic.title}</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopicContent;