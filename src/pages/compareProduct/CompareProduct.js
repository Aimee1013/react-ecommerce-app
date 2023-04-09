import React from 'react'
import './compareProduct.css'
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import Color from "../../components/Color"
import Container from "../../components/Container"


const CompareProduct = () => {
  return (
    <>
      <Meta title="Compare Product" />
      <BreadCrumb title="Compare Product" />

      <Container class1="compare-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img src="images/cross.svg" alt="cross" className="img-fluid position-absolute cross" />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" className="img-fluid" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                <h6 className="price">$100</h6>

                <div>
                  <div className="pro-info">
                    <h6>Brand:</h6>
                    <p>Havels</p>
                  </div>
                  <div className="pro-info">
                    <h6>Type:</h6>
                    <p>Tablet Computers</p>
                  </div>
                  <div className="pro-info">
                    <h6>SKU:</h6>
                    <p>SKU033</p>
                  </div>
                  <div className="pro-info">
                    <h6>Availability:</h6>
                    <p>In Stock</p>
                  </div>
                  <div className="pro-info">
                    <h6>Color:</h6>
                    <Color />
                  </div>
                  <div className="pro-info">
                    <h6>Size:</h6>
                    <p>S M L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img src="images/cross.svg" alt="cross" className="img-fluid position-absolute cross" />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" className="img-fluid" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                <h6 className="price">$100</h6>

                <div>
                  <div className="pro-info">
                    <h6>Brand:</h6>
                    <p>Havels</p>
                  </div>
                  <div className="pro-info">
                    <h6>Type:</h6>
                    <p>Tablet Computers</p>
                  </div>
                  <div className="pro-info">
                    <h6>SKU:</h6>
                    <p>SKU033</p>
                  </div>
                  <div className="pro-info">
                    <h6>Availability:</h6>
                    <p>In Stock</p>
                  </div>
                  <div className="pro-info">
                    <h6>Color:</h6>
                    <Color />
                  </div>
                  <div className="pro-info">
                    <h6>Size:</h6>
                    <p>S M L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img src="images/cross.svg" alt="cross" className="img-fluid position-absolute cross" />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" className="img-fluid" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                <h6 className="price">$100</h6>

                <div>
                  <div className="pro-info">
                    <h6>Brand:</h6>
                    <p>Havels</p>
                  </div>
                  <div className="pro-info">
                    <h6>Type:</h6>
                    <p>Tablet Computers</p>
                  </div>
                  <div className="pro-info">
                    <h6>SKU:</h6>
                    <p>SKU033</p>
                  </div>
                  <div className="pro-info">
                    <h6>Availability:</h6>
                    <p>In Stock</p>
                  </div>
                  <div className="pro-info">
                    <h6>Color:</h6>
                    <Color />
                  </div>
                  <div className="pro-info">
                    <h6>Size:</h6>
                    <p>S M L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CompareProduct