import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import './categoryCart.css';

const CategoryCart = ({ title, image }) => {
  return (
    <Box component='section'
      className="category-cart"
      style={{
        backgroundImage: `url('/assets/${image}')`,
      }}
    >
      <Box
        display="flex"
        paddingLeft={6}
        height="100%"
      >
        <Box
          sx={{
            marginTop: '64px',
          }}
        >
          {title}
          <Button variant="contained" sx={{ mt: 3, backgroundColor: 'rgb(67, 160, 71)' }} color="primary">
            Shop Now <ArrowRightAltIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryCart;
