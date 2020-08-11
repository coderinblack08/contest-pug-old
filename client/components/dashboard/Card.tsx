import * as React from 'react';

interface Props {
  name: string;
  color: string;
  date: string;
}

const SmallContestCard: React.FC<Props> = ({ name, color, date }) => {
  return (
    <div className="flex shadow bg-white rounded py-5 mr-5 mb-5 select-none cursor-pointer">
      <span className="ml-8" />
      <div
        className={`hidden sm:block bg-${color}-400 w-3 h-3 rounded-full mt-3 mr-3`}
      />
      <div>
        <h3 className="text-xl sm:text-2xl font-medium text-gray-700">
          {name}
        </h3>
        <p className="text-md font-medium text-gray-500">{date}</p>
      </div>
      <div>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="w-6 text-gray-500 mr-2 ml-10 cursor-pointer"
        >
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </div>
    </div>
  );
};

export default SmallContestCard;
