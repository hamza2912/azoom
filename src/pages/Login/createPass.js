import React, { useState } from 'react';
import lock from '../../assets/images/icon_lock.png';
import Logo from '../../common/Logo';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import bgShapeLeft from '../../assets/images/bg_shape-left.svg';
import bgShapeBottom from '../../assets/images/bg_shape-bottom.svg';
import bgShapeRight from '../../assets/images/bg_shape-right.png';
import { useLocation } from 'react-router-dom';
import {
  addCustomer,
  setCustomerFetching,
} from '../../redux/customers/customerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth, register } from '../../services/auth';

export default function CreatePass() {
  const [createPass, setCreatePass] = useState('');
  const [passShow, setPassShow] = useState(false);
  const {
    state: { paramEmail },
  } = useLocation();
  const [email] = useState(paramEmail);
  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.customer);

  const onSubmit = async () => {
    try {
      dispatch(setCustomerFetching(true));
      const { customer } = await register({
        email: email,
        password: createPass,
        firstname: 'first',
        lastname: 'last',
      });
      dispatch(addCustomer(customer));
      await auth({
        email: customer.email,
        password: createPass,
      });
      toast.success('You are successfully Registered!');
      window.location.href = '/'; // TODO
    } catch (err) {
      toast.error(err.message); //TODO
    } finally {
      dispatch(setCustomerFetching(false));
    }
  };

  return (
    <div className="bg-white login_sku">
      <img src={bgShapeLeft} className='bg-shape bg-shape-left' alt="" />
      <img src={bgShapeBottom} className='bg-shape bg-shape-bottom' alt="" />
      <img src={bgShapeRight} className='bg-shape bg-shape-right' alt="" />
      <div className="container bg-white">
        <div className="login-header">
          <Link to="/">
            <Logo />
          </Link>
          <div className="secure-login">
            <p className="text">Secure Login</p>&nbsp; &nbsp;
            <img src={lock} className="lock-icon" alt="" />
          </div>
        </div>
      </div>
      {/* body */}
      <div className="login-container">
        <div className="container-fluid auth-form-wrapper">
          <div className="container d-flex justify-content-center">
            <div className="row col-12 flex-col">
              <div className=" col-lg-5 col-sm-12 auth-form mt-5">
                <p className="text"> Create a password</p>
                <p className="link-0">
                  {email}
                  <br />
                  <Link to="/login/email" className="link">
                    Use a Different Email
                  </Link>
                </p>
                <form class="mt-4">
                  <div className="box-search">
                    <input
                      type={passShow ? 'text' : 'password'}
                      value={createPass}
                      onChange={e => setCreatePass(e.target.value)}
                    />
                    <span className={` ${createPass ? 'focusedTrue' : ''}`}>
                      Create Password
                    </span>
                    <a className="link-2" onClick={() => setPassShow(!passShow)}>
                      {passShow ? 'Hide' : 'Show'}
                    </a>
                  </div>
                </form>
                <div className="check-wrapper">
                  <div class="round">
                    <input type="checkbox" id="checkbox1" />
                    <label for="checkbox1"></label>
                  </div>
                  <p className="agree-terms">
                    I agree to the{' '}
                    <span className="orange">Terms & Conditions</span> and{' '}
                    <span className="orange">Privacy Policy</span>
                  </p>
                  <div class="round">
                    <input type="checkbox" id="checkbox2" />
                    <label for="checkbox2"></label>
                  </div>
                  <p className="agree-terms">
                    {' '}
                    I’d like to receive special offers from AZoom and Brand
                    Partners. (Unsubscribe at any time!)
                  </p>
                </div>
                <button
                  className="btn mt-4 create_acc_btn"
                  onClick={onSubmit}
                  disabled={loading}
                >
                  <b>{loading ? 'Creating Account ... ' : 'Create Account'}</b>
                </button>
                <p className='mt-3'>
                  Have An Account?{' '}
                  <Link to="/login/email" className="link-2">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer>
        <div className="container-fluid login-footer">
          <div className="container">
            <div className="policy">
              <div className="copyright">
                &copy; 2021 AZoom.co.uk
                <a target="_blank"></a>
              </div>
              <p className="text-mar">
                By signing in, you agree to AZoom’s
                <a className="link">Terms and Conditions</a> and
                <a className="link">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
