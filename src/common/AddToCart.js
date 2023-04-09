import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addItemsToCart } from "../services/cart";
import { addToCart } from "../redux/cart/CartSlice";

const AddToCart = ({ classNames, item, quantity = 1 }) => {
  const { customer } = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);

  const addItemToCustomerCart = async () => {
    setLoading(true);
    const { sku } = item;
    try {
      let cartItems = [
        {
          quantity: quantity,
          sku: sku,
        },
      ];
      const { addProductsToCart } = await addItemsToCart(cartItems, id);
      dispatch(addToCart(addProductsToCart.cart.items));
      toast.success("Added to Cart");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (customer) {
      addItemToCustomerCart();
    } else {
      navigate("/login/email");
    }
  };

  return (
    <button className={classNames} onClick={handleAddToCart}>
      {loading ? "Adding to Basket" : "Add to Basket"}
    </button>
  );
};

export default AddToCart;
