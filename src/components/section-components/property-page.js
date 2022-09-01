import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PropertyPage = () => {
  // const componentDidMount = () => {
  //     const $ = window.$;

  //     $("body").addClass("body-bg");
  // };

  let publicUrl = process.env.PUBLIC_URL + "/";
  const { t } = useTranslation();

  return (
    <div className="blog-page-area pd-top-120 go-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="product-search-inner bg-main">
              <div className="row custom-gutters-20">
                <div className="col-md-3 align-self-center">
                  <h5>{t(`property.search.quentity`)} </h5>
                </div>
                <div className="col-md-6 mt-2 mt-md-0">
                  <div className="widget-search">
                    <div className="single-search-inner">
                      <input
                        type="text"
                        placeholder={t(`property.search.placeholder`)}
                      />
                      <button>
                        <i className="la la-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mt-2 mt-md-0 align-self-center">
                  <div className="single-select-inner">
                    <select>
                      <option value={1}>
                        {t(`property.search.sorts.sort1`)}
                      </option>
                      <option value={2}>
                        {t(`property.search.sorts.sort2`)}
                      </option>
                      <option value={3}>
                        {t(`property.search.sorts.sort3`)}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="single-product-wrap style-2">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/project/15.png"}
                      alt="img"
                    />
                    <div className="product-wrap-details">
                      <div className="media">
                        <div className="author">
                          <img
                            src={publicUrl + "assets/img/author/1.png"}
                            alt="img"
                          />
                        </div>
                        <div className="media-body">
                          <h6>
                            <Link to="/property-details">Owner Name</Link>
                          </h6>
                          <p>
                            <img
                              src={
                                publicUrl + "assets/img/icon/location-alt.png"
                              }
                              alt="img"
                            />
                            New York real estate{" "}
                          </p>
                        </div>
                        <Link className="fav-btn float-right" to="#">
                          <i className="far fa-heart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="product-details-inner">
                    <h4>
                      <Link to="/property-details">Daily Apartment</Link>
                    </h4>
                    <ul className="meta-inner">
                      <li>
                        <img
                          src={publicUrl + "assets/img/icon/location2.png"}
                          alt="img"
                        />
                        New York
                      </li>
                      <li>
                        <Link to="/property-details">For Sell</Link>
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor constetur </p>
                    <span className="price">$ 80,650.00</span>
                  </div>
                  <div className="product-meta-bottom style-2">
                    <span>
                      3 <span>Bedroom</span>
                    </span>
                    <span className="border-none">
                      2 <span>Bathroom</span>
                    </span>
                    <span>
                      1026 <span>sqft</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-product-wrap style-2">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/project/16.png"}
                      alt="img"
                    />
                    <div className="product-wrap-details">
                      <div className="media">
                        <div className="author">
                          <img
                            src={publicUrl + "assets/img/author/1.png"}
                            alt="img"
                          />
                        </div>
                        <div className="media-body">
                          <h6>
                            <Link to="/property-details">Owner Name</Link>
                          </h6>
                          <p>
                            <img
                              src={
                                publicUrl + "assets/img/icon/location-alt.png"
                              }
                              alt="img"
                            />
                            New York real estate{" "}
                          </p>
                        </div>
                        <Link className="fav-btn float-right" to="#">
                          <i className="far fa-heart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="product-details-inner">
                    <h4>
                      <Link to="/property-details">Family House</Link>
                    </h4>
                    <ul className="meta-inner">
                      <li>
                        <img
                          src={publicUrl + "assets/img/icon/location2.png"}
                          alt="img"
                        />
                        New York
                      </li>
                      <li>
                        <Link to="/property-details">For Sell</Link>
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor conseetur </p>
                    <span className="price">$ 80,650.00</span>
                  </div>
                  <div className="product-meta-bottom style-2">
                    <span>
                      3 <span>Bedroom</span>
                    </span>
                    <span className="border-none">
                      2 <span>Bathroom</span>
                    </span>
                    <span>
                      1026 <span>sqft</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-product-wrap style-2">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/project/9.png"}
                      alt="img"
                    />
                    <div className="product-wrap-details">
                      <div className="media">
                        <div className="author">
                          <img
                            src={publicUrl + "assets/img/author/1.png"}
                            alt="img"
                          />
                        </div>
                        <div className="media-body">
                          <h6>
                            <Link to="/property-details">Owner Name</Link>
                          </h6>
                          <p>
                            <img
                              src={
                                publicUrl + "assets/img/icon/location-alt.png"
                              }
                              alt="img"
                            />
                            New York real estate{" "}
                          </p>
                        </div>
                        <Link className="fav-btn float-right" to="#">
                          <i className="far fa-heart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="product-details-inner">
                    <h4>
                      <Link to="/property-details">Beach House</Link>
                    </h4>
                    <ul className="meta-inner">
                      <li>
                        <img
                          src={publicUrl + "assets/img/icon/location2.png"}
                          alt="img"
                        />
                        New York
                      </li>
                      <li>
                        <Link to="/property-details">For Sell</Link>
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor consectur </p>
                    <span className="price">$ 80,650.00</span>
                  </div>
                  <div className="product-meta-bottom style-2">
                    <span>
                      3 <span>Bedroom</span>
                    </span>
                    <span className="border-none">
                      2 <span>Bathroom</span>
                    </span>
                    <span>
                      1026 <span>sqft</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-product-wrap style-2">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/project/17.png"}
                      alt="img"
                    />
                    <div className="product-wrap-details">
                      <div className="media">
                        <div className="author">
                          <img
                            src={publicUrl + "assets/img/author/1.png"}
                            alt="img"
                          />
                        </div>
                        <div className="media-body">
                          <h6>
                            <Link to="/property-details">Owner Name</Link>
                          </h6>
                          <p>
                            <img
                              src={
                                publicUrl + "assets/img/icon/location-alt.png"
                              }
                              alt="img"
                            />
                            New York real estate{" "}
                          </p>
                        </div>
                        <Link className="fav-btn float-right" to="#">
                          <i className="far fa-heart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="product-details-inner">
                    <h4>
                      <Link to="/property-details">Hotel Apartment</Link>
                    </h4>
                    <ul className="meta-inner">
                      <li>
                        <img
                          src={publicUrl + "assets/img/icon/location2.png"}
                          alt="img"
                        />
                        New York
                      </li>
                      <li>
                        <Link to="/property-details">For Sell</Link>
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor conctetur </p>
                    <span className="price">$ 80,650.00</span>
                  </div>
                  <div className="product-meta-bottom style-2">
                    <span>
                      3 <span>Bedroom</span>
                    </span>
                    <span className="border-none">
                      2 <span>Bathroom</span>
                    </span>
                    <span>
                      1026 <span>sqft</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-product-wrap style-2">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/project/3.png"}
                      alt="img"
                    />
                    <div className="product-wrap-details">
                      <div className="media">
                        <div className="author">
                          <img
                            src={publicUrl + "assets/img/author/1.png"}
                            alt="img"
                          />
                        </div>
                        <div className="media-body">
                          <h6>
                            <Link to="/property-details">Owner Name</Link>
                          </h6>
                          <p>
                            <img
                              src={
                                publicUrl + "assets/img/icon/location-alt.png"
                              }
                              alt="img"
                            />
                            New York real estate{" "}
                          </p>
                        </div>
                        <Link className="fav-btn float-right" to="#">
                          <i className="far fa-heart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="product-details-inner">
                    <h4>
                      <Link to="/property-details">Daily Apartment</Link>
                    </h4>
                    <ul className="meta-inner">
                      <li>
                        <img
                          src={publicUrl + "assets/img/icon/location2.png"}
                          alt="img"
                        />
                        New York
                      </li>
                      <li>
                        <Link to="/property-details">For Sell</Link>
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor conctetur </p>
                    <span className="price">$ 80,650.00</span>
                  </div>
                  <div className="product-meta-bottom style-2">
                    <span>
                      3 <span>Bedroom</span>
                    </span>
                    <span className="border-none">
                      2 <span>Bathroom</span>
                    </span>
                    <span>
                      1026 <span>sqft</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-product-wrap style-2">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/project/4.png"}
                      alt="img"
                    />
                    <div className="product-wrap-details">
                      <div className="media">
                        <div className="author">
                          <img
                            src={publicUrl + "assets/img/author/1.png"}
                            alt="img"
                          />
                        </div>
                        <div className="media-body">
                          <h6>
                            <Link to="/property-details">Owner Name</Link>
                          </h6>
                          <p>
                            <img
                              src={
                                publicUrl + "assets/img/icon/location-alt.png"
                              }
                              alt="img"
                            />
                            New York real estate{" "}
                          </p>
                        </div>
                        <Link className="fav-btn float-right" to="#">
                          <i className="far fa-heart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="product-details-inner">
                    <h4>
                      <Link to="/property-details">Villa House</Link>
                    </h4>
                    <ul className="meta-inner">
                      <li>
                        <img
                          src={publicUrl + "assets/img/icon/location2.png"}
                          alt="img"
                        />
                        New York
                      </li>
                      <li>
                        <Link to="/property-details">For Sell</Link>
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor constetur </p>
                    <span className="price">$ 80,650.00</span>
                  </div>
                  <div className="product-meta-bottom style-2">
                    <span>
                      3 <span>Bedroom</span>
                    </span>
                    <span className="border-none">
                      2 <span>Bathroom</span>
                    </span>
                    <span>
                      1026 <span>sqft</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-product-wrap style-2">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/project/6.png"}
                      alt="img"
                    />
                    <div className="product-wrap-details">
                      <div className="media">
                        <div className="author">
                          <img
                            src={publicUrl + "assets/img/author/1.png"}
                            alt="img"
                          />
                        </div>
                        <div className="media-body">
                          <h6>
                            <Link to="/property-details">Owner Name</Link>
                          </h6>
                          <p>
                            <img
                              src={
                                publicUrl + "assets/img/icon/location-alt.png"
                              }
                              alt="img"
                            />
                            New York real estate{" "}
                          </p>
                        </div>
                        <Link className="fav-btn float-right" to="#">
                          <i className="far fa-heart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="product-details-inner">
                    <h4>
                      <Link to="/property-details">Sunshine Place</Link>
                    </h4>
                    <ul className="meta-inner">
                      <li>
                        <img
                          src={publicUrl + "assets/img/icon/location2.png"}
                          alt="img"
                        />
                        New York
                      </li>
                      <li>
                        <Link to="/property-details">For Sell</Link>
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor consetur </p>
                    <span className="price">$ 80,650.00</span>
                  </div>
                  <div className="product-meta-bottom style-2">
                    <span>
                      3 <span>Bedroom</span>
                    </span>
                    <span className="border-none">
                      2 <span>Bathroom</span>
                    </span>
                    <span>
                      1026 <span>sqft</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-product-wrap style-2">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/project/5.png"}
                      alt="img"
                    />
                    <div className="product-wrap-details">
                      <div className="media">
                        <div className="author">
                          <img
                            src={publicUrl + "assets/img/author/1.png"}
                            alt="img"
                          />
                        </div>
                        <div className="media-body">
                          <h6>
                            <Link to="/property-details">Owner Name</Link>
                          </h6>
                          <p>
                            <img
                              src={
                                publicUrl + "assets/img/icon/location-alt.png"
                              }
                              alt="img"
                            />
                            New York real estate{" "}
                          </p>
                        </div>
                        <Link className="fav-btn float-right" to="#">
                          <i className="far fa-heart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="product-details-inner">
                    <h4>
                      <Link to="/property-details">Sunny Place</Link>
                    </h4>
                    <ul className="meta-inner">
                      <li>
                        <img
                          src={publicUrl + "assets/img/icon/location2.png"}
                          alt="img"
                        />
                        New York
                      </li>
                      <li>
                        <Link to="/property-details">For Sell</Link>
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor consetur </p>
                    <span className="price">$ 80,650.00</span>
                  </div>
                  <div className="product-meta-bottom style-2">
                    <span>
                      3 <span>Bedroom</span>
                    </span>
                    <span className="border-none">
                      2 <span>Bathroom</span>
                    </span>
                    <span>
                      1026 <span>sqft</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination-area text-center mt-4">
              <ul className="pagination">
                <li className="page-item">
                  <Link className="page-link" to="#">
                    <i className="la la-angle-double-left" />
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" to="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    ...
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    <i className="la la-angle-double-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="sidebar-area">
              <div className="widget widget-category">
                <h5 className="widget-title">
                  {t(`property.category.category`)}
                </h5>
                <ul>
                  <li>
                    <Link to="#">
                      {t(`property.category.design`)} <span>26</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      {t(`property.category.villa`)} <span>20</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      {t(`property.category.business`)} <span>21</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      {t(`property.category.global`)} <span>31</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      {t(`property.category.tech`)} <span>12</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      {t(`property.category.ui`)} <span>12</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="widget widget-place">
                <h5 className="widget-title">{t(`property.place.place`)}</h5>
                <ul>
                  <li>
                    {t(`property.place.place1`)} <span>26</span>
                  </li>
                  <li>
                    {t(`property.place.place2`)} <span>20</span>
                  </li>
                  <li>
                    {t(`property.place.place3`)}
                    <span>21</span>
                  </li>
                  <li>
                    {t(`property.place.place4`)} <span>31</span>
                  </li>
                </ul>
              </div>
              <div className="widget widget-news">
                <h5 className="widget-title"> {t(`property.popular`)}</h5>
                <div className="single-news-wrap media">
                  <div className="thumb">
                    <img src={publicUrl + "assets/img/blog/5.png"} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h6>
                      <Link to="/blog-details">
                        Dolor eorem ipsum sit amet Lorem ipsum
                      </Link>
                    </h6>
                    <p className="date">
                      <i className="far fa-calendar-alt" />
                      25 Aug 2020
                    </p>
                  </div>
                </div>
                <div className="single-news-wrap media">
                  <div className="thumb">
                    <img src={publicUrl + "assets/img/blog/6.png"} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h6>
                      <Link to="/blog-details">
                        Responsive Web And Desktop Develope
                      </Link>
                    </h6>
                    <p className="date">
                      <i className="far fa-calendar-alt" />
                      25 Aug 2020
                    </p>
                  </div>
                </div>
                <div className="single-news-wrap media">
                  <div className="thumb">
                    <img src={publicUrl + "assets/img/blog/7.png"} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h6>
                      <Link to="/blog-details">
                        Admin Web is Django Highlig Models
                      </Link>
                    </h6>
                    <p className="date">
                      <i className="far fa-calendar-alt" />
                      25 Aug 2020
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
