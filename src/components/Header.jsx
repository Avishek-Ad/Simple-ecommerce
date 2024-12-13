import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const GoToCart = () => {
    navigate("/cart");
  };
  return (
    <div className="w-full h-32 pt-10">
      <div className="w-full h-32 pt-10 bg-gradient-to-tr from-green-500 to-green-950 absolute top-0"/>
      <h1 className=" w-full  h-32 pt-10 text-center text-2xl sm:text-4xl font-bold text-white absolute top-0">
        Simple Store
      </h1>
      <button onClick={GoToCart} className="absolute top-5 right-5 text-white text-lg font-medium px-4 py-1 bg-neutral-900 hover:bg-neutral-700 rounded">cart</button>
    </div>
  );
};

export default Header;
