import CallService from "@/components/CallService/CallService"
import Faq8 from "@/components/Faq8/Faq8"
import Layout from "@/components/layout/Layout"
import Tech6 from "@/components/Tech6/Tech6"

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
                                    <h2 className="title">Telephony Solutions</h2>
                                </div>
                                <div>
                                <p className="text-lg leading-relaxed indent-8 mb-6">Our telephony solutions are specifically designed to optimize and modernize your company's communication systems. Supported by a highly skilled team of engineers and developers, we offer scalable and interactive services across VoIP, cloud telephony, and traditional PBX systems. Reliability and seamless integration are at the core of our offerings, utilizing the latest technologies to create robust communication infrastructures. Whether for a small business or a large enterprise, our all-inclusive telephony solutions ensure crystal-clear voice quality, boost organizational productivity, reduce operational costs, and keep your business connected efficiently and effectively.</p>
                                </div>
                                
                                 
                              </div>
                        </div>
                        <div className="col-lg-3 col-md-9 col-sm-10 text-end mb-35">
                                <img src="assets/img/icon/telephone.png" alt="" />
                        </div>
                       </div>
                    </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="section-title mb-25">
                                 <h2 className="title wow ">Essential Role of skilled Telephony Solutions</h2>
                            </div>
                            
                            <div className="about__content-four ">
                                <h4>Enhanced Communication Efficiency</h4>
                                <p>Professional telephony solutions streamline communication processes by integrating advanced features such as call routing, voicemail, and conferencing. This efficiency improves internal communication and customer interactions, leading to faster resolution of issues and better service.</p>
                            </div>
                            <div className="about__content-four ">
                                <h4>Improved Customer Experience</h4>
                                <p>With features like automated attendants, call queues, and CRM integration, professional telephony solutions enhance the customer experience. These features ensure that calls are handled promptly and effectively, leading to higher customer satisfaction and loyalty.</p>
                            </div>
                            <div className="about__content-four ">
                                <h4>Enhanced Flexibility and Mobility</h4>
                                <p>Modern telephony solutions support remote work and mobile access, allowing employees to stay connected from anywhere. This flexibility enhances productivity and ensures that communication remains uninterrupted, regardless of location.</p>
                            </div>
                        </div>
                    </section>
                    <section className="about__area-four pb-0 pt-0">
                    <div className="container">
                       <div className="row align-items-center justify-content-center mt-0">
                        <div className="col-lg-10 mb-35">
                            <div className="about__content-four ">
                            <div className="section-title mb-25">
                                    <h2 className="title wow ">Why Choose OpsOdyssey For Telephony Solution?</h2>
                                </div>
                               
                                    <div className="about__list-box " >
                                        <ul className="list-wrap mb-4">
                                            <li><i className="flaticon-arrow-button" />Rely on our skilled engineers for innovative telephony solutions customized to your business needs.</li>
                                            <li><i className="flaticon-arrow-button" />Benefit from transparent and consistent communication throughout the project lifecycle.</li>
                                            <li><i className="flaticon-arrow-button" />Enjoy a dedicated team’s focus on delivering high-performance, secure, and scalable telephony systems.</li>
                                            
                                        </ul>
                                    </div>

                            </div>
                        </div>
                        <div className="col-lg-2 col-md-9 col-sm-10 text-end mb-35">
                            <div className="about__img-wrap3-home8">
                                <img src="assets/img/icon/communication.png" alt="" />
                                
                            </div>
                        </div>
                       </div>
                    </div>
                    </section>
                    <div className="brand__area-six pt-0 pb-0">
                        <div className="container">
                            <div className="pb-50">
                            <h1 className="title  ">Technology Stack</h1>
                            </div>
                            <div className="swiper-container brand-active">
                            <Tech6 />
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
                                                       <h2 className="title">Our Telephony Solution Services Charter</h2>
                                                </div>
                                               
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                              <img src="assets/img/icon/voip.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">VoIP Design and Implementation</h4>
                                                                <p>We offer end-to-end VoIP services-from design and setup to deployment and maintenance. Using leading technologies, we ensure that the voice is across different platforms with seamless communication and with various added features of call management. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                            <img src="assets/img/icon/cloud.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Cloud Telephony Solutions</h4>
                                                                <p>OpsOdyssey specializes in cloud-based telephony systems, offering flexible, scalable solutions for businesses of any size. Our cloud telephony services assure superior uptime, security, and are easy to integrate with other business tools.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                                <img src="assets/img/icon/phone.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Traditional PBX Systems</h4>
                                                                <p>We provide solid, traditional PBX solutions to businesses that need their own on-premise telephony infrastructure. Our services encompass the reliability of call routing and management, with more functionality in regard to your specific needs.  </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                            <img src="assets/img/icon/telephonestrat.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Telephony Strategy and Consulting</h4>
                                                                <p>We also provide strategy consulting with a view to defining the best possible telephony solution for your business. We offer analysis of your currently deployed systems and advise on upgrades or fresh installations so you realize optimal communication efficiency.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                 </div>
                                            </div>
                                            </section>
                                            {/* faq start */}
                                        </div>
                                        <CallService />
                                        <Faq8/>
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