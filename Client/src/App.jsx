import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './components/Home/HomePage';
import Register from './components/Home/Register';
import Login from './components/Home/Login';
import UserHome from './components/User/UserHome';
import UserViewTaskFeedback from './components/User/UserViewFeebback';
import AdminHome from './components/Home/AdminHome';
import UserAddFeedback from './components/User/UserAddFeedback';
import AdminViewUsers from './components/Admin/AdminViewUser';
import AdminViewUsersFeedback from './components/Admin/AdminViewFeedback';

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/adminhome' element={<AdminHome />} />
          {/* User */}
          <Route path='/userhome' element={<UserHome />} />
          <Route path='/addfeedback' element={<UserAddFeedback />} />
          <Route path='/viewfeedback' element={<UserViewTaskFeedback />} />
          {/* admin */}

          <Route path='/adminviewuser' element={<AdminViewUsers />} />
          <Route path='/adminviewfeedback' element={<AdminViewUsersFeedback />} />



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
