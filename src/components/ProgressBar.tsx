import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full h-6 bg-white rounded-full border border-gray-200 overflow-hidden relative">
      <div
        className="h-full bg-green-500 transition-all duration-300 ease-in-out relative"
        style={{ width: `${progress}%` }}
      >
        <span className="absolute right-2 text-sm font-medium text-white leading-6">
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;