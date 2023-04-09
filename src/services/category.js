import axios from 'axios';
import { URL, HEADERS } from '../constants/api';
import { raiseErrorForServices } from '../constants/errors';
//sample gqlData format - query or mutation data
const gqlDataForCategoryList = `query {
  categories(
    filters: {
      parent_id: { eq: "2" }
    }
  ) {
    page_info{
      current_page
      page_size
      total_pages      
    }
    total_count   
    items{
      id
      available_sort_by
      image
      name
      description
      children_count
      filter_price_range
      is_anchor
      relative_url
      path    
      children{
        name
        description
        image
        level
        url_key
        url_path
        product_count
        children{
           name
           description
           image
           level
           url_key
           url_path
           product_count
        }
      }    
    }
  }
}`;

export const getCategoriesInfo = async () => {
  const { data } = await axios({
    url: URL,
    method: 'POST',
    data: {
      query: gqlDataForCategoryList,
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};
