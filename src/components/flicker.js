import React from "react";
// import Images from "../images.js"
import useSound from "use-sound";
import click from "../sound/click.mp3";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import View from "./view";

export default function Flicker(props) {
  const [flip, setFlip] = useState(true);
  const [imageNumber, setImageNumber] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound] = useSound(click, { volume: 0.1 });
  const timer = useRef(null); // we can save timer in useRef and pass it to child
  const Images = props.diaporama;

  useEffect(() => {
    const imagesLength = Images.length;
    const id = setInterval(() => {
      if (isPlaying) {
        setFlip((flip) => !flip);
        timer.current = setTimeout(() => setFlip(false), 5000);
        setImageNumber((imageNumber) => (imageNumber + 1) % imagesLength);
        sound();
      }
    }, 4500);
    return () => clearInterval(id);
  }, [Images.length, isPlaying, sound]);
  const diaporama = Images[imageNumber];

  // const columnLeft = [];

  // const columnRight = [];
  // props.paragraph.forEach((paragraph, index) => {
  //   if (index % 2 === 0) {
  //     columnLeft.push(paragraph);
  //   } else {
  //     columnRight.push(paragraph);
  //   }
  // });
  const text = props.paragraph;
  // const splitText = text.split(".");
  // const columnLeft = splitText.slice(0, splitText.length / 2);
  // const columnRight = splitText.slice(splitText.length / 2, splitText.length);
  // console.log(columnRight);

  return (
    <>
      <View.Section>
        <View.Header>
          <View.Textwrapper>
            <View.H1>{props.title}</View.H1>
            <View.Columnwrapper>
              <View.Columnlayout>
                <View.Column>{text}</View.Column>
              </View.Columnlayout>
            </View.Columnwrapper>
          </View.Textwrapper>
          <View.Controlswrapper>
            <View.ButtonWrapper
              onClick={() => {
                setIsPlaying(!isPlaying);
              }}
            >
              {isPlaying ? <View.Pause /> : <View.Play />}
            </View.ButtonWrapper>

            <View.CloseWrapper>
              <Link to="/projects">
                <View.Close />
              </Link>
            </View.CloseWrapper>
          </View.Controlswrapper>
        </View.Header>
        <View.Wrapper>
          <View.Image
            alt={diaporama.alt}
            src={process.env.PUBLIC_URL + `${diaporama.image}`}
          />

          <View.Text flip={flip}>
            <View.H2>{diaporama.text}</View.H2>
            <View.Figcaption>
              {imageNumber + 1} / {Images.length}
            </View.Figcaption>
          </View.Text>
          {/* <p>{diaporama.paragraph}</p> */}
        </View.Wrapper>
      </View.Section>
    </>
  );
}
