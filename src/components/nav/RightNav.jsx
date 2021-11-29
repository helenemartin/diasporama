import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Ul = styled.ul`
  z-index: 1;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
 
  

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #eae2d2;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 40px;
    right: 0;
    height: 100vh;
    width: 100vw;
    margin-top: 70px;
    padding-top: 3.5rem;
    transition: transform 0.9s ease-in-out;
    margin: 0;
    
    
  }
`;

const StyledLink  = styled(Link)`      
   
    margin-right: 120px;
     text-decoration: none;
     justify-content: space-between;
    
   
      position: relative;
      color: #000;
      text-decoration: none;
    
    
    &:hover {
      font-family: "Voyage-Regular";
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
  return (
    <Ul open={open}>
      <StyledLink to="/Projects">Projects</StyledLink>
      <StyledLink to="/Reviews">Reviews</StyledLink>    
      <StyledLink to="/Contact">Contact</StyledLink>  
    </Ul>
  );
};

export default RightNav;