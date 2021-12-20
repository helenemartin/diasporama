import React, { useState } from "react";
import DiaporamaData from "../../fixtures/diaporama.json";
import SlideMount from "components/slideMount/slideMount";
import styled from "styled-components";
import "./carousel.css";

const SlideWrapper = styled.div`
  position: relative;
  margin-top: 59px;
  transform: translateX(${(props) => props.currentSlide * -200}px);
  transition: all 300ms ease-out;
`;

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section>
      {currentSlide}
      <button
        onClick={() =>
          setCurrentSlide((prevCurrentSlide) =>
            prevCurrentSlide > 0
              ? prevCurrentSlide - 1
              : DiaporamaData.length - 1
          )
        }
      >
        {" "}
        avant{" "}
      </button>
      <button
        onClick={() =>
          setCurrentSlide((prevCurrentSlide) =>
            prevCurrentSlide < DiaporamaData.length - 1
              ? prevCurrentSlide + 1
              : 0
          )
        }
      >
        {" "}
        après{" "}
      </button>
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
    </section>
  );
}
