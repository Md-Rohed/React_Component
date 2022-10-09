import React from "react";

export const ImageList = (props) => {
  const images = props.image.map((images) => {
    return (
      <img key={images.id} alt={images.description} src={images.urls.regular} />
    );
  });

  return <div> {images}</div>;
};
