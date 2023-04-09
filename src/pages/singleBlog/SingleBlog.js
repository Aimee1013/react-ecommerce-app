import React from 'react'
import './singleBlog.css'
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import { Link } from "react-router-dom"
import { HiOutlineArrowLeft } from 'react-icons/hi'
import blog from "../../../public/images/blog-1.jpg";
import Container from "../../components/Container"


const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />

      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blog" className="d-flex align-items-center gap-10 text-dark"><HiOutlineArrowLeft />Back to blog</Link>
              <h4 className="single-blog-card-title">A Beautiful Sunday Morning Renaissance</h4>
              <div className="single-blog-card-image">
                <img src={blog} className="img-fluid w-100" alt="blog" />
              </div>
              <div className="single-blog-card-content">
                <p className="single-blog-card-content">You’re only as good as your last collection, which is an
                  enormous pressure. I think there is something about luxury –
                  it’s not something people need, but it’s what they want. It
                  really pulls at their heart. I have a fantastic relationship
                  with money.Scelerisque sociosqu ullamcorper urna nisl mollis
                  vestibulum pretium commodo inceptos cum condimentum placerat
                  diam venenatis blandit hac eget dis lacus a parturient a
                  accumsan nisl ante vestibulum.</p>
                <div className="d-flex gap-15">
                  <span className="blog-date">11 JUNE, 2022</span>
                  <span className="blog-author">bonnie ning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default SingleBlog