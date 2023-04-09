import React, { useMemo } from 'react';
import favIcon from '../../assets/images/icon_favorite-grey.png';
import favFillIcon from '../../assets/images/icon_favorite.png';
import { setFavouriteProduct } from '../../services/product';
import { useSelector, useDispatch } from 'react-redux';
import { addCustomerWishlist } from '../../redux/customers/customerSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AddFavourite({ product }) {
  const navigate = useNavigate();
  const { customer } = useSelector(state => state.customer);
  const favourites = useMemo(() => {
    return customer?.favourites || [];
  }, [customer?.favourites]);

  const dispatch = useDispatch();

  const handleClick = async () => {
    if (!customer) {
      navigate('/login/email');
      return;
    }
    try {
      const { addProductsToWishlist: wishlist } = await setFavouriteProduct({
        wishlistId: favourites[0].id,
        wishlistItems: [
          {
            sku: product.sku,
            quantity: 1,
          },
        ],
      });
      dispatch(addCustomerWishlist([wishlist.wishlist]));
      toast.success('Item added to Wishlsit successfully');
    } catch (err) {
      toast.error('Failed to add item to Wishlsit');
    }
  };

  const alreadyFavourited = useMemo(() => {
    return (
      favourites[0]?.items_v2?.items.filter(
        item => item.product.id === product.id
      )?.length > 0
    );
  }, [product, favourites]);

  return (
    <>
      <img
        className="fav-icon"
        src={alreadyFavourited ? favFillIcon : favIcon}
        onClick={handleClick}
        alt="fav-icon"
      />
    </>
  );
}

export default AddFavourite;
