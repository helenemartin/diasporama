import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//rfc
const Wrapper = styled.div`
  width: 200px;
  height: 100px;
  position: absolute;
  opacity: 1;
  transform: translateX();
  left: ${(props) => props.index * 200}px;

  img {
    width: 100%;
  }
`;

export default function SlideMount(props) {
  return (
    <Wrapper current={props.currentSlide === props.index} index={props.index}>
      <Link to={`Projects/${props.diaporama.slug}`} key={props.diaporama.id}>
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
  );
}
