import React, { useState } from "react";
import DiaporamaData from "../../fixtures/diaporama.json";
import SlideMount from "components/slideMount/slideMount";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

const Wrapper = styled.div`
  height: 200px;
  width: 300px;
  position: relative;
  top: 25px;
  margin: 0 auto;
`;

const SlideWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 59px;
  // @media (min-width: 900px) {
  //   right: 252px;
  // }
`;

const SliderNav = styled.div`
  // width: 200px;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  margin-left: 50px;

  @media (min-width: 900px) {
  }
`;

// const TextWrapper = styled.div`
//   width: 100vw;
//   height: 50vh;
//   display: flex;
//   justify-content: space-between;
//   opacity: 1;
//   transition: 4s;
//   padding: 30px;
// `;

export function Carousel() {
  const currentSlide = 2;
  const [slidingArray, setSlidingArray] = useState(
    DiaporamaData.map((slide, index) => ({ ...slide, index }))
  );
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setSlidingArray((prevSlidingArray) => [
        ...prevSlidingArray.map((slide) => ({
          ...slide,
          index:
            slide.index < 1 ? prevSlidingArray.length - 1 : slide.index - 1,
        })),
      ]);
    },
    onSwipedRight: () => {
      setSlidingArray((prevSlidingArray) => [
        ...prevSlidingArray.map((slide) => ({
          ...slide,
          index:
            slide.index > prevSlidingArray.length - 2 ? 0 : slide.index + 1,
        })),
      ]);
    },
    // trackMouse: true,
    trackTouch: true,
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <>
      <Wrapper {...handlers}>
        <section>
          <SlideWrapper currentSlide={currentSlide}>
            {slidingArray.map((diaporama) => (
              <SlideMount
                diaporama={diaporama}
                key={diaporama.id}
                index={diaporama.index}
                currentSlide={currentSlide}
              />
            ))}
          </SlideWrapper>
        </section>
        <SliderNav>
          <FaChevronLeft
            onClick={() => {
              setSlidingArray((prevSlidingArray) => [
                ...prevSlidingArray.map((slide) => ({
                  ...slide,
                  index:
                    slide.index < 1
                      ? prevSlidingArray.length - 1
                      : slide.index - 1,
                })),
              ]);
            }}
          />

          {slidingArray.find((slide) => slide.index === currentSlide).title}

          <FaChevronRight
            onClick={() =>
              setSlidingArray((prevSlidingArray) => [
                ...prevSlidingArray.map((slide) => ({
                  ...slide,
                  index:
                    slide.index > prevSlidingArray.length - 2
                      ? 0
                      : slide.index + 1,
                })),
              ])
            }
          />
        </SliderNav>
      </Wrapper>
      {/* <TextWrapper>
        {slidingArray.find((slide) => slide.index === currentSlide).paragraph}
      </TextWrapper> */}
    </>
  );
}
