import axios from 'axios';
import { URL, HEADERS } from '../constants/api';
import { raiseErrorForServices } from '../constants/errors';
//sample gqlData format - query or mutation data
const gqlDataForToken = `mutation generateCustomerToken(
  $email: String!,
  $password: String!
) {
  generateCustomerToken(
    email: $email
    password: $password
  ) {
    token
  }
}`;

const gqlDataForRegistration = `mutation createCustomerV2($input: CustomerCreateInput!)
{
  createCustomerV2(input: $input) {
    customer {
      firstname
      lastname
      email
      is_subscribed
    }
  }
}`;

const gqlDataForEmailAvailability = `query isEmailAvailable(
  $email: String!
){
  isEmailAvailable(
    email: $email
  ) {
    is_email_available
  }
}`;

const customerSignOutQuery = `
mutation {
  revokeCustomerToken {
    result
  }
}
`;

const customerInfoQuery = `
query {
  customer {
    created_at
    date_of_birth
    default_billing
    default_shipping    
    firstname
    lastname
    suffix
    email 
    gender
    is_subscribed
    middlename
    orders {       
      items {
        id
        order_date
        total {
          grand_total {
            value
            currency
          }
        }
        status
        carrier
        payment_methods{
          name
          type
        }
        shipments{
          id
          items{
            id
          }          
        }        
      }
      total_count      
    }
    reviews{
      items{
        average_rating
        created_at
        nickname
        text
        #product        
      }
    }
    addresses{
      id
      firstname
      lastname
      street
      city
      postcode
      country_code
      telephone
    }
    favourites:wishlists{
      id
      items_count      
      sharing_code
      updated_at
      items_v2 {
        items {
          id
          product {
            id
            uid
            sku
            name
            price_range{
              minimum_price{
                final_price{
                  currency
                  value
                }
              }
            }           
            azoom_product_specifications{
              publication_date:publication_year      
              publisher
              format
              authors  
              pages
              edition
              reading_time
              language
              isbn
              isbn_10
              isbn_13
              dimensions
              recommended_age
            }
            image{
              label
              url
            }
            reviews {       
              page_info{
                current_page
                page_size
                total_pages
              }
              items {          
                average_rating
                ratings_breakdown{
                  name
                  value
                }          
                created_at
                nickname
                summary
                text
              }
              #page_info {
              #  page_size
              #}
            }
          }
        }
      }
    }
  }
}
`;
export const auth = async ({ email, password }) => {
  const { data } = await axios({
    url: URL,
    method: 'POST',
    data: {
      query: gqlDataForToken,
      variables: {
        email: email,
        password: password,
      },
    },
  });
  return raiseErrorForServices(data); //TODO
};

export const getCustomerInfo = async () => {
  const { data } = await axios({
    url: URL,
    method: 'POST',
    data: {
      query: customerInfoQuery,
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};

export const signOut = async () => {
  const { data } = await axios({
    url: URL,
    method: 'POST',
    data: {
      query: customerSignOutQuery,
    },
    headers: HEADERS,
  });
  if (data.data.revokeCustomerToken.result) {
    localStorage.removeItem('token');
  }
  return raiseErrorForServices(data);
};

export const checkEmailAvailability = async ({ email }) => {
  const { data } = await axios({
    url: URL,
    method: 'POST',
    data: {
      query: gqlDataForEmailAvailability,
      variables: {
        email: email,
      },
    },
  });
  return raiseErrorForServices(data);
};

export const register = async input => {
  const { data } = await axios({
    url: URL,
    method: 'POST',
    data: {
      query: gqlDataForRegistration,
      variables: {
        input: {
          ...input,
        },
      },
    },
  }); //TODO
  return raiseErrorForServices(data);
};
