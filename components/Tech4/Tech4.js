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
            slidesPerView: 5 ,
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

export default function Tech4() {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    <div className="brand-item ">
                        <img src="/assets/img/icon/azure.png" alt="" />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="brand-item">
                        <img src="https://imguru.ae/assets/img/logo/logo.png" alt="" />
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                    <div className="brand-item pt-2 ">
                        <img  src="/assets/img/icon/aws.png" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item  py-8">
                        <img  src="/assets/img/icon/nodejs.png" alt="" />
                    </div>
                </SwiperSlide>
            
                <SwiperSlide>
                    <div className="brand-item">
                        <img src="/assets/img/icon/mongodb.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item pt-2">
                        <img src="/assets/img/icon/python.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
