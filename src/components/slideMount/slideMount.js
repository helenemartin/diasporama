import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { CustomLink } from "../customLink";

//rfc
const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50px;
  opacity: ${(props) =>
    // props.position === -1 ? 0 : props.position === 2 ? 0 : 1};
    //after adding a 5th slide
    props.position === -2 ? 0 : props.position === 2 ? 0 : 1};

  //opacity: 1;

  transform: translateX(${(props) => props.position * 230}px);

  transition: all 300ms ease-out;

  // img {
  //   width: 100%;
  //   position: absolute;
  //   object-fit: contain;
  //   z-index: 1;
  // }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;
const Image1 = styled.img`
  position: relative;
  border-radius: 5px;
  object-fit: constrain;
  height: 180px;
  width: 180px;
  top: 10px;
  right: 9px;
`;

const Image2 = styled.img`
  position: absolute;
  width: 100%;
  z-index: 1;
  right: 30px;
  top: -2px;
`;

export default function SlideMount(props) {
  // console.log(props.diaporama);
  // console.log(props.currentSlide);
  console.log(props.diaporama.title, props.index);
  return (
    <>
      <Wrapper position={props.currentSlide - props.index} index={props.index}>
        {/* <CustomLink> */}
        <Link to={`projects/${props.diaporama.slug}`} key={props.diaporama.id}>
          <ImageWrapper>
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
