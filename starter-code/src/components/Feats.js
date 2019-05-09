import React from "react";
import Card from "../components/Card";

const feat = (image, alt, heading, paragraph) => {
  return {
    image,
    alt,
    heading,
    paragraph
  };
};

function Feats() {
  const feat1 = feat(
    "images/icon1.png",
    "DeclarIcon",
    "Declarative",
    "React makes it painless to create interactive UIs."
  );
  const feat2 = feat(
    "images/icon2.png",
    "CompIcon",
    "Components",
    "Build encapsulated components that manage their state"
  );
  const feat3 = feat(
    "images/icon3.png",
    "SingleIcon",
    "Single-Way",
    "A set of inmutable values are passed to the components"
  );
  const feat4 = feat(
    "images/icon4.png",
    "JSXIcon",
    "JSX",
    "Statically-typed, designed to run on modern browsers."
  );
  return (
    <section className="uk-section">
      <div className="uk-container uk-container-xlarge">
        <div
          className="uk-child-width-expand uk-grid-small uk-grid-match"
          uk-grid=""
        >
          <Card feat={feat1} />
          <Card feat={feat2} />
          <Card feat={feat3} />
          <Card feat={feat4} />
        </div>
      </div>
    </section>
  );
}

export default Feats;
