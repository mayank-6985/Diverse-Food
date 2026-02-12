import React from "react";
import Header from "../components/Header.jsx";
import Footer from '../components/Footer.jsx'
import Menu_content from "../components/Menu_content.jsx";
import Menu_hero from "../components/Menu_hero.jsx";



const Menu = () => {
  return (
   <div>
    <Header/>
    <Menu_hero/>
    <Menu_content/>
    <Footer/>
   </div>
     
  );
};

export default Menu;