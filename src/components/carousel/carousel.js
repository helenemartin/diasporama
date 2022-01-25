// import React, { useState } from "react";
// import DiaporamaData from "../../fixtures/diaporama.json";
// import SlideMount from "components/slideMount/slideMount";
// import styled from "styled-components";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Section = styled.section`
//   display: flex;
// `;

// const SlideWrapper = styled.div`
//   display: flex;
//   position: relative;
//   margin-top: 59px;
//   transform: ${(props) => props.index * -200}px;
//   transition: all 300ms ease-out;
//   opacity: 1;
// `;

// const Navigation = styled.div`
//   margin: 275px;
//   inline: block;
// `;

// export function Carousel() {
//   // const [currentSlide, setCurrentSlide] = useState(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [prevIndex, setPrevIndex] = useState(0);
//   const [nextIndex, setNextIndex] = useState(0);
//   const handleRightChevronClick = () => {
//     setCurrentIndex(calculateNextIndex());
//     setPrevIndex(calculatePrevIndex());
//     setNextIndex(calculateNextIndex());
//   };
//   const calculateNextIndex = () => {
//     return (currentIndex + 1) % DiaporamaData.length;
//   };
//   const handleLeftChevronClick = () => {
//     setCurrentIndex(calculatePrevIndex());
//     setPrevIndex(calculatePrevIndex());
//     setNextIndex(calculateNextIndex());
//   };
//   const calculatePrevIndex = () => {
//     let nextIndex = currentIndex - 1;
//     let next = nextIndex < 0 ? nextIndex + DiaporamaData.length : nextIndex;
//     return next;
//   };

//   return (
//     <Section>
//       <SlideWrapper currentSlide={currentIndex}>
//         {[prevIndex, currentIndex, nextIndex].map((index) => (
//           <SlideMount
//             diaporama={DiaporamaData[index]}
//             key={DiaporamaData[index].id}
//             index={index}
//             currentSlide={index}
//           />
//         ))}
//       </SlideWrapper>
//       <Navigation>
//         <FaChevronLeft onClick={handleLeftChevronClick} />

//         {DiaporamaData[currentIndex].title}

//         <FaChevronRight onClick={handleRightChevronClick} />
//       </Navigation>
//     </Section>
//   );
// }
import React, { useEffect, useState } from "react";
import DiaporamaData from "../../fixtures/diaporama.json";
import SlideMount from "components/slideMount/slideMount";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

const SlideWrapper = styled.div`
  position: relative;
  margin-top: 59px;
  transform: translateX(${(props) => props.currentSlide * 200}px);
  transition: all 300ms ease-out;
`;

const SliderNav = styled.div`
  margin-top: 272px;
  margin-left: 25px;
`;

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidingArray = [...DiaporamaData, ...DiaporamaData];

  useEffect(() => {
    if (currentSlide >= 2) {
      console.log(currentSlide);
    } else {
    }
  }, [currentSlide]);

  return (
    <>
      <section>
        <SlideWrapper currentSlide={currentSlide}>
          {slidingArray.map((diaporama, index) => (
            <SlideMount
              diaporama={diaporama}
              key={diaporama.id}
              index={index}
              currentSlide={currentSlide}
            />
          ))}
        </SlideWrapper>
      </section>
      <SliderNav>
        <FaChevronLeft
          onClick={() => {
            setCurrentSlide((prevCurrentSlide) =>
              prevCurrentSlide > 0
                ? prevCurrentSlide - 1
                : slidingArray.length - 1
            );

            // slidingArray.push(slidingArray.shift());
            // setCurrentSlide(0);
          }}
        />

        {slidingArray[currentSlide].title}

        <FaChevronRight
          onClick={() => {
            setCurrentSlide((prevCurrentSlide) =>
              // (prevCurrentSlide + 1) % DiaporamaData.length
              prevCurrentSlide === slidingArray.length - 1
                ? 0
                : prevCurrentSlide + 1
            );
            // slidingArray.unshift(slidingArray.pop());
            // setCurrentSlide(0);
          }}
        />
      </SliderNav>
    </>
  );
}
