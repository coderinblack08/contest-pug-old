import * as React from 'react';
import Sidenav from '../components/navigation/Sidenav';
import MobileSidenav from '../components/navigation/MobileSidenav';
import Statistics from '../components/shared/Statistics';
import Card from '../components/dashboard/Card';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  return (
    <div className="flex bg-gray-100">
      <Sidenav />
      <MobileSidenav />
      <div className="w-full h-screen overflow-y-scroll">
        <header className="flex items-center justify-between px-10 bg-white h-24 w-full border-b border-gray-200">
          <div className="hidden sm:flex items-center">
            <div className="p-3 rounded-full flex items-center justify-center bg-gray-200">
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6 text-gray-600"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h2 className="text-gray-800 font-medium text-lg leading-none">
                John Doe
              </h2>
            </div>
          </div>
          <Statistics />
        </header>
        <div className="flex flex-col md:flex-row justify-between md:items-center bg-primary m-10 rounded-md py-6 px-8">
          <div>
            <h1 className="text-white font-semibold text-2xl">Welcome Back!</h1>
            <p className="text-secondary text-lg font-medium">
              Don{`'`}t forget to study for you upcoming competition Mathcounts!
            </p>
          </div>
          <motion.button
            whileTap={{ scale: 1.05 }}
            className="flex justify-center items-center text-primary font-medium bg-secondary rounded py-4 px-5 h-12 md:ml-5 w-48 mt-5 md:mt-0 focus:outline-none focus:shadow-outline-blue"
          >
            View Contest
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="external-link ml-2 w-5 h-5"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </motion.button>
        </div>
        <div className="px-10 py-3">
          <h1 className="flex items-center text-gray-800 font-extrabold text-3xl leading-none mb-8">
            Upcoming Contests
          </h1>
          <div className="flex flex-wrap">
            <Card name="Mathcounts" color="blue" date="August 12, 2020" />
            <Card
              name="Harvard MIT Tornument"
              color="green"
              date="August 20, 2020"
            />
            <Card name="React Smackdown" color="pink" date="August 12, 2020" />
            <Card
              name="React Smackdown"
              color="orange"
              date="August 12, 2020"
            />
            <Card
              name="React Smackdown"
              color="indigo"
              date="August 12, 2020"
            />
          </div>
        </div>
        {/* Seperator for mobile screens (so that bottom nav does not cover content) */}
        <div className="block lg:hidden h-32"></div>
      </div>
    </div>
  );
};

export default Dashboard;
