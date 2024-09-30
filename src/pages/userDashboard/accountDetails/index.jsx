import React, { useState } from 'react'
import { TextField, Button, Grid, Box, Typography, Avatar } from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';

const Index = () => {
    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    return (
        <Box component='main' sx={{ boxShadow: 1, width: '82.8vw' }}>
            <Box>
                <Typography variant="h5" gutterBottom>
                    Account Details
                </Typography>
                <form style={{ padding: '20px' }}>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box display="flex" alignItems="center">
                                <Avatar
                                    alt="Profile Image"
                                    src={profileImage}
                                    sx={{ width: 64, height: 64, marginRight: '16px' }}
                                />
                                <Button
                                sx={{backgroundColor:'#3BB77E'}}
                                    variant="contained"
                                    component="label"
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Upload Profile Image
                                    <input
                                        hidden
                                        accept="image/*"
                                        type="file"
                                        onChange={handleImageChange}
                                    />
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                label="First Name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                label="Last Name"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Display Name"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Email Address"
                                type="email"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Current Password"
                                type="password"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="New Password"
                                type="password"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Confirm Password"
                                type="password"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                // color="#3BB77E"
                                sx={{backgroundColor:'#3BB77E'}}
                            >
                                Save Change
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    )
}

export default Index