import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "../components/Layout"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Contact from "../pages/contact/Contact"
import OurStore from "../pages/ourStore/OurStore"
import Blog from "../pages/blog/Blog"
import CompareProduct from "../pages/compareProduct/CompareProduct"
import Wishlist from "../pages/wishlist/Wishlist"
import Login from "../pages/login/Login"
import SignUp from "../pages/signUp/SignUp"
import ForgotPassword from "../pages/forgotPassword/ForgotPassword"
import ResetPassword from "../pages/resetPassword/ResetPassword"
import SingleBlog from "../pages/singleBlog/SingleBlog"
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy"
import RefundPolicy from "../pages/refundPolicy/RefundPolicy"
import ShippingPolicy from "../pages/shippingPolicy/ShippingPolicy"
import TermAndConditions from "../pages/termAndConditions/TermAndConditions"
import SingleProduct from "../pages/singleProduct/SingleProduct"
import Cart from "../pages/cart/Cart"
import Checkout from "../pages/checkout/Checkout"

const IndexRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='store' element={<OurStore />} />
          <Route path='product/:id' element={<SingleProduct />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<SingleBlog />} />
          <Route path='cart' element={<Cart />} />
          <Route path='compare-product' element={<CompareProduct />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='refund-policy' element={<RefundPolicy />} />
          <Route path='shipping-policy' element={<ShippingPolicy />} />
          <Route path='term-conditions' element={<TermAndConditions />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default IndexRouter