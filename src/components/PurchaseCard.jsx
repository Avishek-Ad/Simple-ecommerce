import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context";

const method = ["e-sewa", "Khalti", "visa/mastercard", "cash on delivery"];
const PurchaseCard = () => {
    const { cartItem } = useContext(GlobalContext);
    const [totalItems, setTotalItems] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    useEffect(() => {
        setTotalItems(cartItem.length);
        setTotalCost(cartItem.reduce((acc, curr) => acc + curr.quantity * curr.price, 0));
    }, [cartItem]);
  return (
    <div className=" w-full lg:w-1/3 lg:border-l-2 mt-5 lg:mt-0">
      <div className="w-2/3 sm:w-1/3 lg:w-2/3 mx-auto flex flex-col gap-5">
      <div>
        <h1>Total Items : {" " + totalItems}</h1>
        <h1>Total Cost : {" $" + totalCost.toFixed(2)}</h1>
      </div>
      <div>
        <h1>Payment Method :</h1>
        <div className="flex flex-col gap-2 px-5">
          {method.map((method) => (
            <div key={method} className="flex flex-row gap-2">
              <input type="radio" name="method" />
              {method}
            </div>
          ))}
        </div>
      </div>
      <button className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-semibold rounded">
        Place Order
      </button>
      </div>
    </div>
  );
};

export default PurchaseCard;
