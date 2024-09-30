import React from 'react'
import Navbar from '../../components/Navebar/NaveBar'
import SecondNavbar from '../../components/Navebar/SecondNavbar'
import HeroSetion from '../hero'
import Slider from '../../components/slider/Slider'
import image_1 from '../hero/hero-1.png'
import Categories from '../Categories/Categories'

const Main = () => {
    const title = <h1>Don't miss amazing <br /> grocery deals</h1>;
    const subtitle = 'Save up to 50% off on your first order'

    return (
        <div>
            <Navbar />
            <SecondNavbar />
            <HeroSetion />

            <Categories />
            

            <div style={{ height: '400px' }}>
                <Slider
                    title={title}
                    subtitle={subtitle}
                    image={image_1}
                    setCurrentIndex={() => { }}
                />
            </div>


        </div>
    )
}

export default Main