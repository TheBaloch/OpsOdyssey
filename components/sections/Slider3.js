'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.testimonial-two-button-next',
        prevEl: '.testimonial-two-button-prev',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}
export default function Slider3() {
    const [space, setSpace] = useState(0)

    const handleResize = () => {
        const container = document.querySelector('main .container')
        const windowWidth = window.innerWidth
        const containerWidth = container.offsetWidth
        const newSpace = ((windowWidth - containerWidth) / 2) - 15

        setSpace(newSpace)

        const formQuote = document.querySelector('.slider__area-home8 .box-form-quote')
        formQuote.style.right = `${newSpace}px`
    }

    useEffect(() => {
        // Initial setup
        handleResize()

        // Attach event listener
        window.addEventListener('resize', handleResize)

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    const [value, setValue] = useState(25000)
    const handleChange = e => {
        setValue(Math.ceil(e.target.value / 5) * 5)
    }

    return (
        <>
            <section className="slider__area slider__area-home8">
                <Swiper {...swiperOptions} className="swiper-container slider_baner__active slider_baner_home8">
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide slider__single">
                            <div className="slider__bg" data-background="assets/img/home8/banner.png" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="banner__content-three">
                                            <h2 className="title">Expertly Crafted Web Solutions</h2>
                                            <p >OpsOdyssey specializes in delivering tailored web development solutions designed to meet the diverse needs of businesses globally. Built on a foundation of innovation and excellence, OpsOdyssey is recognized for its creation of cutting-edge websites that seamlessly integrate design and functionality. </p>
                                           
                                            <Link href="/contact" className="btn">Contact us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide slider__single">
                            <div className="slider__bg" data-background="assets/img/home6/banner2.png" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="banner__content-three">
                                        <h2 className="title">Elevate Your Digital Presence</h2>
                                            <p > Our team of seasoned developers and designers is dedicated to crafting bespoke solutions that drive business growth. With an unwavering commitment to quality and client satisfaction, OpsOdyssey collaborates closely with businesses to translate concepts into impactful digital experiences. </p>
                                            <Link href="/contact" className="btn">Contact us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
                <div className="box-button-slider-bottom">
                    <div className="testimonial__nav-four">
                        <div className="testimonial-two-button-prev button-swiper-prev"><i className="flaticon-right-arrow" />
                        </div>
                        <div className="testimonial-two-button-next button-swiper-next"><i className="flaticon-right-arrow" />
                        </div>
                    </div>
                </div>
                <div className="box-form-quote">
                    <div className="container">
                        <div className="testimonial__form">
                            <h2 className="title">Get a Quote</h2>
                            <form action="#">
                                <div className="form-grp">
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="form-grp">
                                    <input type="email" placeholder="E-mail" />
                                </div>
                                <div className="form-grp select-grp">
                                    <select name="orderby" className="orderby">
                                        <option value="Select Insurance Service">Discussing a future Project</option>
                                        <option value="Health Insurance">Digital Marketing</option>
                                        <option value="Travel Insurance">Mobile App Development</option>
                                        <option value="Vehicle Insurance">Search Engine Optimization</option>
                                        <option value="Cargo Insurance">Social Media Marketing</option>
                                        <option value="Bike Insurance">UI/UX Design</option> 
                                        <option value="Fire Insurance">Website Development</option>
                                        <option value="Fire Insurance">Something else</option>
                                    </select>
                                </div>
                                {/* <div className="range-slider-wrap">
                                    <div className="range-top">
                                        <p>Limits of balance:</p>
                                        <span>$<strong id="rangeValue">{value}</strong></span>
                                    </div>
                                    <input className="range" type="range"
                                        min="1"
                                        max="50000"
                                        value={value}
                                        onChange={e => handleChange(e)} />
                                </div> */}
                                <button type="submit" className="btn mt-4">Request a Quote</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
