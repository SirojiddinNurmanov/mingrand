import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();

  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div className="about-area bg-gray pd-top-120 pd-bottom-120">
      <div className="container">
        <div className="single-about-inner about-line-right bg-white">
          <div className="row no-gutter">
            <div className="col-lg-4 order-lg-12">
              <div
                className="thumb"
                style={{
                  background: "url(" + publicUrl + "assets/img/other/2.png)",
                }}
              />
            </div>
            <div className="col-lg-8 order-lg-1">
              <div className="details">
                <div className="section-title mb-4">
                  <h6>{t(`about.subtitle`)}</h6>
                  <h2>{t(`about.title`)}</h2>
                  <p>{t(`about.text`)}</p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="single-list-inner">
                      <li>{t(`about.features.feature1`)}</li>
                      <li>{t(`about.features.feature2`)}</li>
                      <li>{t(`about.features.feature3`)}</li>
                      <li>{t(`about.features.feature4`)}</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="single-list-inner">
                      <li>{t(`about.features.feature5`)}</li>
                      <li>{t(`about.features.feature6`)}</li>
                      <li>{t(`about.features.feature7`)}</li>
                    </ul>
                  </div>
                </div>
                <Link className="btn btn-base" to="#">
                  {t(`about.more`)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
