import React from 'react'
import { Link } from "react-router-dom"
import ReactStars from 'react-rating-stars-component'

const SpecialProduct = () => {
  return (
    <div className="col-4">
      <div className="special-product-card ">
        <div className="top-discount">-20%</div>
        <div className="special-product-image d-flex">
          <div>
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
          </div>
          <div className="wishlist-icon">
            <Link><img src="images/wish.svg" alt="wish" /></Link>
          </div>
          <div className="special-product-content col-6">
            <h6 className="special-product-brand">Havells</h6>
            <h5 className="special-product-title">Samsung Galaxy Note10+ Mobile Phone; Sim Card 5G Lasted Options</h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700" />
            <p className="special-price">
              <span className="special-product-price">$100.00</span>
              <strike>$163</strike>
            </p>
            <div className="discount-till d-flex justify-content-between align-items-center">
              <p className="mb-0"><b>121</b><span className="discount-text">Days</span></p>
              <div className="d-flex align-items-center">
                <span className="badge rounded-circle p-2 bg-danger discount-time">01</span>&nbsp;:
                <span className="badge rounded-circle p-2 bg-danger discount-time">25</span>&nbsp;:
                <span className="badge rounded-circle p-2 bg-danger discount-time">48</span>
              </div>
            </div>
            <div className="product-count">
              <p className="mb-0">Product: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="button">OPTION</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialProduct