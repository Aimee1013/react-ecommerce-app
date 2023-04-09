import React from 'react'
import { Link } from "react-router-dom"
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../../public/images/newsletter.png";


const Footer = () => {
  return (
    <>
      {/* top */}
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up For Newslatter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your Email" aria-label="Your Email" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2 text-white" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* mid */}
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-contact text-white">
                <address> Hno : 277 Near Vill chopal, <br /> Sonipat, Haryana <br />
                  PinCode: 131103</address>
                <a href="tel:+61 0488881254" className="text-white mt-2 d-block mb-2">+61 0488881254</a>
                <a href="email:navdeepdahiya753@gmail.com" className="text-white mb-0">navdeepdahiya753@gmail.com</a>
                <div className="social-icons">
                  <a href="#"><BsLinkedin /></a>
                  <a href="#"><BsInstagram /></a>
                  <a href="#"><BsGithub /></a>
                  <a href="#"><BsYoutube /></a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links">
                <Link to='/privacy-policy'>Privacy Policy</Link>
                <Link to='/refund-policy'>Refund Policy</Link>
                <Link to='/shipping-policy'>Shipping Policy</Link>
                <Link to='/term-conditions'>Terms & Service</Link>
                <Link to='/blog'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links">
                <Link>Search</Link>
                <Link>About Us</Link>
                <Link>Faq</Link>
                <Link>Contact</Link>
                <Link>Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links">
                <Link>Accessories</Link>
                <Link>Laptops</Link>
                <Link>Headphones</Link>
                <Link>Smart Watches</Link>
                <Link>Tablets</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* bottom */}
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Developer's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer