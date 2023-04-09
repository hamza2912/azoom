import axios from "axios";
import { URL, HEADERS } from "../constants/api";
import { raiseErrorForServices } from "../constants/errors";

const gqlDataForClientSecret = `query stripe_client_secret(
  $amount: String!
) {
    stripe_client_secret(
      amount: $amount
    ) {      
      clientSecret
    }
  }
`;

export const getClientSecret = async (paymentData) => {
  const { data } = await axios({
    url: URL,
    method: "POST",
    data: {
      query: gqlDataForClientSecret,
      variables: {
        amount: paymentData.amount,
      },
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};
