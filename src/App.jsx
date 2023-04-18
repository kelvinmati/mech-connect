import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import Sub_hero from "./components/Sub_hero";
import Advert from "./components/Advert";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Sub_hero />
      <Services />
      <About />
      <Advert />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
