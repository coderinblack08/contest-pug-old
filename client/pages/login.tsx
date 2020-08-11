import * as React from 'react';
import { Formik } from 'formik';
import { useFeathers } from 'figbird';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import useStore from '../store';
import Link from 'next/link';
import Navbar from '../components/navigation/Navbar';

interface Values {
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const router = useRouter();
  const { authenticate } = useFeathers();
  const setUser = useStore((state) => state.setUser);

  const submitForm = async (
    values: Values,
    { setSubmitting }: { setSubmitting: any }
  ) => {
    setSubmitting(true);
    try {
      const authenticatedUser = await authenticate({
        strategy: 'local',
        ...values,
      });
      setUser(authenticatedUser.user);
      router.push('/dashboard');
    } catch (error) {
      window.alert('User login failed, try again!');
      console.error(error);
    }
    setSubmitting(false);
  };

  const userSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email address')
      .max(500)
      .required('Email is a required field'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is a required field'),
  });

  return (
    <div>
      <Navbar />
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={userSchema}
        onSubmit={submitForm}
      >
        {({ values, errors, isSubmitting, handleChange, handleSubmit }) => (
          <div className="flex justify-center items-center py-10 md:py-20">
            <div className="max-w-md w-full">
              <div>
                <img
                  className="mx-auto h-12 w-auto"
                  src={require('../public/logo.svg')}
                  alt="Contest Pug Logo"
                />
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                  Account Sign In
                </h2>
                <p className="mt-2 text-center text-sm leading-5 text-gray-600">
                  Or{' '}
                  <Link href="/register">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                      create a new account
                    </a>
                  </Link>
                </p>
              </div>
              <form className="mx-5 sm:mx-0 mt-8" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm transition ease-in-out duration-500">
                  <div className="-mt-px flex items-center appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm sm:leading-5">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="text-gray-500 w-5 h-5 mr-2"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <input
                      className="w-full focus:outline-none"
                      name="email"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      aria-label="Email Address"
                    />
                  </div>
                </div>
                <div className="rounded-md shadow-sm transition ease-in-out duration-500">
                  <div className="-mt-px flex items-center appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm sm:leading-5">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="text-gray-500 w-5 h-5 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <input
                      className="w-full focus:outline-none"
                      name="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      placeholder="Password"
                      aria-label="Password"
                    />
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="terms-of-service"
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label
                      htmlFor="terms-of-service"
                      className="ml-2 block text-sm leading-5 text-gray-900"
                    >
                      Keep me logged in
                    </label>
                  </div>
                </div>
                <div className="z-20 absolute left-0 bottom-0">
                  {(() => {
                    if (errors.email || errors.password) {
                      return (
                        <div className="flex shadow-lg mb-5 mx-5 mt-2 text-white bg-primary text-sm py-3 px-6 rounded">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            className="w-4 h-4 text-white mt-1"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <div className="ml-2 text-md font-medium">
                            <div>{errors.email}</div>
                            <div>{errors.password}</div>
                          </div>
                        </div>
                      );
                    }
                  })()}
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary transition ease-in-out duration-500 hover:opacity-75 focus:outline-none"
                    disabled={isSubmitting}
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="text-secondary w-5 h-5"
                      >
                        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"></path>
                      </svg>
                    </span>
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Register;
