import React from "react";
import Hero from "./Pages/Hero";
import "./App.css"
import Info from "./Pages/Info";
import NavBar from "./Components/NavBar";
import Slider from "./Pages/Slider";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <>
      <header>
        <NavBar/>
        <Hero />
      </header>
      <body>
        <Info/>
        <Slider/>
        <Contact/>
      </body>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
