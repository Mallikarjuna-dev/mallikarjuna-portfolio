import React, { useEffect, useState } from "react";
import "../App.css";
import Banner from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Projects from "../Components/Projects/Projects";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Contact from "../Components/Contact/Contact";
import Stats from "../Components/Stats/Stats";
import Loader from "../Components/Loader/Loader";
import Footer from "../Components/Foooter/Footer";

const Home = ({ currentTheme, themeToggler }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    let timer = setTimeout(() => {
      setIsLoading(false);
      return () => clearInterval(timer);
    }, 1000);
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div >
      <Navbar currentTheme={currentTheme} themeToggler={themeToggler} />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
