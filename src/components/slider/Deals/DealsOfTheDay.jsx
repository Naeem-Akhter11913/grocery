import React from 'react';
import { Box, Button, Rating, Typography } from '@mui/material';
import './dealsOfTheDay.css';

const DealsOfTheDay = () => {
    return (
        <Box className='deals-container'>
            {/* Image container */}
            <Box className='image-container-deal'>
                <img src='/assets/banner-5.png' alt="Deals Banner" />
            </Box>

            {/* Content box */}
            <Box className='content-box-deal' sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '-100px',
                marginLeft: '48px'
            }}>
                <Box sx={{ width: '100%' }}>
                    {/* Timer Section */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <p>170 Days</p>
                        <p>23 Hours</p>
                        <p>00 Mins</p>
                        <p>05 Sec</p>
                    </Box>

                    {/* Product Info */}
                    <Typography component='h6' variant='h6'>
                        Seeds of Change Organic Quinoa, Brown, & Red Rice
                    </Typography>

                    <Rating value={4} readOnly size="small" />

                    <Typography component='p' variant='body2'>
                        By NestFood
                    </Typography>

                    {/* Price and Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                        <Box>
                            <Typography component='span' sx={{ color: '#32cd32', fontWeight: 'bold' }}>
                                $32.85
                            </Typography>
                            <Typography component='span' sx={{ textDecoration: 'line-through', marginLeft: '8px' }}>
                                $33.80
                            </Typography>
                        </Box>
                        <Button variant="contained" color="primary">Add</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default DealsOfTheDay;
