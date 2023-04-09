import React, { useEffect, useState } from 'react';
import Splide from '@splidejs/splide';
import gallery from '../../assets/images/icon_picture.png';

export default function CustomerPhotos() {
    let [customerPhotos, setCustomerPhotos] = useState([1, 2, 3, 4, 5,6,7,8]);

    useEffect(() => {
        new Splide('#customer-photos',
            {
                cover: false,
                heightRatio: 0,
                arrows: false,
                perPage: 6,
                autoplay: true,
                type: 'loop',
                interval: 5000,
                pagination: true,
                gap: 20,
                breakpoints: {
                    768: {
                        perPage: 2,
                    },
                    992: {
                        perPage: 4,
                    }
                }
            }).mount();
    })
    return (
        <div className="container customer_photos_wrapper">
            <h2>Customer Photos</h2>

            <div id="customer-photos" className="splide">
                <div className="splide__track">
                    <ul className="splide__list">
                        {
                            customerPhotos.map((photo, i) => <li key={i} className="splide__slide">
                                <div className="img_div">
                                    <img src={gallery} />
                                </div>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>

    )
}
