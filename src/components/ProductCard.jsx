import { useNavigate } from "react-router-dom";

const ProductCard = ({title, id, price, image}) => {
    const navigate = useNavigate();

    const goToProductPage = () => {
        navigate(`/products/${id}`);
    }
  return (
    <div onClick={goToProductPage} className="cursor-pointer w-80 sm:w-60 flex flex-col px-2 py-1 border-2 border-green-200 text-green-900 rounded hover:scale-105">
        <h1 className="font-semibold text-center text-pretty h-12 overflow-hidden">{title}</h1>
        <div className="w-full h-52">
            <img className="w-full h-full object-cover rounded" src={image} alt={title} />
        </div>
        <p className="text-xl font-medium border-t-2 border-green-200">${" " + price}</p>
    </div>
  )
}

export default ProductCard