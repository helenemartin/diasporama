import React from "react";
import featureData from "../fixtures/diaporama.json";
import Feature, { Container } from "../components/feature";
// import Photo from "../images/animinage1.jpg";

export default function FeatureContainer() {
  return (
    <Feature.Container>
      {featureData.map((diaporama) => (
        <Feature
          key={diaporama.id}
          direction={diaporama.direction}
          color={diaporama.color}
          border={diaporama.border}
        >
          <Feature.Pane>
            <Feature.Title>{diaporama.title}</Feature.Title>
            <Feature.Paragraph>{diaporama.paragraph}</Feature.Paragraph>
          </Feature.Pane>
          <Feature.Pane>
            <Feature.Image
              src={process.env.PUBLIC_URL + diaporama.diapo[0].image}
              alt={diaporama.diapo[0].alt}
            />
          </Feature.Pane>
        </Feature>
      ))}
    </Feature.Container>
  );
}
