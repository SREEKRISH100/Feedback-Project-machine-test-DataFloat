import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminNav() {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token'); // clear storage
        navigate('/login'); // redirect to login
    };

    return (
        <nav className="w-full bg-gray-800 p-4 flex items-center justify-between sticky top-0 z-10">
            {/* Left side - Title */}
            <h1 className="text-white text-xl font-bold">Admin Dashboard</h1>

            {/* Right side - Links */}
            <div className="flex gap-6">
                <Link 
                    to="/adminviewuser" 
                    className="text-white hover:text-gray-300 transition"
                >
                    View Users
                </Link>

                <Link 
                    to="/adminviewfeedback" 
                    className="text-white hover:text-gray-300 transition"
                >
                    View Feedback
                </Link>

                <button 
                    onClick={handleLogout} 
                    className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700 transition"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}
