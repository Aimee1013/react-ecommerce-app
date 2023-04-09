import React from 'react'
import { Link } from "react-router-dom"

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="card-content">
        <p className="blog-card-date">11 JUNE, 2022</p>
        <h6 className="blog-card-title">A Beautiful Sunday Morning Renaissance</h6>
        <p className="blog-card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerataccusamus officia</p>
        <Link to="/blog/:id" className="blog-card-button">READ MORE</Link>
      </div>
    </div>
  )
}

export default BlogCard