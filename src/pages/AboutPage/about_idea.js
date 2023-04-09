import React from 'react'
import DefaultLayout from '../../common/DefaultLayout';
import i1 from '../../assets/images/icon_quote-small.png'
import i2 from '../../assets/images/icon_quote-small.png'
import Contact from './contact_form';

export default function about_idea() {
    return (
    <DefaultLayout>

<div className="container-fluid">
        <div className="row">
            <div className="col-12 help_head">
                <h1>Got an idea</h1>
            </div>
        </div>
    </div>
    <div className="container">
        <p className='route'>Home  /  About  /  <span>Got an idea</span></p>

        <div className="row help_main">
            <div className="col-12 col-md-7">
                <div className="pr-4">
                    <h1>Share Your Thoughts:</h1>
                    <span className="grey_span">Got an idea?</span>
                    <p>Share it with… </p>
                    <span className="grey_span">Want us to focus on something new?
                    </span><br />
                    <span className="grey_span">Wish we stocked something in particular?
                    </span>
                    <div className="gdiv_idea">
                        <img className="i1" src={i1} alt="ixon"/>
                        <img className="i2" src={i2} alt="ixon"/>
                        <h1>We’re listening </h1>
                        <p className="this_is_a">This is a store that’s all about you, which means when you want us to think about
                            <br />something, all you have to do is ask.
                        </p>
                    </div>
                </div>
            </div>
            <Contact/>
        </div>
    </div>


	</DefaultLayout>

        )
}
