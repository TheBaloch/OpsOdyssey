"use client"

import Link from "next/link"
import { useState } from "react"

export default function Services4() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <section className="services__area-six services__bg-six" data-background="/assets/img/bg/h3_services_bg.jpg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title white-title mb-40 tg-heading-subheading animation-style3">
                                <span className="sub-title">WHAT WE OFFER</span>
                                <h2 className="title tg-element-title">
                                  What we do?
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-more-btn">
                                <Link href="/services" className="btn border-btn">
                                    See More Services
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="services__tab-wrap">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" onClick={() => handleOnClick(1)}>
                                        <button className={activeIndex == 1 ? "nav-link active" : "nav-link"} id="health-tab" data-bs-toggle="tab" data-bs-target="#health-tab-pane" type="button" role="tab" aria-controls="health-tab-pane" aria-selected="true">
                                            Mobile App Dev
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(2)}>
                                        <button className={activeIndex == 2 ? "nav-link active" : "nav-link"} id="travel-tab" data-bs-toggle="tab" data-bs-target="#travel-tab-pane" type="button" role="tab" aria-controls="travel-tab-pane" aria-selected="false">
                                          
                                            Digital Marketing
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(3)}>
                                        <button className={activeIndex == 3 ? "nav-link active" : "nav-link"} id="vehicle-tab" data-bs-toggle="tab" data-bs-target="#vehicle-tab-pane" type="button" role="tab" aria-controls="vehicle-tab-pane" aria-selected="false">
                                            
                                            SEO
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(4)}>
                                        <button className={activeIndex == 4 ? "nav-link active" : "nav-link"} id="cargo-tab" data-bs-toggle="tab" data-bs-target="#cargo-tab-pane" type="button" role="tab" aria-controls="cargo-tab-pane" aria-selected="false">
                                            
                                            Latest UI/UX Design
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(5)}>
                                        <button className={activeIndex == 5 ? "nav-link active" : "nav-link"} id="fire-tab" data-bs-toggle="tab" data-bs-target="#fire-tab-pane" type="button" role="tab" aria-controls="fire-tab-pane" aria-selected="false">
                                          
                                            Website Development
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(6)}>
                                        <button className={activeIndex == 6 ? "nav-link active" : "nav-link"} id="bike-tab" data-bs-toggle="tab" data-bs-target="#bike-tab-pane" type="button" role="tab" aria-controls="bike-tab-pane" aria-selected="false">
                                           
                                            Social Media Marketing
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="health-tab-pane" role="tabpanel" aria-labelledby="health-tab" tabIndex={0}>
                                        <div className="services__item-four shine-animate-item">
                                            <div className="services__thumb-four shine-animate">
                                                <img    src="/assets/img/project/mb.jpg" />
                                            </div>
                                            <div className="services__content-four">
                                                <h2 className="title">
                                                    <Link href="/services-details">Mobile App Dev</Link>
                                                </h2>
                                                <p>Crucial in today's electronic age are mobile apps. Our developers design user-friendly, high-quality, and functional apps to satisfy a global audience while assuring top-class performance and wide, impacting reach for their users anywhere in the globe.</p>
                                                {/* <div className="about__list-box">
                                                    <ul className="list-wrap">
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            Business Growth
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            Analysis Research
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            100% Secure
                                                        </li>
                                                    </ul>
                                                </div> */}
                                                <Link href="/services-details" className="btn">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="travel-tab-pane" role="tabpanel" aria-labelledby="travel-tab" tabIndex={0}>
                                        <div className="services__item-four shine-animate-item">
                                            <div className="services__thumb-four shine-animate">
                                                  <img src="/assets/img/project/digital.jpg" />
                                            </div>
                                            <div className="services__content-four">
                                                <h2 className="title">
                                                    <Link href="/services-details">Digital Marketing</Link>
                                                </h2>
                                                <p>OpsOdyssey delivers Digital Marketing services, creating simple yet powerful ideas that connect brands with audiences, driving engagement and results. We empower marketing teams to reach their full potential with impactful solutions.</p>
                                                {/* <div className="about__list-box">
                                                    <ul className="list-wrap">
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            Business Growth
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            Analysis Research
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            100% Secure
                                                        </li>
                                                    </ul>
                                                </div> */}
                                                <Link href="/services-details" className="btn">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="vehicle-tab-pane" role="tabpanel" aria-labelledby="vehicle-tab" tabIndex={0}>
                                        <div className="services__item-four shine-animate-item">
                                            <div className="services__thumb-four shine-animate">
                                                   <img   src="/assets/img/project/seo.jpg" />
                                            </div>
                                            <div className="services__content-four">
                                                <h2 className="title">
                                                    <Link href="/services-details">SEO</Link>
                                                </h2>
                                                <p>OpsOdyssey provides top search engine optimization and the one-stop solution for all SEO needs. We have helped hundreds of satisfied customers since then by using our experts for great results and increasing their visibility online.</p>
                                                {/* <div className="about__list-box">
                                                    <ul className="list-wrap">
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            Business Growth
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            Analysis Research
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            100% Secure
                                                        </li>
                                                    </ul>
                                                </div> */}
                                                <Link href="/services-details" className="btn">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="cargo-tab-pane" role="tabpanel" aria-labelledby="cargo-tab" tabIndex={0}>
                                        <div className="services__item-four shine-animate-item">
                                            <div className="services__thumb-four shine-animate">
                                                 <img  src="/assets/img/project/ui.jpg" />
                                            </div>
                                            <div className="services__content-four">
                                                <h2 className="title">
                                                    <Link href="/services-details">Latest UI/UX Design</Link>
                                                </h2>
                                                <p>We deliver top-quality, creative UI/UX designs and offering the best services and we serve the best there is in town. Our designs secure a smooth customer experience that will boost interaction and fulfillment with every visitor to your site.</p>
                                                {/* <div className="about__list-box">
                                                    <ul className="list-wrap">
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            Business Growth
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            Analysis Research
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            100% Secure
                                                        </li>
                                                    </ul>
                                                </div> */}
                                                <Link href="/services-details" className="btn">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="fire-tab-pane" role="tabpanel" aria-labelledby="fire-tab" tabIndex={0}>
                                        <div className="services__item-four shine-animate-item">
                                            <div className="services__thumb-four shine-animate">
                                                <img  src="/assets/img/project/web.jpg" />
                                            </div>
                                            <div className="services__content-four">
                                                <h2 className="title">
                                                    <Link href="/services-details">Website Development</Link>
                                                </h2>
                                                <p>OpsOdyssey provides effective solutions for modern web development. Our dedicated team is fully committed to delivering optimal performance and achieving the best possible results for your business.</p>
                                                {/* <div className="about__list-box">
                                                    <ul className="list-wrap">
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            Business Growth
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            Analysis Research
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            100% Secure
                                                        </li>
                                                    </ul>
                                                </div> */}
                                                <Link href="/services-details" className="btn">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex == 6 ? "tab-pane fade show active" : "tab-pane fade"} id="bike-tab-pane" role="tabpanel" aria-labelledby="bike-tab" tabIndex={0}>
                                        <div className="services__item-four shine-animate-item">
                                            <div className="services__thumb-four shine-animate">
                                                <img  src="/assets/img/project/social.jpg" />
                                            </div>
                                            <div className="services__content-four">
                                                <h2 className="title">
                                                    <Link href="/services-details">Social Media Marketing</Link>
                                                </h2>
                                                <p>OpsOdyssey offers social media marketing services for small businesses, enterprises, and multi-location companies. Whether you are a startup or a Fortune 500 Company, we have strategies to help your online presence shine.</p>
                                                {/* <div className="about__list-box">
                                                    <ul className="list-wrap">
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            Business Growth
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            Analysis Research
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-check" />
                                                            100% Secure
                                                        </li>
                                                    </ul>
                                                </div> */}
                                                <Link href="/services-details" className="btn">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
