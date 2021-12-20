import React from "react";
// import FeatureContainer from "../containers/feature";
// import Project from "../components/project";
import Navbar from "../components/nav/Navbar";
import { Carousel } from "../components/carousel/carousel";

export function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      {/* <Project /> */}
      {/* <FeatureContainer />; */}
    </>
  );
}
