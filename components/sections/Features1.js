import Link from 'next/link'

export default function Features1() {
    return (
        <>
            <section className="features__area">
                <div className="container-fluid p-0">
                    <div className="features__item-wrap">
                        <div className="row g-0">
                            <div className="col-lg-3 col-md-6">
                                <div className="features__item">
                                    <div className="features__icon">
                                        <img src='/assets/img/icon/web-programming.png'/>
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title"><Link href="/services-details">Web Design and Development</Link></h4>
                                        <p>Designing websites that <br />marry beauty with purpose</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="features__item">
                                    <div className="features__icon">
                                    <img src='/assets/img/icon/software-development.png'/>
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title"><Link href="/services-details">Responsive Web Development</Link></h4>
                                        <p>Ensuring cross-device website optimization.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="features__item">
                                    <div className="features__icon">
                                    <img src='/assets/img/icon/shopping.png'/>
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title"><Link href="/services-details">E-commerce Development</Link></h4>
                                        <p>Developing feature-rich <br/> e-commerce solutions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="features__item">
                                    <div className="features__icon">
                                    <img src='/assets/img/icon/cms-system.png'/>
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title"><Link href="/services-details">Crafting customizable CMS</Link></h4>
                                        <p>Agilos helps youcona doing <br /> tempor incididunt.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
