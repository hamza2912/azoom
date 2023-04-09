import React from 'react'

export default function contact_form() {
    return (
             <div className="col-12 col-md-5 contactform">
                <h1>Contact Form</h1>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Phone"/>
                <input type="text" placeholder="Subject"/>
                <textarea className="msg" type="text" placeholder="Message"></textarea>
                <p className="pp">0/999</p>

                <div className="mt-5">
                    <p>
                        <input type="checkbox"/> I agree to the <a>Terms & Conditions</a> and
                        <a>Privacy
                        Policy</a>
                    </p>
                    <button>Send</button>
                </div>
            </div>
    )
}
