export const raiseErrorForServices = (data, query_name = null) => {
  if (data?.errors?.length > 0) {
    throw new Error(data?.errors[0].message);
  } else if (query_name && data.data[query_name]?.user_errors.length > 0) {
    throw new Error(data?.data[query_name].user_errors[0].message);
  } else if (data.data.createCustomerV2) {
    return data.data?.createCustomerV2;
  } else if (data.data.generateCustomerToken) {
    localStorage.setItem("token", data.data.generateCustomerToken.token); //TODO
  } else {
    return data.data;
  }
};
