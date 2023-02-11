import './footer.component.styles.css';
import {Link} from 'react-router-dom';
import Button from '../../components/button/button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare,  faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';





const Footer = () => {
    return (
        <div>
        <div className='footer-up'>
        <div>
        <span className='total'>TOTAL</span>
        <span className='beauty'>BEAUTY</span>
        <span className='affairs'>AFFAIRS</span>
        </div>
        <div>
        <p className='updates'>Get new updates</p>
        <p className='subscribe'>Subscribe to our newsletter to get updates on our latest offers!</p>
        </div>
        <div  className='sub-con'>
        <input  classNAme="eml" type="email" placeholder="Enter your email address" required />
        <Button children="Subscribe" buttonType="footer" />
        </div>
        </div>

        <div className='footer'>

            <div className='footer-items'>
                <div  className='footer-logo-col'>
                    <div className=''>
                    <p className='connect'>Connect With us</p>
                    <div className='footer-icons'>
                    <FontAwesomeIcon className='facebook' icon={faFacebook} size="2x" />
                    <FontAwesomeIcon className='insta' icon={faInstagramSquare} size="2x"  />
                    <FontAwesomeIcon className='twitter' icon={faTwitter}  size="2x" />
                    <FontAwesomeIcon className='whatsapp' icon={faWhatsapp} size="2x"  />
                    </div>
                    </div>
                    <p className='copyright'>Copyright &copy; 2023 by CoralClouds, Inc. All rights reserved.</p>
                </div>
                <div>
                    <p className='footer-heading'>Contact us</p>
                    <address className='contacts'>
                    <p className='address'>623 Harrison St., 3rd Floor, San Francisco, CA 94107</p>
                    <p>
                    <Link className='footer-link' to="tel:234-201-777">234-201-777</Link>
                    <br />
                    <Link className='footer-link' to="mailto:shopHere@gmail.com">shopHere@gmail.com</Link>
                    </p>
                    </address>
                    
                </div>
                <div>
                    <p className='footer-heading'>About TBA</p>
                        <ul className='footer-links'>
                        <Link className='footer-link' to="/about-us">About Us</Link>
                        <Link className='footer-link' to="/contact-us">Contact Us</Link>
                        <Link className='footer-link' to="/">Our Blog</Link>
                        </ul>
                </div>
                <div>
                <p className='footer-heading'>Members</p>
                        <ul className='footer-links'>
                        <Link className='footer-link' to="/">About Virtual Store</Link>
                        <Link className='footer-link' to="/">For Business</Link>
                        <Link className='footer-link' to="/">Partners</Link>
                        <Link className='footer-link' to="/">Careers</Link>
                        </ul>
                </div>
                <div>
                <p className='footer-heading'>Resources</p>
                        <ul className='footer-links'>
                        <Link className='footer-link' to="/">Help center</Link>
                        <Link className='footer-link' to="/">Privacy & terms</Link>
                        <Link className='footer-link' to="/">Terms and Conditions</Link>
                        <Link className='footer-link' to="/">Faqs</Link>
                        </ul>
                </div>
            </div>
        </div>
        </div>
    )
}



export default Footer;



// Account

// Create account
// Sign in
// iOS app
// Android app
// Company

// About Omnifood
// For Business
// Cooking partners
// Careers
// Resources

// Recipe directory
// Help center
// Privacy & terms