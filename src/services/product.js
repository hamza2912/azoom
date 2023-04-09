import axios from 'axios';
import { URL, HEADERS } from '../constants/api';
import { raiseErrorForServices } from '../constants/errors';
//sample gqlData format - query or mutation data
const gqlDataForProducts = `query products($filters: ProductAttributeFilterInput){
  products(filter: $filters      
    ) {
      total_count  
      page_info {
        page_size
        current_page
      }
    
      items {      
        id
        uid
        name
        sku
        new
        sale
        special_price
        #erin_recommends     
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
        media_gallery {
          label
          url
        }
        meta_keyword
        price_tiers {
          final_price {
            currency
            value
          }
          quantity
        }
        options_container
        only_x_left_in_stock
        stock_status      
        short_description {
          html
        }
        description{
          html
        }
        ... on ConfigurableProduct {
          configurable_options {
            id
            attribute_id_v2
            label
            position
            use_default
            attribute_code
            values {
              value_index
              label
            }
            product_id          
          }
          variants {
            product {
              id
              name
              sku
              attribute_set_id
              ... on PhysicalProductInterface {
                weight            
              }
              image{
                url
              }
              
              price_range{
                minimum_price{
                  regular_price{
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
            }        
            attributes {
              uid
              label
              code
              value_index            
            }
          }
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
        upsell_products {
          name
          description {
            html
          }
          special_price
          price_range {
            minimum_price {
              regular_price {
                currency
                value
              },
              discount{
                amount_off
                percent_off
              }
            }
            maximum_price {
              final_price {
                currency
                value
              }
            }
          }
        }
        related_products {
          name
        }
        crosssell_products {
          name
          thumbnail {
            label
            url
          }
          color
        }
        categories {
          name
        }     
        
      }    
      suggestions {
        search
      }       
      aggregations {
        attribute_code
        count
        label
        position
        options{
           label
           count
           value
        }
      }
    }
  }`;

const gqlDataForSliderProducts = `query {
  home_slider_products: products(    
    filter: {        
      home_slider: {
        eq: "1"
      }
    }    
  ) {    
    items {      
      id      
      name
      sku  
      new 
      azoom_product_specifications{
        authors
      }         
      price_range {        
        minimum_price {
          final_price{
            value
            currency
          }
        }
      } 
      media_gallery {
        label
        url
      }                
      home_slider_image 
      stock_status      
      short_description {
        html
      }
      reviews {
        items {          
          average_rating
          ratings_breakdown{
            name
            value
          } 
        }
        
      }
    }
      
  }
  recommended_products: products(    
    filter: {        
      recommended: {
        eq: "1"
      }
    }    
  ) {    
    items {      
      id      
      name
      sku
      new  
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
      media_gallery {
        label
        url
      }        
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
        url
      }            
      short_description {
        html
      }
      reviews {
        items {          
          average_rating
          ratings_breakdown{
            name
            value
          } 
        }
        
      }
    }
      
  }
  
}`;

const gqlDataForSettingRecentlyViewedProduct = `mutation recentViewedProducts($product_ids: [Int]!) {
  recentViewedProducts(
      product_ids: $product_ids,
  ) 
  {
    message
    total_count
  }
}`;

const gqlDataForGettingRecentlyViewedProduct = `query recentViewedProducts(
    $search: String,
    $pageSize: Int,
    $currentPage: Int) {
    recentViewedProducts(
      search: $search,
      pageSize: $pageSize,
      currentPage: $currentPage,
      ){
        total_count
        currentPage
        pageSize
        totalPages
        items {
          id
          sku
          uid
          name
          url_key
          price_range {
            minimum_price {
              regular_price {
                value
                currency
              }
              final_price {
                value
                currency
              }
            }
          }
          image {
            url
            label
          }
          reviews {
            items {          
              average_rating
              ratings_breakdown{
                name
                value
              } 
            }
            
          }
        }
      }
}`;

