import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-32">
        <h1 className="text-center text-4xl font-bold">Page Doesnot Exist </h1>
        <button onClick={() => navigate("/products")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Go to products Page</button>
    </div>
  )
}

export default NotFoundPage