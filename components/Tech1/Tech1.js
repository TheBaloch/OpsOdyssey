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

export default function Tech1() {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    <div className="brand-item">
                        <img src="/assets/img/icon/Laravel.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item  pt-2">
                        <img  src="/assets/img/icon/wordpress.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item   pt-4">
                        <img src="/assets/img/icon/wix.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item pt-4">
                        <img  src="/assets/img/icon/moz.png" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item pt-3">
                        <img src="/assets/img/icon/frog.png" alt="" />
                    </div>
                </SwiperSlide>
               
                
            
            </Swiper>
        </>
    )
}
