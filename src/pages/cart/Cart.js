import React from 'react'
import './cart.css'
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import watch from "../../../public/images/watch.jpg"
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from "react-router-dom"
import Container from "../../components/Container"

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />


      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h5 className="cart-col-1">product</h5>
              <h5 className="cart-col-2">price</h5>
              <h5 className="cart-col-3">quantity</h5>
              <h5 className="cart-col-4">total</h5>
            </div>
            <div className="cart-data py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 d-flex align-items-center">
                <div className="w-25"><img src={watch} alt="watch" className="img-fluid" /></div>
                <div className="w-75 cart-data-detail">
                  <h5 className="title">Kids headphones bulk 10 pack multi colored for students</h5>
                  <p className="color mb-0">Size: S</p>
                  <p className="size mb-0">Color: #A85A5A</p>
                </div>
              </div>
              <div className="cart-col-2">
                <div className="cart-price">$100</div>
              </div>
              <div className="cart-col-3">
                <div className="cart-quantity d-flex align-items-center gap-10">
                  <input type="number" min={1} max={10} className="w-25"></input>
                  <div className="cart-delete"><RiDeleteBin6Line className="text-white" /></div>
                </div>
              </div>
              <div className="cart-col-4">
                <div className="cart-price">$100</div>
              </div>
            </div>
          </div>
          <div className="col-12 py-2">
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/product" className="button">Continue Shopping</Link>
              <div className="d-flex flex-column align-items-end">
                <h5>SubTotal: $100</h5>
                <p className="">Taxs and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Cart