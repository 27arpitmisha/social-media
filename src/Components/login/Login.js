import React from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../Context/UserAuthenticationContext';
import GoogleButton from 'react-google-button';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const theme = createTheme();
export default function Login() {
    const navigate = useNavigate();
    const { login, googleAuthentication } = useAuth();
    const loginHandler = async (e) => {
        e.preventDefault();
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
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={loginHandler}
              >
                Sign In
              </Button>
              
              <Grid container>
  
                <Grid item onClick={() => { navigate('/signup') }}>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>  
          </Box>
          <GoogleButton style={{marginTop: '20px' }} onClick={googleLoginHandler}/>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
        // <div>Login
        //     <button onClick={loginHandler}>Login with test values</button>
        //     <GoogleButton
        //         onClick={googleLoginHandler}
        //         // onSuccess={responseGoogle}
        //         // onFailure={responseGoogle}
        //         // cookiePolicy={'single_host_origin'}
        //     />
        //     <button onClick={() => { navigate('/signup') }}>Register</button>
        // </div>
    )
}
