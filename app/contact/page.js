import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Contact() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Contact Us">
                <div>
                    <section className="contact__area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="contact-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27225.33888415409!2d74.25631970866681!3d31.464582044418357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015f82b0b86f%3A0x2fcaf9fdeb3d02e6!2sJohar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1724751573095!5m2!1sen!2s"   loading="lazy" ></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="contact__content">
                                        <div className="section-title mb-35">
                                            <h2 className="title">How Can We Assist You?</h2>
                                            <p>We’re here to provide you with exceptional service and support. Whether you have a question, need assistance, or want to explore our services, our team is ready to help. Reach out to us and let’s make something great together.</p>
                                        </div>
                                        <div className="contact__info">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-pin" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">Address</h4>
                                                        <p>159-J Johar Town, Lahore, Pakistan</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-phone-call" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">Phone</h4>
                                                        <Link href="tel:923004382099">+923004382099</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-mail" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">E-mail</h4>
                                                        <Link href="mailto:info@opsodyssey.com">info@opsodyssey.com</Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="contact__form-wrap">
                                        <h2 className="title">Give Us a Message</h2>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                        <form id="contact-form" action="assets/mail.php" method="POST">
                                            <div className="form-grp">
                                                <textarea name="message" placeholder="Message" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-grp">
                                                        <input type="text" name="name" placeholder="Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-grp">
                                                        <input type="email" name="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-grp">
                                                        <input type="number" name="phone" placeholder="Phone" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-grp checkbox-grp">
                                                <input type="checkbox" name="checkbox" id="checkbox" />
                                                <label htmlFor="checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
                                            </div>
                                            <button type="submit" className="btn">Submit post</button>
                                        </form>
                                        <p className="ajax-response mb-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* contact-area-end */}
                    {/* call-back-area */}
                    
                </div>
            </Layout>
        </>
    )
}