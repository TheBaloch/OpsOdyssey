
'use client'
import { useState } from 'react'


export default function Faq5() {
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
                                      <h2 className="title">Frequently asked questions</h2>
                             </div>
                                {/* <p className="tg-element-title mb-40">Our power of choice is untrammelled and when nothing preventsbeing able to do what we like best every pleasure.</p> */}
                                <div className="block-faqs">
                                    <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(5)}>
                                                <button className={isActive.key == 5 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                Why is Social Media Marketing important for my business?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">Social Media Marketing helps increase brand visibility, engage with your target audience, and drive traffic to your website, leading to more conversions and business growth.Social Media Marketing helps increase brand visibility, engage with your target audience, and drive traffic to your website, leading to more conversions and business growth.
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
                                                What platforms do you manage?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">We manage all major platforms including Facebook, Instagram, Twitter, LinkedIn, Pinterest, and more. Our services are tailored to each platform’s best practices and your target audience.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(3)}>
                                                <button className={isActive.key == 3 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                What type of content do you create?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">We create a variety of content such as images, videos, infographics, and written posts. All content is crafted to reflect your brand voice and designed to engage your audience effectively.</div>
                                            </div>
                                        </div>
                                       
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(4)}>
                                                <button className={isActive.key == 4 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                How do you handle negative comments or feedback?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">We engage professionally and tactfully with negative feedback to protect your brand image. Our team works to resolve issues and maintain a positive community atmosphere.
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
