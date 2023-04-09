import React from 'react'
import './wishlist.css'
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import Container from "../../components/Container"


const Wishlist = () => {
  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />

      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img src="images/cross.svg" alt="cross" className="img-fluid position-absolute cross" />
              <div className="wishlist-card-image">
                <img src="images/watch.jpg" alt="watch" className="img-fluid" />
              </div>
              <div className="wishlist-details">
                <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                <div className="price">
                  <span>$100</span>
                  <strike>$285</strike>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img src="images/cross.svg" alt="cross" className="img-fluid position-absolute cross" />
              <div className="wishlist-card-image">
                <img src="images/watch.jpg" alt="watch" className="img-fluid" />
              </div>
              <div className="wishlist-details">
                <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                <div className="price">
                  <span>$100</span>
                  <strike>$285</strike>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img src="images/cross.svg" alt="cross" className="img-fluid position-absolute cross" />
              <div className="wishlist-card-image">
                <img src="images/watch.jpg" alt="watch" className="img-fluid" />
              </div>
              <div className="wishlist-details">
                <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                <div className="price">
                  <span>$100</span>
                  <strike>$285</strike>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img src="images/cross.svg" alt="cross" className="img-fluid position-absolute cross" />
              <div className="wishlist-card-image">
                <img src="images/watch.jpg" alt="watch" className="img-fluid" />
              </div>
              <div className="wishlist-details">
                <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                <div className="price">
                  <span>$100</span>
                  <strike>$285</strike>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Wishlist