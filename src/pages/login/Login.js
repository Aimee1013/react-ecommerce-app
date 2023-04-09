import React from 'react'
import './login.css'
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import { Link } from "react-router-dom"
import Container from "../../components/Container"
import CustomInput from "../../components/CustomInput"

const Login = () => {
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h4 className="login-title">Login</h4>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput type="password" name="password" placeholder="Password" />
                <Link to="/forgot-password" className="mb-0 forgot-pw">Forgot your password?</Link>
                <div className="buttons gp-15">
                  <button className="login-button" type="submit">Login</button>
                  <Link to="/signup" className="signup-button">Sign Up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login