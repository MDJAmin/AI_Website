import React, { useState, useEffect } from "react";
import Hero from "./Pages/Hero";
import "./App.css";
import Info from "./Pages/Info";
import NavBar from "./Components/NavBar";
import Slider from "./Pages/Slider";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import { ClipLoader } from "react-spinners";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); 
      setIsLoading(false); 
    };

    fetchData();
  }, []);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <ClipLoader color="#000000" size={50} />
      </div>
    );
  }
  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <body>
        <Info />
        <Slider />
        <Contact />
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}