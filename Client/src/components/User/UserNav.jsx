import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function UserNav() {

    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <>
            <nav className='w-full bg-gray-800 p-4 flex items-center justify-between sticky top-0 z-10'>
                <Link to={'/'} className='text-gray-200 text-2xl font-semibold hover:text-amber-500' >
                    USER FEEDBACK
                </Link>
                <div className='text-sm text-white flex justify-between'>
                    <Link to={'/addfeedback'} className=' hover:bg-amber-300 py-1 px-2 rounded'>Add Feedback</Link>
                    <Link to={'/viewfeedback'} className=' hover:bg-amber-300 py-1 px-2 rounded'>View Feedback</Link>
                    <button onClick={handleLogout} className=' hover:bg-amber-300 py-1 px-2 rounded'>Logout</button>
                </div>
            </nav>
        </>
    )
}
