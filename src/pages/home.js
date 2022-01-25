import React from "react";
// import FeatureContainer from "../containers/feature";
// import Project from "../components/project";
// import ColourLayout from "../components/colourLayout.jsx";
import Navbar from "../components/nav/Navbar";
import { Carousel } from "../components/carousel/carousel";
// import Marquee from "../components/marquee";

export function Home() {
  return (
    <>
      <Navbar />
      <Carousel />

      {/* <Marquee /> */}
      {/* <Project /> */}
      {/* <FeatureContainer />; */}
    </>
  );
}
