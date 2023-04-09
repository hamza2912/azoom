import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import * as routes from "../routePaths";
import visa from '../assets/images/logo_visa.png';
import maestro from '../assets/images/logo_maestro.png';
import amex from '../assets/images/logo_amex.png';
import barclays from '../assets/images/logo_barclays.png';
import applePay from '../assets/images/logo_apple-pay.png';
import klarna from '../assets/images/logo-klarna.png';
import clearPay from '../assets/images/logo_clearpay.png';
import trustPilot from '../assets/images/logo_trustpilot.png';
import dhl from '../assets/images/logo_dhl.png';
import ups from '../assets/images/logo_ups.png';
import panther from '../assets/images/logo_panther.png';
import xdp from '../assets/images/logo_xdp.png';
import dpd from '../assets/images/logo_dpd.png';
import bjs from '../assets/images/logo_bjs.png';
import parcel from '../assets/images/logo_parcel_force-worldwide.png';
import hermes from '../assets/images/logo_hermes.png';
import dx from '../assets/images/logo_dx.png';
import arrowxl from '../assets/images/logo_arrowxl.png';
import phone from '../assets/images/icons/icon_phone.svg';
import time from '../assets/images/icon_time.png';
import facebook from '../assets/images/icons/logo_facebook.svg';
import instagram from '../assets/images/icons/logo_instagram.svg';
import linkedin from '../assets/images/icons/logo_linkedin.svg';
import twitter from '../assets/images/icons/icon_twitter.svg';
import MoneyBackGuarantee from './MoneyBackGuarantee';
import { set } from 'lodash';

