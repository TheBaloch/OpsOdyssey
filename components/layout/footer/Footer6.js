import Link from "next/link"

export default function Footer6() {
    return (
        <>
            <footer>
                <div className="footer__area-two footer__area-six">
                    <div className="footer__top-two">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-6 col-md-6">
                                    <div className="footer-widget">
                                        <div className="footer__content-two">
                                            <div className="fw-logo mb-25">
                                                <Link href="/"><img src="/assets/img/logo/w-logo.png" alt="" /></Link>
                                            </div>
                                            <p className="color-white mb-40 text-justify" style={{ textAlign: 'justify' }}>At OpsOdyssey, we ensure assurance in every detail beyond mere inspection. Our commitment to precision and quality delivers reliable solutions that empower your business in today’s fast-paced digital landscape.</p>                                         
                                              <div className="footer__newsletter-four footer__newsletter-six">
                                                <p className="color-white text-subscribe">Subscribe Newsletter</p>
                                                <form action="#">
                                                    <input type="text" placeholder="e-mail Type . . ." />
                                                    <button className="btn" type="submit">Subscribe</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Information</h4>
                                        <div className="footer-link-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/services">Services</Link></li>
                                                <li><Link href="/about">About us</Link></li>
                                                <li><Link href="/contact">Contact us</Link></li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Top Links</h4>
                                        <div className="footer-link-list">
                                            <ul className="list-wrap">
                                                {/* <li><Link href="/about">How it’s Work</Link></li> */}
                                                <li><Link href="/pricing">Pricing</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom-two">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="copyright-text-two">
                                        <p>Copyright © <Link href="/">OpsOdysee</Link> | All Right Reserved</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="footer__social-two">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
