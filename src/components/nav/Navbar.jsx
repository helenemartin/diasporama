import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import {CustomLink} from "../customLink"

const Nav = styled.nav`
align-items: center; */
    justify-content: space-evenly;
background-color: #eae2d2;
  width: 100%;
  // height: ${({ shrinkNav }) => (shrinkNav ? "90px" : "150px")};
  border-bottom: 1px solid black;
  background-color: ;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 3;
  .h1 {
    font-family: "Voyage-Regular", sans-serif;
    padding: 15px 0;
    text-decoration: none;
  }
`;

const StyledLink  = styled(Link)`
     text-decoration: none;
     color:black;
     font-family: "Voyage-Regular";
     font-size:2em;
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
