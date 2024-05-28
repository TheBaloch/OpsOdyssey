import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Services() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="All Services">
                <section className="services__area-five services__bg-five" data-background="/assets/img/bg/inner_services_bg02.jpg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title text-center mb-40">
                                    <span className="sub-title">WHAT WE OFFER</span>
                                    <h2 className="title">Sleek and Effective Web Development Services</h2>
                                </div>
                            </div>
                        </div>
                        <div className="services-item-wrap">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <Link href="/services-details" className="shine-animate"><img src="/assets/img/services/development.jpg" alt="" /></Link>
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <img style={{width:'20px'}} src="/assets/img/icon/code-slash-outline.svg" />
                                            </div>
                                            <h4 className="title"><Link href="/service-details">Web Design and Development</Link></h4>
                                            <p>Creating visually appealing and functional websites tailored to clients' needs.</p>
                                            <Link href="/services-details" className="btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <Link href="/services-details" className="shine-animate"><img src="/assets/img/services/responsive.jpg" alt="" /></Link>
                                        </div>
                                        <div className="services-content">
                                            <div className="icon ">
                                            <img style={{width:'20px'}} src="/assets/img/icon/id-card-outline.svg" />
                                            </div>
                                            <h4 className="title"><Link href="/service-details">Responsive Web Development</Link></h4>
                                            <p>Ensuring websites are optimized for various devices, including desktops, tablets, and smartphones.</p>
                                            <Link href="/services-details" className="btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <Link href="/services-details" className="shine-animate"><img src="/assets/img/services/cyber-monday-shopping-sales.jpg" alt="" /></Link>
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                            <img style={{width:'20px'}} src="/assets/img/icon/bag-outline.svg" />
                                            </div>
                                            <h4 className="title"><Link href="/service-details">E-commerce Development</Link></h4>
                                            <p>Building online stores with features like product catalogs, shopping carts, and secure payment gateways.</p>
                                            <Link href="/services-details" className="btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <Link href="/services-details" className="shine-animate"><img src="/assets/img/services/cms.jpg" alt="" /></Link>
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                            <img style={{width:'20px'}} src="/assets/img/icon/server-outline.svg" />
                                            </div>
                                            <h4 className="title"><Link href="/service-details">Content Management Systems (CMS) Development</Link></h4>
                                            <p> Developing custom CMS solutions or utilizing popular platforms like WordPress for easy content management.</p>
                                            <Link href="/services-details" className="btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <Link href="/services-details" className="shine-animate"><img src="/assets/img/services/custom.jpg" alt="" /></Link>
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                            <img style={{width:'20px'}} src="/assets/img/icon/color-wand-outline.svg" />
                                            </div>
                                            <h4 className="title"><Link href="/service-details">Custom Web App Development</Link></h4>
                                            <p>Building bespoke web applications to streamline business processes or deliver specific functionalities.</p>
                                            <Link href="/services-details" className="btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <Link href="/services-details" className="shine-animate"><img src="/assets/img/services/seo.jpg" alt="" /></Link>
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                            <img style={{width:'20px'}} src="/assets/img/icon/rocket-outline.svg" />
                                            </div>
                                            <h4 className="title"><Link href="/service-details">Search Engine Optimization (SEO)</Link></h4>
                                            <p>Optimizing websites to improve visibility and rankings on search engine results pages.</p>
                                            <Link href="/services-details" className="btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <Link href="/services-details" className="shine-animate"><img src="/assets/img/services/hosting.jpg" alt="" /></Link>
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                            <img style={{width:'20px'}} src="/assets/img/icon/layers-outline.svg" />
                                            </div>
                                            <h4 className="title"><Link href="/service-details">Web Hosting and Domain Services</Link></h4>
                                            <p>Providing hosting solutions and domain registration services for clients' websites.</p>
                                            <Link href="/services-details" className="btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <Link href="/services-details" className="shine-animate"><img src="/assets/img/services/maintain.jpg" alt="" /></Link>
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                            <img style={{width:'20px'}} src="/assets/img/icon/leaf-outline.svg" />
                                            </div>
                                            <h4 className="title"><Link href="/service-details">Website Maintenance and Support</Link></h4>
                                            <p>Offering ongoing maintenance, updates, and technical support for clients' websites.</p>
                                            <Link href="/services-details" className="btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}