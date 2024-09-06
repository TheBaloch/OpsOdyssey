import Link from 'next/link'

export default function Services2() {
    return (
        <>
            <section className="services__area-two pt-4 pb-4 ">
                <div className="container">
                    <div className="row">
                        
                            <div className="section-title title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title">Services</span>
                                <h2 className="title tg-element-title"> Our Service Charter</h2>
                            </div>
                       
                    </div>
                    <div className="row  gutter-24">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="services__item-two">
                                <div className="services__icon-two   ">
                                <img src="/assets/img/icon/v.png" />                              
                                  </div>
                                <div className="services__content-two">
                                    <h2 className="title"><Link href="mobile-app-dev">Mobile App Dev</Link></h2>
                                    <p>Crucial in today's electronic age are mobile apps. OpsOdyssey's developers design user-friendly, high-quality, and functional apps to satisfy a global audience while assuring top-class performance and wide, impacting reach for their users anywhere in the globe.</p>
                                    <Link href="mobile-app-dev" className="btn">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="services__item-two">
                                <div className="services__icon-two">
                                <img src="/assets/img/icon/d.png" />
                                </div>
                                <div className="services__content-two">
                                    <h2 className="title"><Link href="/digital-marketing">Digital Marketing</Link></h2>
                                    <p>OpsOdyssey delivers Digital Marketing services, creating simple yet powerful ideas that connect brands with audiences, driving engagement and results. We empower marketing teams to reach their full potential with impactful solutions.</p>
                                    <Link href="/digital-marketing" className="btn">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="services__item-two">
                                <div className="services__icon-two">
                                <img src="/assets/img/icon/s.png" />
                                </div>
                                <div className="services__content-two">
                                    <h2 className="title"><Link href="/seo">SEO</Link></h2>
                                    <p>OpsOdyssey provides top search engine optimization and the one-stop solution for all SEO needs. We have helped hundreds of satisfied customers since then by using our experts for great results and increasing their visibility online.</p>
                                    <Link href="/seo" className="btn">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="services__item-two">
                                <div className="services__icon-two">
                                <img src="/assets/img/icon/u.png" />
                                </div>
                                <div className="services__content-two">
                                    <h2 className="title"><Link href="/latest-ui-ux">Latest UI/UX Design</Link></h2>
                                    <p>We deliver top-quality, innovative UI/UX designs and offer the best services in town. Our designs ensure a seamless and exceptionally smooth customer experience that will significantly enhance interaction and overall satisfaction with every visitor to your site.</p>
                                    <Link href="/latest-ui-ux" className="btn">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="services__item-two">
                                <div className="services__icon-two">
                                <img src="/assets/img/icon/w.png" />
                                </div>
                                <div className="services__content-two">
                                    <h2 className="title"><Link href="/web-development">Website Development</Link></h2>
                                    <p>OpsOdyssey provides effective solutions for modern web development. Our dedicated team is fully committed to delivering optimal performance and achieving the best possible results for your business, ensuring continuous innovation and growth.</p>
                                    <Link href="/web-development" className="btn">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="services__item-two">
                                <div className="services__icon-two">
                                <img src="/assets/img/icon/sm.png" />
                                </div>
                                <div className="services__content-two">
                                    <h2 className="title"><Link href="/social-media-marketing">Social Media Marketing</Link></h2>
                                    <p>OpsOdyssey offers social media marketing services for small businesses, enterprises, and multi-location companies. Whether you are a startup or a Fortune 500 Company, we have strategies to help your online presence shine.</p>
                                    <Link href="/social-media-marketing" className="btn ">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="project-content-bottom">
                                    {/* <p>We successfully cope with tasks of varying complexity, <br /> provide long-term guarantees and regularly</p> */}
                                    <Link href="/services" className='btn' >See All Services</Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
               
            </section>
        </>
    )
}
