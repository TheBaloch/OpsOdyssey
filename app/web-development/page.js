import CallService from "@/components/CallService/CallService"
import Faq4 from "@/components/Faq4/Faq4"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Tech from "@/components/Tech/Tech"
import Tech3 from "@/components/Tech3/Tech3"

export default function Page() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Service Details">
                <div>
                    <section className="about__area-four pb-0">
                    <div className="container">
                       <div className="row align-items-center justify-content-center mt-0">
                        <div className="col-lg-9 mb-35">
                              <div className="about__content-four ">
                                <div className="section-title mb-30">
                                    <h2 className="title">Web Development</h2>
                                </div>
                                <div>
                                <p className="text-lg leading-relaxed indent-8 mb-6">Give your digital presence an upgrade at OpsOdyssey with the use of the latest web development services. Translating your digital dreams into reality, we merge truly innovative strategies with technical expertise. In a unique position to create robust, scalable, and high-performance websites, our team will make sure that the result is not just about attracting your audience but actually delivering tangible results. We address all web development needs effectively, right from conceptualization and design to deployment. Our comprehensive approach works towards your website being visually amazing, hence optimized for superior functionality and user experience. Building on the latest technologies and best practices.</p>                          
                                </div>
                                
                                 
                              </div>
                        </div>
                        <div className="col-lg-3 col-md-9 col-sm-10 text-end mb-35">
                            <div className="about__img-wrap3-home8">
                                <img src="assets/img/icon/web-dev.png" alt="" />
                            </div>
                        </div>
                       </div>
                    </div>
                    </section>
                    <section className="about__area-four pb-0 pt-0">
                    <div className="container">
                       <div className="row align-items-center justify-content-center mt-0">
                        <div className="col-lg-10 mb-35">
                            <div className="about__content-four ">
                            <div className="section-title mb-25">
                                    <h2 className="title wow ">Why Choose OpsOdyssey for Web Development?</h2>
                                </div>
                               
                                    <div className="about__list-box " >
                                        <ul className="list-wrap mb-4">
                                            <li><i className="flaticon-arrow-button" />We use the newest technologies and frameworks in the development of a website that is gorgeous to look at but highly functional, making sure the highest performance with great user experience is delivered. </li>
                                            <li><i className="flaticon-arrow-button" />Our development process will be tailored for your needs so we can make a website that will meet your business goals and precisely get across to your target audience for maximum effect.</li>
                                            <li><i className="flaticon-arrow-button" />We provide full-cycle web development services, from concept to going live and further maintenance, to get an efficient online solution that will support the growth of your business.</li>
                                        </ul>
                                    </div>

                            </div>
                        </div>
                        <div className="col-lg-2 col-md-9 col-sm-10 text-end mb-35">
                            <div className="about__img-wrap3-home8">
                                <img src="assets/img/icon/webdev2.png" alt="" />
                            </div>
                        </div>
                       </div>
                    </div>
                    </section>
                    <div className="brand__area-six pb-0 pt-0">
                        <div className="container">
                            <div className="pb-50">
                            <h1 className="title  ">Technology Stack</h1>
                            </div>
                            <div className="swiper-container brand-active">
                            <Tech3 />
                            </div>
                        </div>
                    </div>
                   
                    <section className="services__details-area  pt-0 mt-0 ">
                        <div className="container ">
                            <div className="services__details-wrap">
                                <div className="row">
                                    
                                    <div className=" order-0 order-lg-2">                                     
                                        <div className="services__details-content">
                                            <section>
                                                {/* <Counter2 /> */}
                                            <div className="services__details-list pt-5">
                                                <div className="row">
                                                <div className="section-title text-center mb-40 ">
                                                       <span className="sub-title">WHAT WE OFFER</span>
                                                       <h2 className="title">Web Development Services Charter</h2>
                                                </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                                <img src="assets/img/icon/customweb.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Custom Web Development</h4>
                                                                <p>We design and develop customized websites representative of your brand and business objectives. Our approach towards the development of your website is to deliver a site that meets all your requirements precisely and approach your business goals.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                            <img src="assets/img/icon/responsive-app.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Responsive Design</h4>
                                                                <p>Responsive Web Design keeps your website look and behaves seamlessly in every device and on any screen size. The main focus of our approach is to ensure the design of a user experience that seamlessly adapts into any platform, from desktops down to smartphones.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                              <img src="assets/img/icon/optimization.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Performance Optimization</h4>
                                                                <p>We optimize your website for speed and performance to ensure fast loading times and a smooth user experience. Our techniques of performance optimization improve the efficiency and effectiveness of your site, thereby contributing to higher user satisfaction and greater engagement.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                   
                                                   
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                               <img src="assets/img/icon/car.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Maintenance and Support</h4>
                                                                <p>Our ongoing maintenance and support services keep your website running effectively and safely. We implement regular updates, security checks, and technical support to ensure quick solutions to problems and the best condition of your site. We also monitor performance to continuously improve and adapt to your evolving needs.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                 </div>
                                            </div>
                                            </section>
                                            {/* faq start */}
                                        </div>
                                        <CallService />
                                        <Faq4/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* services-details-area-end */}
                    {/* brand-area */}
                    
                </div>
            </Layout>
        </>
    )
}