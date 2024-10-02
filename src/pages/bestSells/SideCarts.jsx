import React from 'react';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import './SideCarts.css'

const NatureCard = () => {
    return (
        <Card
            sx={{
                width: '100%', // Ensures it takes full width of parent
                borderRadius: '20px',
                backgroundImage: `url(/assets/banner-4.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%', // Ensures it takes full height of parent
                color: 'white',
            }}
        >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <Box sx={{ padding: '20px' }}>
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: 'bold', marginBottom: '20px' }}
                    >
                        Bring nature into your home
                    </Typography>

                    <Button
                        variant="contained"
                        color="success"
                        sx={{
                            borderRadius: '50px',
                            textTransform: 'none',
                            padding: '10px 20px',
                            backgroundColor: '#28a745',
                            '&:hover': { backgroundColor: '#218838' },
                        }}
                        endIcon={<span>→</span>}
                    >
                        Shop Now
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default NatureCard;
