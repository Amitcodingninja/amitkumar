import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import React from 'react';
import "./App.css";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Journey from "./components/Journey";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  
  useState();

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Journey/>
      <Projects/>
      
      <Certifications/>
      <Services/>
      <Expertise/>
      <Footer/>
      
    </>
  );
}

export default App;
