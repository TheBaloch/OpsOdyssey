import Link from 'next/link'

export default function Services2() {
    return (
        <>
            <section className="services__area-two">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title white-title mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title">Why We Are The Best</span>
                                <h2 className="title tg-element-title">Unveil the Magic of Our Service Features Charter</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center gutter-24">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="services__item-two">
                                <div className="services__icon-two">
                                <img src="/assets/img/icon/collaborate.png" />                                </div>
                                <div className="services__content-two">
                                    <h2 className="title"><Link href="/services-details">Integrated Solutions</Link></h2>
                                    <p>Emphasize the ability to provide end-to-end solutions, from telephony systems to cloud infrastructure and DevOps practices.</p>
                                    <Link href="/services-details" className="btn">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="services__item-two">
                                <div className="services__icon-two">
                                <img src="/assets/img/icon/team.png" />
                                </div>
                                <div className="services__content-two">
                                    <h2 className="title"><Link href="/services-details">Expert Team</Link></h2>
                                    <p>Expert Team Driving Growth with Advanced Web Solutions,Data Insights, and Secure Platforms for 100% Client Satisfaction.</p>
                                    <Link href="/services-details" className="btn">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="services__item-two">
                                <div className="services__icon-two">
                                <img src="/assets/img/icon/reputation.png" />
                                </div>
                                <div className="services__content-two">
                                    <h2 className="title"><Link href="/services-details">Customer Focus</Link></h2>
                                    <p>Discuss the company's commitment to understanding client needs and delivering customized solutions</p>
                                    <Link href="/services-details" className="btn">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="services__item-two">
                                <div className="services__icon-two">
                                <img src="/assets/img/icon/efficiency.png" />
                                </div>
                                <div className="services__content-two">
                                    <h2 className="title"><Link href="/services-details">Performance Optimization</Link></h2>
                                    <p>Deliver fast-loading, responsive websites with optimized code and efficient resource utilization.</p>
                                    <Link href="/services-details" className="btn">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services__shape-wrap">
                    <img src="/assets/img/images/h2_services_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                    <img src="/assets/img/images/h2_services_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                </div>
            </section>
        </>
    )
}
