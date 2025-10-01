import React, { useEffect, useState } from 'react'
import UserNav from './UserNav'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

export default function UserViewTaskFeedback() {
    const [formData, setFormData] = useState([]);

    const token = localStorage.getItem('token');
    // console.log(userid);

    const navigate = useNavigate();

    const fetchTask = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/user/viewFeeback',
                {
                    headers: {
                        token,
                    }
                }
            )
            setFormData(res.data);
            // console.log(res.data);
        } catch (error) {
            if(error.response?.data?.tokenStatus==="failed")
                        {
                        localStorage.removeItem('token')
                            navigate('/login')
                        }
            toast.error(error.response?.data?.msg || 'Task View Failed')
            console.error('View Task Failed:', error)
        }
    }

    useEffect(() => {
        fetchTask();
    }, []);

    

    const handleDelete = async (id) => {
        // alert(`deleted : ${id}`);
        try {
            const res = await axios.delete(`http://localhost:5000/api/user/deleteFeeback/${id}`,
                {
                    headers:{
                        token,
                    }
                }
            )
            if (res.status === 200) {
                toast.success(res.data.msg);
                fetchTask();
            }
        } catch (error) {

            if(error.response?.data?.tokenStatus==="failed")
                        {
                        localStorage.removeItem('token')
                            navigate('/login')
                        }
            console.error('Task Deletion Error:', error);
            toast.error(error.response?.data?.msg || 'Task Deletion Error');
        }
    }

 

    return (

        <div className='min-h-screen w-full bg-gradient-to-br bg-blue-100 to-white'>
            <UserNav />
            <ToastContainer className={'mt-16'} />
            <div className='p-4'>
                <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-sky-100 mb-4'>
                    VIEW FEEDBACK
                </h1>

                <div className='overflow-x-auto rounded-lg'>
                    <table className='w-full text-sm md:text-base text-blue-900 border border-black bg-white shadow-2xl'>
                        <thead className='text-blue-700 bg-blue-100'>
                            <tr className='text-left'>
                                <th className='py-2 px-2 border'>SNO</th>
                                <th className='py-2 px-2 border'>RATING</th>
                                <th className='py-2 px-2 border'>COMMENT</th>
                                <th className='py-2 px-2 border'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData && formData.length > 0 ? (
                                formData.map((item, index) => (
                                    <tr key={item._id} className='transition duration-600 border-t border-black hover:bg-slate-300'>
                                        <td className='border-l py-1 px-2'>{index + 1}</td>

                                        {/* Display stars */}
                                        <td className='border-l py-1 px-2 flex'>
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <FaStar
                                                    key={star}
                                                    size={20}
                                                    className={star <= item.rating ? 'text-yellow-400' : 'text-gray-300'}
                                                />
                                            ))}
                                        </td>

                                        <td className='border-l py-1 px-2 text-lg'>{item.comments}</td>
                                        <td className='border-l py-1 px-2'>
                                            <div className='flex flex-wrap gap-0.5'>
                                             
                                                <button
                                                    onClick={() => handleDelete(item._id)}
                                                    className='text-sm transition duration-700 px-3 py-1 rounded-sm bg-slate-400 hover:bg-blue-500 text-white'
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan='4' className='text-center mx-auto text-lg text-red-600'>
                                        No Task Added
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


