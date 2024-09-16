import CallService from "@/components/CallService/CallService"
import Faq from "@/components/Faq/Faq"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Tech from "@/components/Tech/Tech"

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
                                    <h2 className="title">Mobile Application Development</h2>
                                </div>
                                <div>
                                <p className="text-lg leading-relaxed indent-8 mb-6">Our mobile app development service converts your idea into reality with a team of skilled developers, talented designers, and meticulous testers. We are expert services in interactive, high-performance application developments for iOS and Android platforms. Our approach focuses on delivering exceptional user experiences and leveraging innovative design principles that meet your business needs.We provide end-to-end solutions, crafted with care, from conceptualization to deployment, to drive user engagement and prop remarkable business growth. We know exactly how to understand your requirements, make intuitive interface designs, and develop robust functionalities so that an app will make it big in the competitive market.</p>                          
                                </div>
                                
                                 
                              </div>
                        </div>
                        <div className="col-lg-3 col-md-9 col-sm-10 text-end mb-35">
                            <div className="about__img-wrap3-home8">
                                <img src="assets/img/icon/appdev2.png" alt="" />
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
                                    <h2 className="title wow ">Why Choose OpsOdyssey for Mobile App Development?</h2>
                                </div>
                               
                                    <div className="about__list-box " >
                                        <ul className="list-wrap mb-4">
                                            <li><i className="flaticon-arrow-button" /> Our skilled developers and designers are here to provide top-quality web and mobile solutions.</li>
                                            <li><i className="flaticon-arrow-button" />Benefit from ongoing, transparent communication that keeps you informed at every step</li>
                                            <li><i className="flaticon-arrow-button" />Enjoy a dedicated team’s full commitment to meeting your project goals with focus and precision.</li>
                                            
                                        </ul>
                                    </div>

                            </div>
                        </div>
                        <div className="col-lg-2 col-md-9 col-sm-10 text-end mb-35">
                            <div className="about__img-wrap3-home8">
                                <img src="assets/img/icon/appdev4.png" alt="" />
                                
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
                            <Tech />
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
                                                       <h2 className="title">Our Mobile App Services Charter</h2>
                                                </div>
                                               
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                              <img src="assets/img/icon/android.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Android App Design and Development</h4>
                                                                <p>Our team of experts is one of the finest in the field of Android application development, whether on smartphones, tablets, Android TV, or Wear OS, using JAVA for Kotlin to develop robust applications.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                                <img src="assets/img/icon/ios.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">iOS Application Design and Development</h4>
                                                                <p>OpsOdyssey specializes in iOS application development; we build secure and reliable applications for Apple devices. We contrive a superior user experience from concept to launch with the use of Objective-C and Swift.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                            <img src="assets/img/icon/hybrid.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Hybrid App Design and Development</h4>
                                                                <p>We create high-quality hybrid apps using React Native, Xamarin, and Ionic with a cross-platform compatibility approach. Our development includes third-party integrations for more intuitive and interactive effects.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                               <img src="assets/img/icon/designstart.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Mobile App Strategy and Consulting</h4>
                                                                <p>Our strategy consulting services cover conceptualization to the real-world implementation of mobile applications. We begin with comprehensive market research and guide you through defining your app’s goals.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                 </div>
                                            </div>
                                            </section>
                                            {/* faq start */}
                                        </div>
                                        <CallService />
                                        <Faq/>
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