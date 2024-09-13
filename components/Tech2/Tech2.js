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
            slidesPerView: 3,
        },
        '576': {
            slidesPerView: 3,
        },
        '0': {
            slidesPerView: 2,
        },
    },
}

export default function Tech2() {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    <div className="brand-item ">
                        <img src="/assets/img/icon/figma.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item ">
                        <img src="/assets/img/icon/invision.png" alt="" />
                    </div>
                </SwiperSlide>
               
                <SwiperSlide>
                    <div className="brand-item ">
                        <img  src="/assets/img/icon/vue.png" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item  py-8">
                        <img  src="/assets/img/icon/xd.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-item ">
                        <img  src="/assets/img/icon/sketch.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
