import React, { useState } from 'react'
import UserNav from './UserNav'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FaStar } from 'react-icons/fa';


export default function UserAddFeedback() {

    const [formData, setFormData] = useState({
        comments: '',
        rating: ''
    });

    const token = localStorage.getItem('token');
    // console.log(token)
    const handleRating = (value) => {
        setFormData({ ...formData, rating: value });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_HOST_URL}/api/user/addFeeback`,
                formData,
                {
                    headers: {
                        token,
                    }
                })
            if (res.status === 200) {
                toast.success(res.data.msg || 'FeedBack Added')
            }
        } catch (error) {
            if (error.response?.data?.tokenStatus === "failed") {
                localStorage.removeItem('token')
                navigate('/login')
            }
            toast.error(error.response?.data?.msg || 'Feedba Failed to Add');
            console.error('Feedback Add Failed:', error);
        }
    }
    return (

        <>
            <div className='min-h-screen bg-gradient-to-br from-blue-100 to-white'>
                <UserNav />
                <ToastContainer className='mt-13' />
                <div className='p-10 flex items-center justify-center'>
                    <div className='max-w-md mx-auto p-6 bg-white shadow-2xl rounded-2xl'>
                        <h1 className='text-3xl text-left pb-3 font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-600 to-blue-50'>
                            ADD FEEDBACK
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label className='block text-xl font-semibold mb-2'>RATE THE STAR</label>
                                <div className="flex space-x-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar
                                            key={star}
                                            size={30}
                                            className={`cursor-pointer transition-colors duration-200 ${formData.rating >= star ? 'text-yellow-400' : 'text-gray-300'
                                                }`}
                                            onClick={() => handleRating(star)}
                                        />
                                    ))}
                                </div>
                            </div>

                           
                            <label className='block text-xl font-semibold'>ADD COMMENT</label>
                            <textarea
                                className='mb-4 border w-full rounded-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white'
                                name='comments'
                                placeholder='Enter your comment'
                                onChange={handleChange}
                                required
                                rows={4} 
                            />

                            <button
                                type="submit"
                                className='border rounded-sm py-2 px-2 bg-gradient-to-br from-slate-400 to-white text-black hover:bg-gradient-to-tl transition duration-500'
                            >
                                ADD FEEDBACK
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
