import React, { useState } from 'react';
import { useMutation } from 'figbird';
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import { Formik, FormikErrors } from 'formik';
import Sidenav from '../../components/navigation/Sidenav';
import MobileSidenav from '../../components/navigation/MobileSidenav';
import Statistics from '../../components/shared/Statistics';
import Link from 'next/link';

interface ErrorProps {
  error: FormikErrors<Date> | string | undefined;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div>
      {(() => {
        if (error) {
          return (
            <div className="flex items-center text-red-500 mt-2">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="exclamation-circle w-4 h-4 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {error}
            </div>
          );
        }
      })()}
    </div>
  );
};

const Contests: React.FC = () => {
  const { create } = useMutation('contests');
  const [tab, setTab] = useState(0);
  const contestSchema = Yup.object().shape({
    name: Yup.string()
      .max(500, 'Name exceed the 500 character maximum')
      .required('Name is a required field'),
    website: Yup.string()
      .url('Please enter a valid website url')
      .required('Website is a required field'),
    email: Yup.string()
      .email('Pleae enter a valid email address')
      .required('Email is a required field'),
    description: Yup.string()
      .max(1e6, 'Description exceeded the 100,000 character limit')
      .required('Description is a required field'),
    tag: Yup.string().required('Tag is a required field'),
    length: Yup.number().required('Contest Length is a required field'),
    start_date: Yup.date().required('Plese enter a valid date'),
    end_date: Yup.date().required('Plese enter a valid date'),
    private: Yup.boolean().required(),
    leaderboard: Yup.boolean().required(),
  });
  const submitForm = async (
    values: any,
    { setSubmitting }: { setSubmitting: any }
  ) => {
    setSubmitting(true);
    try {
      const createdContest = await create(values);
      // eslint-disable-next-line no-console
      console.log(createdContest);
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };
  const contestValues = {
    name: '',
    website: '',
    email: '',
    description: '',
    tag: '',
    length: '',
    start_date: new Date(),
    end_date: new Date(),
    private: false,
    leaderboard: true,
  };

  return (
    <div className="flex bg-gray-100">
      <Sidenav />
      <MobileSidenav />
      <div className="w-full h-screen overflow-y-scroll">
        <header className="flex flex-col sm:flex-row items-center justify-between px-10 bg-white py-5 sm:py-0 sm:h-24 w-full border-b border-gray-200">
          <div className="flex items-center">
            <Statistics />
          </div>
          <Link href="/contests">
            <button className="flex items-center mt-5 sm:mt-0 justify-between rounded-md focus:outline-none focus:shadow-outline-blue bg-gray-100 border border-gray-200 py-3 px-5 text-gray-600 font-medium">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="backspace w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                />
              </svg>
              Exit
            </button>
          </Link>
        </header>
        <Formik
          initialValues={contestValues}
          validationSchema={contestSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={submitForm}
        >
          {({
            values,
            errors,
            isSubmitting,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form className="flex flex-col p-5 md:p-12" onSubmit={handleSubmit}>
              {(() => {
                if (tab === 0) {
                  return (
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between mb-5">
                        <div>
                          <h1 className="text-gray-700 font-semibold text-2xl">
                            General Information
                          </h1>
                          <p className="text-gray-500 font-medium text-lg">
                            Basic information about your contest
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            localStorage.contestForm = JSON.stringify(values);
                          }}
                          className="flex items-center mt-5 sm:mt-0 rounded-md focus:outline-none focus:shadow-outline-blue bg-white border border-gray-200 py-3 px-5 text-gray-600 font-medium"
                        >
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="save w-5 h-5 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                            />
                          </svg>
                          Save Form
                        </button>
                      </div>
                      <div className="bg-white w-full px-8 py-12 shadow rounded-md">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-gray-700 font-medium text-md"
                          >
                            Contest Name
                          </label>
                          <input
                            className="max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                            name="name"
                            type="text"
                            value={values.name}
                            onChange={handleChange}
                            placeholder="Example"
                            aria-label="Contest Name"
                          />
                          <Error error={errors.name} />
                        </div>
                        <div className="mt-5">
                          <label
                            htmlFor="website"
                            className="block text-gray-700 font-medium text-md"
                          >
                            Contest Website
                          </label>
                          <div>
                            <div className="flex items-center max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight">
                              <div className="flex px-4 rounded-l py-3 bg-gray-100 text-gray-500 border-r">
                                <svg
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="globe-alt w-4 h-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                  />
                                </svg>
                              </div>
                              <input
                                className="py-2 px-3 w-full focus:outline-none"
                                name="website"
                                type="url"
                                value={values.website}
                                onChange={handleChange}
                                placeholder="www.example.com"
                                aria-label="Contest Website"
                              />
                            </div>
                          </div>
                          <Error error={errors.website} />
                        </div>

                        <div className="mt-5">
                          <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium text-md"
                          >
                            Email Address
                          </label>
                          <div className="flex items-center max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight">
                            <div className="flex items-center px-4 rounded-l py-3 bg-gray-100 text-gray-500 border-r">
                              <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="mail w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                            <input
                              className="py-2 px-3 w-full focus:outline-none"
                              name="email"
                              type="email"
                              value={values.email}
                              onChange={handleChange}
                              placeholder="contact@example.com"
                              aria-label="Contest Email"
                            />
                          </div>
                          <Error error={errors.email} />
                        </div>
                        <div className="mt-5">
                          <label
                            htmlFor="description"
                            className="block text-gray-700 font-medium text-md"
                          >
                            Contest Description (Homepage)
                          </label>
                          <div className="flex flex-col items-center max-w-lg xl:max-w-xl mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight">
                            <textarea
                              className="rounded py-3 px-4 w-full focus:outline-none h-32"
                              name="description"
                              value={values.description}
                              onChange={handleChange}
                              placeholder="Contest Description"
                              aria-label="Contest Description"
                            />
                            <a
                              // eslint-disable-next-line react/jsx-no-target-blank
                              target="_blank"
                              href="https://guides.github.com/features/mastering-markdown/"
                              className="flex items-center text-sm font-medium bg-gray-100 text-gray-600 hover:text-gray-700 w-full px-4 py-2 rounded-b border-t"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="markdown"
                                className="w-5 h-5 mr-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"
                                ></path>
                              </svg>
                              Styling with markdown supported
                            </a>
                          </div>
                        </div>
                        <Error error={errors.description} />
                      </div>
                      <nav className="relative inline-flex mt-5">
                        <div
                          className="cursor-pointer shadow-sm relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                          aria-label="Previous"
                          onClick={() => setTab(1)}
                        >
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div
                          className="cursor-pointer shadow-sm -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                          onClick={() => setTab(0)}
                        >
                          1
                        </div>
                        <div
                          className="cursor-pointer shadow-sm -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                          onClick={() => setTab(1)}
                        >
                          2
                        </div>
                        <div
                          className="cursor-pointer shadow-sm -ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                          onClick={() => setTab(1)}
                          aria-label="Next"
                        >
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </nav>
                    </div>
                  );
                }
              })()}

              {(() => {
                if (tab === 1) {
                  return (
                    <div>
                      <div className="mb-5">
                        <h1 className="text-gray-700 font-semibold text-2xl">
                          Techincal Information
                        </h1>
                        <p className="text-gray-500 font-medium text-lg">
                          Basic settings for your contest
                        </p>
                      </div>
                      <div className="bg-white w-full px-8 py-12 shadow rounded-md">
                        <div>
                          <label
                            htmlFor="website"
                            className="block text-gray-700 font-medium text-md"
                          >
                            Contest Tag (Subject)
                          </label>
                          <div className="flex items-center max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight">
                            <div className="flex px-4 rounded-l py-3 bg-gray-100 text-gray-500 border-r">
                              <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="globe-alt w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                />
                              </svg>
                            </div>
                            <input
                              className="py-2 px-3 w-full focus:outline-none"
                              name="tag"
                              type="string"
                              value={values.tag}
                              onChange={handleChange}
                              placeholder="Mathematics"
                              aria-label="Contest Tag"
                            />
                          </div>
                          <Error error={errors.tag} />
                        </div>
                        <div className="mt-5">
                          <label
                            htmlFor="website"
                            className="block text-gray-700 font-medium text-md"
                          >
                            Contest Length (minutes)
                          </label>
                          <div className="flex items-center max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight">
                            <div className="flex px-4 rounded-l py-3 bg-gray-100 text-gray-500 border-r">
                              <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="globe-alt w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                />
                              </svg>
                            </div>
                            <input
                              className="py-2 px-3 w-full focus:outline-none"
                              name="length"
                              type="number"
                              value={values.length}
                              onChange={handleChange}
                              placeholder="60"
                              aria-label="Contest Length"
                            />
                          </div>
                          <Error error={errors.length} />
                        </div>
                        <div className="mt-5">
                          <label
                            htmlFor="start-date"
                            className="block text-gray-700 font-medium text-md"
                          >
                            Start Date
                          </label>
                          <div className="flex items-center max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight">
                            <div className="flex px-4 rounded-l py-3 bg-gray-100 text-gray-500 border-r">
                              <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="calendar w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                            <DatePicker
                              name="start-date"
                              className="py-2 px-3 w-full focus:outline-none"
                              selected={values.start_date}
                              dateFormat="MMMM d, yyyy"
                              onChange={(date) =>
                                setFieldValue('start_date', date)
                              }
                            />
                          </div>
                          <Error error={errors.start_date} />
                        </div>
                        <div className="mt-5">
                          <label
                            htmlFor="end-date"
                            className="block text-gray-700 font-medium text-md"
                          >
                            End Date
                          </label>
                          <div className="flex items-center max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight">
                            <div className="flex px-4 rounded-l py-3 bg-gray-100 text-gray-500 border-r">
                              <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="calendar w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                            <DatePicker
                              name="end-date"
                              className="py-2 px-3 w-full focus:outline-none"
                              selected={values.end_date}
                              dateFormat="MMMM d, yyyy"
                              onChange={(date) =>
                                setFieldValue('end_date', date)
                              }
                            />
                          </div>
                          <Error error={errors.end_date} />
                        </div>
                        <div className="flex flex-col space-y-2 my-8">
                          <label className="ml-2 inline-flex items-center text-gray-700 font-medium text-md">
                            <input
                              type="checkbox"
                              id="private"
                              checked={values.private}
                              onChange={handleChange}
                              className="form-checkbox mr-2"
                            />
                            <span>Private Contest</span>
                          </label>
                          <label className="ml-2 inline-flex items-center text-gray-700 font-medium text-md">
                            <input
                              type="checkbox"
                              id="leaderboard"
                              checked={values.leaderboard}
                              onChange={handleChange}
                              className="form-checkbox mr-2"
                            />
                            <span>Enable leaderboard</span>
                          </label>
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex items-center mt-5 justify-between rounded-md focus:outline-none focus:shadow-outline-blue border hover:shadow py-3 px-5 text-gray-600 font-medium"
                        >
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="view-grid-add w-4 h-4 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                            />
                          </svg>
                          Create Contest
                        </button>
                      </div>
                      <nav className="relative inline-flex mt-5">
                        <div
                          className="cursor-pointer shadow-sm relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                          aria-label="Previous"
                          onClick={() => setTab(0)}
                        >
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div
                          className="cursor-pointer shadow-sm -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                          onClick={() => setTab(0)}
                        >
                          1
                        </div>
                        <div
                          className="cursor-pointer shadow-sm -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                          onClick={() => setTab(1)}
                        >
                          2
                        </div>
                        <div
                          className="cursor-pointer shadow-sm -ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                          onClick={() => setTab(0)}
                          aria-label="Next"
                        >
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </nav>
                    </div>
                  );
                }
              })()}
            </form>
          )}
        </Formik>
        {/* Seperator for mobile screens (so that bottom nav does not cover content) */}
        <div className="block lg:hidden h-32"></div>
      </div>
    </div>
  );
};

export default Contests;
