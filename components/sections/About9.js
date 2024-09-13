import Link from "next/link"
import CounterUp from "../elements/CounterUp"
import VideoPopup from "../elements/PopupVideo"


export default function About9() {
    return (
        <div>
            <section className="about__area-four">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 mb-35">
                            <div className="about__content-four ">
                                <div className="section-title mb-30">
                                    <span className="sub-title">Services</span>
                                    <h2 className="title">What we provide?</h2>
                                </div>

                                <div>
                                <p className="text-lg leading-relaxed indent-8 mb-6">OpsOdyssey has expert-level solutions in the domains of web and mobile development by having a robust skill set, having mastered both front-end development on React, Vue.js, and Ionic-Angular for dynamic and responsive UIs, and back-end development with PHP frameworks such as Codeigniter and Laravel, along with Node.js for scalable server-side operations. We also offer mobile development through technologies like React Native, advanced level of Next.js for performance-enhanced routing and rendering of the application, and experience in scripting languages like Python for developing small scripts, automation solutions, and web scraping for gathering critical data from various sources.</p>                               
                                </div>
                                 <div className="services-bottom-content justify-content-start">
                                    <Link href="/about" className="btn btn-two mt-1">Read More</Link>
                                    <Link href="/contact" className="link-gray">Contact Us for a Quote</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-9 col-sm-10 text-end mb-35">
                            <div className="about__img-wrap3-home8">
                                <img src="https://img.freepik.com/free-photo/man-suit-sitting-desk-working_23-2147650940.jpg?t=st=1724350602~exp=1724354202~hmac=8f7614368ec41c53ab39ec6fe05beae5aae2f915ed08be5475d67a834fdcc2eb&w=740" alt="" />
                                {/* <VideoPopup style={2} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
