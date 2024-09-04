import Faq6 from "@/components/Faq6/Faq6"
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
                                    <h2 className="title">Web Scraping</h2>
                                </div>
                                <div>
                                <p className="text-lg leading-relaxed indent-8 mb-6">Our web scraping services transform vast amounts of data into valuable insights with precision and speed.  With the team of expert developers who have expertise in extracting structured information from various websites in different domains. Our solutions are intended to cater to all complex scraping requirements while keeping data accuracy and adherence to legal regulations intact. Whether you want data for market research, competitor analysis, or trend monitoring, we render tailored solutions to meet your particular business requirements. Our services include real-time data extraction, comprehensive data cleaning, and formatting to ensure that the information you receive is actionable and ready for analysis. </p>
                                </div>
                                
                                 
                              </div>
                        </div>
                        <div className="col-lg-3 col-md-9 col-sm-10 text-end mb-35">
                                <img src="assets/img/icon/web-scrap.png" alt="" />
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
                                    <h2 className="title wow ">Why Choose OpsOdyssey For Web Scraping?</h2>
                                </div>
                               
                                    <div className="about__list-box " >
                                        <ul className="list-wrap mb-4">
                                            <li><i className="flaticon-arrow-button" />Benefit from efficient, reliable data extraction that powers your business insights.</li>
                                            <li><i className="flaticon-arrow-button" />Enjoy transparent and ongoing communication, keeping you updated on progress.</li>
                                            <li><i className="flaticon-arrow-button" />Leverage a dedicated team’s expertise to scrape data ethically and accurately.</li>
                                            
                                        </ul>
                                    </div>

                            </div>
                        </div>
                        <div className="col-lg-2 col-md-9 col-sm-10 text-end mb-35">
                            <div className="about__img-wrap3-home8">
                                <img src="assets/img/icon/web-scrap2.png" alt="" />
                                
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
                                                       <h2 className="title">Our Web Scraping Services Charter</h2>
                                                </div>
                                               
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                              <img src="assets/img/icon/custom.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Custom Web Scraping Solutions </h4>
                                                                <p>Our team creates customized web scraping solutions that will guarantee the extraction of relevant data from any website. We manage large-scale scraping ourselves by handling proxies, cookies, and CAPTCHAs to ensure smooth and uninterrupted data gathering.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                                <img src="assets/img/icon/e-com.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">E-commerce Data Scraping</h4>
                                                                <p>OpsOdyssey offers specialized e-commerce scraping services that extract product details, pricing, and reviews and even the stock level of major marketplaces. Outcompete with the best by uncovering accurate and timely data.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                            <img src="assets/img/icon/data-cleaning.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Data Cleaning and Formatting</h4>
                                                                <p>Our services go beyond scraping in that we clean and format the extracted data to ensure readiness for analysis. From JSON and CSV formats to SQL databases, we make sure that structured data is provided for easy integration.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                            <img src="assets/img/icon/market-analysis.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Market Research and Competitor Analysis</h4>
                                                                <p>OpsOdyssey provides you with such valuable information regarding market trends and competitor strategies. The web scraping tools we have enable data gathering in support of your business decisions and will keep your enterprises competitive.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                 </div>
                                            </div>
                                            </section>
                                            {/* faq start */}
                                        </div>
                                        <Faq6/>
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