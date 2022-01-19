import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//rfc
const Wrapper = styled.div`
  width: 200px;
  height: 100px;
  position: absolute;
  opacity: 1;

  transform: translateX(0);
  left: ${(props) => props.index * -200}px;

  img {
    width: 100%;
    position: absolute;
    object-fit: contain;
    z-index: 1;
  }
`;

// const Image1 = styled.img`
//   position: relative;
//   width: 100%;
// `;

// const Image2 = styled.img`
//   position: absolute;
//   object-fit: cover;
//   width: 100%;
//   z-index: 1;
// `;

export default function SlideMount(props) {
  // console.log(props.diaporama);
  // console.log(props.currentSlide);
  // console.log(props.index);
  return (
    <>
      <Wrapper current={props.currentSlide === props.index} index={props.index}>
        <Link to={`projects/${props.diaporama.slug}`} key={props.diaporama.id}>
          <img
            src={process.env.PUBLIC_URL + props.diaporama.slugImage}
            alt={props.diaporama.diapo.alt}
          />
          <img
            src={process.env.PUBLIC_URL + props.diaporama.slugSlide}
            alt={props.diaporama.slideAlt}
          />
        </Link>
      </Wrapper>
    </>
  );
}
