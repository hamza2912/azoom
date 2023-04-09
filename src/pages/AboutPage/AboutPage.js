import React from 'react';
import DefaultLayout from '../../common/DefaultLayout';
import i1 from '../../assets/images/icon_quote-small.png'
import i2 from '../../assets/images/icon_quote-small.png'

const AboutPage = (props) => (
	<DefaultLayout hasOptionsPartners={true}>
		<div className="container-fluid">
			<div className="row">
				<div className="col-12 help_head">
					<h1>About</h1>
				</div>
			</div>
		</div>
		<div className="container">
			<p class='route'>Home  /  About  /  <span>About AZoom</span></p>

			<div className="row help_main">
				<div className=" col-md-7">
					<div className="pr-4">
						<h1>About  AZoom</h1>
						<p>Azoom exists to connect people from all walks of life with the rich traditions and heritage of Islam. By taking the time to source nothing but the finest products across an ever-growing range of categories, we make sure that when it comes to your culture and faith, we’re the only place you ever need to look. Perfect for when you want to be able to shop with the peace of mind that makes all the difference.
                    </p>
						<p>Not only that, but because we have real passion for what we do we’re constantly searching for new products we know will catch your eye. For us it’s always been about going the extra mile so that you can find something special, unique, and truly memorable with just a few clicks on our platform. Once you see what we have to offer, you’ll be sure to come back to us over and over again.
                    </p>
						<p>
							And because we’re as passionate today as we were on the first day we opened our doors for business, you’ll find our site offers something new and exciting every time you stop by. All you have to do now is spend a little time exploring and then leave all the hard work to us:
                    </p>
						<p>
							<ul className="para_ul">
								<li>        We care about working closely with authors and growing to a point where we can even help with publishing
                        </li>
								<li>        We’re committed to continuing to strengthen our relationships with large manufacturers and distributors
                        </li>
								<li>
									to secure you the best possible price

                        </li>
							</ul>
						</p>

						<div className="gdiv">
							<img className="i1" src={i1} alt="ixon" />
							<img className="i2" src={i2} alt="ixon" />

							<p>We simply wouldn’t have it any other way.  </p>
						</div>
					</div>
				</div>
				<div className="col-md-5 contactform">
					<h1>Contact Form</h1>
					<input type="text" placeholder="First Name" />
					<input type="text" placeholder="Last Name" />
					<input type="text" placeholder="Email" />
					<input type="text" placeholder="Phone" />
					<input type="text" placeholder="Subject" />
					<textarea className="msg" type="text" placeholder="Message"></textarea>
					<p className="pp">0/30</p>

					<div className="mt-5">
						<p>
							<input type="checkbox" /> I agree to the <a>Terms & Conditions</a> and <a>Privacy
                            Policy</a>
						</p>
						<button>Send</button>
					</div>
				</div>
			</div>
		</div>
	</DefaultLayout>
);
export default AboutPage;
