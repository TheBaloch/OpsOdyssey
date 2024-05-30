import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function About() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us" >
                <div>
                    <section className="about__area-four">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 col-md-9 col-sm-10">
                                    <div className="about__img-wrap-four">
                                        <img src="/assets/img/images/inner_about01.jpg" alt="" />
                                        <img src="/assets/img/images/inner_about02.jpg" alt="" />
                                        <div className="about__award-box">
                                            <div className="icon">
                                                <i className="flaticon-trophy" />
                                            </div>
                                            <div className="content">
                                                <h2 className="title">15+</h2>
                                                <p>World Best Agency <br /> Award Got</p>
                                            </div>
                                        </div>
                                        <div className="shape">
                                            <img src="/assets/img/images/inner_about_shape.jpg" alt="" className="alltuchtopdown" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about__content-four">
                                        <div className="section-title mb-30">
                                            <span className="sub-title">Simply Know About</span>
                                            <h2 className="title">Welcome to OpsOdeyssey!</h2>
                                        </div>
                                        {/* <div className="about__content-inner-three">
                                            <div className="about__list-box">
                                                <ul className="list-wrap">
                                                    <li><i className="flaticon-arrow-button" />Medicare Advantage Plans</li>
                                                    <li><i className="flaticon-arrow-button" />Analysis  Research</li>
                                                    <li><i className="flaticon-arrow-button" />100% Secure Money Back</li>
                                                </ul>
                                            </div>
                                            <div className="about__list-img-two">
                                                <img src="/assets/img/images/about_list_img02.png" alt="" />
                                            </div>
                                        </div> */}
                                        <p>We are a dedicated team of web development professionals passionate about crafting exceptional digital experiences. With a wealth of experience in both frontend and backend technologies, we deliver robust, scalable, and innovative solutions tailored to meet your business needs.</p>
                                        <Link href="/contact" className="btn">Contact With Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* about-area-end */}
                    {/* brand-area */}
                    <div className="brand__area-four">
                        <div className="container">
                            <div className="swiper-container brand-active">
                                <BrandActiveSlider />
                            </div>
                        </div>
                    </div>
                    {/* brand-area */}
                    {/* choose-area */}
                    <section className="choose__area-four">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="choose__content-four">
                                        <div className="section-title white-title mb-20">
                                            <span className="sub-title">Why We Are The Best</span>
                                            <h2 className="title">Our Experties In <br/> Web Development <br/> Set Us Apart</h2>
                                        </div>
                                        <p>At OpsOdeyssey, we fuse extensive expertise from diverse domains to craft outstanding web solutions. Our adept team harnesses cutting-edge technologies to deliver scalable, <br/> user-centric applications tailored to your needs.</p>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="choose__list-two">
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-investment" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Frontend Development</h4>
                                                        <p>React JS,Angular JS + Ionic,Next JS,Vue JS,Nuxt JS</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-financial-profit" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Backend Development</h4>
                                                        <p>Node JS, Express, PHP Laravel, Django(Python), PHP CodeIgniter</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-investment-1" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Headless CMS</h4>
                                                        <p>Strapi, Sanity, Payload</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-report" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Telephony Solutions</h4>
                                                        <p>Asterisk, Vicidial, Switch, Goauto Dial</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-investment-1" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">DevOps & System Administration</h4>
                                                        <p>Linux System Administration, Docker, Kubernetes,Hetzner Cloud and Dedicated Servers, AWS</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-investment-1" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Web Scraping</h4>
                                                        <p>Selenium</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="choose__shape-wrap-four">
                            <img src="/assets/img/images/inner_choose_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                            <img src="/assets/img/images/inner_choose_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                        </div>
                    </section>
                    {/* choose-area-end */}
                    {/* counter-area */}
                    <section className="counter-area">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="counter-item">
                                        <div className="icon">
                                            <i className="flaticon-trophy" />
                                        </div>
                                        <div className="content">
                                            <h2 className="count"><CounterUp count={45} />+</h2>
                                            <p>Successfully <br /> Completed Projects</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="counter-item">
                                        <div className="icon">
                                            <i className="flaticon-happy" />
                                        </div>
                                        <div className="content">
                                            <h2 className="count"><CounterUp count={92} />K</h2>
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
                                            <h2 className="count"><CounterUp count={19} />+</h2>
                                            <p>All Over The World <br /> We Are Available</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="counter-item">
                                        <div className="icon">
                                            <i className="flaticon-time" />
                                        </div>
                                        <div className="content">
                                            <h2 className="count"><CounterUp count={25} />+</h2>
                                            <p>Years of Experiences <br /> To Run This Company</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="counter-shape-wrap">
                            <img src="/assets/img/images/counter_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                            <img src="/assets/img/images/counter_shape02.png" alt="" data-parallax="{&quot;x&quot; : 100 , &quot;y&quot; : -100 }" />
                            <img src="/assets/img/images/counter_shape03.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                        </div>
                    </section>
                    {/* counter-area-end */}
                    {/* team-area */}
                    <section className="team__area-four">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
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
                    </section>
                    {/* team-area-end */}
                    {/* call-back-area */}
                    <section className="call-back-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="call-back-content">
                                        <div className="section-title white-title mb-10">
                                            <h2 className="title">Request A Call Back</h2>
                                        </div>
                                        <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                                        <div className="shape">
                                            <img src="/assets/img/images/call_back_shape.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="call-back-form">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="Name *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="email" placeholder="E-mail *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="number" placeholder="Phone *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="submit" className="btn">Send Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}