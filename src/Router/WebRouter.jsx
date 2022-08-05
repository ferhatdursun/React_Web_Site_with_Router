import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Services from "../pages/Services";
import Header from "../components/Header";
import Foother from "../pages/Foother";
import HtmlDetails from "../pages/HtmlDetails";
import CssDetails from "../pages/CssDetails";
import GraphicDetails from "../pages/GraphicDetails";

const WebRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/HtmlDetails" element={<HtmlDetails />} />
        <Route path="/CssDetails" element={<CssDetails />} />
        <Route path="/GraphicDetails" element={<GraphicDetails />} />
      </Routes>
      <Foother />
    </BrowserRouter>
  );
};

export default WebRouter;
