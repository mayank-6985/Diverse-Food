import React from 'react'
import Header from '../components/Header'
import Best_Sellers from '../components/Best_Sellers.jsx'
import Best_Seleers_content from '../components/Best_Seleers_content.jsx'
import Footer from '../components/Footer.jsx'


const Best = () => {
  return (
    <div>
      <Header/>
      <Best_Sellers />
      <Best_Seleers_content/>
      <Footer/>
    </div>
  )
}

export default Best