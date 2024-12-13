import { useContext, useState } from "react";
import { GlobalContext } from "../context";

const QuantityUI = ({id, quantity}) => {
    const { incrementQuantity, decrementQuantity } = useContext(GlobalContext);
    
    const addProductQuantity = () => {
        incrementQuantity(id);

    }
    const reduceProductQuantity = () => {
        decrementQuantity(id);
    }
  return (
    <div>
      <h1 className="text-center">Quantity :</h1>
      <div className="flex flex-row justify-center items-center gap-2"    >
        <button onClick={reduceProductQuantity} className="bg-neutral-900 hover:bg-neutral-700 text-white rounded-full w-10">-</button>
        <h1 className="text-lg">{quantity}</h1>
        <button onClick={addProductQuantity} className="bg-neutral-900 hover:bg-neutral-700 text-white rounded-full w-10">+</button>
      </div>
    </div>
  );
};

export default QuantityUI;
