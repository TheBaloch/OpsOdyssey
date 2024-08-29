'use client'
import React, { useState, useEffect } from 'react';
import './style.css';

export default function Crousel() {
    const images = [
        { src: '/assets/img/slider/slider1.jpg', alt: 'Image 1' },
        { src: '/assets/img/slider/img2.jpg', alt: 'Image 2' },
        { src: '/assets/img/slider/slider2.jpg', alt: 'Image 3' },
        { src: '/assets/img/slider/slider_bg01.jpg', alt: 'Image 4' },
        { src: '/assets/img/slider/img5.jpg', alt: 'Image 5' },
        { src: '/assets/img/slider/img6.jpg', alt: 'Image 6' },
        { src: '/assets/img/slider/img7.jpg', alt: 'Image 7' },
        { src: '/assets/img/slider/img8.jpg', alt: 'Image 8' },
        { src: '/assets/img/slider/img9.jpg', alt: 'Image 9' },
        { src: '/assets/img/slider/img10.jpeg', alt: 'Image 10' }
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const handlePrev = () => {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    };

    const handleNext = () => {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 3000);
        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <div className="carousel-container">
            <button className="carousel-control prev" onClick={handlePrev}>&#10094;</button>
            <div className="carousel-inner">
                <img
                    src={images[currentImage].src}
                    alt={images[currentImage].alt}
                    className="carousel-item"
                />
            </div>
            <button className="carousel-control next" onClick={handleNext}>&#10095;</button>
        </div>
    );
}
