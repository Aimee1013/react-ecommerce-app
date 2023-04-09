import React, { useState } from 'react'
import BreadCrumb from "../../components/BreadCrumb"
import Meta from "../../components/Meta"
import './ourStore.css'
import ReactStars from 'react-rating-stars-component'
import ProductCard from '../../components/ProductCard'
import Color from "../../components/Color"
import Container from "../../components/Container"


const OurStore = () => {
  const [grid, setGrid] = useState(4)


  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />

      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card">
              <h4 className="filter-title">Shop By Categories</h4>
              <div className="filter-category">
                <ul>
                  <li>Home</li>
                  <li>Our Store</li>
                  <li>Blogs</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="filter-card">
              <h4 className="filter-title">Filter By</h4>
              <div>
                <h6 className="sub-title">Availablity</h6>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="" />
                  <label className="form-check-label" htmlFor="">In Stock(2)</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="" />
                  <label className="form-check-label" htmlFor="">Out of Stock(0)</label>
                </div>
              </div>
              <div>
                <h6 className="sub-title">Price</h6>
                <div className="d-flex ">
                  <div className="form-floating">
                    <input type="number" className="form-control" id="floatingInput" placeholder="From" />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input type="number" className="form-control" id="floatingInput" placeholder="To" />
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
              </div>
              <div>
                <h6 className="sub-title">Colors</h6>
                <div className="d-flex">
                  <Color />
                  <Color />
                  <Color />
                  <Color />
                  <Color />
                  <Color />
                </div>

              </div>
              <div>
                <h6 className="sub-title">Size</h6>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="" />
                  <label className="form-check-label" htmlFor="">S(2)</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="" />
                  <label className="form-check-label" htmlFor="">M(0)</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="" />
                  <label className="form-check-label" htmlFor="">L(2)</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="" />
                  <label className="form-check-label" htmlFor="">XL(6)</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="" />
                  <label className="form-check-label" htmlFor="">XXL(0)</label>
                </div>
              </div>
            </div>
            <div className="filter-card">
              <h4 className="filter-title">Product Tags</h4>
              <div className="filter-tags d-flex flex-wrap">
                <span className="filter-tags-items">Headphone</span>
                <span className="filter-tags-items">Laptop</span>
                <span className="filter-tags-items">Mobile</span>
                <span className="filter-tags-items">Oppo</span>
                <span className="filter-tags-items">Speaker</span>
                <span className="filter-tags-items">Tablet</span>
                <span className="filter-tags-items">Vivo</span>
              </div>
            </div>
            <div className="filter-card">
              <h4 className="filter-title">Random Products</h4>
              <div className="filter-products">
                <div className="d-flex">
                  <div>
                    <img src="images/headphone.jpg" className="img-fluid" alt="headphone" />
                  </div>
                  <div className="filter-product-content col-7">
                    <h5 className="filter-product-title">Samsung Galaxy Note10+ Mobile Phone; Sim Card 5G Lasted Options</h5>
                    <ReactStars
                      count={5}
                      size={15}
                      value="3"
                      edit={false}
                      activeColor="#ffd700" />
                    <span className="filter-price">$100.00</span>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <img src="images/speaker.jpg" className="img-fluid" alt="speaker" />
                  </div>
                  <div className="filter-product-content col-7">
                    <h5 className="filter-product-title">Samsung Galaxy Note10+ Mobile Phone; Sim Card 5G Lasted Options</h5>
                    <ReactStars
                      count={5}
                      size={15}
                      value="3"
                      edit={false}
                      activeColor="#ffd700" />
                    <span className="filter-price">$100.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid">
              <div className="sort-top d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <p className="sort-by mb-0">Sort By:</p>
                  <select className="sort-select">
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className=" d-flex align-items-center">
                  <p className="sort-text mb-0">21 Products</p>
                  <div className="sort-images d-flex align-items-center">
                    <img onClick={() => { setGrid(3) }} src="images/gr4.svg" className="d-block img-fluid" alt="grid" />
                    <img onClick={() => { setGrid(4) }} src="images/gr3.svg" className="d-block img-fluid" alt="grid" />
                    <img onClick={() => { setGrid(6) }} src="images/gr2.svg" className="d-block img-fluid" alt="grid" />
                    <img onClick={() => { setGrid(12) }} src="images/gr.svg" className="d-block img-fluid" alt="grid" />
                  </div>
                </div>
              </div>
              <div className="sort-lists">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default OurStore