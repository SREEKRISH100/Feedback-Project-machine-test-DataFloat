import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeNav() {
    return (
        <div>
            <nav className='w-full bg-gray-800 p-4 flex justify-between items-center sticky top-0 z-10'>
                <Link to={'/'} className='text-white text-xl font-semibold hover:text-amber-400 py-2 px-5 rounded'>
                DATAFLOAT   FEEDBACK FORM 
                
                </Link>
                <div className='flex gap-0.5'>
                    <Link
                        to={'/register'}
                        className='text-white hover:bg-amber-400 px-3 py-2 rounded-md text-sm font-medium'
                    >
                        Register
                    </Link>

                    <Link
                        to={'/login'}
                        className='text-white hover:bg-amber-400 px-3 py-2 rounded-md text-sm font-medium'
                    >
                        Login
                    </Link>
                </div>
            </nav>
        </div>
    )
}


