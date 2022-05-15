import React from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../Context/UserAuthenticationContext';
export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const loginHandler = async () => {
        try {
            const res = await login('test@gmail.com', '123456');
            navigate('/home');
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>Login
            <button onClick={loginHandler}>Login with test values</button>
            <button onClick={() => { navigate('/signup') }}>Register</button>
        </div>
    )
}
