
'use client'
import { useState } from 'react'


export default function Faq6() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section className="faqs__area-six pb-4 pt-5">
                <div className="circle" data-parallax="{&quot;x&quot; : 100 , &quot;y&quot; : 100 }" />
                <div className="container">
                    <div className="row align-items-center">         
                            <div className="box-faq-right">
                            <div className="section-title text-center mb-40">
                                     <span className="sub-title">FAQS</span>
                                      <h2 className="title">Frequently Asked Questions</h2>
                             </div>
                                {/* <p className="tg-element-title mb-40">Our power of choice is untrammelled and when nothing preventsbeing able to do what we like best every pleasure.</p> */}
                                <div className="block-faqs">
                                    <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(5)}>
                                                <button className={isActive.key == 5 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                Are your web scraping services legal?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">Yes, we scrape ethically; hence, we make sure that it complies with the website's terms of service and data privacy regulations.
                                                </div>
                                            </div>
                                    </div>
                                    <div className="accordion wow fadeInUp" id="accordionFAQ">
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(1)}>
                                                <button className={isActive.key == 1 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                How do you create a social media strategy?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">We analyze your brand, audience, and market trends to develop a tailored strategy. This includes platform selection, content planning, and engagement methods designed to achieve your business goals.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(2)}>
                                                <button className={isActive.key == 2 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                What type of websites are scrapable?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">We can scrape e-commerce sites, news, social networks, and even financial data sources. </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(3)}>
                                                <button className={isActive.key == 3 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                How does Web Scraping work?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">Web scraping works by the extraction of specific data from websites with the help of automated tools or scripts that follow processes, clean, and organize data.</div>
                                            </div>
                                        </div>
                                       
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(4)}>
                                                <button className={isActive.key == 4 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                How much does Web Scraping Cost?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">The cost will vary based on project and data complexity, volume, and frequency. Contact us for your custom quote.
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </section>

        </ >
    )
}
