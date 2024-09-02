
'use client'
import { useState } from 'react'


export default function Faq3() {
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
                                    <div className="accordion wow fadeInUp" id="accordionFAQ">
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(1)}>
                                                <button className={isActive.key == 1 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                What is the difference between UI and UX design?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">UI design takes care of all the visuals while UX handles the whole experience and ease of use. Both are important to make a product successful.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(3)}>
                                                <button className={isActive.key == 3 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                How does good UI design affect my product?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">With good UI design, the product becomes more intuitive and user-engaging; it offers a good first impression to your users.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(4)}>
                                                <button className={isActive.key == 4 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                Why do I need wireframes and prototypes?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body"> They let you visualize and test the layout and functionality of your product upfront, which saves time and money by working out problems beforehand.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" onClick={() => handleClick(2)}>
                                                <button className={isActive.key == 2 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} >
                                                Why is user research so important for my project?
                                                </button>
                                            </h5>
                                            <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                <div className="accordion-body">It helps make sure that your product will meet the real needs of your users by understanding their behaviors, pain points, and preferences.</div>
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
