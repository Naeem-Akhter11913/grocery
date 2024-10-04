import React, { useEffect, useRef, useState } from 'react';
// import './InfiniteCardSlider.css'; // Import your styles here

const InfiniteCardSlider = () => {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;
    const firstCardWidth = carousel.querySelector('.card').offsetWidth;
    const carouselChildren = [...carousel.children];
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Insert copies for infinite scrolling
    carouselChildren.slice(-cardPerView).reverse().forEach((card) => {
      carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
    });

    carouselChildren.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML('beforeend', card.outerHTML);
    });

    carousel.classList.add('no-transition');
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove('no-transition');

    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return;
      const newTimeoutId = setTimeout(() => {
        carousel.scrollLeft += firstCardWidth;
      }, 2500);
      setTimeoutId(newTimeoutId);
    };

    const infiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add('no-transition');
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove('no-transition');
      } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add('no-transition');
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove('no-transition');
      }
      clearTimeout(timeoutId);
      if (!wrapper.matches(':hover')) autoPlay();
    };

    carousel.addEventListener('scroll', infiniteScroll);

    wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
    wrapper.addEventListener('mouseleave', autoPlay);

    autoPlay();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isAutoPlay, timeoutId]);

  const dragStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setStartScrollLeft(carouselRef.current.scrollLeft);
  };

  const dragging = (e) => {
    if (!isDragging) return;
    carouselRef.current.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStop = () => {
    setIsDragging(false);
  };

  return (
    <div className="wrapper" ref={wrapperRef}>
      <i id="left" className="fa-solid fa-angle-left" onClick={() => (carouselRef.current.scrollLeft -= carouselRef.current.querySelector('.card').offsetWidth)}></i>
      <ul className="carousel" ref={carouselRef} onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragStop}>
        <li className="card">
          <div className="img"><img src="https://t4.ftcdn.net/jpg/03/50/40/93/240_F_350409330_2bqhjowfBmrqEia5U8lBsGrvD7h8EIo6.jpg" alt="Blanche Pearson" draggable="false" /></div>
          <h2>Blanche Pearson</h2>
          <span>Sales Manager</span>
        </li>
        <li className="card">
          <div className="img"><img src="https://t3.ftcdn.net/jpg/00/57/55/40/240_F_57554079_g3LhdDR5C0f2mc2ZxjFgsbb6WMqouUwQ.jpg" alt="Joenas Brauers" draggable="false" /></div>
          <h2>Joenas Brauers</h2>
          <span>Web Developer</span>
        </li>
        <li className="card">
          <div className="img"><img src="https://t3.ftcdn.net/jpg/06/15/91/36/240_F_615913669_1GvdMMT0H44Z4owh9SCYsml6mCcy8g3G.jpg" alt="Lariach French" draggable="false" /></div>
          <h2>Lariach French</h2>
          <span>Online Teacher</span>
        </li>
        <li className="card">
          <div className="img"><img src="https://t3.ftcdn.net/jpg/02/60/67/80/240_F_260678009_gV1PBTotxDIwTngnmn3nYqWshbznYf24.jpg" alt="James Khosravi" draggable="false" /></div>
          <h2>James Khosravi</h2>
          <span>Freelancer</span>
        </li>
        <li className="card">
          <div className="img"><img src="https://t3.ftcdn.net/jpg/03/99/91/62/240_F_399916297_1JwXdmC6ViCG4YhZuhLVz7xfuZhfHCY9.jpg" alt="Kristina Zasiadko" draggable="false" /></div>
          <h2>Kristina Zasiadko</h2>
          <span>Bank Manager</span>
        </li>
        <li className="card">
          <div className="img"><img src="https://t4.ftcdn.net/jpg/06/81/01/43/240_F_681014359_dyMjwn4JYLtY985umiBOeytmLmVxEjC0.jpg" alt="Donald Horton" draggable="false" /></div>
          <h2>Donald Horton</h2>
          <span>App Designer</span>
        </li>
      </ul>
      <i id="right" className="fa-solid fa-angle-right" onClick={() => (carouselRef.current.scrollLeft += carouselRef.current.querySelector('.card').offsetWidth)}></i>
    </div>
  );
};

export default InfiniteCardSlider;
