import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import LetConnect from "@/components/LetConnect/LetConnect"
import Review from "@/components/Review/Review"
import About1 from "@/components/sections/About1"
import Callback2 from "@/components/sections/Callback2"
import Counter2 from "@/components/sections/Counter2"
import Faqs1 from "@/components/sections/Faqs1"
import Testimonial6 from "@/components/sections/Testimonial6"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function About() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="About " >
                <div> 
                   

                    <section className="about__area-four mb-4 pb-0 pt-0">
                        <div className="container ">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 col-md-9 col-sm-10 ">
                                    <div className="about__img-wrap-four pt-50 mt-50">
                                        <img src="/assets/img/images/webteam.jpg" alt="" />
                                      
                                        <div className="shape">
                                            <img src="/assets/img/images/inner_about_shape.jpg" alt="" className="alltuchtopdown" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 ">
                                    <div className="about__content-four">
                                        <div className="section-title mb-20">
                                            <span className="sub-title">Simply Know About</span>
                                            <h2 className="title">Welcome to OpsOdyssey!</h2>
                                        </div>
                                        <p>We are a dedicated team of web development professionals with a deep passion for crafting exceptional digital experiences that stand out in today’s fast-paced digital landscape. With years of expertise spanning both frontend and backend technologies, we specialize in building robust, scalable, and future-proof solutions. Whether it's creating sleek, user-friendly interfaces or developing powerful backend systems, our approach is always centered on delivering innovative, tailor-made results that perfectly align with your unique business needs.</p>
                                        <Link href="/contact" className="btn ">Contact With Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
              
                    {/* about-area-end */}
                    {/* couter start */}
                    <section className="counter-area-two mt-0 pt-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item">
                                <div className="icon">
                                    <i className="flaticon-trophy" />
                                </div>
                                <div className="content">
                                    <h2 className="count"><CounterUp count={23} />+</h2>
                                    <p>Successfully <br /> Completed Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item">
                                <div className="icon">
                                    <i className="flaticon-time" />
                                </div>
                                <div className="content">
                                    <h2 className="count"><CounterUp count={10} />+</h2>
                                    <p>Years of Experiences <br /> To Run This Company</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item">
                                <div className="icon">
                                    <i className="flaticon-happy" />
                                </div>
                                <div className="content">
                                    <h2 className="count"><CounterUp count={23} /></h2>
                                    <p>Satisfied <br /> 100% Our Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item">
                                <div className="icon">
                                    <i className="flaticon-china" />
                                </div>
                                <div className="content">
                                    <h2 className="count"><CounterUp count={3} />+</h2>
                                    <p>All Over The World <br /> We Are Available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="counter-shape-two">
                    <img src="/assets/img/images/h2_counter_shape.png" alt="" className="rotateme" />
                </div>
                    </section>
            {/* counter end */}
                    
                   <section className="services__area-four services__bg-four pt-0"   >
                        <div className="container">
                            <div className="row justify-content-center">
                            <div className="col-lg-6">
                                    <div className="section-title text-center mb-50">
                                        <span className="sub-title">Services</span>
                                        <h2 className="title">What We Do?</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center gutter-24 ">
                               
                                <div className="col-lg-4 col-md-6">
                                    <div className="services__item-three">
                                        <div className="services__item-top">
                                            <div className="services__icon-three">
                                            <img src="assets/img/icon/ad.png" />
                                            </div>
                                            <div className="services__top-title">
                                                <h2 className="title"><Link href="/mobile-app-dev">Mobile App Development</Link></h2>
                                            </div>
                                        </div>
                                        <div className="services__content-three">
                                            <p>Crucial in today's electronic age are mobile apps. OpsOdyssey's developers design user-friendly, high-quality, and functional apps to satisfy a global audience while assuring top-class performance and wide, impacting reach for their users anywhere in the globe.</p>
                                            <Link href="/mobile-app-dev" className="btn btn-two">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="services__item-three">
                                        <div className="services__item-top">
                                            <div className="services__icon-three">
                                                <img src="assets/img/icon/dm.png" />
                                            </div>
                                            <div className="services__top-title">
                                                <h2 className="title"><Link href="/digital-marketing">Digital Marketing</Link></h2>
                                            </div>
                                        </div>
                                        <div className="services__content-three">
                                            <p>OpsOdyssey delivers Digital Marketing services, creating simple yet powerful ideas that connect brands with audiences, driving engagement and results. We empower marketing teams to reach their full potential with impactful solutions.</p>
                                            <Link href="/digital-marketing" className="btn btn-two">Read More</Link>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="services__item-three">
                                        <div className="services__item-top">
                                            <div className="services__icon-three">
                                            <img src="assets/img/icon/seo.png" />
                                            </div>
                                            <div className="services__item-top-title">
                                                <h2 className="title"><Link href="/seo">SEO</Link></h2>
                                            </div>
                                        </div>
                                        <div className="services__content-three">
                                            <p>OpsOdyssey provides top search engine optimization and the one-stop solution for all SEO needs. We have helped hundreds of satisfied customers since then by using our experts for great results and increasing their visibility online.</p>
                                            <Link href="/seo" className="btn btn-two">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="services__item-three">
                                        <div className="services__item-top">
                                            <div className="services__icon-three">
                                            <img src="assets/img/icon/uiux.png" />
                                            </div>
                                            <div className="services__top-title">
                                                <h2 className="title"><Link href="/latest-ui-ux">Latest UI/UX Design</Link></h2>
                                            </div>
                                        </div>
                                        <div className="services__content-three">
                                            <p>We deliver top-quality, creative UI/UX designs and offering the best services and we serve the best there is in town. Our designs secure a smooth customer experience that will boost interaction and fulfillment with every visitor to your site.</p>
                                            <Link href="/latest-ui-ux" className="btn btn-two">Read More</Link>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="services__item-three">
                                        <div className="services__item-top">
                                            <div className="services__icon-three">
                                            <img src="assets/img/icon/code.png" />
                                            </div>
                                            <div className="services__top-title">
                                                <h2 className="title"><Link href="/web-development"> Website Development</Link></h2>
                                            </div>
                                        </div>
                                        <div className="services__content-three">
                                            <p>OpsOdyssey provides effective solutions for modern web development. Our dedicated team is fully committed to delivering optimal performance and achieving the best possible results for your business, ensuring continuous innovation and growth.</p>
                                            <Link href="/web-development" className="btn btn-two">Read More</Link>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="services__item-three">
                                        <div className="services__item-top">
                                            <div className="services__icon-three">
                                            <img src="assets/img/icon/market.png" />
                                            </div>
                                            <div className="services__top-title">
                                                <h2 className="title"><Link href="/social-media-marketing">Social Media Marketing</Link></h2>
                                            </div>
                                        </div>
                                        <div className="services__content-three">
                                            <p>OpsOdyssey offers social media marketing services for small businesses, enterprises, and multi-location companies. Whether you are a startup or a Fortune 500 Company, we have strategies to help your online presence shine.</p>
                                            <Link href="/social-media-marketing" className="btn btn-two">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="services__item-three">
                                        <div className="services__item-top">
                                            <div className="services__icon-three">
                                            <img src="assets/img/icon/scrap.png" />
                                            </div>
                                            <div className="services__top-title">
                                                <h2 className="title"><Link href="/web-scraping">Web Scraping</Link></h2>
                                            </div>
                                        </div>
                                        <div className="services__content-three">
                                            <p>OpsOdyssey offers advanced web scraping services using efficient techniques to collect, structure, and analyze data from websites with high accuracy,  provide insights according to your business needs with truly effective decisions. </p>
                                            <Link href="/web-scraping" className="btn btn-two">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="services__item-three">
                                        <div className="services__item-top">
                                            <div className="services__icon-three">
                                            <img src="assets/img/icon/devops.png" />
                                            </div>
                                            <div className="services__top-title">
                                                <h2 className="title"><Link href="/dev-ops">DevOps</Link></h2>
                                            </div>
                                        </div>
                                        <div className="services__content-three">
                                            <p>OpsOdyssey performs full-cycle DevOps services, which encompass software development and IT operations. We pay great attention to automation, Infrastructure as Code, and monitoring for fast deployment of reliable systems.</p>
                                            <Link href="/dev-ops" className="btn btn-two">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="services__item-three">
                                        <div className="services__item-top">
                                            <div className="services__icon-three">
                                            <img src="assets/img/icon/telephony.png" />
                                            </div>
                                            <div className="services__top-title">
                                                <h2 className="title"><Link href="/telephony-solutions">Telephony Solution</Link></h2>
                                            </div>
                                        </div>
                                        <div className="services__content-three">
                                            <p>OpsOdyssey provides customized business telephony solutions, including Asterisk, Vicidial, Switch, and GoAutoDial, to simplify communications.Our services utilize  cloud systems for improved connectivity and seamless customer interactions. </p>
                                            <Link href="/telephony-solutions" className="btn btn-two">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                   </section>
                   <section className="services__area-seven services__bg-seven pt-4" data-background="/assets/img/bg/h5_services_bg.jpg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="section-title text-center mb-50">
                                    <span className="sub-title">Why We Are Best?</span>
                                    <h2 className="title">Our Superior Advantage</h2>
                                    <p>At OpsOdyssey, our competitive advantages are embellished by vast experience and advanced concepts. We combine cutting-edge technology with a commitment to excellence and therefore deliver results that set new standards in the industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center gutter-24">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services__item-five">
                                    <div className="services__icon-five">
                                    <img src="/assets/img/icon/collaborate.png" />
                                        <div className="services__icon-shape">
                                            <div className="shape one">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={100} height={89} viewBox="0 0 100 89" fill="none">
                                                    <path d="M89.3997 20.1665C90.5806 21.4322 91.2497 23.0786 91.2607 24.7458C91.2717 26.4129 90.6237 27.965 89.4585 29.0627L82.7168 35.3787C83.8857 34.2836 85.4772 33.7354 87.141 33.8548C88.8049 33.9742 90.4049 34.7514 91.589 36.0153C92.7732 37.2792 93.4445 38.9265 93.4553 40.5946C93.4661 42.2627 92.8154 43.815 91.6465 44.9101L89.4391 46.9782C90.7021 46.1158 92.2814 45.7931 93.8594 46.075C95.4374 46.3569 96.897 47.2225 97.9445 48.4977C98.9919 49.7729 99.5496 51.363 99.5051 52.948C99.4607 54.5331 98.8175 55.9955 97.705 57.041L66.4218 86.3494C65.306 87.3914 63.8048 87.938 62.2202 87.8791C60.6357 87.8202 59.0853 87.1602 57.881 86.0319C56.6767 84.9037 55.908 83.3908 55.7294 81.7978C55.5509 80.2048 55.9757 78.6498 56.9185 77.4457L46.2874 87.4056C45.1185 88.5008 43.5271 89.0489 41.8632 88.9295C40.1994 88.8101 38.5994 88.033 37.4152 86.769C36.2311 85.5051 35.5598 83.8579 35.549 82.1898C35.5382 80.5217 36.1888 78.9693 37.3578 77.8742L42.5545 73.0055C41.5403 73.9509 40.2052 74.4903 38.7733 74.5334C37.3414 74.5764 35.8998 74.1205 34.6905 73.242C33.4812 72.3636 32.5777 71.1161 32.1318 69.7089C31.6858 68.3017 31.7245 66.8205 32.2413 65.5139L22.1964 74.9247C21.0275 76.0198 19.4361 76.5679 17.7722 76.4485C16.1084 76.3291 14.5084 75.552 13.3242 74.2881C12.1401 73.0241 11.4688 71.3769 11.458 69.7088C11.4472 68.0407 12.0978 66.4883 13.2667 65.3932L25.0674 54.3375C23.8985 55.4326 22.3071 55.9808 20.6432 55.8614C18.9794 55.742 17.3794 54.9649 16.1952 53.7009C15.0111 52.437 14.3398 50.7898 14.329 49.1217C14.3182 47.4536 14.9688 45.9012 16.1377 44.8061L11.4359 49.2111C10.267 50.3062 8.67555 50.8544 7.01169 50.735C5.34784 50.6156 3.74784 49.8384 2.56369 48.5745C1.37954 47.3106 0.708235 45.6633 0.697453 43.9952C0.686672 42.3271 1.3373 40.7748 2.5062 39.6797L35.5613 8.71135C36.7302 7.61624 38.3217 7.06808 39.9855 7.18747C41.6494 7.30686 43.2494 8.08401 44.4335 9.34795C45.6177 10.6119 46.289 12.2591 46.2998 13.9272C46.3105 15.5953 45.6599 17.1477 44.491 18.2428L61.4956 2.31173C62.6645 1.21663 64.2559 0.668477 65.9198 0.787863C67.5836 0.90725 69.1836 1.6844 70.3678 2.94834C71.5519 4.21229 72.2232 5.8595 72.234 7.5276C72.2448 9.19571 71.5942 10.7481 70.4253 11.8432L65.2285 16.7119C66.242 15.7657 67.5766 15.2252 69.0084 15.181C70.4403 15.1369 71.8821 15.5918 73.092 16.4694C74.3019 17.3471 75.2063 18.594 75.6532 20.001C76.1001 21.4079 76.0625 22.8893 75.5466 24.1964L80.5275 19.5299C81.699 18.4397 83.2895 17.8948 84.9518 18.014C86.6141 18.1333 88.2131 18.9071 89.3997 20.1665Z" fill="currentcolor" />
                                                </svg>
                                            </div>
                                            <div className="shape two">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" fill="none">
                                                    <path d="M7.36755 4.37738C7.36755 6.02099 6.03514 7.3534 4.39153 7.3534C2.74792 7.3534 1.41552 6.02099 1.41552 4.37738C1.41552 2.73376 2.74792 1.40136 4.39153 1.40136C6.03514 1.40136 7.36755 2.73376 7.36755 4.37738Z" stroke="currentcolor" strokeWidth="1.19041" />
                                                </svg>
                                            </div>
                                            <div className="shape three rotateme">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
                                                    <path d="M1.70898 1.73877L7.06581 7.0956M1.70898 7.0956L7.06581 1.73877" stroke="currentcolor" strokeWidth="1.92846" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="services__content-five">
                                        <h2 className="title">Integrated Solution</h2>
                                        <p>Emphasize how it can provide end-to-end solutions, from telephony systems to cloud infrastructure and DevOps practices.</p>
                                        {/* <Link href="/services-details" className="btn">Read More</Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services__item-five">
                                    <div className="services__icon-five">
                                    <img src="/assets/img/icon/reputation.png" />
                                        <div className="services__icon-shape">
                                            <div className="shape one">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={100} height={89} viewBox="0 0 100 89" fill="none">
                                                    <path d="M89.3997 20.1665C90.5806 21.4322 91.2497 23.0786 91.2607 24.7458C91.2717 26.4129 90.6237 27.965 89.4585 29.0627L82.7168 35.3787C83.8857 34.2836 85.4772 33.7354 87.141 33.8548C88.8049 33.9742 90.4049 34.7514 91.589 36.0153C92.7732 37.2792 93.4445 38.9265 93.4553 40.5946C93.4661 42.2627 92.8154 43.815 91.6465 44.9101L89.4391 46.9782C90.7021 46.1158 92.2814 45.7931 93.8594 46.075C95.4374 46.3569 96.897 47.2225 97.9445 48.4977C98.9919 49.7729 99.5496 51.363 99.5051 52.948C99.4607 54.5331 98.8175 55.9955 97.705 57.041L66.4218 86.3494C65.306 87.3914 63.8048 87.938 62.2202 87.8791C60.6357 87.8202 59.0853 87.1602 57.881 86.0319C56.6767 84.9037 55.908 83.3908 55.7294 81.7978C55.5509 80.2048 55.9757 78.6498 56.9185 77.4457L46.2874 87.4056C45.1185 88.5008 43.5271 89.0489 41.8632 88.9295C40.1994 88.8101 38.5994 88.033 37.4152 86.769C36.2311 85.5051 35.5598 83.8579 35.549 82.1898C35.5382 80.5217 36.1888 78.9693 37.3578 77.8742L42.5545 73.0055C41.5403 73.9509 40.2052 74.4903 38.7733 74.5334C37.3414 74.5764 35.8998 74.1205 34.6905 73.242C33.4812 72.3636 32.5777 71.1161 32.1318 69.7089C31.6858 68.3017 31.7245 66.8205 32.2413 65.5139L22.1964 74.9247C21.0275 76.0198 19.4361 76.5679 17.7722 76.4485C16.1084 76.3291 14.5084 75.552 13.3242 74.2881C12.1401 73.0241 11.4688 71.3769 11.458 69.7088C11.4472 68.0407 12.0978 66.4883 13.2667 65.3932L25.0674 54.3375C23.8985 55.4326 22.3071 55.9808 20.6432 55.8614C18.9794 55.742 17.3794 54.9649 16.1952 53.7009C15.0111 52.437 14.3398 50.7898 14.329 49.1217C14.3182 47.4536 14.9688 45.9012 16.1377 44.8061L11.4359 49.2111C10.267 50.3062 8.67555 50.8544 7.01169 50.735C5.34784 50.6156 3.74784 49.8384 2.56369 48.5745C1.37954 47.3106 0.708235 45.6633 0.697453 43.9952C0.686672 42.3271 1.3373 40.7748 2.5062 39.6797L35.5613 8.71135C36.7302 7.61624 38.3217 7.06808 39.9855 7.18747C41.6494 7.30686 43.2494 8.08401 44.4335 9.34795C45.6177 10.6119 46.289 12.2591 46.2998 13.9272C46.3105 15.5953 45.6599 17.1477 44.491 18.2428L61.4956 2.31173C62.6645 1.21663 64.2559 0.668477 65.9198 0.787863C67.5836 0.90725 69.1836 1.6844 70.3678 2.94834C71.5519 4.21229 72.2232 5.8595 72.234 7.5276C72.2448 9.19571 71.5942 10.7481 70.4253 11.8432L65.2285 16.7119C66.242 15.7657 67.5766 15.2252 69.0084 15.181C70.4403 15.1369 71.8821 15.5918 73.092 16.4694C74.3019 17.3471 75.2063 18.594 75.6532 20.001C76.1001 21.4079 76.0625 22.8893 75.5466 24.1964L80.5275 19.5299C81.699 18.4397 83.2895 17.8948 84.9518 18.014C86.6141 18.1333 88.2131 18.9071 89.3997 20.1665Z" fill="currentcolor" />
                                                </svg>
                                            </div>
                                            <div className="shape two">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" fill="none">
                                                    <path d="M7.36755 4.37738C7.36755 6.02099 6.03514 7.3534 4.39153 7.3534C2.74792 7.3534 1.41552 6.02099 1.41552 4.37738C1.41552 2.73376 2.74792 1.40136 4.39153 1.40136C6.03514 1.40136 7.36755 2.73376 7.36755 4.37738Z" stroke="currentcolor" strokeWidth="1.19041" />
                                                </svg>
                                            </div>
                                            <div className="shape three rotateme">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
                                                    <path d="M1.70898 1.73877L7.06581 7.0956M1.70898 7.0956L7.06581 1.73877" stroke="currentcolor" strokeWidth="1.92846" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="services__content-five">
                                        <h2 className="title">Customer Focus</h2>
                                        <p>The company is committed to knowing and understanding its clients' needs and providing them with customized solutions.</p>
                                        {/* <Link href="/services-details" className="btn">Read More</Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services__item-five">
                                    <div className="services__icon-five">
                                    <img src="/assets/img/icon/team.png" />
                                        <div className="services__icon-shape">
                                            <div className="shape one">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={100} height={89} viewBox="0 0 100 89" fill="none">
                                                    <path d="M89.3997 20.1665C90.5806 21.4322 91.2497 23.0786 91.2607 24.7458C91.2717 26.4129 90.6237 27.965 89.4585 29.0627L82.7168 35.3787C83.8857 34.2836 85.4772 33.7354 87.141 33.8548C88.8049 33.9742 90.4049 34.7514 91.589 36.0153C92.7732 37.2792 93.4445 38.9265 93.4553 40.5946C93.4661 42.2627 92.8154 43.815 91.6465 44.9101L89.4391 46.9782C90.7021 46.1158 92.2814 45.7931 93.8594 46.075C95.4374 46.3569 96.897 47.2225 97.9445 48.4977C98.9919 49.7729 99.5496 51.363 99.5051 52.948C99.4607 54.5331 98.8175 55.9955 97.705 57.041L66.4218 86.3494C65.306 87.3914 63.8048 87.938 62.2202 87.8791C60.6357 87.8202 59.0853 87.1602 57.881 86.0319C56.6767 84.9037 55.908 83.3908 55.7294 81.7978C55.5509 80.2048 55.9757 78.6498 56.9185 77.4457L46.2874 87.4056C45.1185 88.5008 43.5271 89.0489 41.8632 88.9295C40.1994 88.8101 38.5994 88.033 37.4152 86.769C36.2311 85.5051 35.5598 83.8579 35.549 82.1898C35.5382 80.5217 36.1888 78.9693 37.3578 77.8742L42.5545 73.0055C41.5403 73.9509 40.2052 74.4903 38.7733 74.5334C37.3414 74.5764 35.8998 74.1205 34.6905 73.242C33.4812 72.3636 32.5777 71.1161 32.1318 69.7089C31.6858 68.3017 31.7245 66.8205 32.2413 65.5139L22.1964 74.9247C21.0275 76.0198 19.4361 76.5679 17.7722 76.4485C16.1084 76.3291 14.5084 75.552 13.3242 74.2881C12.1401 73.0241 11.4688 71.3769 11.458 69.7088C11.4472 68.0407 12.0978 66.4883 13.2667 65.3932L25.0674 54.3375C23.8985 55.4326 22.3071 55.9808 20.6432 55.8614C18.9794 55.742 17.3794 54.9649 16.1952 53.7009C15.0111 52.437 14.3398 50.7898 14.329 49.1217C14.3182 47.4536 14.9688 45.9012 16.1377 44.8061L11.4359 49.2111C10.267 50.3062 8.67555 50.8544 7.01169 50.735C5.34784 50.6156 3.74784 49.8384 2.56369 48.5745C1.37954 47.3106 0.708235 45.6633 0.697453 43.9952C0.686672 42.3271 1.3373 40.7748 2.5062 39.6797L35.5613 8.71135C36.7302 7.61624 38.3217 7.06808 39.9855 7.18747C41.6494 7.30686 43.2494 8.08401 44.4335 9.34795C45.6177 10.6119 46.289 12.2591 46.2998 13.9272C46.3105 15.5953 45.6599 17.1477 44.491 18.2428L61.4956 2.31173C62.6645 1.21663 64.2559 0.668477 65.9198 0.787863C67.5836 0.90725 69.1836 1.6844 70.3678 2.94834C71.5519 4.21229 72.2232 5.8595 72.234 7.5276C72.2448 9.19571 71.5942 10.7481 70.4253 11.8432L65.2285 16.7119C66.242 15.7657 67.5766 15.2252 69.0084 15.181C70.4403 15.1369 71.8821 15.5918 73.092 16.4694C74.3019 17.3471 75.2063 18.594 75.6532 20.001C76.1001 21.4079 76.0625 22.8893 75.5466 24.1964L80.5275 19.5299C81.699 18.4397 83.2895 17.8948 84.9518 18.014C86.6141 18.1333 88.2131 18.9071 89.3997 20.1665Z" fill="currentcolor" />
                                                </svg>
                                            </div>
                                            <div className="shape two">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" fill="none">
                                                    <path d="M7.36755 4.37738C7.36755 6.02099 6.03514 7.3534 4.39153 7.3534C2.74792 7.3534 1.41552 6.02099 1.41552 4.37738C1.41552 2.73376 2.74792 1.40136 4.39153 1.40136C6.03514 1.40136 7.36755 2.73376 7.36755 4.37738Z" stroke="currentcolor" strokeWidth="1.19041" />
                                                </svg>
                                            </div>
                                            <div className="shape three rotateme">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
                                                    <path d="M1.70898 1.73877L7.06581 7.0956M1.70898 7.0956L7.06581 1.73877" stroke="currentcolor" strokeWidth="1.92846" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="services__content-five">
                                        <h2 className="title">Expert Team</h2>
                                        <p>The unbeatable knowledge and expertise within the team drive innovation, hence excellence and benchmarks in the industry.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services__item-five">
                                    <div className="services__icon-five">
                                    <img src="/assets/img/icon/creativity.png" />
                                        <div className="services__icon-shape">
                                            <div className="shape one">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={100} height={89} viewBox="0 0 100 89" fill="none">
                                                    <path d="M89.3997 20.1665C90.5806 21.4322 91.2497 23.0786 91.2607 24.7458C91.2717 26.4129 90.6237 27.965 89.4585 29.0627L82.7168 35.3787C83.8857 34.2836 85.4772 33.7354 87.141 33.8548C88.8049 33.9742 90.4049 34.7514 91.589 36.0153C92.7732 37.2792 93.4445 38.9265 93.4553 40.5946C93.4661 42.2627 92.8154 43.815 91.6465 44.9101L89.4391 46.9782C90.7021 46.1158 92.2814 45.7931 93.8594 46.075C95.4374 46.3569 96.897 47.2225 97.9445 48.4977C98.9919 49.7729 99.5496 51.363 99.5051 52.948C99.4607 54.5331 98.8175 55.9955 97.705 57.041L66.4218 86.3494C65.306 87.3914 63.8048 87.938 62.2202 87.8791C60.6357 87.8202 59.0853 87.1602 57.881 86.0319C56.6767 84.9037 55.908 83.3908 55.7294 81.7978C55.5509 80.2048 55.9757 78.6498 56.9185 77.4457L46.2874 87.4056C45.1185 88.5008 43.5271 89.0489 41.8632 88.9295C40.1994 88.8101 38.5994 88.033 37.4152 86.769C36.2311 85.5051 35.5598 83.8579 35.549 82.1898C35.5382 80.5217 36.1888 78.9693 37.3578 77.8742L42.5545 73.0055C41.5403 73.9509 40.2052 74.4903 38.7733 74.5334C37.3414 74.5764 35.8998 74.1205 34.6905 73.242C33.4812 72.3636 32.5777 71.1161 32.1318 69.7089C31.6858 68.3017 31.7245 66.8205 32.2413 65.5139L22.1964 74.9247C21.0275 76.0198 19.4361 76.5679 17.7722 76.4485C16.1084 76.3291 14.5084 75.552 13.3242 74.2881C12.1401 73.0241 11.4688 71.3769 11.458 69.7088C11.4472 68.0407 12.0978 66.4883 13.2667 65.3932L25.0674 54.3375C23.8985 55.4326 22.3071 55.9808 20.6432 55.8614C18.9794 55.742 17.3794 54.9649 16.1952 53.7009C15.0111 52.437 14.3398 50.7898 14.329 49.1217C14.3182 47.4536 14.9688 45.9012 16.1377 44.8061L11.4359 49.2111C10.267 50.3062 8.67555 50.8544 7.01169 50.735C5.34784 50.6156 3.74784 49.8384 2.56369 48.5745C1.37954 47.3106 0.708235 45.6633 0.697453 43.9952C0.686672 42.3271 1.3373 40.7748 2.5062 39.6797L35.5613 8.71135C36.7302 7.61624 38.3217 7.06808 39.9855 7.18747C41.6494 7.30686 43.2494 8.08401 44.4335 9.34795C45.6177 10.6119 46.289 12.2591 46.2998 13.9272C46.3105 15.5953 45.6599 17.1477 44.491 18.2428L61.4956 2.31173C62.6645 1.21663 64.2559 0.668477 65.9198 0.787863C67.5836 0.90725 69.1836 1.6844 70.3678 2.94834C71.5519 4.21229 72.2232 5.8595 72.234 7.5276C72.2448 9.19571 71.5942 10.7481 70.4253 11.8432L65.2285 16.7119C66.242 15.7657 67.5766 15.2252 69.0084 15.181C70.4403 15.1369 71.8821 15.5918 73.092 16.4694C74.3019 17.3471 75.2063 18.594 75.6532 20.001C76.1001 21.4079 76.0625 22.8893 75.5466 24.1964L80.5275 19.5299C81.699 18.4397 83.2895 17.8948 84.9518 18.014C86.6141 18.1333 88.2131 18.9071 89.3997 20.1665Z" fill="currentcolor" />
                                                </svg>
                                            </div>
                                            <div className="shape two">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" fill="none">
                                                    <path d="M7.36755 4.37738C7.36755 6.02099 6.03514 7.3534 4.39153 7.3534C2.74792 7.3534 1.41552 6.02099 1.41552 4.37738C1.41552 2.73376 2.74792 1.40136 4.39153 1.40136C6.03514 1.40136 7.36755 2.73376 7.36755 4.37738Z" stroke="currentcolor" strokeWidth="1.19041" />
                                                </svg>
                                            </div>
                                            <div className="shape three rotateme">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
                                                    <path d="M1.70898 1.73877L7.06581 7.0956M1.70898 7.0956L7.06581 1.73877" stroke="currentcolor" strokeWidth="1.92846" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="services__content-five">
                                        <h2 className="title">Versatility</h2>
                                        <p>Highlight how the company stays abreast of industry trends and evolves with new technologies and methodologies.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services__item-five">
                                    <div className="services__icon-five">
                                    <img src="/assets/img/icon/modelling.png" />
                                        <div className="services__icon-shape">
                                            <div className="shape one">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={100} height={89} viewBox="0 0 100 89" fill="none">
                                                    <path d="M89.3997 20.1665C90.5806 21.4322 91.2497 23.0786 91.2607 24.7458C91.2717 26.4129 90.6237 27.965 89.4585 29.0627L82.7168 35.3787C83.8857 34.2836 85.4772 33.7354 87.141 33.8548C88.8049 33.9742 90.4049 34.7514 91.589 36.0153C92.7732 37.2792 93.4445 38.9265 93.4553 40.5946C93.4661 42.2627 92.8154 43.815 91.6465 44.9101L89.4391 46.9782C90.7021 46.1158 92.2814 45.7931 93.8594 46.075C95.4374 46.3569 96.897 47.2225 97.9445 48.4977C98.9919 49.7729 99.5496 51.363 99.5051 52.948C99.4607 54.5331 98.8175 55.9955 97.705 57.041L66.4218 86.3494C65.306 87.3914 63.8048 87.938 62.2202 87.8791C60.6357 87.8202 59.0853 87.1602 57.881 86.0319C56.6767 84.9037 55.908 83.3908 55.7294 81.7978C55.5509 80.2048 55.9757 78.6498 56.9185 77.4457L46.2874 87.4056C45.1185 88.5008 43.5271 89.0489 41.8632 88.9295C40.1994 88.8101 38.5994 88.033 37.4152 86.769C36.2311 85.5051 35.5598 83.8579 35.549 82.1898C35.5382 80.5217 36.1888 78.9693 37.3578 77.8742L42.5545 73.0055C41.5403 73.9509 40.2052 74.4903 38.7733 74.5334C37.3414 74.5764 35.8998 74.1205 34.6905 73.242C33.4812 72.3636 32.5777 71.1161 32.1318 69.7089C31.6858 68.3017 31.7245 66.8205 32.2413 65.5139L22.1964 74.9247C21.0275 76.0198 19.4361 76.5679 17.7722 76.4485C16.1084 76.3291 14.5084 75.552 13.3242 74.2881C12.1401 73.0241 11.4688 71.3769 11.458 69.7088C11.4472 68.0407 12.0978 66.4883 13.2667 65.3932L25.0674 54.3375C23.8985 55.4326 22.3071 55.9808 20.6432 55.8614C18.9794 55.742 17.3794 54.9649 16.1952 53.7009C15.0111 52.437 14.3398 50.7898 14.329 49.1217C14.3182 47.4536 14.9688 45.9012 16.1377 44.8061L11.4359 49.2111C10.267 50.3062 8.67555 50.8544 7.01169 50.735C5.34784 50.6156 3.74784 49.8384 2.56369 48.5745C1.37954 47.3106 0.708235 45.6633 0.697453 43.9952C0.686672 42.3271 1.3373 40.7748 2.5062 39.6797L35.5613 8.71135C36.7302 7.61624 38.3217 7.06808 39.9855 7.18747C41.6494 7.30686 43.2494 8.08401 44.4335 9.34795C45.6177 10.6119 46.289 12.2591 46.2998 13.9272C46.3105 15.5953 45.6599 17.1477 44.491 18.2428L61.4956 2.31173C62.6645 1.21663 64.2559 0.668477 65.9198 0.787863C67.5836 0.90725 69.1836 1.6844 70.3678 2.94834C71.5519 4.21229 72.2232 5.8595 72.234 7.5276C72.2448 9.19571 71.5942 10.7481 70.4253 11.8432L65.2285 16.7119C66.242 15.7657 67.5766 15.2252 69.0084 15.181C70.4403 15.1369 71.8821 15.5918 73.092 16.4694C74.3019 17.3471 75.2063 18.594 75.6532 20.001C76.1001 21.4079 76.0625 22.8893 75.5466 24.1964L80.5275 19.5299C81.699 18.4397 83.2895 17.8948 84.9518 18.014C86.6141 18.1333 88.2131 18.9071 89.3997 20.1665Z" fill="currentcolor" />
                                                </svg>
                                            </div>
                                            <div className="shape two">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" fill="none">
                                                    <path d="M7.36755 4.37738C7.36755 6.02099 6.03514 7.3534 4.39153 7.3534C2.74792 7.3534 1.41552 6.02099 1.41552 4.37738C1.41552 2.73376 2.74792 1.40136 4.39153 1.40136C6.03514 1.40136 7.36755 2.73376 7.36755 4.37738Z" stroke="currentcolor" strokeWidth="1.19041" />
                                                </svg>
                                            </div>
                                            <div className="shape three rotateme">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
                                                    <path d="M1.70898 1.73877L7.06581 7.0956M1.70898 7.0956L7.06581 1.73877" stroke="currentcolor" strokeWidth="1.92846" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="services__content-five">
                                        <h2 className="title">Performance </h2>
                                        <p>Provide highly performant, responsive websites with optimized code and advanced techniques for efficient use of resources.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services__item-five">
                                    <div className="services__icon-five">
                                    <img src="/assets/img/icon/low-cost.png" />
                                        <div className="services__icon-shape">
                                            <div className="shape one">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={100} height={89} viewBox="0 0 100 89" fill="none">
                                                    <path d="M89.3997 20.1665C90.5806 21.4322 91.2497 23.0786 91.2607 24.7458C91.2717 26.4129 90.6237 27.965 89.4585 29.0627L82.7168 35.3787C83.8857 34.2836 85.4772 33.7354 87.141 33.8548C88.8049 33.9742 90.4049 34.7514 91.589 36.0153C92.7732 37.2792 93.4445 38.9265 93.4553 40.5946C93.4661 42.2627 92.8154 43.815 91.6465 44.9101L89.4391 46.9782C90.7021 46.1158 92.2814 45.7931 93.8594 46.075C95.4374 46.3569 96.897 47.2225 97.9445 48.4977C98.9919 49.7729 99.5496 51.363 99.5051 52.948C99.4607 54.5331 98.8175 55.9955 97.705 57.041L66.4218 86.3494C65.306 87.3914 63.8048 87.938 62.2202 87.8791C60.6357 87.8202 59.0853 87.1602 57.881 86.0319C56.6767 84.9037 55.908 83.3908 55.7294 81.7978C55.5509 80.2048 55.9757 78.6498 56.9185 77.4457L46.2874 87.4056C45.1185 88.5008 43.5271 89.0489 41.8632 88.9295C40.1994 88.8101 38.5994 88.033 37.4152 86.769C36.2311 85.5051 35.5598 83.8579 35.549 82.1898C35.5382 80.5217 36.1888 78.9693 37.3578 77.8742L42.5545 73.0055C41.5403 73.9509 40.2052 74.4903 38.7733 74.5334C37.3414 74.5764 35.8998 74.1205 34.6905 73.242C33.4812 72.3636 32.5777 71.1161 32.1318 69.7089C31.6858 68.3017 31.7245 66.8205 32.2413 65.5139L22.1964 74.9247C21.0275 76.0198 19.4361 76.5679 17.7722 76.4485C16.1084 76.3291 14.5084 75.552 13.3242 74.2881C12.1401 73.0241 11.4688 71.3769 11.458 69.7088C11.4472 68.0407 12.0978 66.4883 13.2667 65.3932L25.0674 54.3375C23.8985 55.4326 22.3071 55.9808 20.6432 55.8614C18.9794 55.742 17.3794 54.9649 16.1952 53.7009C15.0111 52.437 14.3398 50.7898 14.329 49.1217C14.3182 47.4536 14.9688 45.9012 16.1377 44.8061L11.4359 49.2111C10.267 50.3062 8.67555 50.8544 7.01169 50.735C5.34784 50.6156 3.74784 49.8384 2.56369 48.5745C1.37954 47.3106 0.708235 45.6633 0.697453 43.9952C0.686672 42.3271 1.3373 40.7748 2.5062 39.6797L35.5613 8.71135C36.7302 7.61624 38.3217 7.06808 39.9855 7.18747C41.6494 7.30686 43.2494 8.08401 44.4335 9.34795C45.6177 10.6119 46.289 12.2591 46.2998 13.9272C46.3105 15.5953 45.6599 17.1477 44.491 18.2428L61.4956 2.31173C62.6645 1.21663 64.2559 0.668477 65.9198 0.787863C67.5836 0.90725 69.1836 1.6844 70.3678 2.94834C71.5519 4.21229 72.2232 5.8595 72.234 7.5276C72.2448 9.19571 71.5942 10.7481 70.4253 11.8432L65.2285 16.7119C66.242 15.7657 67.5766 15.2252 69.0084 15.181C70.4403 15.1369 71.8821 15.5918 73.092 16.4694C74.3019 17.3471 75.2063 18.594 75.6532 20.001C76.1001 21.4079 76.0625 22.8893 75.5466 24.1964L80.5275 19.5299C81.699 18.4397 83.2895 17.8948 84.9518 18.014C86.6141 18.1333 88.2131 18.9071 89.3997 20.1665Z" fill="currentcolor" />
                                                </svg>
                                            </div>
                                            <div className="shape two">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" fill="none">
                                                    <path d="M7.36755 4.37738C7.36755 6.02099 6.03514 7.3534 4.39153 7.3534C2.74792 7.3534 1.41552 6.02099 1.41552 4.37738C1.41552 2.73376 2.74792 1.40136 4.39153 1.40136C6.03514 1.40136 7.36755 2.73376 7.36755 4.37738Z" stroke="currentcolor" strokeWidth="1.19041" />
                                                </svg>
                                            </div>
                                            <div className="shape three rotateme">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
                                                    <path d="M1.70898 1.73877L7.06581 7.0956M1.70898 7.0956L7.06581 1.73877" stroke="currentcolor" strokeWidth="1.92846" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="services__content-five">
                                        <h2 className="title">Cost Efficiency</h2>
                                        <p>Minimize infrastructure costs while ensuring performance and reliability through effective resource and cloud optimization.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services__item-five">
                                    <div className="services__icon-five">
                                    <img src="/assets/img/icon/dependable.png" />
                                        <div className="services__icon-shape">
                                            <div className="shape one">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={100} height={89} viewBox="0 0 100 89" fill="none">
                                                    <path d="M89.3997 20.1665C90.5806 21.4322 91.2497 23.0786 91.2607 24.7458C91.2717 26.4129 90.6237 27.965 89.4585 29.0627L82.7168 35.3787C83.8857 34.2836 85.4772 33.7354 87.141 33.8548C88.8049 33.9742 90.4049 34.7514 91.589 36.0153C92.7732 37.2792 93.4445 38.9265 93.4553 40.5946C93.4661 42.2627 92.8154 43.815 91.6465 44.9101L89.4391 46.9782C90.7021 46.1158 92.2814 45.7931 93.8594 46.075C95.4374 46.3569 96.897 47.2225 97.9445 48.4977C98.9919 49.7729 99.5496 51.363 99.5051 52.948C99.4607 54.5331 98.8175 55.9955 97.705 57.041L66.4218 86.3494C65.306 87.3914 63.8048 87.938 62.2202 87.8791C60.6357 87.8202 59.0853 87.1602 57.881 86.0319C56.6767 84.9037 55.908 83.3908 55.7294 81.7978C55.5509 80.2048 55.9757 78.6498 56.9185 77.4457L46.2874 87.4056C45.1185 88.5008 43.5271 89.0489 41.8632 88.9295C40.1994 88.8101 38.5994 88.033 37.4152 86.769C36.2311 85.5051 35.5598 83.8579 35.549 82.1898C35.5382 80.5217 36.1888 78.9693 37.3578 77.8742L42.5545 73.0055C41.5403 73.9509 40.2052 74.4903 38.7733 74.5334C37.3414 74.5764 35.8998 74.1205 34.6905 73.242C33.4812 72.3636 32.5777 71.1161 32.1318 69.7089C31.6858 68.3017 31.7245 66.8205 32.2413 65.5139L22.1964 74.9247C21.0275 76.0198 19.4361 76.5679 17.7722 76.4485C16.1084 76.3291 14.5084 75.552 13.3242 74.2881C12.1401 73.0241 11.4688 71.3769 11.458 69.7088C11.4472 68.0407 12.0978 66.4883 13.2667 65.3932L25.0674 54.3375C23.8985 55.4326 22.3071 55.9808 20.6432 55.8614C18.9794 55.742 17.3794 54.9649 16.1952 53.7009C15.0111 52.437 14.3398 50.7898 14.329 49.1217C14.3182 47.4536 14.9688 45.9012 16.1377 44.8061L11.4359 49.2111C10.267 50.3062 8.67555 50.8544 7.01169 50.735C5.34784 50.6156 3.74784 49.8384 2.56369 48.5745C1.37954 47.3106 0.708235 45.6633 0.697453 43.9952C0.686672 42.3271 1.3373 40.7748 2.5062 39.6797L35.5613 8.71135C36.7302 7.61624 38.3217 7.06808 39.9855 7.18747C41.6494 7.30686 43.2494 8.08401 44.4335 9.34795C45.6177 10.6119 46.289 12.2591 46.2998 13.9272C46.3105 15.5953 45.6599 17.1477 44.491 18.2428L61.4956 2.31173C62.6645 1.21663 64.2559 0.668477 65.9198 0.787863C67.5836 0.90725 69.1836 1.6844 70.3678 2.94834C71.5519 4.21229 72.2232 5.8595 72.234 7.5276C72.2448 9.19571 71.5942 10.7481 70.4253 11.8432L65.2285 16.7119C66.242 15.7657 67.5766 15.2252 69.0084 15.181C70.4403 15.1369 71.8821 15.5918 73.092 16.4694C74.3019 17.3471 75.2063 18.594 75.6532 20.001C76.1001 21.4079 76.0625 22.8893 75.5466 24.1964L80.5275 19.5299C81.699 18.4397 83.2895 17.8948 84.9518 18.014C86.6141 18.1333 88.2131 18.9071 89.3997 20.1665Z" fill="currentcolor" />
                                                </svg>
                                            </div>
                                            <div className="shape two">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" fill="none">
                                                    <path d="M7.36755 4.37738C7.36755 6.02099 6.03514 7.3534 4.39153 7.3534C2.74792 7.3534 1.41552 6.02099 1.41552 4.37738C1.41552 2.73376 2.74792 1.40136 4.39153 1.40136C6.03514 1.40136 7.36755 2.73376 7.36755 4.37738Z" stroke="currentcolor" strokeWidth="1.19041" />
                                                </svg>
                                            </div>
                                            <div className="shape three rotateme">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
                                                    <path d="M1.70898 1.73877L7.06581 7.0956M1.70898 7.0956L7.06581 1.73877" stroke="currentcolor" strokeWidth="1.92846" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="services__content-five">
                                        <h2 className="title">Reliability</h2>
                                        <p>Keep your web applications always up and accessible by using redundant systems, automated monitoring, and features of cloud reliability.</p>
                                        {/* <Link href="/services-details" className="btn">Read More</Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services__item-five">
                                    <div className="services__icon-five">
                                    <img src="/assets/img/icon/efficiency.png" />
                                        <div className="services__icon-shape">
                                            <div className="shape one">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={100} height={89} viewBox="0 0 100 89" fill="none">
                                                    <path d="M89.3997 20.1665C90.5806 21.4322 91.2497 23.0786 91.2607 24.7458C91.2717 26.4129 90.6237 27.965 89.4585 29.0627L82.7168 35.3787C83.8857 34.2836 85.4772 33.7354 87.141 33.8548C88.8049 33.9742 90.4049 34.7514 91.589 36.0153C92.7732 37.2792 93.4445 38.9265 93.4553 40.5946C93.4661 42.2627 92.8154 43.815 91.6465 44.9101L89.4391 46.9782C90.7021 46.1158 92.2814 45.7931 93.8594 46.075C95.4374 46.3569 96.897 47.2225 97.9445 48.4977C98.9919 49.7729 99.5496 51.363 99.5051 52.948C99.4607 54.5331 98.8175 55.9955 97.705 57.041L66.4218 86.3494C65.306 87.3914 63.8048 87.938 62.2202 87.8791C60.6357 87.8202 59.0853 87.1602 57.881 86.0319C56.6767 84.9037 55.908 83.3908 55.7294 81.7978C55.5509 80.2048 55.9757 78.6498 56.9185 77.4457L46.2874 87.4056C45.1185 88.5008 43.5271 89.0489 41.8632 88.9295C40.1994 88.8101 38.5994 88.033 37.4152 86.769C36.2311 85.5051 35.5598 83.8579 35.549 82.1898C35.5382 80.5217 36.1888 78.9693 37.3578 77.8742L42.5545 73.0055C41.5403 73.9509 40.2052 74.4903 38.7733 74.5334C37.3414 74.5764 35.8998 74.1205 34.6905 73.242C33.4812 72.3636 32.5777 71.1161 32.1318 69.7089C31.6858 68.3017 31.7245 66.8205 32.2413 65.5139L22.1964 74.9247C21.0275 76.0198 19.4361 76.5679 17.7722 76.4485C16.1084 76.3291 14.5084 75.552 13.3242 74.2881C12.1401 73.0241 11.4688 71.3769 11.458 69.7088C11.4472 68.0407 12.0978 66.4883 13.2667 65.3932L25.0674 54.3375C23.8985 55.4326 22.3071 55.9808 20.6432 55.8614C18.9794 55.742 17.3794 54.9649 16.1952 53.7009C15.0111 52.437 14.3398 50.7898 14.329 49.1217C14.3182 47.4536 14.9688 45.9012 16.1377 44.8061L11.4359 49.2111C10.267 50.3062 8.67555 50.8544 7.01169 50.735C5.34784 50.6156 3.74784 49.8384 2.56369 48.5745C1.37954 47.3106 0.708235 45.6633 0.697453 43.9952C0.686672 42.3271 1.3373 40.7748 2.5062 39.6797L35.5613 8.71135C36.7302 7.61624 38.3217 7.06808 39.9855 7.18747C41.6494 7.30686 43.2494 8.08401 44.4335 9.34795C45.6177 10.6119 46.289 12.2591 46.2998 13.9272C46.3105 15.5953 45.6599 17.1477 44.491 18.2428L61.4956 2.31173C62.6645 1.21663 64.2559 0.668477 65.9198 0.787863C67.5836 0.90725 69.1836 1.6844 70.3678 2.94834C71.5519 4.21229 72.2232 5.8595 72.234 7.5276C72.2448 9.19571 71.5942 10.7481 70.4253 11.8432L65.2285 16.7119C66.242 15.7657 67.5766 15.2252 69.0084 15.181C70.4403 15.1369 71.8821 15.5918 73.092 16.4694C74.3019 17.3471 75.2063 18.594 75.6532 20.001C76.1001 21.4079 76.0625 22.8893 75.5466 24.1964L80.5275 19.5299C81.699 18.4397 83.2895 17.8948 84.9518 18.014C86.6141 18.1333 88.2131 18.9071 89.3997 20.1665Z" fill="currentcolor" />
                                                </svg>
                                            </div>
                                            <div className="shape two">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" fill="none">
                                                    <path d="M7.36755 4.37738C7.36755 6.02099 6.03514 7.3534 4.39153 7.3534C2.74792 7.3534 1.41552 6.02099 1.41552 4.37738C1.41552 2.73376 2.74792 1.40136 4.39153 1.40136C6.03514 1.40136 7.36755 2.73376 7.36755 4.37738Z" stroke="currentcolor" strokeWidth="1.19041" />
                                                </svg>
                                            </div>
                                            <div className="shape three rotateme">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
                                                    <path d="M1.70898 1.73877L7.06581 7.0956M1.70898 7.0956L7.06581 1.73877" stroke="currentcolor" strokeWidth="1.92846" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="services__content-five">
                                        <h2 className="title">Scalability</h2>
                                        <p>Scale web applications seamlessly by using containerization technology like Docker and  Kubernetes for increased traffic.</p>
                                        {/* <Link href="/services-details" className="btn">Read More</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   </section>
                  {/* brand-area */}
                    <div className="brand__area-four ">
                        <div className="container">
                            <div className="swiper-container brand-active" >
                                <BrandActiveSlider />
                            </div>
                        </div>
                    </div>
                     {/* review-area */}
                    <Testimonial6 />
                    {/* review-area-end */}
                    {/* team-area */}
                    {/* <section className="team__area-four">
                        <div className="container">
                            <div className="row justify-content-center">
                                <d`iv className="col-lg-6">
                                    <div className="section-title text-center mb-40">
                                        <span className="sub-title">MEET OUR TEAM</span>
                                        <h2 className="title">Business Expertise Is Here <br /> For You Can Trust</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="team__item-four shine-animate-item">
                                        <div className="team__thumb-four shine-animate">
                                            <img src="/assets/img/team/h4_team_img01.jpg" alt="" />
                                        </div>
                                        <div className="team__content-four">
                                            <h2 className="title"><Link href="/team-details">Floyd Miles</Link></h2>
                                            <span>Finance Advisor</span>
                                            <div className="team__social-four">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="team__item-four shine-animate-item">
                                        <div className="team__thumb-four shine-animate">
                                            <img src="/assets/img/team/h4_team_img02.jpg" alt="" />
                                        </div>
                                        <div className="team__content-four">
                                            <h2 className="title"><Link href="/team-details">Ralph Edwards</Link></h2>
                                            <span>Finance Advisor</span>
                                            <div className="team__social-four">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="team__item-four shine-animate-item">
                                        <div className="team__thumb-four shine-animate">
                                            <img src="/assets/img/team/h4_team_img03.jpg" alt="" />
                                        </div>
                                        <div className="team__content-four">
                                            <h2 className="title"><Link href="/team-details">Eleanor Pena</Link></h2>
                                            <span>Finance Advisor</span>
                                            <div className="team__social-four">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="team__item-four shine-animate-item">
                                        <div className="team__thumb-four shine-animate">
                                            <img src="/assets/img/team/h4_team_img04.jpg" alt="" />
                                        </div>
                                        <div className="team__content-four">
                                            <h2 className="title"><Link href="/team-details">Jone Cooper</Link></h2>
                                            <span>Finance Advisor</span>
                                            <div className="team__social-four">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* team-area-end */}
                    {/* call-back-area */}
                   
                  
                    <Faqs1 />
                    <section className=" mt-40 mb-80">
                       <Callback2 />
                    </section>
                     
                </div>
            </Layout>
        </>
    )
}