import React, { useState } from "react";
import DiaporamaData from "../../fixtures/diaporama.json";
import SlideMount from "components/slideMount/slideMount";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
import { breakPoints } from "../../styling/constants";

const Div = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 600px;
  position: relative;

  @media (min-width: ${breakPoints.tablet}) {
    width: 100vw;
  }
`;

const SlideWrapper = styled.div`
  position: relative;
  max-width: 600px;
  height: 317px;
  margin-top: 59px;
  overflow: hidden;
  @media (min-width: ${breakPoints.tablet}) {
    height: 203px;
  }
`;

const SliderNav = styled.div`
  align-items: center;

  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: ${breakPoints.tablet}) {
    width: 210px;
    margin: 20px 0 0 102px;
  }
`;

const SliderParagraph = styled.p`
  margin: 0 24px;
  padding: 0;
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

            <SliderParagraph>
              {slidingArray.find((slide) => slide.index === currentSlide).title}
            </SliderParagraph>

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
