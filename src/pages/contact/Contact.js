import React from 'react'
import './contact.css'
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../../components/Container"


const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />

      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <iframe
              width="600"
              height="450"
              className="border-0 w-100"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.9726768842816!2d121.77859261744388!3d-32.204966899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a51d23b0a345997%3A0x807ad26d573dae1!2s144%20Roberts%20St%2C%20Norseman%20WA%206443!5e0!3m2!1sen!2sau!4v1680747383473!5m2!1sen!2sau">
            </iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-detail-wrapper d-flex justify-content-between">
              <div>
                <h4 className="contact-title mb-4">Contact Us</h4>
                <form action="">
                  <div>
                    <input type="text" className="form-control mb-3" placeholder="Name" />
                  </div>
                  <div>
                    <input type="email" className="form-control mb-3" placeholder="Email" />
                  </div>
                  <div>
                    <input type="tel" className="form-control mb-3" placeholder="Phone number" />
                  </div>
                  <div>
                    <textarea name="text" cols="30" rows="5" className="form-control" placeholder="Comment" ></textarea>
                  </div>
                  <div>
                    <button className="button">Send</button>
                  </div>
                </form>
              </div>
              <div>
                <h4 className="contact-title mb-4">Get In Touch With Us</h4>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Hno:277 , Near village chopal , Mandaura, Sonipat,
                        Haryana
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+91 8264954234" className="text-black">+91 8264954234</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:navdeepdahiya753@gmail.com" className="text-black">
                        navdeepdahiya753@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday – Friday 10 AM – 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </>
  )
}

export default Contact