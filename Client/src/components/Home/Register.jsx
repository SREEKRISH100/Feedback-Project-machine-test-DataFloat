import React, { useState } from 'react'
import axios from 'axios'
import HomeNav from './HomeNav';

export default function Register() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/user/register',
                formData,
            )
            alert(res.data.msg);
            console.log(res.data);
        } catch (error) {
            alert(error.response?.data?.msg || "Registration Failed");
            console.error("Registration Failed:", error);
        }
    }

    return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white">
        <HomeNav />
        <div className="flex items-center justify-center py-10">
            <div className="p-4 max-w-sm w-full shadow-2xl rounded-2xl bg-white">
                <h1 className="text-2xl font-bold mb-4">Register</h1>

                <label htmlFor="UserName" className="block mb-1">Username</label>
                <input
                    type="text"
                    id="UserName"
                    name="username"
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-2 py-1 w-full mb-3"
                />

                <label htmlFor="Email" className="block mb-1">Email</label>
                <input
                    type="text"
                    id="Email"
                    name="email"
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-2 py-1 w-full mb-3"
                />

                <label htmlFor="Password" className="block mb-1">Password</label>
                <input
                    type="password"
                    id="Password"
                    name="password"
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-2 py-1 w-full mb-3"
                />

                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                >
                    Submit
                </button>
            </div>
        </div>
    </div>
</>
 
)

}