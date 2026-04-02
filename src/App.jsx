import { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Background from "./Components/Background/Background";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import ExploreModal from "./Components/ExploreModel/ExploreModal";

const App = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give into", text2: "your passions" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (section) => {
    if(section === "home") homeRef.current.scrollIntoView({ behavior: "smooth" });
    if(section === "about") aboutRef.current.scrollIntoView({ behavior: "smooth" });
    if(section === "contact") contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar scrollToSection={scrollToSection} />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
      />

      <div ref={homeRef}>
        <Home setSelectedCar={setSelectedCar} />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      {selectedCar && (
        <ExploreModal 
          car={selectedCar} 
          onClose={() => setSelectedCar(null)} 
        />
      )}
    </>
  );
};

export default App;