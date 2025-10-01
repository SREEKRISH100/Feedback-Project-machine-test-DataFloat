import React from 'react'
import UserNav from './UserNav'

export default function UserHome() {
  return (
    <>
      <UserNav />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center p-6 bg-white shadow-xl rounded-2xl max-w-md w-full">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">Welcome, User 👋</h1>
          <p className="text-gray-600 text-lg">
            You have successfully logged in.feel free to add feedbacks!
          </p>
        </div>
      </div>
    </>
  )
}
