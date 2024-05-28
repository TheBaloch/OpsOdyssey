import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Services2() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="All Services">
                <section className="services__area-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title white-title mb-50">
                                    <span className="sub-title">Why We Are The Best</span>
                                    <h2 className="title">Unveil the Magic of Our Service Features Charter</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center gutter-24">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services__item-two">
                                    <div className="services__icon-two">
                                    <img src="/assets/img/icon/collaborate.png" />
                                    </div>
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
                                        <p>Highlight the expertise and experience of the team members.</p>
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
                                        <p>Discuss the company's commitment to understanding client needs and delivering customized solutions.</p>
                                        <Link href="/services-details" className="btn">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services__item-two">
                                    <div className="services__icon-two">
                                         <img src="/assets/img/icon/creativity.png" />
                                    </div>
                                    <div className="services__content-two">
                                        <h2 className="title"><Link href="/services-details">Innovation and Adaptability</Link></h2>
                                        <p>Showcase the company's ability to stay ahead of industry trends and adapt to new technologies and methodologies.</p>
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
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services__item-two">
                                    <div className="services__icon-two">
                                    <img src="/assets/img/icon/modelling.png" />
                                    </div>
                                    <div className="services__content-two">
                                        <h2 className="title"><Link href="/services-details">Scalability</Link></h2>
                                        <p>Scale your web applications seamlessly to accommodate growing user traffic and demand, leveraging containerization and orchestration technologies like Docker and Kubernetes.</p>
                                        <Link href="/services-details" className="btn">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services__item-two">
                                    <div className="services__icon-two">
                                    <img src="/assets/img/icon/low-cost.png" />
                                    </div>
                                    <div className="services__content-two">
                                        <h2 className="title"><Link href="/services-details">Cost-Efficiency</Link></h2>
                                        <p>Minimize infrastructure costs while maintaining performance and reliability through efficient resource management and cloud cost optimization strategies.</p>
                                        <Link href="/services-details" className="btn">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services__item-two">
                                    <div className="services__icon-two">
                                    <img src="/assets/img/icon/dependable.png" />
                                    </div>
                                    <div className="services__content-two">
                                        <h2 className="title"><Link href="/services-details">Reliability and Availability</Link></h2>
                                        <p>Ensure your web applications are always accessible and reliable with redundant systems, automated monitoring, and cloud reliability features.</p>
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
            </Layout>
        </>
    )
}