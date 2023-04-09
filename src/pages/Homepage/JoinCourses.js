import React from 'react';
import ReactStars from 'react-rating-stars-component';
import communityBadge from '../../assets/images/badge_azoom-community.svg';
import bannertai_mob from '../../assets//images/banner_tai-mobile.jpg';
import bannertai from '../../assets//images/banner_tai-desktop.jpg';
import register_rect from '../../assets//images/Rectangle 3892.png';
import banner_name from '../../assets//images/Group 2591.png';

const JoinCourses = ({ registerForCourse }) => (
  <div className="row mt-5 brand-courses-spacing">
    <div className="col-12 col-pd col-md-6 col-sm-12">
      <div className="reg-review">
        <img src={bannertai} className="banner-tai" alt="" />
        <div className="ratings">
          <p>recently rated</p>
          <div className="rating-stars rating-stars-wrapper ml-2">
            <ReactStars
              count={5}
              size={15}
              value={4.5}
              edit={false}
              isHalf={true}
              emptyIcon={<i className="far fa-star" />}
              halfIcon={<i className="fa fa-star-half-alt" />}
              filledIcon={<i className="fa fa-star" />}
              activeColor="#000000"
              color="black"
            />
            <span className="recently-rated">5.0</span>
            <span className="item-name">book</span>
          </div>
        </div>
        <div className="banner-name">
          <span>Taj Ullah</span>
        </div>
        <div className="text-position">
          <div className="bottom-border">
            <p className="text1">Journey Through the Quran</p>
            <p className="text2">By Sharif Hasan al-Banna</p>
          </div>
          <p className="text3">
            Become a passionate reviewer of books, all you need is passion to
            read & talk.
          </p>
          {/* <button className="btn btn-primary btn-reg">Register Here</button> */}
          <button
            className="secondary_btn "
            onClick={() => registerForCourse('Book Reviewer')}
          >
            Register Here
          </button>
        </div>
      </div>
      <div className="reg-review-resp">
        <div className="reg-review-text">
          <div className="text-position-resp">
            <div className="bottom-border">
              <p className="text1">Journey Through the Quran</p>
              <p className="text2">By Sharif Hasan al-Banna</p>
            </div>
            <p className="text3">
              Become a passionate reviewer of books, all you need is passion to
              read & talk.
            </p>
            {/* <button className="secondary_btn">Register Here</button> */}
          </div>
        </div>
        <img src={bannertai_mob} className="banner-tai-mob" alt="" />
        <img src={banner_name} className="banner-name" alt="" />
        <button className="btn btn-primary btn-reg">Register Here</button>
        
      </div>
    </div>
    <div className="col-12 col-pd col-md-6">
      <div className="register-div">
        <img src={register_rect} className="reg-rect" alt="" />
        <img src={communityBadge} className="azoom-badge" alt="" />
        <div className="community-features">
          <div className="flex">
            {/* <button className="btn btn-primary btn-reg">Register Here</button> */}
            <button
              className="primary_btn btn-reg"
              onClick={() => registerForCourse('Member Request')}
            >
              Register Here
            </button>
            <p> & join our Community</p>
          </div>
          <p>where you can:</p>
          <ul>
            <li className="list-item">Share Ideas</li>
            <li className="list-item">Write Reviews & Rate Products</li>
            <li className="list-item">Write your own Blog</li>
            <li className="list-item">and much more…</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
export default JoinCourses;
