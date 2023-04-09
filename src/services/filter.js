import axios from "axios";
import { URL, HEADERS } from "../constants/api";
import { raiseErrorForServices } from "../constants/errors";
//sample gqlData format - query or mutation data
const gqlDataForFilters = `query products($filters: ProductAttributeFilterInput) {
  products(filter: $filters)
  {
    total_count
    aggregations{
      attribute_code
      label
      count
      options{        
        label
        value
        count
      }
    }
  }
}`;

export const getFiltersInfo = async (filters) => {
  const { data } = await axios({
    url: URL,
    method: "POST",
    data: {
      query: gqlDataForFilters,
      variables: {
        filters: {
          ...filters
        }
      },
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};

