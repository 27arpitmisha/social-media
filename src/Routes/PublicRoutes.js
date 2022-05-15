import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../Components/Home/Home'
import Login from '../Components/login/Login'
import Signup from '../Components/signup/Signup'
import ProtectedRoute from './ProtectedRoute'

export default function PublicRoutes() {

    return (
        <div>
            <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>} />
            </Routes>
        </div>
    )
}
