import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import OurMission from "../components/OurMission.jsx";
import OurStory from "../components/OurStory.jsx";
import OurTeam from "../components/OurTeam.jsx";
import Header from "../components/Header.jsx";

const About = () => {
  return (
    <div>
      <Header />
      <OurMission />
      <OurStory />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default About;
