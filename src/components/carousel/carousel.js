import React, { useState } from "react";
import DiaporamaData from "../../fixtures/diaporama.json";
import SlideMount from "components/slideMount/slideMount";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Section = styled.section`
  display: flex;
`;

const SlideWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 59px;
  transform: translateX(${(props) => props.currentSlide * -200}px);
  transition: all 300ms ease-out;
`;

const Navigation = styled.div`
  margin: 275px;
  inline: block;
`;

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Section>
      <SlideWrapper currentSlide={currentSlide}>
        {DiaporamaData.map((diaporama, index) => (
          <SlideMount
            diaporama={diaporama}
            key={diaporama.id}
            index={index}
            currentSlide={currentSlide}
            title={diaporama.title}
          />
        ))}
      </SlideWrapper>
      <Navigation>
        <FaChevronLeft
          onClick={() =>
            setCurrentSlide(
              (prevCurrentSlide) =>
                (prevCurrentSlide - 1) % DiaporamaData.length
            )
          }
          // onClick={() =>
          //   setCurrentSlide((prevCurrentSlide) =>
          //     prevCurrentSlide > 0
          //       ? prevCurrentSlide + 1
          //       : DiaporamaData.length - 1
          //   )
          // }
        />

        {/* {DiaporamaData.map((diaporama, index) => (
          <h1 currentSlide={currentSlide} key={index} >
            {diaporama.title}
          </h1>
        ))} */}
        {currentSlide}

        <FaChevronRight
          onClick={() =>
            setCurrentSlide(
              (prevCurrentSlide) =>
                (prevCurrentSlide + 1) % DiaporamaData.length
            )
          }
          // onClick={() =>
          //   setCurrentSlide((prevCurrentSlide) =>
          //     prevCurrentSlide < DiaporamaData.length + 1
          //       ? prevCurrentSlide + 1
          //       : 0
          //   )
          // }
        />
      </Navigation>
    </Section>
  );
}
