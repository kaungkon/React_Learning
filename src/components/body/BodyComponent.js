import React from 'react';
import { Route, Routes} from "react-router-dom";
import Home from "./Home";
import MenuComponent from "./MenuComponent";
import Contact from "./Contact";
import About from "./About";



const BodyComponent = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={< MenuComponent />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  )
};

export default BodyComponent;