import React from 'react'
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import Container from "../../components/Container"

const ShippingPolicy = () => {
  return (
    <>
      <Meta title="Shipping Policy" />
      <BreadCrumb title="Shipping Policy" />

      <Container class1="shipping-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="privacy-card"></div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ShippingPolicy