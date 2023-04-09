import React from 'react'
import { Link } from "react-router-dom"
import './home.css'
import Marquee from 'react-fast-marquee'
import BlogCard from "../../components/BlogCard"
import ProductCard from "../../components/ProductCard"
import SpecialProduct from "../../components/SpecialProduct"
import Container from "../../components/Container"
import { services } from '../../utils/Data'

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner p-3 position-relative">
              <img src="images/main-banner-1.jpg" className="img-fluid rounded-3" alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" className="img-fluid rounded-3" alt="small banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-02.jpg" className="img-fluid rounded-3" alt="small banner" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-03.jpg" className="img-fluid rounded-3" alt="small banner" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-04.jpg" className="img-fluid rounded-3" alt="small banner" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex justify-content-between align-items-center">
              {services?.map((item, index) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={index}>
                    <img src={item.image} alt="service" />
                    <div>
                      <h6>{item.title}</h6>
                      <p className="mb-0">{item.tagline}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories card-wrapper d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Music&Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Music&Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Music&Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Music&Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="feature-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4 className="section-heading">Featured Collection</h4>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row ">
          <div className="col-3">
            <div className="d-flex flex-direction-row justify-content-between align-items-center"></div>
            <div className="famous-card position-relative">
              <div className="famous-content text-white position-absolute">
                <h6>Big Screen</h6>
                <h5>Smart Watch Series 7</h5>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
              <img src="images/famous-1.webp" alt="famous" className="famous-image img-fluid" />
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex flex-direction-row justify-content-between align-items-center"></div>
            <div className="famous-card position-relative">
              <div className="famous-content text-black position-absolute">
                <h6>Studio Displa</h6>
                <h5>600 nits of brightness.</h5>
                <p>27-inch 5K Retina display</p>
              </div>
              <img src="images/famous-2.webp" alt="famous" className="famous-image img-fluid" />
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex flex-direction-row justify-content-between align-items-center"></div>
            <div className="famous-card position-relative">
              <div className="famous-content text-black position-absolute">
                <h6>smartphones</h6>
                <h5>Smartphone 13 Pro.</h5>
                <p>Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*</p>
              </div>
              <img src="images/famous-3.webp" alt="famous" className="famous-image img-fluid" />
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex flex-direction-row justify-content-between align-items-center"></div>
            <div className="famous-card position-relative">
              <div className="famous-content text-black position-absolute">
                <h6>home speakers</h6>
                <h5>Room-filling sound.</h5>
                <p>From $699 or $116.58/mo. for 12 mo.*</p>
              </div>
              <img src="images/famous-4.webp" alt="famous" className="famous-image img-fluid" />
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4 className="section-heading">Special Products</h4>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4 className="section-heading">Popular Products</h4>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="marquee-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee>
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4 className="section-heading">Latest Blogs</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home