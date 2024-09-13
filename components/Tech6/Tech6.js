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
            slidesPerView: 5,
        },
        '992': {
            slidesPerView: 5,
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

export default function Tech6() {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    <div className="brand-item pt-2">
                        <img src="/assets/img/icon/pilivo.png" alt="" />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="brand-item">
                        <img src="https://imguru.ae/assets/img/logo/logo.png" alt="" />
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                    <div className="brand-item pt-3 ">
                        <img  src="/assets/img/icon/twilio.png" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item  py-8">
                        <img  src="/assets/img/icon/asterisk.png" alt="" />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="brand-item">
                        <img src="/assets/img/icon/Laravel.png" alt="" />
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                    <div className="brand-item">
                        <img src="/assets/img/icon/freepbx.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item">
                        <img src="/assets/img/icon/sql.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
