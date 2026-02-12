import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Blog_Details_Hero from '../components/Blog_Details_Hero'
import Blog_Detail_Content from '../components/Blog_Details_Content'
import Blog_Details_Res from '../components/Blog_Details_Res'
import Blog_Details_Comment from '../components/Blog_Details_Comment'
import Blog_Details_reviews from '../components/Blog_Details_reviews'

const Blog_Details = () => {
  return (
    <div>
        <Header/>
        <Blog_Details_Hero/>
        <Blog_Detail_Content/>
        <Blog_Details_Res/>
        <Blog_Details_Comment/>
        <Blog_Details_reviews/>
        <Footer/>
    </div>
  )
}

export default Blog_Details