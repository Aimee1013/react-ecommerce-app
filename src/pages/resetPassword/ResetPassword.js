import React from 'react'
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import { Link } from "react-router-dom"
import Container from "../../components/Container"
import CustomInput from "../../components/CustomInput"


const ResetPassword = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />

      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h4 className="login-title">Reset Password</h4>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="password" name="password" placeholder="Password" />
                <CustomInput type="password" name="password" placeholder="Password" />
                <div className="buttons">
                  <button className="login-button" type="submit">Reset</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ResetPassword