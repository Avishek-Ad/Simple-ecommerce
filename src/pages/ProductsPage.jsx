import React, { useContext } from "react";
import { GlobalContext } from "../context";
import ProductCard from "../components/ProductCard";
import NextBatchUI from "../components/NextBatchUI";

const ProductsPage = () => {
  const { products, loading } = useContext(GlobalContext);
  if (loading)
    return <div className="w-full h-screen">
      <h1 className="text-center text-2xl font-bold">Loading...</h1>
    </div>;
  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap justify-center gap-10 w-5/6 mx-auto">
        {products.length > 1
          ? products?.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                id={product.id}
                price={product.price}
                image={product.thumbnail}
              />
            ))
          : null}
      </div>
      <NextBatchUI />
    </div>
  );
};

export default ProductsPage;
