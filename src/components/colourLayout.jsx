import React from "react";
import Navbar from "../components/nav/Navbar";
import styled from "styled-components";

const ThemeContainer = styled.div`
background-color: ${(props) => props.isDarkTheme?"black" : " #eae2d2"};
color: ${(props) => props.isDarkTheme? "#eae2d2" : "black "};
`;



export default function ColourLayout(props) {
  return (
    <ThemeContainer isDarkTheme = {props.isDarkTheme}>
      <Navbar />
      {props.children}
    </ThemeContainer>
  );
}