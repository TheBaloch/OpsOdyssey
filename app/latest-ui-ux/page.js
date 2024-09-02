import Faq from "@/components/Faq/Faq"
import Faq2 from "@/components/Faq2/Faq2"
import Faq3 from "@/components/Faq3/Faq3"
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
                                    <h2 className="title">Latest UI/UX</h2>
                                </div>
                                <div>
                                <p className="text-lg leading-relaxed indent-8 mb-6">Turn your digital vision into an unforgettable experience with our UI/UX design services. Backed by an ensemble of visionary designers and user experience maestros, we merge creativity with functionality to design interfaces that intrigue and involve. We dive deep to understand your audience, blending intuitive design with bleeding edge aesthetics to create seamless and delightful interactions. The process starts from idea creation and wireframe development, goes on to professional design creation, and includes usability tests. We turn your ideas into a dynamic, user-friendly masterpiece. We don't design; we craft digital experiences that have an impact, please, and catalyze beneficial interactions between your brand and its users.</p>                          
                                </div>
                                
                                 
                              </div>
                        </div>
                        <div className="col-lg-3 col-md-9 col-sm-10 text-end mb-35">
                            <div className="about__img-wrap3-home8">
                                <img src="assets/img/icon/uiuxpage.png" alt="" />
                            </div>
                        </div>
                       </div>
                    </div>
                    </section>
                    <div className="brand__area-six mt-0 mb-5 pt-0 pb-4">
                        <div className="container">
                            <div className="pb-50">
                            <h1 className="title  ">Technology Stack</h1>
                            </div>
                            <div className="swiper-container brand-active">
                            <Tech />
                            </div>
                        </div>
                    </div>
                    <section className="about__area-four pb-0 pt-0">
                    <div className="container">
                       <div className="row align-items-center justify-content-center mt-0">
                        <div className="col-lg-10 mb-35">
                            <div className="about__content-four ">
                            <div className="section-title mb-25">
                                    <h2 className="title wow ">Why Choose OpsOdyssey for UI/UX?</h2>
                                </div>
                               
                                    <div className="about__list-box " >
                                        <ul className="list-wrap mb-4">
                                            <li><i className="flaticon-arrow-button" />We  leverage the latest trends and technologies in the development of catchy interfaces-Visually appealing and workable. </li>
                                            <li><i className="flaticon-arrow-button" /> We design user interface to reach your target audience's heart for intuitive engaging experiences.</li>
                                            <li><i className="flaticon-arrow-button" />From developing concepts to final implementation, we do full-cycle UI/UX design to round out a seamless user experience.</li>
                                            
                                        </ul>
                                    </div>

                            </div>
                        </div>
                        <div className="col-lg-2 col-md-9 col-sm-10 text-end mb-35">
                            <div className="about__img-wrap3-home8">
                                <img src="assets/img/icon/uiuxpage2.png" alt="" />
                                
                            </div>
                        </div>
                       </div>
                    </div>
                    </section>
                   
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
                                                       <h2 className="title">UI/UX Services Charter</h2>
                                                </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                                <img src="assets/img/icon/wireframe.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Wireframing and Prototyping</h4>
                                                                <p>We are good at wireframing and prototyping-creating interactive models of your product that show structure and flow. Prototyping allows for the proper visualization of ideas, testing functionality, and even gathering feedback before actual development kicks in, saving time and resources for our clients.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                            <img src="assets/img/icon/search-user.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">User Research</h4>
                                                                <p>User Research is a specialist area of OpsOdyssey, whereby in-depth insight will be gained into audiences in order to build solutions that make a dent. The specialized research methodologies align your product to meet the needs of the user and enhance its functionality and engagement.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                              <img src="assets/img/icon/uidesign.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">UI Design</h4>
                                                                <p>Our UI Design services are tailored to the development of visually appealing, intuitive interfaces that raise user interaction. Be sure your product isn't only esthetically pleasing but will also be easy to navigate for seamless user experiences.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                   
                                                   
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                               <img src="assets/img/icon/person.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Usability Testing</h4>
                                                                <p>Our Usability Testing service will make sure real users identify points of friction in order to provide actionable insights that guarantee a user-friendly and functional end product, ready to deliver a seamless and engaging experience.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                 </div>
                                            </div>
                                            </section>
                                            {/* faq start */}
                                        </div>
                                        <Faq3/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* services-details-area-end */}
                    {/* brand-area */}
                    <div className="brand__area-six mt-0 pt-0">
                        <div className="container">
                            <div className="swiper-container brand-active">
                                <BrandActiveSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}