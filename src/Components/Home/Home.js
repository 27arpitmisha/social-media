import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router';
import { useAuth } from '../../Context/UserAuthenticationContext'

export default function Home() {
    const { user, signOutUser } = useAuth();
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if (user?.displayName) {
            setUserName(user?.displayName)
        } else {
            setUserName(user?.email.split("@")[0]);
        }
    }, [])

    const signoutHandler = async () => {
        try {
            await signOutUser();
            navigate('/login');
        } catch (e) {

        }
    }
    return (
        <div>Home
            Welcome, {userName}
            <button onClick={signoutHandler}>Signout</button>
        </div>
    )
}
