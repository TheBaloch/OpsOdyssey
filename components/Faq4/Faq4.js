
'use client'
import { useState } from 'react'


export default function Faq4() {
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
                                                What is the difference between a website and a web app?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">A website primarily provides information and is mostly static, while a web app is interactive and performs specific tasks, often requiring user input and authentication. Web apps function similarly to desktop applications but are accessed via a web browser.
                                                </div>
                                            </div>
                                    </div>
                                    <div className="accordion wow fadeInUp" id="accordionFAQ">
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(1)}>
                                                <button className={isActive.key == 1 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                Will my website be optimized for search engines (SEO)?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">Yes, we follow best practices in SEO to help improve your website's visibility and ranking on search engines by optimizing site structure, content, and metadata. </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(2)}>
                                                <button className={isActive.key == 2 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                Can I update my website content myself?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">Yes, we can install a content management system that will definitely make it easy for you to update and manage your website content without requiring technical expertise.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(3)}>
                                                <button className={isActive.key == 3 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                What happens if something goes wrong with my website?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">We also provide continuous support and maintenance to ensure that bugs or any other issues are resolved as soon as possible. The work may involve troubleshooting and resolving current problems to keep your site up and running.</div>
                                            </div>
                                        </div>
                                       
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(4)}>
                                                <button className={isActive.key == 4 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                How will you make my website secure?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">We adhere to the best practices for web security, such as keeping updated regularly, checking for security, and other secure ways of coding to keep your site safe from potential vulnerabilities and threats.
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
