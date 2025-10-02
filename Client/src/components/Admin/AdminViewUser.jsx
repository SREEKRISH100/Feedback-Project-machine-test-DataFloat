import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNav from './AdminNav';

export default function AdminViewUsers() {
  const [users, setUsers] = useState([]);
const token=localStorage.getItem("token")
  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_HOST_URL}/api/admin/adminviewuser`,
          {
                    headers:{token}
                }
        ); 
        setUsers(res.data);
      } catch (error) {
        if(error.response?.data?.tokenStatus==="failed")
                    {
                    localStorage.removeItem('token')
                        navigate('/login')
                    }
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <AdminNav />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">All Users</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Username</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user._id} className="text-center hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                    <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                    <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