const gqlDataForSettingFavouriteProduct = `mutation addProductsToWishlist($wishlistId: ID!, $wishlistItems: [WishlistItemInput!]!) {
  addProductsToWishlist(
    wishlistId: $wishlistId,
    wishlistItems: $wishlistItems,
  ) {
    wishlist {
      id
      items_count
      items_v2 (currentPage: 1, pageSize: 8 ) {
        items {
          id
          quantity
          product {
            id
            uid
            name
            sku
            price_range {
              minimum_price {
                regular_price {
                  currency
                  value
                }
              }
              maximum_price {
                regular_price {
                  currency
                  value
                }
              }
            }
          }
        }
      }
    }
    user_errors {
      code
      message
    }
  }
}`;

const gqlDataForSettingProductReview = `mutation createProductReview($input: ProductReviewInput!) {
  createProductReview(
      input: $input,
  )
  {
    customer_id
    product_id
    nick_name
    average_rating
    ratings{
      price
      quality
      value
      rating
    }
    review_title
    review_detail
  }
}`;

const gqlDataForSearchProducts = `query products($search: String){
  products(search: $search      
    ) {
      total_count  
      page_info {
        page_size
        current_page
      }
    
      items {      
        id
        uid
        name
        sku
        new
        sale
        special_price
        #erin_recommends     
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
        media_gallery {
          label
          url
        }
        meta_keyword
        price_tiers {
          final_price {
            currency
            value
          }
          quantity
        }
        options_container
        only_x_left_in_stock
        stock_status      
        short_description {
          html
        }
        description{
          html
        }
        ... on ConfigurableProduct {
          configurable_options {
            id
            attribute_id_v2
            label
            position
            use_default
            attribute_code
            values {
              value_index
              label
            }
            product_id          
          }
          variants {
            product {
              id
              name
              sku
              attribute_set_id
              ... on PhysicalProductInterface {
                weight            
              }
              image{
                url
              }
              
              price_range{
                minimum_price{
                  regular_price{
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
            }        
            attributes {
              uid
              label
              code
              value_index            
            }
          }
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
        upsell_products {
          name
          description {
            html
          }
          special_price
          price_range {
            minimum_price {
              regular_price {
                currency
                value
              },
              discount{
                amount_off
                percent_off
              }
            }
            maximum_price {
              final_price {
                currency
                value
              }
            }
          }
        }
        related_products {
          name
        }
        crosssell_products {
          name
          thumbnail {
            label
            url
          }
          color
        }
        categories {
          name
        }     
        
      }    
      suggestions {
        search
      }       
      aggregations {
        attribute_code
        count
        label
        position
        options{
           label
           count
           value
        }
      }
    }
  }`;
export const getProductsInfo = async filters => {
  const { data } = await axios({
    url: URL,
    method: 'POST',
    data: {
      query: gqlDataForProducts,
      variables: {
        filters: {
          ...filters,
        },
      },
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};

export const getSliderAndRecommendedProducts = async () => {
  const { data } = await axios({
    url: URL,
    method: 'POST',
    data: {
      query: gqlDataForSliderProducts,
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};

export const setRecentlyViewedProducts = async id => {
  const { data } = await axios({
    url: URL,
    method: 'POST',
    data: {
      query: gqlDataForSettingRecentlyViewedProduct,
      variables: {
        product_ids: [id],
      },
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};

export const getRecentlyViewedProducts = async () => {
  const { data } = await axios({
    url: URL,
    method: 'POST',
    data: {
      query: gqlDataForGettingRecentlyViewedProduct,
      variables: {
        search: '',
        pageSize: 10,
        currentPage: 1,
      },
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};

export const setFavouriteProduct = async wishlistData => {
  const { data } = await axios({
    url: URL,
    method: 'POST',
    data: {
      query: gqlDataForSettingFavouriteProduct,
      variables: {
        ...wishlistData,
      },
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};

export const setProductReview = async input => {
  const { data } = await axios({
    url: URL,
    method: 'POST',
    data: {
      query: gqlDataForSettingProductReview,
      variables: {
        input,
      },
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};

export const getSearchProductInfo = async search => {
  const { data } = await axios({
    url: URL,
    method: 'POST',
    data: {
      query: gqlDataForProducts,
      variables: {
        search: search,
      },
    },
    headers: HEADERS,
  });
  return raiseErrorForServices(data);
};
