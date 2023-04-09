import React from 'react'
import './privacyPolicy.css'
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import Container from "../../components/Container"

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title="Privacy Policy" />
      <BreadCrumb title="Privacy Policy" />

      <Container class1="Privacy-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="privacy-card">
              <div className="privacy-item">
                <h3 className="privacy-item-title">Add the disabled boolean attribute on an input</h3>
                <p className="privacy-item-content">Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs, a textarea or a select to give it a grayed out appearance. Note that because the font stack includes emoji fonts, many common symbol/dingbat Unicode characters will be rendered as multicolored pictographs. </p>
              </div>
              <div className="privacy-item">
                <h3 className="privacy-item-title">you still have all the power of Sass</h3>
                <p className="privacy-item-content">Here’s a quick example to demonstrate Bootstrap’s form styles. Keep reading for documentation on required classes, form layout, and more. Reboot, a collection of element-specific CSS changes in a single file, kickstart Bootstrap to provide an elegant, consistent, and simple baseline to build upon.</p>
              </div>
              <div className="privacy-item">
                <h3 className="privacy-item-title">Reboot builds upon Normalize</h3>
                <p className="privacy-item-content">If your project grows in size, this option is available. This method has the trade-off that it takes a long time to install the package. Suitable for MeteorJS, Gatsbyjs etc. These system fonts have been designed specifically with today’s devices in mind, with improved rendering on screens, variable font support, and more.</p>
              </div>
              <div className="privacy-item">
                <h3 className="privacy-item-title">Which allows you to make real-time</h3>
                <p className="privacy-item-content">Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using. Bootstrap utilizes a “native font stack” or “system font stack” for optimum text rendering on every device and OS.</p>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default PrivacyPolicy