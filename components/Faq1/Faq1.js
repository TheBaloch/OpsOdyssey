
'use client'
import { useState } from 'react'


export default function Faq1() {
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
                                    <div className="accordion wow fadeInUp" id="accordionFAQ">
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(1)}>
                                                <button className={isActive.key == 1 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                What is digital marketing?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">Digital marketing is the practice of promoting and growing a business or brand through various online channels and strategies. It leverages the internet and electronic devices to reach and engage with potential customers.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(2)}>
                                                <button className={isActive.key == 2 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                Which digital marketing strategy is right for my business?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">The best-suited digital marketing strategy is related to your business goals, targeted audience, and budget. We will analyze your needs and create an action plan that helps us get aligned with your objectives.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(3)}>
                                                <button className={isActive.key == 3 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                How much does digital marketing cost?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">Prices can vary concerning the required service and the size of the campaign. It would be best if we provided you with quotes to meet your needs and reach your goals.</div>
                                            </div>
                                        </div>
                                       
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(4)}>
                                                <button className={isActive.key == 4 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                How long does it take to realize results from digital marketing efforts?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">Result timelines vary depending on the nature or type of marketing strategy. SEO may take about 3 to 6 months for striking results, while PPC gives immediate results.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(5)}>
                                                <button className={isActive.key == 5 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                What is PPC advertising, and how does it work?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">With PPC ads, one places adverts on search engines, among other platforms, whereby one pays when their ad is clicked upon. It is an effective means of driving targeted traffic in very little time.
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
