import React from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../../Context/UserAuthenticationContext'
export default function Signup() {
    const navigate = useNavigate();
    const { signup } = useAuth();
    const signupHandle = async () => {
        try {
            await signup('test@gmail.com', '123456')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>Signup
            <button onClick={signupHandle}>Singup with test values</button>
            <button onClick={() => { navigate('/login') }}>Login</button>
        </div>
    )
} 
