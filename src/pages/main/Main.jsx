import React from 'react'
import Navbar from '../../components/Navebar/NaveBar'
import SecondNavbar from '../../components/Navebar/SecondNavbar'
import HeroSetion from '../hero'
import Slider from '../../components/slider/Slider'
import image_1 from '../hero/hero-1.png'
import Categories from '../Categories/Categories'
import { Box } from '@mui/material'
import PropularPro from '../popularProduts/PropularPro'
import ProductCarousel from '../bestSells/ProductCarousel'
// import DealsOfTheDay from '../../components/slider/Deals/DealsOfTheDay'
import DealsOfTheDay from '../dealsOfTheDaty'

const Main = () => {
    const title = <h1>Don't miss amazing <br /> grocery deals</h1>;
    const subtitle = 'Save up to 50% off on your first order'

    return (
        <div>
            <Navbar />
            <SecondNavbar />
            <HeroSetion />

            <Categories />

            <PropularPro />

            <ProductCarousel/>

            <DealsOfTheDay />
       
            <Box component='div' style={{ height: '400px' }}>
                <Slider
                    title={title}
                    subtitle={subtitle}
                    image={image_1}
                    setCurrentIndex={() => { }}
                />
            </Box>



        </div>
    )
}

export default Main