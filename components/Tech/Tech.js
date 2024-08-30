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
            slidesPerView: 6,
        },
        '992': {
            slidesPerView: 6,
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

export default function Tech() {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    <div className="brand-item ">
                        <img src="/assets/img/icon/react.png" alt="" />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="brand-item">
                        <img src="https://imguru.ae/assets/img/logo/logo.png" alt="" />
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                    <div className="brand-item ">
                        <img  src="/assets/img/icon/github.png" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item  py-8">
                        <img  src="/assets/img/icon/nodejs.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item">
                        <img src="/assets/img/icon/Laravel.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item">
                        <img src="/assets/img/icon/mongodb.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item">
                        <img src="/assets/img/icon/androidlogo.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
