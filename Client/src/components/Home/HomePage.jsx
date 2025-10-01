import React from 'react';
import HomeNav from './HomeNav';
import { toast, ToastContainer } from 'react-toastify';

export default function HomePage() {

  const handleLogin = () => {
     toast.info('Please Login');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
      <HomeNav />
      <ToastContainer className='mt-16'/>

      <main className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Welcome to the Feedback Form</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl">
          Feel free to add your valueable feedback
        </p>

        <div className="mt-8 flex gap-4">
          <button onClick={handleLogin} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition">
            Get Started
          </button>
          <button onClick={handleLogin} className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-2 rounded-full transition">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
}
