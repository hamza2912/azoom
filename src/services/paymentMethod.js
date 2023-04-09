import axios from "axios";
import { URL, HEADERS } from "../constants/api";
import { raiseErrorForServices } from "../constants/errors";

const gqlShippingMethodsOnCart = `mutation setShippingMethodsOnCart(
  $input: SetShippingMethodsOnCartInput
) {
    setShippingMethodsOnCart(
      input: $input
    ) {      
      cart {
        shipping_addresses {
          selected_shipping_method {
            carrier_code
            carrier_title
            method_code
            method_title
            amount {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

const gqlPaymentMethodOnCart = `mutation setPaymentMethodOnCart(
  $input: SetPaymentMethodOnCartInput
) {
    setPaymentMethodOnCart(
      input: $input
    ) {      
      cart {
        selected_payment_method {
          code
          title
        }
      }
    }
  }
`;

export const setShippingMethod = async (input) => {
  const { data } = await axios({
    url: URL,
    method: "POST",
    data: {
      query: gqlShippingMethodsOnCart,
      variables: {
        input: input,
      },
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};

export const setPaymentMethod = async (input) => {
  const { data } = await axios({
    url: URL,
    method: "POST",
    data: {
      query: gqlPaymentMethodOnCart,
      variables: {
        input: input,
      },
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};
