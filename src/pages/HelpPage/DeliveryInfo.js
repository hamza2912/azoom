import React from 'react';
import covideIconWhite from '../../assets/images/icon_covid-white.svg';
import iconInfoWhite from '../../assets/images/icon_info-white.svg';

const DeliveryInfo = (props) => (
	<>
		<h1>Delivery Info</h1><br />
		<div class="block_div block_black_div d-flex align-items-center">
			<div class="box d-flex justify-content-center align-items-center">
				<img src={covideIconWhite} alt="info" />
			</div>
			<p class="ml-3 mt-1 mb-1">With recent measures in place due to COVID-19, we may experience longer delivery
			times than normal.</p>
		</div>

		<br /><br />

		<p>
			<b>How Will My Order be Delivered?                </b>
			<br /><br />
			We will send your order using the fastest, safest and most reliable delivery method possible. We will select
			the appropriate
			delivery method and carrier when you order. It is currently not possible to choose a carrier.
                <br /><br />
			<b>You can see the delivery method chosen for your products in the following places:</b>
		</p>
		<ul class="mb-5 ml-3">
			<li>On the <b>Delivery & Returns </b>  tab when you view a product on our website</li>
			<li>Under <b>Delivery Method </b>for each product in    <span><b><u>  My Orders</u></b></span></li>
			<li>In the<b> Order Confirmation email</b> that you will receive from us after you have placed an order</li>
			<li>In the <b>Dispatch Confirmation email</b> that you will receive from us as soon as your ordered products have
			been dispatched</li>

		</ul>
		<h1>Delivery Methods</h1><br />

		<p>
			<b>Small Parcel Delivery                </b>
			<br /><br />
			Your items are being delivered by one of our parcel carriers to the entrance door of your dwelling, or to the front
			door of your apartment building. Upon dispatch, we will notify you via email with the estimated day of delivery and
			tracking number.
                <br /><br />
			<b>COVID-19 Contactless Delivery                </b>
			<br /><br />
			Your items will be delivered by carriers to the entrance door of your dwelling, or to the front door of your
			apartment building. Upon dispatch we will email you with detailed delivery instructions and an estimated delivery date.
			We will also provide a
			tracking number so that you can track your parcel(s).
                <br /><br />
			In addition, the carrier will contact you via email and/or text message with further delivery instructions and
			the time window for delivery.
                <br />Upon our driver’s arrival, please confirm that you are the recipient. We’ll take a picture of
								the item at your door as proof of delivery.
			As we won’t be able to bring the item into your home, we recommend that you ask a friend or relative to help.
                <br /><br />

			<b>Doorstep Delivery                </b>
			<br /><br />
			Some larger items will be delivered by carriers to the entrance door of your dwelling, or to the front door of
			your apartment building. Upon dispatch we will email you with detailed delivery instructions and an estimated
			delivery date. We will also provide a tracking number so that you can track your parcel(s).
                <br /><br />
			In addition, the carrier will contact you via email and/or text message with further delivery instructions and
			the time window for delivery.
                <br />
			In case of a very heavy/large shipments or palletized items (e.g. garden sheds) a curbside delivery service might
			take place.
                <br /><br />
			<b>Room of Choice Delivery                </b>

		</p>
		<div class="block_div block_black_div2nd d-flex align-items-center">
			<div class="box d-flex justify-content-center align-items-center">
				<img src={covideIconWhite} alt="info" />
			</div>

			<p class="ml-3">We regret to inform you that we’re currently unable to offer this service due to COVID-19. Instead
			of a delivery to your room of choice, our delivery team will perform a doorstep delivery. We hope to resume our full
			service as soon as possible but our current priority is the safety of you and our delivery team. Thank you for your
			understanding.
                    <br /><br />
				The largest items will be delivered by specialist carriers to a room of choice in your home. Upon dispatch we will
				email you with detailed delivery instructions and an estimated delivery date. We will also provide a tracking number
				so that you can track your parcel(s).
                    <br /><br />
				In addition, the carrier will contact you via email and/or text message with further delivery instructions and the
				time window for delivery.
                    <br /><br />
				To guarantee a smooth delivery, please ensure that your home is prepared and accessible. Please remove potential
				obstacles and any fragile or valuable objects from the delivery path.

                </p>
		</div>

		<h1 class="mt-5">When will my order arrive?</h1>
		<br /><br />
		<p>
			<b>Want to track your order now?               </b>
			Visit My Account to see the estimated delivery date for each of your ordered products. Click “Track Parcel” for
			any of your products to get more details on the status of your delivery.
                <br /><br />
			Every product lists an estimated delivery date. Upon dispatch we will send you a tracking number to track your
			parcel to your delivery address, as well as update you with a more accurate delivery date.
                <br /><br />

		</p>
		<h1>Dispatch Costs</h1>
		<br /><br />
		<p>
			<b>                    Dispatch Costs:   </b>
			<br /><br />
			Subject to certain geographic, size and product limitations, delivery of orders in the UK £40.00 and over are free.
			Unless otherwise marked, items marked FREE DELIVERY! on the product page will ship for free! We charge £4.99 for
			delivery of all orders under £40.00.
                <br /><br />
			<b>Shipping to Ireland                </b>
			<br /><br />
			Deliveries to the Republic of Ireland are subject to an additional surcharge. Full details below:
                <br /><br />
			Small Parcel Delivery: £10 per item
                <br /><br />
			Doorstep Delivery: £95 per item
                <br /><br />

		</p>
		<div class="block_div block_black_div3 d-flex align-items-center">
			<div class="box d-flex justify-content-center align-items-center">
				<img src={iconInfoWhite} alt="info" />
			</div>

			<p class="ml-3">
				Unfortunately, we are currently unable to ship to postcodes within the Channel Islands or the Isle of Man.
				Furthermore, in limited situations, due to network requirements, we are unable to deliver certain products,
				including but not limited to certain large items (e.g. sheds and jacuzzis), to certain postcodes in the UK.
				This exclusion applies regardless of the quantity. All fees and delivery limitations are clearly marked in the
				shopping basket and throughout checkout.
                </p>
		</div>
	</>
);
export default DeliveryInfo;
