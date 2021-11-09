import React from "react";
import styled from "styled-components";
// import {Header} from "./components/header";


const Nav = styled.nav`
  width: 100%;
  height: 100%;
//  height: ${({ shrinkNav }) => (shrinkNav ? "90px" : "700px")};
  border-bottom: 2px solid #f1f1f1;
  background-color: white;
  padding: 0 20px;
  display: flex;
//   justify-content: space-between;
  justify-content: center;
  align-items: center;
  position: sticky;
  margin:0;
  top: 0;
  z-index: 10;
  transition: height 0.5s;
  animation-timing-function: linear;
  
  .logo {
    font-family: "YoungSerif", sans-serif;
    // font-size: ${({ shrink }) => (shrink ? "3rem" : "100px")};
    font-size: 40px;
    padding: 15px 0;
    //transition: font-size 2s;
  }
`;



export default function Navbar(){

  // const [shrink, setShrink] = useState(window.scrollY > 870);
  // const [shrinkNav, setShrinkNav] = useState(window.scrollY > 870);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
      
       
  //     if (window.scrollY > 870) {
  //         setShrinkNav(true)
  //     };
  //    if  (window.scrollY > 870) {
  //   setShrink(true) 
            
  //    };
  //   });
  // }, []);

  
 
  return (
    
    <Nav >
      <div className="logo" id="logoShrink">
   
      Provisional Title
        
      </div>
      {/* <Header /> */}
    </Nav>
    
  );
};
