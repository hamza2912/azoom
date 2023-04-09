import React from 'react'
import Contact from './contact_form'
import DefaultLayout from '../../common/DefaultLayout';

export default function about_expertize() 
{
    return (
	<DefaultLayout>

    <div className="container-fluid">
        <div className="row">
            <div className="col-12 help_head">
                <h1>Our Expertise</h1>
            </div>
        </div>
    </div>
    <div className="container">
        <p className='route'>Home  /  About  /  <span>Our Expertise</span></p>

        <div className="row help_main">
            <div className="col-12 col-md-7">
                <div className="pr-4">
                    <h1>Our Expertise</h1>
                    <p>
                        Our passion combines in perfect harmony with over<b>20 years’ of experience </b> of
                        sourcing and
                        distributing Islamic books and other products. It’s what makes us a unique platform
                        amongst the crowd, and it’s why we can help you find anything and everything you’ve been
                        searching for with nothing more than the click of a button.
                    </p>
                    <p>
                        As well as relying on our experience, we also take pride in looking to the future. That
                        means we’re not content with doing things the same old way just because they’ve worked
                        so far — <b>we want to innovative.</b> This approach is core to who we are and is what
                        allows
                        us to make optimal use of our experience in the Islamic world.
                    </p>
                    <p>
                        By combining <b>innovation with experience</b> we’re left with an online store that
                        welcomes you
                        through the door and makes shopping easier than you could have ever imagined. Just what
                        you want to hear when you’ve looked high and low for anything from modest child’s
                        clothing, to cushions adorned with scripture and a must-read Islamic text no one else
                        seems to be able to find. Add in our ever-growing selection of authentic gifts and
                        treats and you have the keys to a store that’s all about celebrating what truly matters
                        in life.
                    </p>
                    <p>And if you want to launch a business or treat your own customers to nothing but the best,
                        we can help with that too. Simply sign up for your very own Azoom Wholesale Account and
                        you can make use of our unique combination of buying power and expertise with nothing
                        more than a quick click or call to your dedicated account manager. <b>We like to think
                        of
                        it as business made easy.</b> 
                    </p>
                </div>

            </div>
            <Contact/>
        </div>
    </div>

    
	</DefaultLayout>
    
)
}
