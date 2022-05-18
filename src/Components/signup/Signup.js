import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../../Context/UserAuthenticationContext'
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
import { Alert } from '@mui/material';
import APIKey from '../../Keys/API';
import { v4 as uuidv4 } from 'uuid';

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
export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const signupHandle = async (event) => {
    event.preventDefault();
    const dataForm = { name: firstName + ' ' + lastName, email, friends: [''] }
  
    try {
      const res = await signup(email, password).then((res) => {
        dataForm.id = res._tokenResponse.localId

      console.log(dataForm)
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataForm)
      };
      fetch(`${APIKey}usersInfo.json`, requestOptions).then(res => {
        console.log('resolve')
        setSuccess(`Hi ${dataForm.name}, you are registered. please login now`)
      }).catch(error => {
        setError(error.message)
      })
    })
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    }
    
  }

  const onHandleChange = (event) => {
    setError('')
    setSuccess('')
    if (event.target.name === 'firstName') {
      setFirstName(event.target.value);
    } else if (event.target.name === 'lastName') {
      setLastName(event.target.value);
    } else if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
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
            Sign up
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={onHandleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={onHandleChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={onHandleChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={onHandleChange}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            {error ? <Alert stype={{ marginTop: '30px' }} severity="error">{error}</Alert> : ''}
            {success ? <Alert stype={{ marginTop: '30px' }} severity="success">{success}</Alert> : ''}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signupHandle}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item onClick={() => { navigate('/login') }}>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    // <div>Signup
    //     <button onClick={signupHandle}>Singup with test values</button>
    //     <button onClick={() => { navigate('/login') }}>Login</button>
    // </div>
  )
} 
