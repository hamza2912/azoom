import React, { useState } from 'react';
import helpIcon from '../../assets/images/icon_help-white.svg';
import DefaultLayout from '../../common/DefaultLayout';
import HelpSearchContact from './HelpSearchContact';
import ChangeOrder from './ChangeOrder';
import ReturnPolicy from './ReturnPolicy';
import Refund from './Refund';
import CancelOrder from './CancelOrder';
import DeliveryInfo from './DeliveryInfo';
import ReplaceItems from './ReplaceItems';
import Breadcrumbs from '../../common/Breadcrumbs';
import * as routes from '../../routePaths';

const HelpPage = (props) => {
	let policy = 'policy', refund = 'refund', replace = 'replace',
		changeOrder = 'changeOrder', delivery = 'delivery', cancel = 'cancel';
	let [selected, setSelected] = useState(policy);

	const handleHelpType = (e) => {
		setSelected(e.target.id);
	}

	return (
		<DefaultLayout hasOptionsPartners={true}>
			<div className="container-fluid heading_div mb-4 d-flex justify-content-center align-items-center">
				<b>Help Centre  &nbsp;</b>
				<img src={helpIcon} alt="icon" />
			</div>
			<div className='container'>
				<Breadcrumbs 
				 	paths={[{url: routes.homepage,text:"Home"},{url: routes.helpPage,text:"Help"}]}
				/>
			</div>
			<div className="container mt-3 help_container mb-5">
			{/* <p className='route_help'>Home  &nbsp;/&nbsp;  Help Centre &nbsp; /&nbsp; <span> Return Policy</span></p> */}

				<div className="row">
					<div className="col-sm-9 left_div">
						{selected === changeOrder && <ChangeOrder />}
						{selected === policy && <ReturnPolicy />}
						{selected === refund && <Refund />}
						{selected === cancel && <CancelOrder />}
						{selected === delivery && <DeliveryInfo />}
						{ selected === replace && <ReplaceItems /> }
						<HelpSearchContact />
					</div>
					<div className="col-sm-3 right_div mobile-hidden">
						<h1>Related Articles</h1>
						<ul className="mt-5">
							<li className={`mb-4 ${selected === policy ? 'highlight' : ''}`} onClick={handleHelpType} id={policy}>Return Policy</li>
							<li className={`mb-4 ${selected === refund ? 'highlight' : ''}`} onClick={handleHelpType} id={refund}>Refunds</li>
							<li className={`mb-4 ${selected === replace ? 'highlight' : ''}`} onClick={handleHelpType} id={replace}>Replacing Damaged Items or Missing Parts</li>
							<li className={`mb-4 ${selected === changeOrder ? 'highlight' : ''}`} onClick={handleHelpType} id={changeOrder}>How Do I Make Changes to an Order?</li>
							<li className={`mb-4 ${selected === delivery ? 'highlight' : ''}`} onClick={handleHelpType} id={delivery}>Delivery Info</li>
							<li className={`mb-4 ${selected === cancel ? 'highlight' : ''}`} onClick={handleHelpType} id={cancel}>Returns & Cancellations Form</li>
						</ul>
					</div>
				</div>
			</div>
		</DefaultLayout>
	)
};
export default HelpPage;
