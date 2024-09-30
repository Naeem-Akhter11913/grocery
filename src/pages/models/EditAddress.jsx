import React, { useState } from 'react';
import { Box, Typography, IconButton, Grid, TextField, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EditAddress = ({ handleClose }) => {
  const [billingAddress, setBillingAddress] = useState({
    addressLine1: '3522 Interstate',
    addressLine2: '75 Business Spur',
    city: 'Sault Ste. Marie',
    state: 'MI',
    zip: '49783',
    country: 'New York',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Billing Address:', billingAddress);
    // Add submit logic here if needed
    handleClose(); // Close the modal after submitting
  };

  return (
    <Box sx={style}>
      <IconButton 
        aria-label="close" 
        onClick={handleClose} 
        sx={{ position: 'absolute', right: 8, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Edit Address
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Update your address details here.
      </Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address Line 1"
              name="addressLine1"
              value={billingAddress.addressLine1}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address Line 2"
              name="addressLine2"
              value={billingAddress.addressLine2}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={billingAddress.city}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="State"
              name="state"
              value={billingAddress.state}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="ZIP Code"
              name="zip"
              value={billingAddress.zip}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={billingAddress.country}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EditAddress;
