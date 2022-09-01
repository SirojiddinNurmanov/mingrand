import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer_v1 = () => {
  const componentDidMount = () => {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);
  };

  componentDidMount();

  let publicUrl = process.env.PUBLIC_URL + "/";
  const { t } = useTranslation();

  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Link to="index.html">
                <img src={publicUrl + "assets/img/logo.png"} alt="img" />
              </Link>
            </div>
            <div className="col-md-8 text-md-right mt-3 mt-md-0">
              <ul className="social-area">
                <li>
                  <Link to="https://www.facebook.com/solverwp/">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.twitter.com/solverwp/">
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/solverwp/">
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.skype.com/solverwp/">
                    <i className="fab fa-skype" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.pinterest.com/solverwp/">
                    <i className="fab fa-pinterest-p" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-middle bg-black">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="widget widget_about">
                <h4 className="widget-title">{t(`footer.company`)}</h4>
                <div className="details">
                  <p>{t(`footer.text`)}</p>
                  <p>
                    <i className="fas fa-map-marker-alt" />{" "}
                    {t(`footer.address`)}
                  </p>
                  <p>
                    <i className="fas fa-phone-volume" /> {t(`footer.tel`)}
                  </p>
                  <p>
                    <i className="fas fa-envelope" />
                    {t(`footer.email`)}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="widget widget_newsfeed">
                <h4 className="widget-title">{t(`footer.news`)}</h4>
                <ul className="go-top">
                  <li>
                    <Link to="/blog">
                      <i className="far fa-user" />
                      By Admin
                    </Link>
                    <span>
                      <i className="far fa-calendar-alt" />
                      Marce 9 , 2021
                    </span>
                  </li>
                  <li>
                    <Link to="/blog">
                      <i className="far fa-user" />
                      By Admin
                    </Link>
                    <span>
                      <i className="far fa-calendar-alt" />
                      Marce 9 , 2020
                    </span>
                  </li>
                  <li>
                    <Link to="/blog">
                      <i className="far fa-user" />
                      By Admin
                    </Link>
                    <span>
                      <i className="far fa-calendar-alt" />
                      Marce 11 , 2020
                    </span>
                  </li>
                  <li>
                    <Link to="/blog">
                      <i className="far fa-user" />
                      By Admin
                    </Link>
                    <span>
                      <i className="far fa-calendar-alt" />
                      Januray 9 , 2020
                    </span>
                  </li>
                  <li>
                    <Link to="/blog">
                      <i className="far fa-user" />
                      By Admin
                    </Link>
                    <span>
                      <i className="far fa-calendar-alt" />
                      Marce 9 , 2020
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-9">
              <div className="widget widget_subscribe mb-4">
                <h4 className="widget-title">{t(`footer.newsletter`)}</h4>
                <div className="details">
                  <p>{t(`footer.news_text`)}</p>
                  <div className="footer-subscribe-inner">
                    <input type="text" placeholder="Your Mail" />
                    <Link className="btn btn-base" to="#">
                      {t(`footer.subscribe`)}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="widget widget-tags pt-2 go-top">
                <h5 className="widget-title mb-3">{t(`footer.tags`)}</h5>
                <div className="tagcloud mt-0">
                  <Link to="/blog">{t(`footer.tag1`)}</Link>
                  <Link to="/blog">{t(`footer.tag2`)}</Link>
                  <Link to="/blog">{t(`footer.tag3`)}</Link>
                  <Link to="/blog">{t(`footer.tag4`)}</Link>
                  <Link to="/blog">{t(`footer.tag5`)}</Link>
                  <Link to="/blog">{t(`footer.tag6`)}</Link>
                  <Link to="/blog">{t(`footer.tag7`)}t</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-7 align-self-center">
              <p>{t(`footer.copyright`)}</p>
            </div>
            <div className="col-md-5 text-md-right go-top">
              <ul>
                <li>
                  <Link to="/">{t(`footer.home`)}</Link>
                </li>
                <li>
                  <Link to="/about">{t(`footer.about`)}</Link>
                </li>
                <li>
                  <Link to="/blog">{t(`footer.blog`)}</Link>
                </li>
                <li>
                  <Link to="/contact">{t(`footer.contact`)}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer_v1;
