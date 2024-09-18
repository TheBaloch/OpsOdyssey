'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.css' // Ensure you import the necessary Swiper CSS

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function Review() {
    return (
        <Swiper {...swiperOptions}>
           
                    <SwiperSlide>
                        <div >
                            <div className="testimonial__item-two">
                                <div className="testimonial__info-two">
                                    <h2 className="title">Zaid Irfan</h2>
                                    <span>CEO, Natty NYC</span>
                                </div>
                                <div className="testimonial__rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <p>OpsOdyssey built a great e-commerce app for Natty NYC, enhancing our customer experience with personalized recommendations and a smooth checkout process.</p>
                                <div className="icon">
                                    <img src="/assets/img/icon/quote.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div >
                            <div className="testimonial__item-two">
                                <div className="testimonial__info-two">
                                    <h2 className="title">Micheal</h2>
                                    <span>CEO, Immigration Guru</span>
                                </div>
                                <div className="testimonial__rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star-half-alt" />
                                </div>
                                <p>OpsOdyssey improved our platform, Immigration Guru. They designed a user-friendly and swift web app that bridges the gap between international job seekers and employers.</p>
                                <div className="icon">
                                    <img src="/assets/img/icon/quote.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div >
                            <div className="testimonial__item-two">
                                <div className="testimonial__info-two">
                                    <h2 className="title">Anthony Robert</h2>
                                    <span>CEO, Deliver Logic</span>
                                </div>
                                <div className="testimonial__rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star-half-alt" />
                                </div>
                                <p>OpsOdyssey's DeliverLogic completely revolutionized our delivery operations with AI-driven logistics and seamless online ordering. Huge kudos to their outstanding work!</p>
                                <div className="icon">
                                    <img src="/assets/img/icon/quote.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div >
                            <div className="testimonial__item-two">
                                <div className="testimonial__info-two">
                                    <h2 className="title">Blavo & Stewart</h2>
                                    <span>CEO, Within28Days</span>
                                </div>
                                <div className="testimonial__rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star-half-alt" />
                                </div>
                                <p>OpsOdyssey did a great job on our website. They understood our needs, delivered on time, and improved our online presence. The site looks professional, and upto marks.</p>
                                <div className="icon">
                                    <img src="/assets/img/icon/quote.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
              
            <div className="testimonial__shape-two">
                <img src="/assets/img/images/h2_testimonial_shape.png" alt="" data-aos="fade-up" data-aos-delay={400} />
            </div>
        </Swiper>
    )
}