const Footer = ({ hasMoneyBack, hasOptionsPartners }) => {

	const [acceptCookies, setacceptCookies] = React.useState(false);

	return(
	<div className="footer-wrapper mt-5">

		{hasMoneyBack && <MoneyBackGuarantee />}
		<section className="container-fluid">
			{hasOptionsPartners && <div className="row border-bottom mt-5">
				<div className="col-12">
					<div className="container footer-opts">
						<div className="row mb-5">
							<div className="col-md-4 col-sm-12">
								<p className="opts-text">Trusted Shopping</p>
								<img src={trustPilot} className="trust-icon" alt="" />
								<div className="rating-stars rating-stars-wrapper">
									<ReactStars
										  size= {20}
										  value= {2.5}
										  count={5}
										  edit= {false}
										  isHalf={true}
										  emptyIcon= {<i className="far fa-star" />}
										activeColor="#00B67A"
										color="#00B67A"
									/>
									<span>4.6 out of 5.0</span>
								</div>
							</div>
							<div className="col-md-4 col-sm-12 margin">
								<p className="opts-text brand-title">Payment Options</p>
								<img src={visa} className="brand-icon" alt="" />
								<img src={maestro} className="brand-icon pay-maestro" alt="" />
								<img src={amex} className="brand-icon" alt="" />
								<img src={barclays} className="brand-icon" alt="" />
								<img src={applePay} className="brand-icon pay-maestro" alt="" />
								<img src={klarna} className="brand-icon" alt="" />
								<img src={clearPay} className="brand-icon" alt="" />
							</div>
							<div className="col-md-4 col-sm-12 margin">
								<p className="opts-text brand-title">Delivery Partners</p>
								<img src={dhl} className="delvery-partners-icon dhl" alt="" />
								<img src={ups} className="delvery-partners-icon ups" alt="" />
								<img src={panther} className="delvery-partners-icon panther-xdp-dpd" alt="" />
								<img src={xdp} className="delvery-partners-icon panther-xdp-dpd" alt="" />
								<img src={dpd} className="delvery-partners-icon panther-xdp-dpd" alt="" />
								<img src={bjs} className="delvery-partners-icon bjs" alt="" />
								<img src={parcel} className="delvery-partners-icon parcel" alt="" />
								<img src={hermes} className="delvery-partners-icon hermes" alt="" />
								<img src={dx} className="delvery-partners-icon dx" alt="" />
								<img src={arrowxl} className="delvery-partners-icon arrowxl" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			}
			<div className="row border-bottom">
				<div className="col-12">
					<div className="container">
						<div className="row mt-4 mb-4">
							<div className="col-md-4 col-sm-6 col-6">
								<ul>
									<li><b>About Us</b></li>
									<li className="item"><Link to={routes.aboutPage}>About azoom</Link></li>
									<li className="item"><Link to={routes.chooseUsPage}>Why us?</Link></li>
									<li className="item"><Link to={routes.expertisePage}>Our Expertise</Link></li>
									<li className="item"><Link to={routes.ideaPage}>Got an idea</Link></li>
									<li className="item"><Link to={routes.homepage}>Careers</Link></li>
									<li className="item"><Link to={routes.contactPage}>Contact us</Link></li>
									<li className="item"><Link to={routes.homepage}>Gift cards</Link></li>
								</ul>
							</div>
							<div className="col-md-4 col-sm-6 col-6">
								<ul>
									<li><b>Customer Services</b></li>
									<li className="item"><Link to={routes.orders}>My Orders</Link></li>
									<li className="item"><Link to={routes.homepage}>My Account</Link></li>
									<li className="item"><Link to={routes.returnCenter}>Return of Replace Items</Link></li>
									<li className="item"><Link to={routes.homepage}>Track My Order</Link></li>
									<li className="item"><Link to={routes.helpPage}>Help Centre</Link></li>
									<li className="item"><Link to={routes.homepage}>Delivery information</Link></li>
									<li className="item"><Link to={routes.homepage}>Accessibility Statement</Link></li>
									<li className="item"><Link to={routes.homepage}>Return Policy</Link></li>
									<li className="item"><Link to={routes.homepage}>Product Recalls</Link></li>
									<li className="item"><Link to={routes.homepage}>Report a Bug</Link></li>
								</ul>
							</div>
							<div className="col-md-4 col-sm-6">
								<ul>
									<li><b>Contact Us</b></li>
									<li><button className="btn action-btn service"><i className="far fa-clock" /> Quick
										Service</button></li>
									<li className="call-us-btn-li"><button className="btn action-btn call"><i className="fa fa-phone-volume" />Call Us</button></li>
									<li className="item support"><b>Customer Service</b></li>
									<li className="item support">Open, Closes 7.00 pm</li>
									<li className="item support"><b>Shoppng Assistance</b></li>
									<li className="item support">Open, Closes 7.00 pm</li>
									<li><a className="link">Weekly Hours</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mt-4">
				<div className="row">
					<div className="col-12 flex">
						<div className="terms-border">
							<a>Terms of use</a>
						</div>
						<div className="terms-border ml-2">
							<a>Privacy Policy</a>
						</div>
						<div className="terms-border ml-2">
							<a>Terms of Preferences</a>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row mt-3">
					<div className="col-12">
						<Link to={routes.homepage}><img src={facebook} className="social-icon" alt="" /></Link>
						<Link to={routes.homepage}><img src={instagram} className="social-icon" alt="" /></Link>
						<Link to={routes.homepage}><img src={linkedin} className="social-icon" alt="" /></Link>
						<Link to={routes.homepage}><img src={twitter} className="social-icon" alt="" /></Link>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row mt-3">
					<div className="col-12 footer-text">
						<p>© Copyright 2021 by AZoom LTD, 205 Kings Road, Tyseley Birmingham, West Midlands, England, B11
							2AA</p>
						<p><b>AZoom </b>is an online platform that sells and distributes islamic literature and other house
							hold
							items. A friends and family run business that truely believes in servicing the community that
							raised them and appeasing to the up and coming generation with the same. Our key to success has
							always been the ability to listen to our consumer needs and wants extremely well. With more than
							20 years of experience in this industry we have built some amazing partners from overseas who
							helped us source some of the most in demand literature in demand by our community. We believe
							our value lie on making islamic material accessable to the masses irrespective of the status
							quo; where the profit margin shouldnt be adjusted by ‘supply and demand’ but of a ‘fair price’
							enough to allow our supplier to invest and create more books for thier community. </p>
					</div>
				</div>
			</div>
		</section>

		{!acceptCookies ? <div className="container-fluid">
			<div className="row">
				<div className="col-12 cookies-div">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="text-div">
									<p className="text">This website uses cookies to distinguish you from other users.
										This
										helps us to provide you with a good user experience and also allows us to
										improve
										our website.<a className="privacy-link">Privacy Policy</a></p>
									<div className="display">
										<a className="cookie-link">Cookie Settings</a>
										<button onClick={()=>setacceptCookies(true)} className="btn btn-primary cookies-btn">Accept All Cookies</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>: null}
	</div>
	)
	};
export default Footer;
