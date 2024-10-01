import React from 'react'
import { Box, List, ListItem, Typography } from '@mui/material'
import './popularPro.css'
import { productsArray } from './productList'
import ProductsCarts from '../../components/carts/ProductsCarts'



const PropularPro = () => {
    return (


        <Box className='popular-products'>
            <Box component='div' className='header'>
                <Typography variant='h4' component='h4'>Popular Products</Typography>
                <List className='categories'>
                    <ListItem>All</ListItem>
                    <ListItem>Milks & Dairies</ListItem>
                    <ListItem>Coffees & Teas</ListItem>
                    <ListItem>Pet Foods</ListItem>
                    <ListItem>Meats</ListItem>
                    <ListItem>Vegetables</ListItem>
                    <ListItem>Fruits</ListItem>
                </List>
            </Box>
            <Box component='div' className='products-list'>
                {productsArray.map((product, index) => (
                    <ProductsCarts key={index}
                        name={product.name}
                        about={product.about}
                        ratings={product.ratings}
                        ratingsNumber={product.ratingsNumber}
                        shopName={product.shopName}
                        discountPrice={product.discountPrice}
                        actualPrice={product.actualPrice}
                        image={product.image}
                    />
                ))}
            </Box>
        </Box>)
}

export default PropularPro