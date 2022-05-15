import React from 'react'
import { Routes, Route } from 'react-router'
import Login from '../Components/login/Login'
import Signup from '../Components/signup/Signup'

export default function PublicRoutes() {

    return (
        <div>
            <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    )
}
