import React, { useState } from "react";
import lock from "../../assets/images/icon_lock.png";
import Logo from "../../common/Logo";
import { Link } from "react-router-dom";
import { checkEmailAvailability } from "../../services/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import bgShapeLeft from '../../assets/images/bg_shape-left.svg';
import bgShapeBottom from '../../assets/images/bg_shape-bottom.svg';
import bgShapeRight from '../../assets/images/bg_shape-right.png';
import { setCustomerFetching } from "../../redux/customers/customerSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.customer);

  const onSubmit = async () => {
    dispatch(setCustomerFetching(true));
    try {
      const { isEmailAvailable } = await checkEmailAvailability({
        email: email,
      });
      const { is_email_available } = isEmailAvailable;
      if (!is_email_available) {
        toast.success("Welcome back!!!");
        navigate("/login/password", { state: { paramEmail: email } });
      } else {
        toast.success("Continue your registration by setting up the password");
        navigate("/register", { state: { paramEmail: email } });
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      dispatch(setCustomerFetching(false));
    }
  };

  return (
    <div className="bg-white login_sku">
      <img src={bgShapeLeft} className='bg-shape bg-shape-left' alt="" />
      <img src={bgShapeBottom} className='bg-shape bg-shape-bottom' alt="" />
      <img src={bgShapeRight} className='bg-shape bg-shape-right' alt="" />
      <div className="container">
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
            <div className="col-lg-5 col-sm-12 flex-col">
              <div className="auth-form">
                <p className="text ">
                  Enter your email address to sign in or to create an account
                </p>
                <form class="mt-4">
                  <div className="box-search">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      value={email}
                    />
                    <span className={` ${email ? "focusedTrue" : ""}`}>
                      Email Address
                    </span>
                  </div>
                </form>
                <button
                  className={email != '' ? "btn btn-primary login-btn login-btn-active mt-4" : "btn btn-primary login-btn mt-4"}
                  onClick={onSubmit}
                  disabled={loading}
                >
                  Continue
                </button>
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
                <a className="link"> Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
