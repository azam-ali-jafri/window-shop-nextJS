import React from "react";
import axios from "axios";

const ProductDetailPage = async ({ params }: { params: { productId: string } }) => {
  const { data: product } = await axios.get(`http://localhost:3000/api/p/${params.productId}`);

  return <div></div>;
};

export default ProductDetailPage;
