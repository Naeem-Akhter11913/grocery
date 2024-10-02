import React from 'react';
import { Button, Typography, Box } from '@mui/material';

const BestSells = ({ product }) => {
    return (
        <Box sx={{ borderRadius: '10px', boxShadow: 2, padding: 2, width: '300px', height:'30rem' }}>
            {/* Sale Tag */}
            {/* {product.tag && (
                <Box sx={{ backgroundColor: product.tagColor, padding: '2px 8px', borderRadius: '4px', color: 'white', position: 'absolute', top: 10, left: 10 }}>
                    {product.tag}
                </Box>
            )} */}

            {/* Image */}
            <Box component="img" src={`/assets/${product.image}`} alt={product.name} sx={{ width: '100%', height: 'auto', borderRadius: '10px' }} />

            {/* Product Information */}
            <Box sx={{ marginTop: 2 }}>
                <Typography variant="subtitle2">{product.brand}</Typography>
                <Typography variant="h6" fontWeight="bold">{product.name}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h5" color="green">${product.discountedPrice}</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ textDecoration: 'line-through', marginLeft: 1 }}>
                        ${product.originalPrice}
                    </Typography>
                </Box>
                <Typography variant="body2">Sold: {product.sold}/{product.stock}</Typography>
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                    Add To Cart
                </Button>
            </Box>
        </Box>
    );
};

export default BestSells;
