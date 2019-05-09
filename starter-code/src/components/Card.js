import React from "react";

function Card(props) {
  const {image,alt,heading,paragraph} = props.feat;
  return (
    <div>
      <div className="uk-card uk-card-hover uk-card-small">
        <div className="uk-card-media-top">
          <img src={image} alt={alt} />
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title uk-text-bold primary-font secondary-color">
            {heading}
          </h3>
          <p className="primary-font muted-color">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
