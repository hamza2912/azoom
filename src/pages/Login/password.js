import React, { useState } from "react";
import lock from "../../assets/images/icon_lock.png";
import Logo from "../../common/Logo";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { auth } from "../../services/auth";
import { toast } from "react-toastify";
import bgShapeLeft from '../../assets/images/bg_shape-left.svg';
import bgShapeBottom from '../../assets/images/bg_shape-bottom.svg';
import bgShapeRight from '../../assets/images/bg_shape-right.png';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Password() {
  const [password, setPassword] = useState("");
  const [passShow, setPassShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    state: { paramEmail },
  } = useLocation();
  const [email] = useState(paramEmail);

  const onSubmit = async () => {
    try {
      await auth({
        //TODO
        email: email,
        password: password,
      });
      toast.success("You are successfully Log In!");
      window.location.href = "/"; // TODO
    } catch (err) {
      toast.error(err.message); //TODO
    }
  };
  return (
    <div className="bg-white login_sku">
      <img src={bgShapeLeft} className='bg-shape bg-shape-left' alt="" />
      <img src={bgShapeBottom} className='bg-shape bg-shape-bottom' alt="" />
      <img src={bgShapeRight} className='bg-shape bg-shape-right' alt="" />
      <div className="container">
        <div className="login-header">
          <div className="logo_div">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="secure-login">
            <p className="text">Secure Login</p>&nbsp; &nbsp;
            <img src={lock} className="lock-icon" alt="" />
          </div>
        </div>
      </div>
      <div className="login-container">
        <div className="container-fluid auth-form-wrapper">
          <div className="container d-flex justify-content-center">
            <div className="col-lg-5 col-sm-12 flex-col">
              <div className="auth-form">
                <p className="text mr-5 ml-5 mb-4">Welcome Back!</p>
                <a className="link-0">{email}</a>
                <br />
                <a className="link">Use a Different Email</a>
                <form className="mt-5">
                  <div className="box-search">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type={passShow ? "text" : "password"}
                      value={password}
                    />
                    <span className={` ${password ? "focusedTrue" : ""}`}>
                      Password
                    </span>
                    <a className="link-2" onClick={() => setPassShow(!passShow)}>
                      {passShow ? "Hide" : "Show"}
                    </a>
                  </div>
                </form>
                <div class="mb-3">
                  <button
                    className={password != '' ? "btn btn-primary login-btn login-btn-active mt-3" : "btn btn-primary login-btn mt-3"}
                    onClick={onSubmit}
                  >
                    Sign In
                  </button>
                </div>
                <a class="link-2" href="create-pass.html">
                  Forgot Password
                </a>
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
