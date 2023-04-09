import React from 'react'
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import Container from "../../components/Container"

const TermAndConditions = () => {
  return (
    <>
      <Meta title="Term And Conditions" />
      <BreadCrumb title="Term And Conditions" />

      <Container class1="term-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="privacy-card"></div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default TermAndConditions