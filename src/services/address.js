import axios from "axios";
import { URL, HEADERS } from "../constants/api";
import { raiseErrorForServices } from "../constants/errors";

const gqlMutationForSettingAddress = `mutation createCustomerAddress( $input: CustomerAddressInput! ) {
  createCustomerAddress(
    input: $input
  ) {
    id
    country_code
    street
    telephone
    postcode
    city
    default_shipping
    default_billing
    lastname
    firstname
  }
}`;

const gqlMutationForUpdatingAddress = `mutation updateCustomerAddress($id: Int!, $input: CustomerAddressInput! ) {
  updateCustomerAddress(
    input: $input,
    id: $id
  ) {
    id
    country_code
    street
    telephone
    postcode
    city
    default_shipping
    default_billing
    lastname
    firstname
  }
}`;

const gqlMutationForBillingAddress = `mutation setBillingAddressOnCart( $input: SetBillingAddressOnCartInput! ) {
  setBillingAddressOnCart(
    input: $input,
  ) {
    cart {
      billing_address {
        firstname
        lastname
        company
        street
        city
        region{
          code
          label
        }
        postcode
        telephone
        country{
          code
          label
        }
      }
    }
  }
}`;

const gqlMutationForShippingAddress = `mutation setShippingAddressesOnCart( $input: SetShippingAddressesOnCartInput! ) {
  setShippingAddressesOnCart(
    input: $input,
  ) {
    cart {
      shipping_addresses {
        firstname
        lastname
        company
        street
        city
        region{
          code
          label
        }
        postcode
        telephone
        country{
          code
          label
        }
        available_shipping_methods{
          carrier_code
          carrier_title
          method_code
          method_title
        }
        pickup_location_code
      }
    }
  }
}`;

const gqlMutationForGettingCountries = `query {
  countries {
      id
      two_letter_abbreviation
      three_letter_abbreviation
      full_name_locale
      full_name_english
      
  }
}`;

export const setCustomerAddress = async (input) => {
  const { data } = await axios({
    url: URL,
    method: "POST",
    data: {
      query: gqlMutationForSettingAddress,
      variables: {
        input: input,
      },
    },

    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};

export const changeCustomerAddress = async ({ id, input }) => {
  delete input.id;
  const { data } = await axios({
    url: URL,
    method: "POST",
    data: {
      query: gqlMutationForUpdatingAddress,
      variables: {
        input: input,
        id: id,
      },
    },

    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};

export const getCountries = async () => {
  const { data } = await axios({
    url: URL,
    method: "POST",
    data: {
      query: gqlMutationForGettingCountries,
    },

    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};

export const setBillingAddress = async (input) => {
  input = sanitizeBillingAddress(input);
  const { data } = await axios({
    url: URL,
    method: "POST",
    data: {
      query: gqlMutationForBillingAddress,
      variables: {
        input: input,
      },
    },

    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};

export const setShippingAddress = async (input) => {
  input = sanitizeShippingAddress(input);
  const { data } = await axios({
    url: URL,
    method: "POST",
    data: {
      query: gqlMutationForShippingAddress,
      variables: {
        input: input,
      },
    },

    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};

const sanitizeBillingAddress = (input) => {
  delete input.billing_address.address.id;
  delete input.billing_address.address.default_billing;
  delete input.billing_address.address.default_shipping;
  return input;
};

const sanitizeShippingAddress = (input) => {
  delete input.shipping_addresses[0].address.id;
  delete input.shipping_addresses[0].address.default_billing;
  delete input.shipping_addresses[0].address.default_shipping;
  return input;
};
