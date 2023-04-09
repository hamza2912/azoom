import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  setCustomerAddress,
  changeCustomerAddress,
  setBillingAddress,
  setShippingAddress,
} from '../../services/address';
import { addCustomerAddress } from '../../redux/customers/customerSlice';
import {
  addBillingAddressToCart,
  addShippingAddressToCart,
} from '../../redux/cart/CartSlice';
import { toast } from 'react-toastify';
import { getCountries } from '../../services/address';
import AuthenticatedRoute from '../../components/hoc/AuthenticatedRoute';
import { useDispatch } from 'react-redux';
import _ from 'lodash';

const CheckoutAddress = () => {
  const { customer } = useSelector(state => state.customer);
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [OnEdit, SetOnEdit] = useState(false);
  const [countriesList, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const [address, setAddress] = useState({
    firstname: '',
    lastname: '',
    city: '',
    street: '',
    telephone: '',
    postcode: '',
    country_code: 'GB',
  });

  const {
    firstname,
    lastname,
    city,
    country_code,
    telephone,
    street,
    postcode,
  } = address;

  const addresses = customer?.addresses;

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const { countries } = await getCountries();
      setCountries(countries);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddressChange = ({ target }) => {
    const { name, value } = target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const onAddressSubmit = async e => {
    e.preventDefault();
    let res;
    try {
      if (!OnEdit) {
        const { createCustomerAddress } = await setCustomerAddress({
          ...address,
          // region: {
          //   region: "gb",
          //   region_code: "GB",
          // },
        });
        await setBillingAddressHandler();
        await setShippingAddressHandler();
        res = createCustomerAddress;
      } else {
        const { updateCustomerAddress } = await changeCustomerAddress({
          id: customer.addresses[0].id,
          input: { ...address },
        });
        await setBillingAddressHandler();
        await setShippingAddressHandler();
        res = updateCustomerAddress;
        SetOnEdit(false);
      }
      toast.success('Updated Addess Successfully');
      setAddress(res);
      dispatch(addCustomerAddress(res));
    } catch (err) {
      toast.error(err.message);
    }
  };

  const setBillingAddressHandler = async () => {
    try {
      const {
        setBillingAddressOnCart: {
          cart: { billing_address },
        },
      } = await setBillingAddress({
        cart_id: cart.id,
        billing_address: {
          address: {
            ...address,
            save_in_address_book: true,
          },
          same_as_shipping: false,
        },
      });
      dispatch(addBillingAddressToCart(billing_address));
    } catch (err) {
      toast.error(err.message);
    }
  };

  const setShippingAddressHandler = async () => {
    try {
      const {
        setShippingAddressesOnCart: {
          cart: { shipping_addresses },
        },
      } = await setShippingAddress({
        cart_id: cart.id,
        shipping_addresses: [
          {
            address: {
              ...address,
              save_in_address_book: true,
            },
          },
        ],
      });
      dispatch(addShippingAddressToCart(shipping_addresses));
    } catch (err) {
      toast.error(err.message);
    }
  };

  // useEffect(() => {
  //   const setShippingAndBillingAddress = async () => {
  //     await setShippingAddressHandler();
  //     await setBillingAddressHandler();
  //   };
  //   debugger;
  //   if (customer?.addresses.length > 0) {
  //     setShippingAndBillingAddress();
  //   }
  // }, [customer?.addresses]);

  const countriesSelectOptions = useMemo(() => {
    return countriesList.map(country => {
      return (
        <option key={country.id} value={country.id} defaultValue={'GB'}>
          {country.full_name_english || country.three_letter_abbreviation}
        </option>
      );
    });
  }, [countriesList]);

  const handleAddressUpdate = () => {
    SetOnEdit(true);
    setAddress(customer?.addresses[0]);
  };

  return (
    <div className="checkout-address">
      <h3>Delivery Address</h3>
      {addresses?.length > 0 && !OnEdit ? (
        <>
          <div className="alert alert-warning text-center" role="alert">
            Azoom is using this address as your shipping and billing address
          </div>
          <p className="address_p">
            {addresses[0].firstname}
            <br />
            {addresses[0].street[0]}, {addresses[0].city}{' '}
            {addresses[0].region?.region_code} {addresses[0].postcode}
            <br />
            {addresses[0].telephone}
          </p>
          <button className="save-address-btn" onClick={handleAddressUpdate}>
            Update Address
          </button>
          <hr />
        </>
      ) : (
        <>
          <form class="mt-4">
            <div className="row row-cols-2">
              <div className='pl-3 p-2'>
                <div className="box-search">
                      <input
                        onChange={handleAddressChange}
                        id="exampleInputFirstName"
                        name="firstname"
                        value={firstname}
                      />
                      <span className={` ${firstname ? "focusedTrue" : ""}`}>
                      First Name
                      </span>
                  </div>
              </div>
              <div className='pl-2 p-2'>
                <div className="box-search">
                    <input
                      onChange={handleAddressChange}
                      id="exampleInputLastName"
                      name="lastname"
                      value={lastname}
                    />
                    <span className={` ${lastname ? "focusedTrue" : ""}`}>
                    Last Name
                    </span>
                </div>
              </div>
                {/* <div className=" pl-3 p-2">
                <label htmlFor="exampleInputFirstName" className="form-label">
                  First Name
                </label>
                <input
                  className="form-control"
                  id="exampleInputFirstName"
                  name="firstname"
                  placeholder="John"
                  onChange={handleAddressChange}
                  value={firstname}
                />
              </div> */}
              {/* <div className=" pl-3 p-2">
                <label htmlFor="exampleInputLastName" className="form-label">
                  Last Name
                </label>
                <input
                  className="form-control"
                  id="exampleInputLastName"
                  name="lastname"
                  placeholder="Doe"
                  onChange={handleAddressChange}
                  value={lastname}
                />
              </div> */}
              
            </div>
            <div className="row row-cols-3">
              <div className='pl-3 p-2'>
                <div className="box-search">
                      <input
                        onChange={handleAddressChange}
                        id="exampleInputStreet"
                        name="street"
                        value={street}
                      />
                      <span className={` ${street ? "focusedTrue" : ""}`}>
                      Street
                      </span>
                  </div>
                </div>
                <div className='pl-3 p-2'>
                  <div className="box-search">
                      <input
                        onChange={handleAddressChange}
                        id="exampleInputCity"
                        name="city"
                        value={city}
                      />
                      <span className={` ${city ? "focusedTrue" : ""}`}>
                      City
                      </span>
                  </div>
                </div>
                <div className='pl-3 p-2'>
                  <div className="box-search">
                      <input
                        onChange={handleAddressChange}
                        id="exampleFormControlSelect1"
                        name="country_code"
                        value={country_code}
                      />
                      <span className={` ${country_code ? "focusedTrue" : ""}`}>
                      Country
                      </span>
                  </div>
                </div>
                {/* <div className="pl-3 p-2">
                  <label htmlFor="exampleInputStreet" className="form-label">
                    Street
                  </label>
                  <input
                    className="form-control"
                    id="exampleInputStreet"
                    placeholder="123 Main Street"
                    name="street"
                    onChange={handleAddressChange}
                    value={street}
                  />
                </div>
                <div className="pl-3 p-2">
                  <label htmlFor="exampleInputCity" className="form-label">
                    City
                  </label>
                  <input
                    className="form-control"
                    id="exampleInputCity"
                    name="city"
                    placeholder="Phoenix, London"
                    onChange={handleAddressChange}
                    value={city}
                  />
                </div>
                <div className="pl-3 p-2">
                  <label htmlFor="exampleInputCountryCode" className="form-label">
                    Country
                  </label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={handleAddressChange}
                    name="country_code"
                    value={country_code || 'GB'}
                  >
                    {countriesSelectOptions}
                  </select>
                </div> */}
              </div>
              <div className="row row-cols-2">
                <div className='pl-3 p-2'>
                  <div className="box-search">
                        <input
                          onChange={handleAddressChange}
                          id="exampleInputPhone"
                          name="telephone"
                          value={telephone}
                        />
                        <span className={` ${telephone ? "focusedTrue" : ""}`}>
                        Phone
                        </span>
                    </div>
                  </div>
                  <div className='pl-3 p-2'>
                    <div className="box-search">
                        <input
                          onChange={handleAddressChange}
                          id="exampleInputPostCode"
                          name="postcode"
                          value={postcode}
                        />
                        <span className={` ${postcode ? "focusedTrue" : ""}`}>
                        Postal Code
                        </span>
                    </div>
                  </div>
              {/* <div className="pl-3 p-2">
                <label htmlFor="exampleInputPhone" className="form-label">
                  Phone
                </label>
                <input
                  className="form-control"
                  id="exampleInputPhone"
                  placeholder="7777777777"
                  name="telephone"
                  onChange={handleAddressChange}
                  value={telephone}
                />
              </div>
              <div className="pl-3 p-2">
                <label htmlFor="exampleInputPostCode" className="form-label">
                  Post Code
                </label>
                <input
                  className="form-control"
                  id="exampleInputPostCode"
                  name="postcode"
                  placeholder="77777"
                  onChange={handleAddressChange}
                  value={postcode}
                />
              </div> */}
            </div>
            <div className="d-flex mt-2">
              <button className="save-address-btn" onClick={onAddressSubmit}>
                {OnEdit
                  ? `Updat${loading ? 'ing' : 'e'} Address`
                  : `Sav${loading ? 'ing' : 'e'}  Address`}
              </button>
            </div>
          </form>
        </>
      )}
      {/* <hr /> */}
    </div>
  );
};

export default AuthenticatedRoute(CheckoutAddress);
