import CallService from "@/components/CallService/CallService"
import Faq7 from "@/components/Faq7/Faq7"
import Layout from "@/components/layout/Layout"
import Tech5 from "@/components/Tech5/Tech5"

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
                                    <h2 className="title">DevOps</h2>
                                </div>
                                <div>
                                <p className="text-lg leading-relaxed indent-8 mb-6">Our DevOps services streamline your development and operations, making your IT infrastructure run smoothly and efficiently. Our skilled DevOps engineers use the latest tools and techniques to ensure seamless team collaboration, automated workflows, and continuous integration and delivery. We focus on optimizing your software development process for faster deployments and reliable system performance. From initial setup to ongoing support, we provide complete solutions designed to enhance your operations and support your growth.</p>
                                </div>
                                
                                 
                              </div>
                        </div>
                        <div className="col-lg-3 col-md-9 col-sm-10 text-end mb-35">
                                <img src="assets/img/icon/devopspage.png" alt="" />
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
                                    <h2 className="title wow ">Why Choose OpsOdyssey For DevOps?</h2>
                                </div>
                               
                                    <div className="about__list-box " >
                                        <ul className="list-wrap mb-4">
                                            <li><i className="flaticon-arrow-button" />Benefit from our deep expertise in automating and optimizing your development and operations process. </li>
                                            <li><i className="flaticon-arrow-button" />Enjoy transparent and continuous communication, keeping you updated on progress and performance.</li>
                                            <li><i className="flaticon-arrow-button" />Leverage our dedicated team’s focus on delivering reliable, scalable, and efficient DevOps solutions tailored to your business needs.</li>
                                            
                                        </ul>
                                    </div>

                            </div>
                        </div>
                        <div className="col-lg-2 col-md-9 col-sm-10 text-end mb-35">
                            <div className="about__img-wrap3-home8">
                                <img src="assets/img/icon/coding.png" alt="" />
                                
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
                            <Tech5 />
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
                                                       <h2 className="title">Our Web Scraping Services Charter</h2>
                                                </div>
                                               
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                              <img src="assets/img/icon/integration.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Continuous Integration and Delivery </h4>
                                                                <p>We design and implement robust CI/CD pipelines for automating the testing, integration, and deployment processes to enable the quick delivery of quality software with minimal manual interference.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                            <img src="assets/img/icon/container.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Containerization and Orchestration</h4>
                                                                <p>Containerization with Docker and Orchestration with Kubernetes is our area of specialization. We make sure deployment, scaling, and management of your applications run seamlessly in whatever environment.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                                <img src="assets/img/icon/infrastructure.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Infrastructure Automation</h4>
                                                                <p>At CloudSaves, our team leverages IaC tools like Terraform and Ansible to automate the provisioning of your IT infrastructure. This way, we assure consistent and repeatable environments that improve operational efficiency.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                            <img src="assets/img/icon/monitor.png" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Monitoring and Performance Optimization</h4>
                                                                <p>We set up extensive monitoring and logging in order to observe system performance, ensure early detection of problems, and optimization of resources. Tools such as Prometheus and the ELK Stack provide insights that, when actionable, help us maintain system reliability.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                 </div>
                                            </div>
                                            </section>
                                            {/* faq start */}
                                        </div>
                                        <CallService />
                                        <Faq7/>
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