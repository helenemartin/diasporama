import React, { useState } from "react";
import DiaporamaData from "../../fixtures/diaporama.json";
import SlideMount from "components/slideMount/slideMount";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

const Div = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  height: 200px;
  max-width: 600px;
  position: relative;
  top: 25px;

  // @media (min-width: 900px) {
  //   width: 100%;
  // }
`;

const SlideWrapper = styled.div`
  max-width: 900px;
  height: 200px;
  position: relative;
  margin-top: 59px;
  overflow: hidden;
`;

const SliderNav = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 102px;

  // @media (min-width: 900px) {
  //   margin-left: 20px;
  // }
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
      <Div>
        <Wrapper {...handlers}>
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
      </Div>
      {/* <TextWrapper>
        {slidingArray.find((slide) => slide.index === currentSlide).paragraph}
      </TextWrapper> */}
    </>
  );
}
