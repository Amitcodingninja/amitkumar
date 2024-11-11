import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";

import "./App.css";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Journey from "./components/Journey";
import Certifications from "./components/Certifications";

function App() {
  
  useState();

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Journey/>
      <Certifications/>
      <Services/>
      <Expertise/>
      <Footer/>
      
    </>
  );
}

export default App;
