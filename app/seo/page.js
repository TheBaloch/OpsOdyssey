import Faq2 from "@/components/Faq2/Faq2"
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
                                    <h2 className="title">Search Engine Optimisation (SEO)</h2>
                                </div>
                                <div>
                                <p className="text-lg leading-relaxed indent-8 mb-6">Give your business an online makeover with the help of our experienced SEO professionals, innovative strategists, and data-driven analysts. Our custom SEO solution works hand in hand with the objective of making your site rank among the first of the search engines. Our approach includes optimization of your site's content, technical structure, and backlink profile to drive targeted organic traffic to your website. We do not only keep up with the evolution of SEO trends but adjust our strategies proactively to suit your own needs and to make sure your search engine performance gets measurably better. The idea is to assist you even better in increasing rankings, attracting better-qualified visitors, and, eventually, encouraging sustainable growth in today's fiercely competitive digital environment.</p>                          
                                </div>
                                
                                 
                              </div>
                        </div>
                        <div className="col-lg-3 col-md-9 col-sm-10 text-end mb-35">
                            <div className="about__img-wrap3-home8">
                                <img src="assets/img/icon/seopage.png" alt="" />
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
                                    <h2 className="title wow ">Why Choose OpsOdyssey for SEO?</h2>
                                </div>
                               
                                    <div className="about__list-box " >
                                        <ul className="list-wrap mb-4">
                                            <li><i className="flaticon-arrow-button" />We use advanced techniques and experience for effective enhancement in the search engine ranking of your website.</li>
                                            <li><i className="flaticon-arrow-button" />Provide absolutely timely notifications of change so that our SEO efforts are perfectly aligned with your business goals.</li>
                                            <li><i className="flaticon-arrow-button" />Fully optimize each component of your SEO strategy to drive improved visibility and demonstrable, quantifiable outcomes.</li>
                                            
                                        </ul>
                                    </div>

                            </div>
                        </div>
                        <div className="col-lg-2 col-md-9 col-sm-10 text-end mb-35">
                            <div className="about__img-wrap3-home8">
                                <img src="assets/img/icon/seopage2.png" alt="" />
                                
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
                                                       <h2 className="title">SEO Services Charter</h2>
                                                </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                                <img src="assets/img/icon/techseo.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Technical SEO</h4>
                                                                <p>Our team takes care of all the technical elements on your site, with a focus on site speed, friendliness on mobile devices, and crawlability to ensure your website is fully optimized.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                              <img src="assets/img/icon/keyseo.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Keyword Research</h4>
                                                                <p>We do extensive research to find all the most relevant keywords and phrases your target audience is using to find your services or products, thereby driving better-qualified traffic to your site.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                   
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                            <img src="assets/img/icon/linkseo.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Link Building</h4>
                                                                <p>We design and implement strategies to achieve high-quality backlinks from authoritative sources that boost your website's authority and its search engine ranking positions.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                               <img src="assets/img/icon/audit.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">SEO Audits</h4>
                                                                <p>Full-scale SEO audits will look at your website's current performance, identify areas for improvement, and provide actionable recommendations that will help improve your SEO efforts.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                 </div>
                                            </div>
                                            </section>
                                            {/* faq start */}
                                        </div>
                                        <Faq2/>
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