import "./App.css";
import Hero from "./Pages";
import NavBar from "./Components/NavBar";
import { ClipLoader } from "react-spinners";
import React, { useState, useEffect } from "react";

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
      <div className='loader-container'>
        <ClipLoader
          color='#000000'
          size={50}
        />
      </div>
    );
  }

  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
    </>
  );
}
