import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Index = () => {
    const [orderId, setOrderId] = useState('');
    const [billingEmail, setBillingEmail] = useState('');

    const handleTrack = () => {
        // Handle the tracking logic here
        console.log("Tracking Order ID:", orderId, "with Billing Email:", billingEmail);
    };
    return (
        <Box component='main' sx={{ boxShadow: 1, width: '82.8vw' }}>
            <Typography variant='h4' component='h4'>Order tracks</Typography>
            <Container maxWidth="sm">
                <Box sx={{ mt: 8, textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                        Orders tracking
                    </Typography>
                    <Typography variant="body1" paragraph>
                        To track your order please enter your Order ID in the box below and press the "Track" button.
                        This was given to you on your receipt and in the confirmation email you should have received.
                    </Typography>

                    <TextField
                        fullWidth
                        label="Order ID"
                        placeholder="Found in your order confirmation email"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        fullWidth
                        label="Billing email"
                        placeholder="Email you used during checkout"
                        value={billingEmail}
                        onChange={(e) => setBillingEmail(e.target.value)}
                        margin="normal"
                        variant="outlined"
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        onClick={handleTrack}
                    >
                        Track
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default Index