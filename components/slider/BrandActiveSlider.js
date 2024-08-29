'use client'

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 4,
        },
        '992': {
            slidesPerView: 4,
        },
        '768': {
            slidesPerView: 4,
        },
        '576': {
            slidesPerView: 3,
        },
        '0': {
            slidesPerView: 2,
        },
    },
}

export default function BrandActiveSlider() {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    <div className="brand-item ">
                        <img src="/assets/img/brand/natty.png" alt="" />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="brand-item">
                        <img src="https://imguru.ae/assets/img/logo/logo.png" alt="" />
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                    <div className="brand-item ">
                        <img  src="/assets/img/brand/logo.png" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item  py-8">
                        <img  src="/assets/img/brand/brand_img04.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item">
                        <img src="/assets/img/brand/wday.png" alt="" />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="brand-item">
                        <img src="/assets/img/brand/brand_img06.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item">
                        <img src="/assets/img/brand/brand_img03.png" alt="" />
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </>
    )
}
