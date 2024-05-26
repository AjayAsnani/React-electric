import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-around bg-cover bg-center bg-login-image">
      <div></div>
      <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Log In
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-[20px] font-medium text-white"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-[20px] font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div></div>
            <div className="text-[18px]">
              <a
                href="#"
                className="font-medium text-white hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-[18px] font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-white text-[18px]">
              Didn't have an account?{" "}
              <Link to={'/signup'}>
              <a
                href=""
                className="font-medium text-blue-500 hover:text-blue-700"
              >
                Sign Up
              </a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
