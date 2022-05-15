import React, { useEffect } from 'react'
import { Navigate } from 'react-router';
import { useAuth } from '../Context/UserAuthenticationContext'
export default function ProtectedRoute() {
    const { user } = useAuth();
    useEffect(() => {
        console.log(user)
        if (!user) {
            <Navigate path='/login' />
        }
    })
    return (
        <div>ProtectedRoute</div>
    )
}
