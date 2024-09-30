import React, { useEffect, useState } from 'react'
import SubscribeForm from '../sendEmail/SubscribeForm';


const Slider = ({ title, subtitle, image ,setCurrentIndex , slides=[]}) => {

    const [isPaused, setIsPaused] = useState(false); // State to control auto-slide pause

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
            }, 4000); // 4 seconds interval
            return () => clearInterval(interval);
        } 
    }, [isPaused, slides.length]);

    // Pause the auto-slide after 10 seconds of inactivity
    const handlePause = (pause) => {
        setIsPaused(pause);
    };

    return (
        <div className='bg-image' style={{ borderRadius: '15px' }}>
            <div className="slider-content">
                <div className="column">
                    <div>
                        {title}
                        <p>{subtitle}</p>
                    </div>
                    <SubscribeForm onPause={handlePause}/>
                </div>
                <div>
                    <img src={image} alt='hero-1' />
                </div>
            </div>
        </div>
    )
}

export default Slider