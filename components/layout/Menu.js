import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="navigation">
                <li><Link href="/" >Home</Link>
                    {/* <ul className="sub-menu">
                        <li><Link href="/">01. Business</Link></li>
                        <li><Link href="/index-2">02. Finance</Link></li>
                        <li><Link href="/index-3">03. Consulting</Link></li>
                        <li><Link href="/index-4">04. Insurance</Link></li>
                        <li><Link href="/index-5">05. Digital agency</Link></li>
                        <li><Link href="/index-6">06. Finance Solutions</Link></li>
                        <li><Link href="/index-7">07. Accounting Services</Link></li>
                        <li><Link href="/index-8">08. IT Solutions</Link></li>
                    </ul> */}
                </li>
                <li className="menu-item-has-children" ><Link href="/services">Services</Link>
                    <ul className="sub-menu">
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
                </li>
                <li><Link href="/faqs">FAQs</Link>
                    {/* <ul className="sub-menu">
                        <li><Link href="/team">Team One</Link></li>
                        <li><Link href="/team-2">Team Two</Link></li>
                        <li><Link href="/team-3">Team Three</Link></li>
                        <li><Link href="/team-4">Team Four</Link></li>
                        <li><Link href="/team-details">Team Details</Link></li>
                        <li><Link href="/project-details">Project Details</Link></li>
                        <li><Link href="/error">404 Error Page</Link></li>
                        <li><Link href="/login">Login Page</Link></li>
                        <li><Link href="/register">Register Page</Link></li>
                        <li><Link href="/forgot-password">Forgot password Page</Link></li>
                    </ul> */}
                </li>
                
                <li ><Link href="/about">About Us</Link>
                    {/* <ul className="sub-menu">
                        <li><Link href="/about">Business About</Link></li>
                        <li><Link href="/about-2">Finance About</Link></li>
                        <li><Link href="/about-5">Consulting About</Link></li>
                        <li><Link href="/about-3">Insurance About</Link></li>
                        <li><Link href="/about-4">Digital agency About</Link></li>
                    </ul> */}
                </li>
               
                
                {/* <li >
                    <Link href="/blog">Blog</Link>
                </li> */}
                <li ><Link href="/contact">Contact Us</Link></li>
            </ul>
        </>
    )
}
