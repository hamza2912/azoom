import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Books from '../../assets/images/icon_category-books.png'
import Azoom from '../../assets/images/badge_azoom-community.png'
import {
  registerAsBookReviewer,
  registerAsMember,
} from '../../services/azoomMembers';

export default function RegisterModal({ isOpen, setIsOpen, requestType }) {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    first_name: '',
    email: '',
    password: '',
    phone: '',
    last_name: '',
  });

  const onChangeHandler = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const onSubmit = async () => {
    setLoading(true);
    const { email, first_name, last_name, phone, password } = state;
    if (
      email === '' ||
      first_name === '' ||
      last_name === '' ||
      phone === '' ||
      password === ''
    ) {
      toast.error('Please enter all required fields');
    }
    try {
      if (requestType === 'Book Reviewer') {
        const data = await registerAsBookReviewer({ ...state });
      } else if (requestType === 'Member Request') {
        const data = await registerAsMember({ ...state });
      }
    } catch (err) {
      toast.error('Unable to register');
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal
      className="quickview-modal-wrapper register-modal border shadow-lg"
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
    >
      <form>
        <p className="text ">Enter your details to register your account</p>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={onChangeHandler}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={onChangeHandler}
            required
          />
        </div>
        <label htmlFor="exampleInputFirstName" className="form-label">
          First Name
        </label>
        <input
          className="form-control"
          id="exampleInputFirstName"
          name="first_name"
          onChange={onChangeHandler}
          required
        />
        <label htmlFor="exampleInputLastName" className="form-label">
          Last Name
        </label>
        <input
          className="form-control"
          id="exampleInputLastName"
          name="last_name"
          onChange={onChangeHandler}
          required
        />
        <label htmlFor="exampleInputPhone" className="form-label">
          Phone
        </label>
        <input
          className="form-control"
          id="exampleInputPhone"
          name="phone"
          onChange={onChangeHandler}
          required
        />
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary mt-3"
            onClick={onSubmit}
            disabled={loading}
          >
            Submit
          </button>
        </div>
      </form>
      <div className='books'>
        < img src={requestType == 'Book Reviewer' ? Books : Azoom} alt="" />
      </div>
    </Modal>
  );
}
