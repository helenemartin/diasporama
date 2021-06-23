import React from "react";
// import Images from "../images.js"
import useSound from "use-sound";
import click from "../sound/click.mp3";
import { useState, useEffect, useRef } from "react";

export default function Flicker(props) {
  const [flip, setFlip] = useState(true);
  const [imageNumber, setImageNumber] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound] = useSound(click, { volume: 0.03 });
  //   const sound = new Audio("/diasporama/sound/single-click-slide-pojector.mp3");
  const timer = useRef(null); // we can save timer in useRef and pass it to child
  const Images = props.diaporama;

  useEffect(() => {
    const imagesLength = Images.length;
    const id = setInterval(() => {
      if (isPlaying) {
        setFlip((flip) => !flip);
        timer.current = setTimeout(() => setFlip(false), 5000);
        console.log(isPlaying);
        setImageNumber((imageNumber) => (imageNumber + 1) % imagesLength);
        sound();
      }
    }, 4500);
    return () => clearInterval(id);
  }, [Images.length, isPlaying, sound]);

  // const boxClass = flip ? "boxFlickerBlack" : "boxFlickerClear";
  const diaporama = Images[imageNumber];
  const textDisplay = flip ? "text" : "notext";
  return (
    <>
      <section>
        <header>
          <h1>{props.title}</h1>
        </header>
        <figure
          onMouseEnter={() => {
            setIsPlaying(true);
          }}
          onMouseLeave={() => {
            setFlip(true);
            setIsPlaying(false);
            clearTimeout(timer.current);

            // diaporama.image[0];
            //reset slide show to first text
            setImageNumber(0);
          }}
        >
          <div className={textDisplay}>
            <h2>{diaporama.text}</h2>
            <figcaption>
              {imageNumber + 1} / {Images.length}
            </figcaption>
          </div>
          <img
            className=" imageFit "
            alt={diaporama.alt}
            src={`/diasporama${diaporama.image}`}
          />
        </figure>
      </section>
    </>
  );
}
