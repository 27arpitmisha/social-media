import React from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../Context/UserAuthenticationContext';
import GoogleButton from 'react-google-button';
export default function Login() {
    const navigate = useNavigate();
    const { login, googleAuthentication } = useAuth();
    const loginHandler = async () => {
        try {
            await login('test12@gmail.com', '123456');
            navigate('/home');
        } catch (e) {
        }
    }

    const googleLoginHandler = async () =>{
        try {
            await googleAuthentication();
            navigate('/home');
        } catch (e) {
        }
    }
    return (
        <div>Login
            <button onClick={loginHandler}>Login with test values</button>
            <GoogleButton
                onClick={googleLoginHandler}
                // onSuccess={responseGoogle}
                // onFailure={responseGoogle}
                // cookiePolicy={'single_host_origin'}
            />
            <button onClick={() => { navigate('/signup') }}>Register</button>
        </div>
    )
}
