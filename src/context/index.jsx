import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [cartItem, setCartItem] = useState([]);
  const [skip, setSkip] = useState(0);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${skip * 10}`
      );
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchProductById = async (productId) => {
    setLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await res.json();
      setCurrentProduct(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const addToCart = (productId) => {
    const doesExistInCart = cartItem.find(
      (product) => product.id === productId
    );
    if (doesExistInCart) {
      cartItem.map((product) => {
        if (product.id === productId) {
          product.quantity += 1;
        }
      });
    } else {
      const productToAdd = products.find((product) => product.id === productId);
      const product = { ...productToAdd, quantity: 1 };
      setCartItem([...cartItem, product]);
    }
    toast.success("Product added to cart");
  };

  const incrementQuantity = (productId) => {
    cartItem.map((product) => {
      if (product.id === productId) {
        product.quantity += 1;
      }
    });
    setCartItem([...cartItem]);
    toast.success("Quantity updated");
  };

  const decrementQuantity = (productId) => {
    let InitialLength = cartItem.length;
    cartItem.map((product) => {
      if (product.id === productId) {
        product.quantity -= 1;
        if (product.quantity === 0) {
          InitialLength -= 1;
          }
      }
    });
    if (InitialLength !== cartItem.length) {
      toast.success("Product removed from cart");
    }else{
      toast.success("Quantity updated");
    }
    setCartItem(cartItem.filter((product) => product.quantity > 0));
  };

  const getProductById = (productId) => {
    fetchProductById(productId);
  };

  const fetchNextBatch = (value) => {
    if (skip + value < 0) return;
    if (skip + value > 15) return;
    setSkip(skip + value);
  };

  useEffect(() => {
    fetchProducts();
  }, [skip]);

  return (
    <GlobalContext.Provider
      value={{
        products,
        loading,
        currentProduct,
        skip,
        fetchNextBatch,
        getProductById,
        addToCart,
        cartItem,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
