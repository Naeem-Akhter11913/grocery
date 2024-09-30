import React from 'react'
import { Box, Button, Checkbox, FormControlLabel, Grid, Link, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import './auth.css'

const Register = () => {

  const responseFacebook = () => {
    // Handle Facebook login response
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Box component='main' className='login-container'>
      <Box component='div' className='login-sub-container' sx={{ boxShadow: 2, padding: 2, borderRadius: 2, backgroundColor: 'white' }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box component='div' className='content-left-container'>
              <Box component='div' className='content-right-container'>
                <Box component='div' className='form-info'>
                  <Typography variant='h3' component='h3' >
                    Create an Account
                  </Typography>
                  <Typography variant='p' component='p' >Already have an account?{' '}
                    <Link component='a' href='/' className='anchor-color'>Create here</Link>
                  </Typography>
                </Box>

                <Box component='form' className='form-container' onSubmit={handleSubmit}>
                  <Box component='div' className='form-controller'>
                    <TextField id="outlined-basic" label="Username*" type='email' variant="outlined" fullWidth />
                  </Box>
                  <Box component='div' className='form-controller'>
                    <TextField id="outlined-basic" label="Email *" type='email' variant="outlined" fullWidth />
                  </Box>
                  <Box component='div' className='form-controller'>
                    <TextField id="outlined-basic" label="Password *" type='text' variant="outlined" fullWidth />
                  </Box>
                  <Box component='div' className='form-controller'>
                    <TextField id="outlined-basic" label="Confirm Password *" type='text' variant="outlined" fullWidth />
                  </Box>
                  <Box component='div' className='form-controller'>
                    <Grid container spacing={1}>
                      <Grid item xs={10}>
                        <TextField id="outlined-basic" label="Security code *" type='number' variant="outlined" fullWidth />
                      </Grid>
                      <Grid item xs={2} className='security-number'>
                        {'1234'.split('').map((number) => (<Typography variant='p' className='security-color'>{number}</Typography>))}
                      </Grid>
                    </Grid>
                  </Box>

                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    style={{ display: 'flex', flexDirection: 'row' }}
                  >
                    <FormControlLabel value="customer" control={<Radio />} label="I am a customer" />
                    <FormControlLabel value="vendor" control={<Radio />} label="I am a vendor" />
                  </RadioGroup>


                  <Box component='div' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                      <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} />
                      <Typography variant='p' component='p' >I agree to the Terms and Conditions</Typography>

                    </Box>
                    <Box>
                      <Link component='a' href='#' className='anchor-color'>Learn more</Link>
                    </Box>
                  </Box>

                  <Box component='div' className='form-controller'>
                    <Button fullWidth variant="contained" id='btn-color'>Submit & Register</Button>
                  </Box>
                  <Box component='div'>
                    <Typography variant='p' component='p'>
                      Note:Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy
                    </Typography>
                  </Box>
                </Box>

              </Box>
            </Box>
          </Grid>

          <Grid item xs={4} className='form '>
            <Box component='div' className='register-block'>
              <Stack spacing={2} alignItems="center" justifyContent="center">
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
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Register
