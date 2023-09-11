import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import {CustomLink} from "../customLink";
import {breakPoints} from "../../styling/constants";


const Nav = styled.nav`
align-items: center; 
background: #f1efe9;
  width: 100%;
  // height: ${({ shrinkNav }) => (shrinkNav ? "90px" : "150px")};
  border-bottom: 1px solid black;
 
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  position: sticky;
  top: 0;
  z-index: 3;
  .h1 {
    font-family: "Voyage-Regular", sans-serif;
    padding: 15px 0;
    text-decoration: none;
  }
  @media (max-width: ${breakPoints.tablet}){
    background: #f1efe9;
  }
`;

const StyledLink  = styled(Link)`
     text-decoration: none;
     color:black;
     font-family: "Voyage-Regular";
     font-size:2.5em;
     display: flex;
    align-items: center;
`;

const Navbar = () => {
  // const [shrink, setShrink] = useState(false);
  // const [shrinkNav, setShrinkNav] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setShrink(window.scrollY > 60);
  //     setShrinkNav(window.scrollY > 870);
  //   });
  // }, [setShrink]);

  
 
  return (
      <Nav>
        <CustomLink><StyledLink to="/">Racoonteuse</StyledLink></CustomLink>
      
      <Burger />
    </Nav>
    
  );
};
export default Navbar;
