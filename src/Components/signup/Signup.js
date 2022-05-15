import React from 'react'
import { useNavigate } from 'react-router';

export default function Signup() {
    const navigate = useNavigate();
    return (
        <div>Signup
            <button onClick={() => { navigate('/login') }}>Login</button>
        </div>
    )
}
