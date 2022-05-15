import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router';
import { useAuth } from '../Context/UserAuthenticationContext'
export default function ProtectedRoute({children}) {
    const { user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    })
    return (
        <div>{children}</div>
    )
}
