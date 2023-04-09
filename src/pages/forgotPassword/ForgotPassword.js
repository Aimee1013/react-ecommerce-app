import React from 'react'
import './forgotPassword.css'
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import { Link } from "react-router-dom"
import Container from "../../components/Container"
import CustomInput from "../../components/CustomInput"


const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <BreadCrumb title="Forgot Password" />

      <Container class1="forgotPassword-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="forgot-card">
              <h4 className="forgot-title">Reset Your Password</h4>
              <p className="forgot-message"> We will send you an email to reset your password</p>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />
                <div className="forgot-buttons">
                  <button className="login-button">Submit</button>
                  <Link to="/login" className="cancel-button">cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ForgotPassword