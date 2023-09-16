import styled from "styled-components";

export const Section = styled.section`
  // background-color: black;
  display: flex;
  width: 50vw;

  justify-content: space-between;
  flex-direction: column-reverse;

  @media (min-width: 900px) {
    flex-direction: row-reverse;
    width: 100vw;
    height: 100vh;
  }
`;

export const Wrapper = styled.section`
  // margin: 0;
  position: relative;
  width: 100%;
  height: 60vh;
  flex-direction: column;

  @media (min-width: 900px) {
    width: 50vw;
    height: 100vh;
    flex-direction: row;
  }
`;

export const Figure = styled.figure`
  margin: 0;
  position: relative;
  width: 30vw;

  @media (min-width: 900px) {
    // flex-grow: 1;
    width: 50%;
  }
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
  position: absolute;
  top: 0;
  width: 200%;
  height: 60vh;

  background-color: rgba(0, 0, 0);
  color: white;
  z-index: 1;
  visibility: ${(props) => (props.flip ? "visible" : "hidden")};
  @media (min-width: 900px) {
    width: 50vw;
    height: 100vh;
  }
`;

export const TextDisplay = styled.h2`
  background-color: black;
`;

export const Image = styled.img`
  padding-top: 0;

  // position: fixed;
  object-fit: cover;
  border-radius: 15px;
  width: 200%;
  height: 60vh;

  @media (min-width: 900px) {
    width: 50vw;
    height: 100vh;
  }
`;
export const Figcaption = styled.figcaption`
  color: #eae2d2;
  font-size: 20px;
  z-index: 1;
`;

export const Header = styled.header`
  width: 100vw;
  height: 50vh;
  overflow: auto;

  @media (min-width: 900px) {
    width: 50vw;
    height: 100vh;
  }
`;

export const Textwrapper = styled.section`
  display: flex;
  // flex-direction: row;
  flex-wrap: wrap;
  padding: 5px 60px;
`;
export const H1 = styled.h1`
  font-weight: 900;
  font-size: 5rem;
  font-family: "Voyage-Regular", sans-serif;
`;

export const P = styled.p`
  font-size: 1em;
  line-height: 4em;
  font-family: "Baskerville"
`;

export const H2 = styled.h2`
  font-weight: 900;
  font-size: 10vh;
  color: #eae2d2;
  text-underline-offset: 38px;
  text-decoration: underline overline;
  font-family: "Voyage-Regular", sans-serif;
`;

export const Play = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:after {
    //play button
    // position: absolute;
    top: 12px;
    left: 12px;
    margin-right: -6px;
    display: block;
    content: "";
    box-sizing: border-box;
    border-color: transparent transparent transparent black;
    border-style: solid;
    border-width: 13px 0 13px 20px;
  }
`;
export const Pause = styled.button`
  border: none;
  background-color: transparent;
  // top: 12px;
  // left: 12px;
  left: 2px;
  top: 1px;
  cursor: pointer;
  height: 27px;
  width: 21px;
  padding: 1px;
  position: relative;
  &::before,
  &::after {
    background-color: #000;
    content: "";
    height: 24px;
    width: 2px;
    position: absolute;
    top: 0;
    left: 9px;
  }
  &::before {
    transform: rotate(180deg);
    left: 1px;
  }
  &::after {
    transform: rotate(180deg);
  }
`;

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 27px;
  width: 21px;
  padding: 0;
  position: relative;
  &::before,
  &::after {
    background-color: black;
    content: "";
    height: 24px;
    width: 2px;
    position: absolute;
    top: 0;
    left: 9px;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const CloseWrapper = styled.div`
  background: transparent;
  border: 2px solid black;
  border-radius: 30px;
  height: 36px;
  width: 36px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
  position: fixed;
  z-index: 4;
  top: 430px;
  bottom: 20px;
  right: 20px;
  &:hover {
    background-color: rgba(244, 225, 180, 0.9);
  }
  @media (min-width: 900px) {
    top: unset;
  }
`;

export const ButtonWrapper = styled.div`
  background: transparent;
  border: 2px solid black;
  border-radius: 30px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: fixed;
  height: 36px;
  width: 36px;
  z-index: 4;
  top: 430px;
  bottom: 20px;
  right: 80px;
  &:hover {
    background-color: rgba(244, 225, 180, 0.9);
  }
  @media (min-width: 900px) {
    top: unset;
  }
`;

export const Controlswrapper = styled.div`
  display: flex;
`;
export const Columnwrapper = styled.div`
  display: flex;
  // width: 80vw;
  flex-direction: row;

  @media (min-width: 900px) {
    flex-direction: column;
    width: 80vw;
  }
`;

export const Columnlayout = styled.div`
  display: flex;

  // flex-direction: row;
  @media (min-width: 900px) {
    width: 100%;
  }
`;

export const Column = styled.div`
  column-count: 1;
  // align-items: flex-start;
  line-height: 1.6;
  font-size: 1rem;
  color: black;

  @media (min-width: 900px) {
    column-count: 2;
    width: 100%;
    padding-bottom: 20px;
    column-gap: 28px;
    line-height: 1.6;
    align-items: flex-end;
  }
`;
