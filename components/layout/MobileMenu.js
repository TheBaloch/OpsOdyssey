import Link from "next/link"
import { useState } from "react"

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
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
            <ul className="navigation">
                <li><Link href="#">Home</Link>
                    {/* <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link href="/">01. Business</Link></li>
                        <li><Link href="index-2">02. Finance</Link></li>
                        <li><Link href="index-3">03. Consulting</Link></li>
                        <li><Link href="index-4">04. Insurance</Link></li>
                        <li><Link href="index-5">05. Digital agency</Link></li>
                        <li><Link href="/index-6">06. Finance Solutions</Link></li>
                        <li><Link href="/index-7">07. Accounting Services</Link></li>
                        <li><Link href="/index-8">08. IT Solutions</Link></li>
                    </ul> */}
                  </li>
                  
                  <li className="menu-item-has-children"><Link href="services">Services</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        
                        <li><Link href="/web-development">Website Dev</Link></li>
                        <li><Link href="/mobile-app-dev">Mobile App Dev</Link></li>
                        <li><Link href="/digital-marketing">Digital Marketing</Link></li>
                        <li><Link href="/seo">SEO</Link></li>
                        <li><Link href="/latest-ui-ux">Latest UI/UX</Link></li>
                        <li><Link href="/social-media-marketing">Social Media Marketing</Link></li>
                        <li><Link href="/web-scraping">Web Scraping</Link></li>
                        <li><Link href="/dev-ops">DevOps</Link></li>
                        <li><Link href="/telephony-solutions">Telephony Solutions</Link></li>

                    </ul>
                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="plus-line" /></div>
                    </li>
                    <li ><Link href="/faqs">FAQs</Link>
                    {/* <ul className="sub-menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <li><Link href="team">Team One</Link></li>
                        <li><Link href="team-2">Team Two</Link></li>
                        <li><Link href="team-3">Team Three</Link></li>
                        <li><Link href="team-4">Team Four</Link></li>
                        <li><Link href="team-details">Team Details</Link></li>
                        <li><Link href="project-details">Project Details</Link></li>
                        <li><Link href="error">404 Error Page</Link></li>
                        <li><Link href="/login">Login Page</Link></li>
                        <li><Link href="/register">Register Page</Link></li>
                        <li><Link href="/forgot-password">Forgot password Page</Link></li>
                    </ul> */}
                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="plus-line" /></div>
                </li>
                <li className="menu-item-has-children"><Link href="about">About Us</Link>
                    {/* <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link href="about">Business About</Link></li>
                        <li><Link href="about-2">Finance About</Link></li>
                        <li><Link href="about-5">Consulting About</Link></li>
                        <li><Link href="about-3">Insurance About</Link></li>
                        <li><Link href="about-4">Digital agency About</Link></li>
                    </ul> */}
                    </li>
                
{/*                   
                <li className="menu-item-has-children"><Link href="#">Blog</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                        <li><Link href="blog">Our Blog</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="plus-line" /></div>
                </li> */}
                <li><Link href="/contact">contacts</Link></li>
            </ul>
        </>
    )
}
