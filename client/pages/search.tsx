import * as React from 'react';
import { useFind } from 'figbird';
import Sidenav from '../components/navigation/Sidenav';
import MobileSidenav from '../components/navigation/MobileSidenav';
import Statistics from '../components/shared/Statistics';
import ContestCard from '../components/shared/ContestCard';

const Contests: React.FC = () => {
  const { data: contests, isFetching } = useFind('contests');
  const load = (render: () => JSX.Element) => {
    if (!isFetching) {
      return render();
    }
  };
  return (
    <div className="flex bg-gray-100">
      <Sidenav />
      <MobileSidenav />
      <div className="w-full h-screen overflow-y-scroll">
        <header className="flex flex-col sm:flex-row items-center justify-between px-10 bg-white py-5 sm:py-0 sm:h-24 w-full border-b border-gray-200">
          <div className="flex items-center space-x-5 text-gray-600">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="search w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="text-xl text-gray-700 focus:outline-none w-64"
            />
          </div>
          <div className="flex items-center">
            <Statistics />
          </div>
        </header>
        {load(() => (
          <div className="p-5 md:p-12">
            <article className="prose lg:prose-md">
              <h2>Your Results</h2>
              <ContestCard />
            </article>
          </div>
        ))}
        {/* Seperator for mobile screens (so that bottom nav does not cover content) */}
        <div className="block lg:hidden h-32"></div>
      </div>
    </div>
  );
};

export default Contests;
