import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import AdminNav from './AdminNav';
import { data, useNavigate } from 'react-router-dom';

export default function AdminViewUsersFeedback() {
    const [feedbacks, setFeedbacks] = useState([]);
    const navigate=useNavigate()

    const token=localStorage.getItem("token")
    // console.log(token)
    const fetchFeedbacks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/admin/adminviewfeedback',
                {
                    headers:{token}
                }
            );
            

            setFeedbacks(response.data);
        } catch (error) {
            
            if(error.response?.data?.tokenStatus==="failed")
            {
            localStorage.removeItem('token')
                navigate('/login')
            }
            console.error('Error fetching feedbacks:', error);
        }
    };

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    return (
         <div className="p-4">
            <AdminNav />
            <h2 className="text-2xl font-bold mb-4">Users Feedback</h2>

            {feedbacks.length === 0 ? (
                <p>No feedback available.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {feedbacks.map((fb) => (
                        <div key={fb._id} className="border rounded-lg shadow p-4 bg-white hover:shadow-lg transition">
                            <h3 className="font-semibold text-lg mb-1">
                                {fb.user?.username || 'Unknown User'}
                            </h3>
                            <p className="text-gray-500 mb-2">{fb.user?.email || 'No Email'}</p>
                            <p className="mb-2"><strong>Comment:</strong> {fb.comments}</p>
                            <div className="flex items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        color={i < fb.rating ? 'gold' : '#e4e5e9'}
                                    />
                                ))}
                                <span className="ml-2 text-gray-600">{fb.rating}/5</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Submitted: {new Date(fb.createdAt).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
