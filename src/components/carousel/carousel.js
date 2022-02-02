import React, { useState } from "react";
import DiaporamaData from "../../fixtures/diaporama.json";
import SlideMount from "components/slideMount/slideMount";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

const Wrapper = styled.div`
  height: 200px;
  width: 200px;
  position: relative;
  margin: 0 auto;
`;

const SlideWrapper = styled.div`
  width: 500px;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 59px;
`;

const SliderNav = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
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
            slide.index < 1 ? prevSlidingArray.length - 1 : slide.index - 1,
        })),
      ]);
    },
    // trackMouse: true,
    trackTouch: true,
    preventDefaultTouchmoveEvent: false,
  });

  return (
    <>
      <Wrapper>
        <section>
          <SlideWrapper currentSlide={currentSlide} {...handlers}>
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
