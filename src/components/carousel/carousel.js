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
  transform: translateX(-200px);
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
          />
        ))}
      </SlideWrapper>
      <Navigation>
        <FaChevronLeft
          onClick={() => {
            setCurrentSlide((prevCurrentSlide) =>
              prevCurrentSlide > 0
                ? prevCurrentSlide - 1
                : DiaporamaData.length - 1
            );

            DiaporamaData.push(DiaporamaData.shift());
            // setCurrentSlide(0);
          }}
        />

        {DiaporamaData[0].title}

        <FaChevronRight
          onClick={() => {
            setCurrentSlide((prevCurrentSlide) =>
              // (prevCurrentSlide + 1) % DiaporamaData.length
              prevCurrentSlide == DiaporamaData.length - 1
                ? 0
                : prevCurrentSlide + 1
            );
            DiaporamaData.unshift(DiaporamaData.pop());
            // setCurrentSlide(0);
          }}
        />
      </Navigation>
    </Section>
  );
}
