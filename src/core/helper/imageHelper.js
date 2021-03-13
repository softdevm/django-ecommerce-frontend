import React from "react";

const ImageHelper = ({ product }) => {
  const imageUrl = product
    ? product.image
    : `https://www.dia.org/sites/default/files/No_Img_Avail.jpg`;
  return (
    <div className="rounded border border-success p2">
      <img
        className="mb3 rounded"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        src={imageUrl}
        alt="Product Image"
      />
    </div>
  );
};

export default ImageHelper;
