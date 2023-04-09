import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from "react-router-dom"
import prodcompare from "../../public/images/prodcompare.svg";
import wish from "../../public/images/wish.svg";
import watch from "../../public/images/watch.jpg";
import tv from "../../public/images/tv.jpg";
import addcart from "../../public/images/add-cart.svg";
import view from "../../public/images/view.svg";



const ProductCard = (props) => {
  const { grid } = props
  let location = useLocation()
  console.log(location)


  return (
    <div className={`${location.pathname === '/store' ? `gr-${grid}` : 'col-3'}`}>
      <Link to={`${location.pathname === "/" ? "/product/:id" : location.pathname === "/store" ? "/product/:id" : "/:id"}}`} className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link to="/wishlist" className="border-0 bg-transparent"><img src={wish} alt="wish" /></Link>
        </div>
        <div className="product-image">
          <img src={watch} className="img-fluid" alt="watch" />
          <img src={tv} className="img-fluid" alt="tv" />
        </div>
        <div className="product-content">
          <h6 className="product-brand">Havells</h6>
          <h5 className="product-title">A Beautiful Sunday Morning Renaissance</h5>
          <ReactStars
            count={5}
            size={20}
            value={3}
            edit={false}
            activeColor="#ffd700" />
          <p className={`product-description ${grid === 12 ? "d-block" : "d-none"}`}>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors. When working with the Bootstrap grid system, be sure to place form elements within column classes.</p>
          <div className="product-price">$100.00</div>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column align-items-center gap-15">
            <Link to="/compare-product" className="border-0 bg-transparent"><img src={prodcompare} alt="prodcompare" /></Link>
            <button className="border-0 bg-transparent"><img src={view} alt="view" /></button>
            <Link to="/cart" className="border-0 bg-transparent"><img src={addcart} alt="addcart" /></Link>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard