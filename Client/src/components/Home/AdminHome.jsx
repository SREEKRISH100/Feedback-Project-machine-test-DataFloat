import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNav from '../Admin/AdminNav';

export default function AdminHome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage if needed
    localStorage.removeItem('userid');
    localStorage.removeItem('token');
    localStorage.removeItem('role'); // optional if you store role
    navigate('/login');
  };

  return (
    <>
    <AdminNav/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
      <div className="p-6 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, Admin!</h1>
        <p className="mb-6">You are logged in as the administrator.</p>
        {/* <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button> */}
      </div>
    </div>
    </>
  );
}
