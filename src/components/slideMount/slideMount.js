import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CustomLink } from "../customLink";

//rfc
const Wrapper = styled.div`
  width: 200px;
  height: 500px;
  position: absolute;
  opacity: ${(props) =>
    props.position === -1 ? 0 : props.position === 2 ? 0 : 1};

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
`;
const Image1 = styled.img`
  position: relative;
  object-fit: cover;
  width: 100%;
`;

const Image2 = styled.img`
  position: absolute;

  width: 100%;
  z-index: 1;
`;

export default function SlideMount(props) {
  // console.log(props.diaporama);
  // console.log(props.currentSlide);
  console.log(props.diaporama.title, props.index);
  return (
    <>
      <Wrapper position={props.currentSlide - props.index} index={props.index}>
        <CustomLink>
          <Link
            to={`projects/${props.diaporama.slug}`}
            key={props.diaporama.id}
          >
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
        </CustomLink>
      </Wrapper>
    </>
  );
}
