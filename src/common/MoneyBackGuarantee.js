import React from 'react';
import ssl from '../assets/images/logo_comodo-ssl-certificate.png';
import mbg1 from '../assets/images/Group 2653.png';
import mbg2 from '../assets/images/Vrstva 1.png';

const MoneyBackGuarantee = (props) => (
    <>
    <section className="container money-gaurantee-wrapper">
        <div className="row">
            <div className="col-12 moneyback-div">
                <div className="flex">
                    {/* <img src={mbg1} className="mbg-icon" alt="" /> */}
                    <div className="text">
                        <p>Money Back Guarantee<br />
                            Secure Payments</p>
                        {/* <img src={ssl} alt="" /> */}
                    </div>
                    {/* <img src={mbg2} className="mbg-icon pay" alt="" /> */}
                </div>
            </div>
        </div>
        <div className="return-text">
        <span>* Return in original packaging, you can return them to us within 30 days</span>
    </div>
    </section>

   </>

);
export default MoneyBackGuarantee;
