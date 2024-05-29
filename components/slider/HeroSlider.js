'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 6000,
    },

};

export default function HeroSlider() {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide className="swiper-slide slider__single">
                    <div className="slider__bg" data-background="/assets/img/slider/slider1.jpg" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slider__content">
                                    <span className="sub-title">We Are Expert In This Field</span>
                                    <h2 className="title">From Imagination to Realization</h2>
                                    <p>Where Dreams Inspire Code, and Code Brings Dreams to Life</p>
                                    <Link href="/contact" className="btn">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider__shape">
                        <img src="/assets/img/slider/slider_shape01.png" alt="" />
                        <img src="/assets/img/slider/slider_shape02.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slider__single">
                    <div className="slider__bg" data-background="/assets/img/slider/slider2.jpg" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slider__content">
                                    <span className="sub-title">We Are Expert In This Field</span>
                                    <h2 className="title">Transforming Imagination into Implementation</h2>
                                    <p>Bringing Your Ideas to Life in Code</p>
                                    <Link href="/contact" className="btn">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider__shape">
                        <img src="/assets/img/slider/slider_shape01.png" alt="" />
                        <img src="/assets/img/slider/slider_shape02.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
