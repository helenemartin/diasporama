import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakPoints } from "../../styling/constants";
// import { CustomLink } from "../customLink";

//rfc
const Wrapper = styled.div`
  //height: 100%;
  position: absolute;
  //left: 85px;
  //margin: auto;
  opacity: ${(props) =>
    //   // props.position === -1 ? 0 : props.position === 2 ? 0 : 1};
    //   //after adding a 5th slide
    props.position === -2 ? 0 : props.position === 2 ? 0 : 1};

  //opacity: 1;
  transform: translateX(${(props) => props.position * 300}px);

  transition: all 300ms ease-out;
  //@media 600px
  @media (min-width: ${breakPoints.tablet}) {
    width: 200px;
    height: 200px;
    transform: translateX(${(props) => props.position * 210}px);
    left: 140px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 284px;
  height: 300px;
  @media (min-width: ${breakPoints.tablet}) {
    width: 200px;
    height: 200px;
  }
  @media (min-width: 769px) {
  }
  @media (min-width: 769px);
`;
const Image1 = styled.img`
  position: absolute;
  border-radius: 5px;
  object-fit: cover;
  height: 200px;
  width: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: ${breakPoints.tablet}) {
    height: 150px;
    width: 150px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Image2 = styled.img`
  height: 100%;
  width: 100%;
  //z-index: 1;
  filter: drop-shadow(0 0.1rem 0.2rem crimson);
  border: 2px solid deeppink;
  border-radius: 15px;
`;

export default function SlideMount(props) {
  // console.log(props.diaporama);
  // console.log(props.currentSlide);
  console.log(props.diaporama.title, props.index);
  return (
    <>
      <Wrapper
        className="iAmSlideMountWrapper"
        position={props.currentSlide - props.index}
        index={props.index}
      >
        {/* <CustomLink> */}
        <Link to={`projects/${props.diaporama.slug}`} key={props.diaporama.id}>
          <ImageWrapper className="iAmImageWrapper">
            <Image1
              src={process.env.PUBLIC_URL + props.diaporama.slugImage}
              alt={props.diaporama.diapo.alt}
            />
            <Image2
              src={process.env.PUBLIC_URL + props.diaporama.slugSlide}
              alt={props.diaporama.slideAlt}
            />
          </ImageWrapper>
        </Link>
        {/* </CustomLink> */}
      </Wrapper>
    </>
  );
}
// @keyframes glow {
//   0% {
//     box-shadow: rgb(252, 210, 23) 0 0 0px;
//   }
//   100% {
//     box-shadow: rgb(252, 210, 23) 0 10px 100px;
//   }
// }
// const Image2 = styled.div.attrs(({props.currentSlide}) => ({
//   style: {
//     animation: $currentSlide ? 'glow 3s infinite alternate' : 'none',
//   },
// }))`
