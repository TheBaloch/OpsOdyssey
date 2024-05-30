'use client'
import { useState } from "react"

export default function Choose2() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <section className="choose__area-two">
                <div className="choose__bg" data-background="/assets/img/bg/modern.jpg" />
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-8 col-md-10">
                            <div className="choose__content-two">
                                <div className="section-title mb-20 tg-heading-subheading animation-style3">
                                    <span className="sub-title">Why Choose Our Services</span>
                                    <h2 className="title tg-element-title">Transforming your imagination into stunning reality.</h2>
                                </div>
                                <p>We tackle projects of all complexities with ease, offering reliable, long-lasting solutions and always staying ahead with the latest innovations. Our portfolio is filled with diverse and successful projects, each supported by our solid guarantees.</p>
                                <div className="choose__tab">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item"  onClick={() => handleOnClick (1)}>
                                            <button className={activeIndex == 1 ? "nav-link active" : "nav-link"} id="goal-tab" data-bs-toggle="tab" data-bs-target="#goal-tab-pane" type="button" role="tab" aria-controls="goal-tab-pane" aria-selected="true">Proficiency</button>
                                        </li>
                                        <li className="nav-item"  onClick={() => handleOnClick (2)}>
                                            <button className={activeIndex == 2 ? "nav-link active" : "nav-link"} id="management-tab" data-bs-toggle="tab" data-bs-target="#management-tab-pane" type="button" role="tab" aria-controls="management-tab-pane" aria-selected="false">Trustworthiness</button>
                                        </li>
                                        <li className="nav-item"  onClick={() => handleOnClick (3)}>
                                            <button className={activeIndex == 3 ? "nav-link active" : "nav-link"} id="management-tab" data-bs-toggle="tab" data-bs-target="#management-tab-pane" type="button" role="tab" aria-controls="management-tab-pane" aria-selected="false"> Established Reputation</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="goal-tab-pane" role="tabpanel" aria-labelledby="goal-tab" tabIndex={0}>
                                            <div className="choose__tab-content">
                                                <p>With over a decade of experience, our team demonstrates mastery in cutting-edge technologies like React, Node.js, and AWS. We personalize our solutions to fit your distinct business needs, ensuring they harmonize seamlessly with your objectives.</p>
                                                <ul className="list-wrap">
                                                    <li><i className="fas fa-check" />Years of Expertise</li>
                                                    <li><i className="fas fa-check" />Cutting-Edge Technologies</li>
                                                    <li><i className="fas fa-check" />Robust Skill Set</li>
                                                    <li><i className="fas fa-check" />Continuous Learning</li>
                                              
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="management-tab-pane" role="tabpanel" aria-labelledby="management-tab" tabIndex={0}>
                                            <div className="choose__tab-content">
                                                <p>We deliver top-tier, dependable web solutions. Our stringent quality assurance processes ensure that each project meets the highest standards, guaranteeing seamless performance and enduring results.</p>
                                                <ul className="list-wrap">
                                                    <li><i className="fas fa-check" />Reliable Solutions</li>
                                                    <li><i className="fas fa-check" />Transparent Communication</li>
                                                    <li><i className="fas fa-check" />Consistent Delivery</li>
                                                    <li><i className="fas fa-check" />Proven Track Record</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="goal-tab-pane" role="tabpanel" aria-labelledby="goal-tab" tabIndex={0}>
                                            <div className="choose__tab-content">
                                                <p>Client-centric dedication ensures seamless collaboration and transparent communication. We provide ongoing support, backed by a diverse portfolio and glowing testimonials, demonstrating our ability to drive business success.</p>
                                                <ul className="list-wrap">
                                                    <li><i className="fas fa-check" />Proven Success</li>
                                                    <li><i className="fas fa-check" />Consistent Excellence</li>
                                                    <li><i className="fas fa-check" />Positive Feedback</li>
                                                    <li><i className="fas fa-check" />Industry Recognition</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="operating__box">
                                    <div className="icon">
                                        <i className="fas fa-globe" />
                                    </div>
                                    <div className="content">
                                        <p>Global project experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="choose__shape-wrap-two">
                    <img src="/assets/img/images/h2_choose_shape01.png" alt="" data-parallax="{&quot;x&quot; : -80 , &quot;y&quot; : 80 , &quot;rotateZ&quot;:80}" />
                    <img src="/assets/img/images/h2_choose_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                </div>
            </section>
        </>
    )
}
