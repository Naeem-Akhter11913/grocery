import React from 'react'
import { Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import './auth.css'


const Login = () => {

  const responseFacebook = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Box component='main' className='login-container'>
      <Box component='div' className='login-sub-container' sx={{ boxShadow: 2, padding: 2, borderRadius: 2, backgroundColor: 'white' }}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Box component='div' className='content-left-container'>
              <Box component='img' src='./Auth/loginLogo.png' />
            </Box>
          </Grid>
          <Grid item xs={7} className='form'>
            <Box component='div' className='content-right-container'>
              <Box component='div' className='form-info'>
                <Typography variant='h3' component='h3' >
                  Login
                </Typography>
                <Typography variant='p' component='p' >Don't have an account?{' '}
                  <Link component='a' href='/register' className='anchor-color'>Create here</Link>
                </Typography>
              </Box>

              <Box component='form' className='form-container' onSubmit={handleSubmit}>
                <Box component='div' className='form-controller'>
                  <TextField id="outlined-basic" label="Enter your email *" type='email' variant="outlined" fullWidth />
                </Box>
                <Box component='div' className='form-controller'>
                  <TextField id="outlined-basic" label="Your password *" type='text' variant="outlined" fullWidth />
                </Box>
                <Box component='div' className='form-controller'>
                  <Grid container spacing={1} >
                    <Grid item xs={10}>
                      <TextField id="outlined-basic" label="Security code *" type='number' variant="outlined"  />

                    </Grid>
                    <Grid item xs={1.9} className='security-number'>
                      {'1234'.split('').map((number) => (<Typography variant='p' className='security-color' >{number}</Typography>))}
                    </Grid>
                  </Grid>
                </Box>
                <Box component='div' className='form-controller forget-password'>
                  <FormControlLabel control={<Checkbox />} label='Remember me' fullWidth />
                  <Link component='a' className='anchor-color' href='#'>Forgot Password?</Link>
                </Box>

                <Box component='div' className='form-controller forget-password' >
                  <GoogleOAuthProvider clientId="<your_client_id>">
                    <GoogleLogin
                      onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
                  </GoogleOAuthProvider>
                  <FacebookLogin
                    className="facebook-login"
                    appId="1088597931155576"
                    fields="name,email,picture"
                    callback={responseFacebook}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook"
                  />
                </Box>
                <Box component='div' className='form-controller'>
                  <Button fullWidth variant="contained" id='btn-color'>Login</Button>
                </Box>
              </Box>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Login

