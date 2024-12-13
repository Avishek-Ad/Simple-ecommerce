import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { Toaster } from "react-hot-toast";

const IndividualProductPage = () => {
  const { getProductById, currentProduct, loading, addToCart } = useContext(GlobalContext);
  const { id: productId } = useParams();
  const [thumbnail, setThumbnail] = useState(currentProduct?.thumbnail);

  useEffect(() => {
    setThumbnail(null)
    getProductById(productId);
  }, []);

  if (loading)
    return <div className="w-full h-full">
      <h1 className="text-center text-2xl font-bold">Loading...</h1>
    </div>;
  return (
    <div className="flex flex-col gap-20 w-full">
      <div className="flex flex-col sm:flex-col lg:flex-row gap-5 w-4/5 mx-auto">
        <div className="w-full">
          <img
            className="sm:w-1/2 lg:w-full mx-auto rounded"
            src={thumbnail || currentProduct?.thumbnail}
            alt={currentProduct?.title}
          />
        </div>
        <div className="lg:border-l-2 sm:pt-5 lg:border-t-0 sm:border-t-2 pl-10 flex flex-col gap-3">
          <div>
            <h3 className="text-sm text-blue-500">
              <span className="font-semibold text-black">Brand : </span>
              {" " + currentProduct?.brand}
            </h3>
            <h1 className="text-2xl font-bold">{currentProduct?.title}</h1>
          </div>
          <div className="flex flex-row gap-5 text-sm font-medium px-5">
            <p>Rating :{" " + currentProduct?.rating}</p>
            <p>Available in stock :{" " + currentProduct?.stock}</p>
          </div>
          <div className="flex flex-row gap-1 px-5 my-2">
            {currentProduct?.images?.map((image, index) => (
              <img
                key={index}
                onClick={() => setThumbnail(image)}
                className="size-8 rounded border-2 hover:scale-105"
                src={image}
                alt={currentProduct?.title}
              />
            ))}
          </div>
          <p
            className={`${
              currentProduct?.availabilityStatus === "In Stock"
                ? "text-green-600"
                : "text-red-600"
            } px-5`}
          >
            {currentProduct?.availabilityStatus}
          </p>
          <div className="flex flex-row gap-5">
            <p className="text-xl font-semibold pt-1">
              Only : ${" " + currentProduct?.price}
            </p>
            <button onClick={() => addToCart(currentProduct.id)} className="bg-green-600 text-white px-5 py-2 rounded">
              Add To Cart
            </button>
          </div>
          <div className="mt-5 text-justify">
            <h1 className="font-medium">About the product</h1>
            <p>{currentProduct?.description}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-center text-xl font-bold">Product Reviews :</h1>
        <div className="flex flex-col gap-5">
        {currentProduct?.reviews?.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default IndividualProductPage;
