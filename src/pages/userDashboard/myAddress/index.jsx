import { Container, Grid, Typography, Box, Modal } from '@mui/material';
import React, { useState } from 'react'
import EditAddress from '../../models/EditAddress';

const Index = () => {
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box component='main' sx={{ boxShadow: 1, width: '82.8vw' }}>
            <Box p={3}>
                <Typography variant='h4' component='h4'>My Address</Typography>
                <Container>
                    <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ border: '1px solid rgb(208, 208, 208)', padding: 5, borderRadius: 3 }}>
                                <Typography variant="h6" gutterBottom>
                                    Billing Address
                                </Typography>
                                <Typography variant="body1">
                                    3522 Interstate
                                </Typography>
                                <Typography variant="body1">
                                    75 Business Spur,
                                </Typography>
                                <Typography variant="body1">
                                    Sault Ste. Marie, MI 49783
                                </Typography>
                                <Typography variant="body1">
                                    New York
                                </Typography>
                                <Typography sx={{cursor:"pointer"}}onClick={handleOpen}>Edit</Typography>
                            </Box>
                        </Grid>

                        {/* Shipping Address */}
                        <Grid item xs={12} md={6}>
                            <Box sx={{ border: '1px solid rgb(208, 208, 208)', padding: 5, borderRadius: 3 }}>
                                <Typography variant="h6" gutterBottom>
                                    Shipping Address
                                </Typography>
                                <Typography variant="body1">
                                    4299 Express Lane
                                </Typography>
                                <Typography variant="body1">
                                    Sarasota, FL 34249 USA
                                </Typography>
                                <Typography variant="body1">
                                    Phone: 1.941.227.4444
                                </Typography>
                                <Typography variant="body1">
                                    Sarasota
                                </Typography>
                                <Typography sx={{cursor:"pointer"}}onClick={handleOpen}>Edit</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <EditAddress handleClose={handleClose} />
            </Modal>
        </Box>
    )
}

export default Index