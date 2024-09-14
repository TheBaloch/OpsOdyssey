import GetQuote from "@/components/GetQuote/GetQuote"
import Layout from "@/components/layout/Layout"
import LetConnect from "@/components/LetConnect/LetConnect"
import Service from "@/components/Service/Service"
import Link from "next/link"

export default function Services() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="All Services">
                     <Service />
                     <section className="call-back-area mt-20">
                       <LetConnect />
                    </section>
                    {/* <section className="services__area-four services__bg-four pt-5 " >
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
                        <div className="services__shape-wrap-two">
                            <img src="/assets/img/services/inner_services_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                            <img src="/assets/img/services/inner_services_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                        </div>
                    </section> */}
                    {/* <section className="services__area-five services__bg-five pt-0 pb-4">
                         <div className="container">
                           <div className="row justify-content-center">
                              <div className="col-xl-6 col-lg-8">
                                <div className="section-title text-center mb-40">
                                    <span className="sub-title">WHAT WE OFFER</span>
                                    <h2 className="title">Sleek and Effective Web Services</h2>
                                </div>
                            </div>
                        </div>
                        <div className="services-item-wrap">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                             <img src="/assets/img/services/development.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <img style={{width:'20px'}} src="/assets/img/icon/code-slash-outline.svg" />
                                            </div>
                                            <h4 className="title">Web Development</h4>
                                            <p>Creating visually appealing and functional websites tailored to clients' needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                           <img src="/assets/img/services/responsive.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon ">
                                            <img style={{width:'20px'}} src="/assets/img/icon/id-card-outline.svg" />
                                            </div>
                                            <h4 className="title">Responsive Design</h4>
                                            <p>Ensuring websites are optimized for various devices, including desktops, tablets, and smartphones.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/cyber-monday-shopping-sales.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                            <img style={{width:'20px'}} src="/assets/img/icon/bag-outline.svg" />
                                            </div>
                                            <h4 className="title">E-com Solutions</h4>
                                            <p>Building online stores with features like product catalogs, shopping carts, and secure payment gateways.</p>
                      
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                           <img src="/assets/img/services/cms.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                            <img style={{width:'20px'}} src="/assets/img/icon/server-outline.svg" />
                                            </div>
                                            <h4 className="title"> CMS Development</h4>
                                            <p> Developing custom CMS solutions or utilizing popular platforms like WordPress for easy content management.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                           <img src="/assets/img/services/custom.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                            <img style={{width:'20px'}} src="/assets/img/icon/color-wand-outline.svg" />
                                            </div>
                                            <h4 className="title">Custom App Solutions</h4>
                                            <p>Building bespoke web applications to streamline business processes or deliver specific functionalities.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                           <img src="/assets/img/services/seo.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                            <img style={{width:'20px'}} src="/assets/img/icon/rocket-outline.svg" />
                                            </div>
                                            <h4 className="title">SEO Optimization</h4>
                                            <p>Optimizing websites to improve visibility and rankings on search engine results pages.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                           <img src="/assets/img/services/hosting.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                            <img style={{width:'20px'}} src="/assets/img/icon/layers-outline.svg" />
                                            </div>
                                            <h4 className="title">Web Hosting</h4>
                                            <p>Providing hosting solutions and domain registration services for clients' websites.</p>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                          <img src="/assets/img/services/maintain.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                            <img style={{width:'20px'}} src="/assets/img/icon/leaf-outline.svg" />
                                            </div>
                                            <h4 className="title">Website Maintenance and Support</h4>
                                            <p>Offering ongoing maintenance, updates, and technical support for clients' websites.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section> */}
                  
            </Layout>
        </>
    )
}