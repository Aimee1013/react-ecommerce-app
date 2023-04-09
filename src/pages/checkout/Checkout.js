import React from 'react'
import './checkout.css'
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import { Link } from "react-router-dom"
import { IoIosArrowBack } from 'react-icons/io'
import headphone from '../../../public/images/headphone.jpg'
import Container from "../../components/Container"


const Checkout = () => {
  return (
    <>
      <Meta title="Checkout" />
      <BreadCrumb title="Checkout" />


      <Container class1="checkout-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data p-2">
              <h4 className="checkout-name">Dev Corner</h4>
              <nav style={{ "--bs-breadcrumb-divider": '>' }} aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><Link to="/cart" className="text-dark">Cart</Link></li> /
                  <li class="breadcrumb-item active" aria-current="page">Information</li>/
                  <li class="breadcrumb-item active">Shipping</li> /
                  <li class="breadcrumb-item active" aria-current="page">Payment</li>
                </ol>
              </nav>
              <div className="contact-info">
                <h5>Contact Information</h5>
                <p className="mb-0">Robine Mary(robine023@gmail.com)</p>
                <p className="mb-0">Log out</p>
                <div className="d-flex align-items-center gap-10">
                  <input type="checkbox"></input>
                  <p className="mb-0">Email me with news and offers</p>
                </div>
              </div>
              <div className="shipping-address">
                <h5>Shipping Address</h5>
                <form className="d-flex flex-column gap-10 flex-wrap justify-content-between">
                  <div className="w-100">
                    <select className="form-select" placeholder="Saved address">
                      <option selected disabled>Select Country</option>
                    </select>
                  </div>
                  <div className="d-flex justify-content-between gap-20">
                    <input className="w-50" type="text" placeholder="First name(optional)"></input>
                    <input className="w-50" type="text" placeholder="Last name"></input>
                  </div>
                  <div>
                    <input className="w-100" type="text" placeholder="Address"></input>
                  </div>
                  <div>
                    <input className="w-100" type="text" placeholder="Apartment, suit, etc.(otional)"></input>
                  </div>
                  <div className="d-flex justify-content-between gap-20">
                    <input className="w-50" type="text" placeholder="City"></input>
                    <select className="w-50 form-select" type="text" placeholder="State">
                      <option selected disabled>Select State</option>
                    </select>
                    <input className="w-50" type="text" placeholder="ZIP code"></input>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-10 mt-4 return-cart"><IoIosArrowBack /><Link to="/cart">Return to cart</Link></div>
                    <Link to="/shipping" className="button">Continue Shipping</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="checkout-right-data mt-2">
              <div className="checkout-product-details d-flex flex-column gap-20">
                <div className="d-flex justify-content-between align-items-center gap-10">
                  <div className="checkout-img"><img src={headphone} alt="headphone" className="img-fluid" /></div>
                  <div className="d-flex flex-column flex-wrap">
                    <h6>Huawei P30 Pro (8GB+256GB) Black Unlocked B</h6>
                    <p className="checkout-size mb-0">S / #B5CEDE</p>
                  </div>
                  <div>$200</div>
                </div>
                <div className="d-flex justify-content-between align-items-center gap-10">
                  <div className="checkout-img"><img src={headphone} alt="headphone" className="img-fluid" /></div>
                  <div className="d-flex flex-column flex-wrap">
                    <h6>Huawei P30 Pro (8GB+256GB) Black Unlocked B</h6>
                    <p className="checkout-size mb-0">S / #B5CEDE</p>
                  </div>
                  <div>$200</div>
                </div>
              </div>
              <div className="checkout-product-subtotal">
                <div className="subtotal d-flex justify-content-between align-items-center">
                  <p className="price-title">Subtotal</p> <p>$400</p>
                </div>
                <div className="shipping d-flex justify-content-between align-items-center">
                  <p className="price-title">Shipping</p> <p>$19.85</p>
                </div>
              </div>
              <div className="checkout-product-total d-flex justify-content-between align-items-center">
                <p className="total-title">Toal</p> <p className="total-amount">$419.85</p>
              </div>
            </div>
          </div>
        </div>
      </Container >
    </>
  )
}

export default Checkout