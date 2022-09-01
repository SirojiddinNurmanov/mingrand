import React from "react";
import { useTranslation } from "react-i18next";

const TestimonialV2 = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const { t } = useTranslation();
  return (
    <div
      className="testimonial-area bg-overlay pd-top-118 pd-bottom-120 bg-overlay"
      style={{ background: "url(assets/img/bg/2.png)" }}
    >
      <div className="container">
        <div className="section-title style-white text-center">
          <h6>{t(`testimonial.h6`)}</h6>
          <h2>{t(`testimonial.h2`)}</h2>
          <p>{t(`testimonial.p`)} </p>
        </div>
        <div className="testimonial-slider-2 owl-carousel text-center">
          <div className="item">
            <div className="single-testimonial-inner style-three text-center">
              <div className="thumb main-thumb">
                <img
                  src={publicUrl + "assets/img/testimonial/1.png"}
                  alt="img"
                />
              </div>
              <div className="details">
                <h6 className="name">Sarif Jaya Miprut</h6>
                <span className="designation">Guest</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <div className="rating-inner">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="single-testimonial-inner style-three text-center">
              <div className="thumb main-thumb">
                <img
                  src={publicUrl + "assets/img/testimonial/3.png"}
                  alt="img"
                />
              </div>
              <div className="details">
                <h6 className="name">Sarif Jaya Miprut</h6>
                <span className="designation">Guest</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
                <div className="rating-inner">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="single-testimonial-inner style-three text-center">
              <div className="thumb main-thumb">
                <img
                  src={publicUrl + "assets/img/testimonial/4.png"}
                  alt="img"
                />
              </div>
              <div className="details">
                <h6 className="name">Sarif Jaya Miprut</h6>
                <span className="designation">Guest</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
                <div className="rating-inner">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialV2;
