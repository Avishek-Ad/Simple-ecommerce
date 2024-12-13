import React, { useContext } from "react";
import CartSingleItem from "../components/CartSingleItem";
import { GlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import PurchaseCard from "../components/PurchaseCard";
import { Toaster } from "react-hot-toast";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItem } = useContext(GlobalContext);
  return (
    <div className="flex flex-col w-full">
      {cartItem.length > 0 ? (
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="w-2/3 mx-auto">
          {cartItem.map((product) => (
            <CartSingleItem
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.thumbnail}
              price={product.price}
              quantity={product.quantity}
              totalPrice={product.price * product.quantity}
            />
          ))}
          </div>
          <PurchaseCard />
        </div>
      ) : (
        <div className="flex flex-col gap-5 justify-center h-screen">
          <h1 className="text-center text-3xl font-bold">Cart is empty</h1>
          <div className="w-full flex justify-center">
            <button
              className="px-4 py-1 bg-neutral-900 hover:bg-neutral-700 text-white font-semibold rounded"
              onClick={() => navigate("/products")}
            >
              Go To Products
            </button>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default CartPage;
