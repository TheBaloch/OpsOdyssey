import Faq5 from "@/components/Faq5/Faq5"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"


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
                                    <h2 className="title">Social Media Marketing</h2>
                                </div>
                                <div>
                                <p className="text-lg leading-relaxed indent-8 mb-6">Our comprehensive social media marketing services are designed to elevate your brand’s online presence, foster engagement, and drive growth across all platforms. Our expert team specializes in crafting and implementing customized strategies with particular positioning of your brand for heightened impressions and tangible growth. We merge innovative content creation with precise ad targeting for maximum engagement and reach. Our team seamlessly integrates the most up-to-date strategic approaches, coupled with data-driven intelligence, to ensure your brand's dominance in the social media landscape. From developing the overall strategy to deploying engaging campaigns and even to granular analysis, we are committed to growing your presence and nurturing genuine relationships with your audience. </p>
                                </div>
                                
                                 
                              </div>
                        </div>
                        <div className="col-lg-3 col-md-9 col-sm-10 text-end mb-35">
                                <img src="assets/img/icon/social-media.png" alt="" />
                        </div>
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
                                    <h2 className="title wow ">Why Choose OpsOdyssey For Social Media Marketing?</h2>
                                </div>
                               
                                    <div className="about__list-box " >
                                        <ul className="list-wrap mb-4">
                                            <li><i className="flaticon-arrow-button" />Get the most out of data-driven practices and innovative ways that will make your brand stand out.</li>
                                            <li><i className="flaticon-arrow-button" />Stay updated with regular insights and updates on whatever happens at each stage of your campaign.</li>
                                            <li><i className="flaticon-arrow-button" />Precise-creative, with a dedicated team that accomplishes your objectives in marketing.</li>
                                            
                                        </ul>
                                    </div>

                            </div>
                        </div>
                        <div className="col-lg-2 col-md-9 col-sm-10 text-end mb-35">
                            <div className="about__img-wrap3-home8">
                                <img src="assets/img/icon/social-media1.png" alt="" />
                                
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
                                                       <h2 className="title">Our Social Media Marketing Services Charter</h2>
                                                </div>
                                               
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                              <img src="assets/img/icon/media-strategy.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Social Media Strategy </h4>
                                                                <p>We'll create a customized strategy that fits your brand and audience. Our methodology is centered on ensuring maximum engagement and achieving your objectives. Always stay ahead with plans tuned to market trends.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                                <img src="assets/img/icon/writing.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Content Creation and Curation</h4>
                                                                <p>We design captivating visuals and compelling copy that keeps your content consistent and engaging. Our team curates posts to reflect the values of your brand, keeping your audience connected.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                            <img src="assets/img/icon/ads.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Social Media Advertising</h4>
                                                                <p>We create and run targeted ad campaigns to increase brand visibility and conversion. We ensure value-for-money performance with precision audience targeting. Let your ads reach the right people at the right time.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                            <img src="assets/img/icon/com.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Community Management</h4>
                                                                <p>We converse with your audience in real time and build lasting relationships. Our team will make sure that communication flows and resonates. Reinforce your brand's presence with active community management.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                 </div>
                                            </div>
                                            </section>
                                            {/* faq start */}
                                        </div>
                                        <Faq5/>
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