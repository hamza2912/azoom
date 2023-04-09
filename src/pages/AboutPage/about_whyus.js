import React from 'react'
import DefaultLayout from '../../common/DefaultLayout';
import i1 from '../../assets/images/icon_quote-small.png'
import i2 from '../../assets/images/icon_quote-small.png'
import Contact from './contact_form'

export default function about_whyus() {
    return (
<DefaultLayout>
<div className="container-fluid">
        <div className="row ">
            <div className="col-12 help_head">
                <h1>Why Us?</h1>
            </div>
        </div>
    </div>
    <div className="container">
    <p className='route'>Home  /  About  /  <span>Why Us</span></p>

        <div className="row help_main">
            <div className="col-12 col-md-7">
                <div className="pr-4">
                    <h1>Why Us?</h1>
                    <p>From the day we opened for business we’ve been committed to sourcing books from all
                        around the world, but there’s more to us than that.
                    </p>
                    <p>We take the time to constantly expand our range and find new products, gifts, and
                        categories that we know will make you smile from the moment you lay eyes on them. It’s
                        the way we would want our favourite online store to be ran, so it’s the only way we’ll
                        ever run your new favourite place to shop. That’s our promise, and it’s a promise we
                        intend to keep for years to come.
                    </p>
                    <p>When you combine our <span className="grey_span">passion for customer service</span> and
                        <span className="grey_span">sourcing products</span> with our cultural roots you start to
                        see what makes Azoom different. Rather than simply reselling products that we think will
                        make money in the short term, we go in search of exactly what you want to see. The
                        result is an online store that’s genuine, honest, and authentic in relation to every
                        aspect of Islamic culture. When you trust us with your time and money we want you to
                        know that you can always enjoy the peace of mind you won’t find anywhere else online.
                        Why? Because as shoppers ourselves, it’s what we’d expect too.
                    </p>
                    <p>As well as sourcing products and gifts that are sure to<span className="grey_span"> make you
                            smile</span>, we’re working on a whole host of new ventures so the community can
                        continue to grow and thrive. Right at the top of the list is our goal to eventually work
                        with authors by helping with publishing onto platform. That way we can bring new voices,
                        viewpoints, and ways of thinking into the Islamic community and show you that when you
                        trust in us, we’ll find you things no one else can. </p>
                    <div className="gdiv">
                        <img className="i1" src={i1} alt="ixon"/>
                        <img className="i2" src={i2} alt="ixon"/>
                        <p>This is why you should try us, <br />
                            and we’re ready when you are. </p>
                    </div>
                </div>
            </div>
            <Contact/>
        </div>
    </div>





</DefaultLayout>
        )
}
