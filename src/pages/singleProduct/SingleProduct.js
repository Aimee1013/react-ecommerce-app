import React, { useState } from 'react'
import './singleProduct.css'
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import ProductCard from "../../components/ProductCard"
import ReactStars from 'react-rating-stars-component'
import ReactImageZoom from 'react-image-zoom';
import Color from "../../components/Color"
import { Link } from "react-router-dom"
import { CiHeart } from 'react-icons/ci'
import { MdCompareArrows } from 'react-icons/md'
import Container from "../../components/Container"


const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true)

  const props = { width: 400, height: 400, zoomWidth: 500, img: "https://marketplacer.imgix.net/xP/WoSXCWgQXPNTrPjUn6jxVXWO8.png?auto=format&fm=pjpg&fit=clamp&w=540&h=540&s=24eb6f62d375db6ebe22ace6362a2187" };

  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }


  return (
    <>
      <Meta title="SingleProduct" />
      <BreadCrumb title="SingleProduct" />

      <Container class1="single-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6">
            <div className="single-product-image">
              <ReactImageZoom {...props} />
            </div>
            <div className="small-product-images d-flex gap-15 flex-wrap">
              <div><img src="https://marketplacer.imgix.net/xP/WoSXCWgQXPNTrPjUn6jxVXWO8.png?auto=format&fm=pjpg&fit=clamp&w=540&h=540&s=24eb6f62d375db6ebe22ace6362a2187" alt="laptop" className="img-fluid" /></div>
              <div><img src="https://marketplacer.imgix.net/xP/WoSXCWgQXPNTrPjUn6jxVXWO8.png?auto=format&fm=pjpg&fit=clamp&w=540&h=540&s=24eb6f62d375db6ebe22ace6362a2187" alt="laptop" className="img-fluid" /></div>
              <div><img src="https://marketplacer.imgix.net/xP/WoSXCWgQXPNTrPjUn6jxVXWO8.png?auto=format&fm=pjpg&fit=clamp&w=540&h=540&s=24eb6f62d375db6ebe22ace6362a2187" alt="laptop" className="img-fluid" /></div>
              <div><img src="https://marketplacer.imgix.net/xP/WoSXCWgQXPNTrPjUn6jxVXWO8.png?auto=format&fm=pjpg&fit=clamp&w=540&h=540&s=24eb6f62d375db6ebe22ace6362a2187" alt="laptop" className="img-fluid" /></div>
            </div>
          </div>
          <div className="col-6">
            <div className="single-product-details">
              <h5 className="single-title">Kids Headphones Bulk 10 Pack Multi Colored For Students</h5>
              <div className="detail-top">
                <p className="mb-0 detail-top-price">$100.00</p>
                <div className="d-flex gap-10 align-items-center">
                  <ReactStars
                    count={5}
                    size={15}
                    value={3}
                    edit={false}
                    activeColor="#ffd700" />
                  <p className="mb-0 detail-top-review">(2 reviews)</p>
                </div>
                <a href="#review" className="detail-top-write">Write a review</a>
              </div>
              <div className="detail-content">
                <div className="d-flex align-items-center">
                  <p>type :</p><span>Headsets</span>
                </div>
                <div className="d-flex align-items-center">
                  <p>Brand :</p><span>Haveils</span>
                </div>
                <div className="d-flex flex-column details-categories">
                  <p>Categories :</p>
                  <div className="d-flex flex-wrap gap-10">
                    <span>Headsets,</span>
                    <span>Headsets,</span>
                    <span>Headsets,</span>
                    <span>Headsets,</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <p>Tags :</p>
                  <div className="detail-tags">
                    <span>Headsets</span>
                    <span>laptop</span>
                    <span>mobile</span>
                    <span>oppo</span>
                    <span>speaker</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <p>SKU :</p><span>SKU027</span>
                </div>
                <div className="d-flex align-items-center">
                  <p>Availability :</p><span>541 In Stock</span>
                </div>
                <div className="d-flex flex-column details-size">
                  <p>Size :</p>
                  <div className="d-flex gap-10 align-items-center">
                    <span>M</span><span>L</span><span>XL</span><span>XXL</span>
                  </div>
                </div>
                <div className="d-flex flex-column ">
                  <p>Color :</p><Color />
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <p>Quantity :</p>
                  <input type="number" min={1} max={10} className="form-control" style={{ width: '60px' }}></input>
                  <div className="detail-buttons d-flex gap-10">
                    <button className="add" type="submit">Add To Cart</button>
                    <button className="buy" type="submit">Buy It Now</button>
                  </div>
                </div>
              </div>
              <div className="detail-icon d-flex gap-20">
                <div>
                  <Link><CiHeart className="fs-5 me-1" />Add to compare</Link>
                </div>
                <div>
                  <Link><MdCompareArrows className="fs-5 me-1" />Add to compare</Link>
                </div>
              </div>
              <div className="detail-conditions">
                <div>
                  <h5 className="">Shipping & Return</h5>
                  <p>A collection of responsive, image magnifying React components for mouse and touch for React 18</p>
                </div>
                <div>
                  <h5 className="">Materials</h5>
                  <p>A collection of responsive, image magnifying React components for mouse and touch for React 18</p>
                </div>
              </div>
              <div className="copy-link d-flex align-items-center">
                <h5>Product Link</h5>
                <a href="" onClick={() => { copyToClipboard("https://marketplacer.imgix.net/xP/WoSXCWgQXPNTrPjUn6jxVXWO8.png?auto=format&fm=pjpg&fit=clamp&w=540&h=540&s=24eb6f62d375db6ebe22ace6362a2187") }}>copy product link</a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h5>Description</h5>
            <div className="bg-white p-3 description-card">
              <p className="">Note that because the font stack includes emoji fonts, many common symbol/dingbat Unicode characters will be rendered as multicolored pictographs. Their appearance will vary, depending on the style used in the browser/platform’s native emoji font, and they won’t be affected by any CSS color styles.</p>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="reviews-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h6 id="review">Customer Reviews</h6>
            <div className="bg-white p-3 description-card">
              <div className="d-flex align-items-center justify-content-between review-header">
                <div className="d-flex gap-10 align-items-center">
                  <ReactStars
                    count={5}
                    size={15}
                    value={3}
                    edit={false}
                    activeColor="#ffd700" />
                  <p className="mb-0">Based on 2 Reviews</p>
                </div>
                {orderedProduct && <div className="">
                  <a className="text-decoration-underline">Write a Review</a>
                </div>}
              </div>
              <div className="review-form  position-relative">
                <form action="">
                  <div className="review-form-item">
                    <span>Name</span>
                    <input type="text" name="name" className="form-control mb-3" placeholder="Enter your name" />
                  </div>
                  <div className="review-form-item">
                    <span>Email</span>
                    <input type="email" name="email" className="form-control mb-3" placeholder="john.smith@example.com" />
                  </div>
                  <div className="review-form-item">
                    <span>Rating</span>
                    <ReactStars
                      count={5}
                      size={15}
                      value={0}
                      edit={false}
                      activeColor="#ffd700" />
                  </div>
                  <div className="review-form-item">
                    <span>Review Title</span>
                    <input type="text" name="title" className="form-control mb-3" placeholder="Give your review a title" />
                  </div>
                  <div className="review-form-item">
                    <span>Body of Review(1500)</span>
                    <textarea type="text" rows="3" cols="20" name="body" className="form-control mb-3" placeholder="Write your comments here" />
                  </div>
                  <button type="submit" className="button position-absolute"> Submit Review</button>
                </form>
              </div>
              <div className="review-lists">
                <div className="review-lists-item">
                  <ReactStars
                    count={5}
                    size={15}
                    value={3}
                    edit={false}
                    activeColor="#ffd700" />
                  <h5 className="review-lists-item-title">With a few list items</h5>
                  <div className="review-autor-date d-flex align-items-center ">
                    <span className="review-autor">admin</span>
                    <span>on</span>
                    <span className="review-date">Jun 20, 2022</span>
                  </div>
                  <p className="review-lists-item-content">All lists have their top margin removed</p>
                  <div className="review-reply">
                    <h6>Digitic</h6>
                    <p className="review-lists-item-content">This text is meant to be treated as sample output from a computer program.</p>
                  </div>
                  <div className="d-flex justify-content-end report-review"><a className="text-decoration-underline">Report as Inappropriate</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4 className="section-heading">Popular Products</h4>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  )
}

export default SingleProduct