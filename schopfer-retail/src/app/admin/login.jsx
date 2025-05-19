'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes only - in a real app, you'd validate through an API
      if (email === "admin@example.com" && password === "password") {
        // Successful login would redirect to dashboard
        console.log("Login successful");
      } else {
        setErrorMessage("Invalid email or password. Please try again.");
      }
    }, 1500);
  };

  return (
    <div className="bg-[#F6FCDF] min-h-screen flex flex-col">


      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          {/* Login Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-blue-100">
            {/* Card Header */}
            <div className="bg-[#001F3F] py-6 px-8">
              <h1 className="text-white text-2xl font-bold text-center">Admin Login</h1>
            </div>

            {/* Form Section */}
            <div className="p-8">
              {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-[#001F3F] font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-0.5 focus:ring-blue-900 focus:border-blue-900"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="password" className="block text-[#001F3F] font-medium">
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-0.5 focus:ring-blue-900 focus:border-blue-900"
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#001F3F] hover:bg-[#001f3fdc] text-white font-bold py-3 px-8 rounded-md transition duration-300 text-lg flex justify-around  w-full"
                  onClick={() => router.push("/admin/dashboard")}
                >
                  {isLoading ? "Loging in..." : "Log in"}
                </button>
              </form>


            </div>
          </div>


        </div>
      </main>

    </div>
  );
};

export default Login;