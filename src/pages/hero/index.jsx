import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; // Ensure styles are imported
import './style.css';
import hero_1 from './hero-1.png';
import hero_2 from './hero-2.png';
import hero_3 from './hero-3.png';
import Slider from '../../components/slider/Slider';

const sliderComponentArray = [
    {
        title: <h1>Don't miss amazing <br /> grocery deals</h1>,
        subtitle: 'Save up to 50% off on your first order',
        image: hero_1,
    },
    {
        title: <h1>DGrocery Specials <br />Just for You </h1>,
        subtitle: 'Great discounts await!',
        image: hero_2,
    },
    {
        title: <h1>DCook Fresh Ingredients <br />Shop Now! </h1>,
        subtitle: 'Enjoy home-cooked flavors.',
        image: hero_3,
    }
]

const HeroSetion = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    return (
        <AwesomeSlider
            className="hero-slider"
            animation="cubeAnimation"
            selected={currentIndex} // Controls the active slide
        >
            {sliderComponentArray.map((item, index) => (
                <div className='bg-image' style={{ borderRadius: '15px' }} key={index}>
                    <Slider
                        title={item.title}
                        subtitle={item.subtitle}
                        image={item.image}
                        setCurrentIndex={setCurrentIndex}
                        slides = {sliderComponentArray}
                    />
                </div>
            ))}
        </AwesomeSlider>
    );
};

export default HeroSetion;
