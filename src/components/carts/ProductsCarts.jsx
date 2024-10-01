import React, { useState } from 'react'
import './productsCarts.css'
import { Box, Button, Rating, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const ProductsCarts = ({ 
    name,
    about,
    ratings,
    ratingsNumber,
    shopName,
    discountPrice,
    actualPrice,
    image }) => {
    // const [ratings, setRatings] = useState(3);

    return (
        <Box className='product-card'>
            <Box className='image-container'>
                <img src={`/assets/${image}`} alt='Product' />
            </Box>
            <Box className='product-info'>
                <Typography component='p'>{name}</Typography>
                <Typography component='h5'>
                    {/* Seeds of Change Organic Quinoa, Brown, & Red Rice */}
                    {about}
                </Typography>
                <Box className='rating-price-container'>
                    <Rating name="read-only" value={ratings} readOnly sx={{ fontSize: '16px' }} />
                    <Typography component='span'>{ratingsNumber}</Typography>
                </Box>
                <Typography className='shop-info'>By <span>{shopName}</span></Typography>
                <Box className='price-container'>
                    <Typography component='p'>
                        {discountPrice} <span>{actualPrice}</span>
                    </Typography>
                    <Button className='add-to-cart'>
                        <AddShoppingCartIcon />Add
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default ProductsCarts