import Link from 'next/link'

export default function About5() {
    return (
        <>
            <section className="about__area-eight">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        
                        <div className="row">
                            <div className="about__content-seven">
                                <div className="section-title mb-25">
                                    <span className="sub-title">ABOUT </span>
                                    <h2 className="title wow ">Why Choose Us?</h2>
                                </div>
                               
                                    <div className="about__list-box " >
                                        <ul className="list-wrap mb-4 ">
                                            <li><i className="flaticon-arrow-button" /> We ensure that the website is suitably optimized for SEO, performance, and usability in order to give exemplary results in visibility, speed, and user engagement.</li>
                                            <li><i className="flaticon-arrow-button" /> Our skilled developers and designers are here to provide top-quality web and mobile solutions.</li>
                                            <li><i className="flaticon-arrow-button" />We work closely with clients to understand their unique needs, ensuring every project is  customized to meet their specific requirements.</li>
                                            <li><i className="flaticon-arrow-button" />We create innovative and tailored websites that seamlessly integrate design and  functionality.</li>
                                            <li><i className="flaticon-arrow-button" />We leverage deep client satisfaction, focusing on the delivery of dynamic and responsive  solutions for business growth and enhancement of online presence.</li>
                                            
                                        </ul>
                                    </div>
                                    <Link href="/about" className="btn btn-two mt-4">Read more</Link>
                                   
                              
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
