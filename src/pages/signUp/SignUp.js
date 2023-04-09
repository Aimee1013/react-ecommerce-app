import React from 'react'
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import Container from "../../components/Container"
import CustomInput from "../../components/CustomInput"


const SignUp = () => {
  return (
    <>
      <Meta title="SignUp" />
      <BreadCrumb title="SignUp" />

      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h4 className="login-title">Create Account</h4>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="text" name="name" placeholder="Name"></CustomInput>
                <CustomInput type="email" name="email" placeholder="Email"></CustomInput>
                <CustomInput type="tel" name="phone" placeholder="Mobile phone"></CustomInput>
                <CustomInput type="password" name="password" placeholder="Password"></CustomInput>
                <div className="buttons">
                  <button className="login-button" type="submit">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default SignUp