import axios from 'axios';
import { URL, HEADERS } from '../constants/api';
import { raiseErrorForServices } from '../constants/errors';
//sample gqlData format - query or mutation data
const gqlDataForRegisterAsAzoomMmeber = `mutation registerAsAzoomMember(
  $input: CustomerRegistrationInput!
  ){
    registerAsAzoomMember(
      input: $input
    ) {
      customer_id
      email
      first_name        
      last_name
      phone_number   
    }
  }
`;

const gqlDataForRegisterAsBookReviewer = `mutation registerAsBookReviewer(
  $input: CustomerRegistrationInput!
  ){
    registerAsBookReviewer(
      input: $input
    ) {
      customer_id
      email
      first_name        
      last_name
      phone_number   
    }
  }
`;

export const registerAsMember = async input => {
  const { data } = await axios({
    url: URL,
    method: 'POST',
    data: {
      query: gqlDataForRegisterAsAzoomMmeber,
      variables: {
        input: { ...input },
      },
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};

export const registerAsBookReviewer = async input => {
  const { data } = await axios({
    url: URL,
    method: 'POST',
    data: {
      query: gqlDataForRegisterAsBookReviewer,
      variables: {
        input: { ...input },
      },
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};
