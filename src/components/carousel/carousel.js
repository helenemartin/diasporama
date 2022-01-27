import React, { useState } from 'react'
import DiaporamaData from '../../fixtures/diaporama.json'
import SlideMount from 'components/slideMount/slideMount'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styled from 'styled-components'

const SlideWrapper = styled.div`
  width: 400px;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 59px;
`

const SliderNav = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-left: 25px;
`

export function Carousel() {
  const currentSlide = 2
  const [slidingArray, setSlidingArray] = useState(
    DiaporamaData.map((slide, index) => ({ ...slide, index }))
  )
  return (
    <>
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
            ])
          }}
        />

        {slidingArray[currentSlide].title}

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
    </>
  )
}
