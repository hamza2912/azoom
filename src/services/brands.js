import axios from 'axios';
import { URL, HEADERS } from '../constants/api';
import { raiseErrorForServices } from '../constants/errors';
//sample gqlData format - query or mutation data
const gqlDataForBrands = `query customAttributeMetadata(
    $attributes: [AttributeInput!]!
  ) {
    customAttributeMetadata(
      attributes: $attributes
    ) {
      items {           
        brand_attributes: attribute_options {
        value
        label  
        products {
            id     
            sku
            name
            price           
            image
            heading
            rating
        }           
        }           
      }
    }
  }
`;

export const getBrands = async () => {
  const { data } = await axios({
    url: URL,
    method: 'POST',
    data: {
      query: gqlDataForBrands,
      variables: {
        attributes: [
          {
            attribute_code: 'home_brand',
            entity_type: 'catalog_product',
          },
        ],
      },
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};
