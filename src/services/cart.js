import axios from "axios";
import { URL, HEADERS } from "../constants/api";
import { raiseErrorForServices } from "../constants/errors";
//sample gqlData format - query or mutation data
const gqlDataForCart = `query customerCart {
  customerCart {
    id
    items {
      id
      product {
        name
        sku
        price_range {        
          minimum_price {
            regular_price {
              value
              currency
            }
            discount{
              amount_off
              percent_off
            }
            final_price{
              value
              currency
            }
  
          }
          maximum_price {
            regular_price {
              value
              currency
            }
            discount{
              amount_off
              percent_off
            }
            final_price{
              value
              currency
            }
          }
          
        }
        image {
          label
          url
        }
      }
      quantity
    }
  }
}`;

const gqlMutationForAddingItem = `mutation addProductsToCart( $cartId: String!, $cartItems: [CartItemInput!]! ) {
  addProductsToCart(
    cartId: $cartId
    cartItems: $cartItems
  ) {
    cart {
      items {
        product {
          name
          sku
          price_range {        
            minimum_price {
              regular_price {
                value
                currency
              }
              discount{
                amount_off
                percent_off
              }
              final_price{
                value
                currency
              }
    
            }
            maximum_price {
              regular_price {
                value
                currency
              }
              discount{
                amount_off
                percent_off
              }
              final_price{
                value
                currency
              }
            }
            
          }
          image {
            label
            url
          }
        }
        quantity
      }
    }
    user_errors {
      code
      message
    }
  }
}`;

export const getCustomerCart = async () => {
  const { data } = await axios({
    url: URL,
    method: "POST",
    data: {
      query: gqlDataForCart,
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};

export const addItemsToCart = async (cartItems, cartId) => {
  const { data } = await axios({
    url: URL,
    method: "POST",
    data: {
      query: gqlMutationForAddingItem,
      variables: {
        cartItems: cartItems,
        cartId: cartId,
      },
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data, "addProductsToCart");
};
