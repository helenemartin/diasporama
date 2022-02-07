import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {CustomLink} from "../customLink"


const Ul = styled.ul`
  z-index: 1;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  // display: none;

  @media (max-width: 768px) {
    align-items: flex-end;
    justify-content: space-evenly;
    flex-flow: column nowrap;
    background-color: #eae2d2;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(-0)" : "translateX(-100%)")};
    top: 45px;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding: 36px;
    transition: transform 0.9s ease-in-out;
    margin: 0;
    
    
  }
`;

const StyledLink  = styled(Link)`      
   
    margin-left: 120px;
     text-decoration: none;
     justify-content: space-between;
    
   
      position: relative;
      color: #000;
      text-decoration: none;
    
    
    &:hover {
      // font-family: "Voyage-Regular";
      color: crimson;
    }
    
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: crimson;
      transform: scaleX(0);
      transform-origin: top right;
      transition: transform 0.3s ease;
    }
    
    &:hover::before {
      transform: scaleX(1);
    }
    }
`;

const RightNav = ({ open }) => {
  console.log("nvState", open);
  return (
 
    <Ul open={open}>
      <CustomLink><StyledLink to="/projects">Projects</StyledLink></CustomLink>
      <CustomLink><StyledLink to="/reviews">Reviews</StyledLink>  </CustomLink>  
      <CustomLink><StyledLink to="/contact">Contact</StyledLink> </CustomLink> 
    </Ul>

    
  );
};

export default RightNav;