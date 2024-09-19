import CallService from "@/components/CallService/CallService"
import Faq1 from "@/components/Faq1/Faq1"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

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
                                    <h2 className="title">Digital Marketing</h2>
                                </div>
                                <div>
                                <p className="text-lg leading-relaxed indent-8 mb-6">Unlock your business's fullest potential with our handpicked team of seasoned digital marketers, innovative strategists, and data-driven experts. We offer bespoke solutions that cater to growing your brand visibility, ensuring an immense increase in user engagement and driving business growth tremendously. Be it maximizing your online presence or generating leads, we make sure your brand gets positioned to stand out in the competitive digital scenario.Our team is great at understanding your target audience, knowing what's next in marketing, and constructing a data-driven strategy that will deliver you real, measurable results across multiple touchpoints. We focus on providing impactful outcomes that enable you to connect with your customers, grow your brand, and achieve continued success.</p>                          
                                </div>
                                
                                 
                              </div>
                        </div>
                        <div className="col-lg-3 col-md-9 col-sm-10 text-end mb-35">
                            <div className="about__img-wrap3-home8">
                                <img src="assets/img/icon/digital.png" alt="" />
                            </div>
                        </div>
                       </div>
                    </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="section-title mb-25">
                                 <h2 className="title wow ">Essential Role of Skilled Digital Marketing</h2>
                            </div>
                            
                            <div className="about__content-four ">
                                <h4>Enhanced Brand Visibility</h4>
                                <p>Professional digital marketing strategies significantly increase your brand's visibility online. By optimizing for search engines and leveraging various digital channels, you ensure that your brand reaches a broader audience and stands out in a competitive market.</p>
                            </div>
                            <div className="about__content-four ">
                                <h4> Improved Customer Engagement</h4>
                                <p>Effective digital marketing creates personalized and engaging content that resonates with your target audience. This leads to higher interaction rates, stronger customer relationships, and increased brand loyalty.</p>
                            </div>
                            <div className="about__content-four ">
                                <h4>Increased Conversion Rates</h4>
                                <p>Professional digital marketing drives targeted traffic to your website or app, improving the chances of converting visitors into customers. By using data-driven insights, you can refine your strategies to boost conversion rates and achieve better results.</p>
                            </div>
                        </div>
                    </section>
                    {/* <div className="brand__area-six mt-0 mb-5 pt-0 pb-4">
                        <div className="container">
                            <div className="pb-50">
                            <h1 className="title  ">Technology Stack</h1>
                            </div>
                            <div className="swiper-container brand-active">
                            <Tech />
                            </div>
                        </div>
                    </div> */}
                    <section className="about__area-four pb-0 pt-0">
                    <div className="container">
                       <div className="row align-items-center justify-content-center mt-0">
                        <div className="col-lg-10 mb-35">
                            <div className="about__content-four ">
                            <div className="section-title mb-25">
                                    <h2 className="title wow ">Why Choose OpsOdyssey for Digital Marketing?</h2>
                                </div>
                               
                                    <div className="about__list-box " >
                                        <ul className="list-wrap mb-4">
                                            <li><i className="flaticon-arrow-button" /> Having worked on many end-to-end digital marketing campaigns, we pride ourselves on having the knowledge and expertise to effectively grow your brand with state-of-the-art techniques and strategies that will keep you at the edge in the market.</li>
                                            <li><i className="flaticon-arrow-button" />We believe in open and continuous lines of communication so that our efforts are aligned with the particular business objectives. You're kept continuously in the loop-informed in every step in the process. </li>
                                            <li><i className="flaticon-arrow-button" />The main focus of our team is to ensure that maximum conversion and ROI is achieved. Every campaign run is carefully optimized to ensure your business sees real, measurable results that actually help in contributing toward the long-term success of a business.</li>
                                            
                                        </ul>
                                    </div>

                            </div>
                        </div>
                        <div className="col-lg-2 col-md-9 col-sm-10 text-end mb-35">
                            <div className="about__img-wrap3-home8">
                                <img src="assets/img/icon/digital2.png" alt="" />
                                
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
                                                       <h2 className="title">Our Digital Marketing Services Charter</h2>
                                                </div>
                                               
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                              <img src="assets/img/icon/pp.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title"> Pay Per Click Advertising </h4>
                                                               
                                                                <p>Our PPC experts run paid campaigns across Google Ads, Bing, and social channels to optimize your ad spend for maximum ROI and ensure your ads show up in front of the right audience.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                                <img src="assets/img/icon/content.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Content Marketing</h4>
                                                                <p>We create engaging, high-quality content speaking with your audience and fueling your SEO and social media initiatives. From blogs and articles to videos and infographics-we do it all.                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                            <img src="assets/img/icon/email.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Email Marketing</h4>
                                                                <p>Our email marketing services include focused and personalized campaigns aimed at bringing leads in, creating relationships, and turning subscribers into loyal customers.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                               <img src="assets/img/icon/affiliate.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title"> Affiliate marketing</h4>
                                                                <p>We design and manage affiliate marketing programs that power a network of partners promoting your products. This includes recruitment, relationship management, and optimization to drive sales and maximize revenue.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                 </div>
                                            </div>
                                            </section>
                                            {/* faq start */}
                                        </div>
                                        <CallService />
                                        <Faq1 />
                                       
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