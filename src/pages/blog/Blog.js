import React from 'react'
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import BlogCard from "../../components/BlogCard"
import Container from "../../components/Container"

const Blog = () => {
  return (
    <>
      <Meta title="Blog" />
      <BreadCrumb title="Blog" />

      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card">
              <h4 className="filter-title">Find By Categories</h4>
              <div className="filter-category">
                <ul>
                  <li>Home</li>
                  <li>Our Store</li>
                  <li>Blogs</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6">
                <BlogCard />
              </div>
              <div className="col-6">
                <BlogCard />
              </div>
              <div className="col-6">
                <BlogCard />
              </div>
              <div className="col-6">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Blog