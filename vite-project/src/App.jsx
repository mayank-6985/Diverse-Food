import React from "react";
import Landing_page from "./Pages/Landing_page.jsx";
import About from "./Pages/About.jsx";
import Best from "./Pages/Best.jsx";
import { Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu.jsx";
import Blogs from "./Pages/Blogs.jsx";
import FAQ from "./Pages/faq.jsx";
import Error  from "./Pages/error.jsx";
import Blog_Details from "./Pages/Blog_Details.jsx";
import Our_chef from "./Pages/Our_chef.jsx";
import Comments_Page from "./Pages/Comment.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing_page />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/Best" element={<Best />}></Route>
        <Route path="/Blog" element={<Blogs/>}></Route>
        <Route path="/FAQ" element={<FAQ/>}></Route>
        <Route path="/Error" element={<Error/>}></Route>
        <Route path="/Blog_Details" element={<Blog_Details/>}></Route>
        <Route path="/Our_chef" element={<Our_chef/>}></Route>
        <Route path="/Comments" element={<Comments_Page/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
