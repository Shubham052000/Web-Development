import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const params = useParams();

  console.log(params.productId);
  return (
    <section>
      <h1>{params.productId}</h1>
    </section>
  );
};

export default ProductDetail;
