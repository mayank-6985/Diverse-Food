import React from "react";
import Landing_page from "./Pages/Landing_page.jsx";
import Spacial from "./components/spacial.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import About from "./Pages/About.jsx";
import Best from "./Pages/Best.jsx";
import { Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing_page />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/Best" element={<Best />}></Route>
      </Routes>
    </div>
  );
}
export default App;
