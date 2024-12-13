import { useNavigate } from "react-router-dom";
import QuantityUI from "./QuantityUI";

const CartSingleItem = ({ id, title, image, price, quantity, totalPrice }) => {
  const navigate = useNavigate();
  const goToProductPage = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="w-full lg:w-3/4 mx-auto my-5">
      <div className="flex flex-col sm:flex-row  gap-5 border-2 p-1">
        <img className="size-32 md:size-48 mx-auto" src={image} alt={title} />
        <div className="flex flex-col gap-0 sm:gap-5 w-full justify-center">
          <h1>{title}</h1>
          <div className="flex flex-row gap-2 md:gap-0 w-full justify-between px-0 sm:px-5">
            <div>
              <h1>Price :{" $ " + price}</h1>
              <h1>total :{" $ " + totalPrice.toFixed(2)}</h1>
              <div>
                <button
                  onClick={goToProductPage}
                  className="text-xm md:text-sm lg:text-base px-1 md:px-4 py-1 bg-neutral-900 hover:bg-neutral-700 text-white font-semibold rounded"
                >
                  Product Details...
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <QuantityUI id={id} quantity={quantity} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSingleItem;
