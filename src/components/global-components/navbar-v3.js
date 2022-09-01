import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const NavbarV3 = () => {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const lngs = {
        uz: { name: "Uz", src: publicUrl + "assets/img/flag/uz.png" },
        ru: { name: "Ru", src: publicUrl + "assets/img/flag/ru.png" },
    };
    const { t, i18n } = useTranslation();
    return (
        <div className="navbar-area navbar-area-3">
            <nav className="navbar navbar-expand-lg sticky">
                <div className="container nav-container">
                    <div className="responsive-mobile-menu">
                        <button
                            className="menu toggle-btn d-block d-lg-none"
                            data-target="#dkt_main_menu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-left" />
                            <span className="icon-right" />
                        </button>
                    </div>
                    <div className="logo">
                        <Link to="/">
                            <img
                                src={publicUrl + "assets/img/logo.png"}
                                alt="img"
                            />
                        </Link>
                    </div>
                    <div className="nav-right-part nav-right-part-mobile">
                        <NavDropdown
                            className="dropdownx-menu d-block d-none"
                            title={
                                <span>
                                    <img
                                        src={lngs[i18n.resolvedLanguage].src}
                                        width="25"
                                        alt={lngs[i18n.resolvedLanguage].name}
                                        className="mr-2"
                                    />
                                    {lngs[i18n.resolvedLanguage].name}
                                </span>
                            }
                            id="collasible-nav-dropdown"
                        >
                            {Object.keys(lngs).map((lng) => (
                                <NavDropdown.Item
                                    key={lng}
                                    style={{
                                        fontWeight:
                                            i18n.resolvedLanguage === lng
                                                ? "bold"
                                                : "normal",
                                    }}
                                    type="submit"
                                    onClick={() => i18n.changeLanguage(lng)}
                                >
                                    <img
                                        src={lngs[lng].src}
                                        width="25px"
                                        className="mx-2"
                                        alt=""
                                    />
                                    {lngs[lng].name}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Link className="btn btn-base" to="/add-property">
                            {t(`navbar.submit`)}
                        </Link>
                    </div>
                    <div
                        className="collapse navbar-collapse"
                        id="dkt_main_menu"
                    >
                        <ul className="navbar-nav menu-open text-center">
                            <li>
                                <Link to="/"> {t(`navbar.home`)}</Link>
                            </li>
                            <li className="menu-item-has-children current-menu-item">
                                <a href="#">
                                    {" "}
                                    {t(`navbar.properties.property`)}
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                        <Link to="/property">
                                            {t(`navbar.properties.property`)}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/property-details">
                                            {t(`navbar.properties.detail`)}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children current-menu-item">
                                <a href="#"> {t(`navbar.pages.page`)}</a>
                                <ul className="sub-menu">
                                    <li>
                                        <Link to="/about">
                                            {t(`navbar.pages.about`)}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/team">
                                            {t(`navbar.pages.team`)}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sign-in">
                                            {t(`navbar.pages.sigin`)}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sign-up">
                                            {t(`navbar.pages.signup`)}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/add-property">
                                            {t(`navbar.pages.addproperty`)}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children current-menu-item">
                                <a href="#">{t(`navbar.blogs.blog`)}</a>
                                <ul className="sub-menu">
                                    <li>
                                        <Link to="/blog">
                                            {t(`navbar.blogs.blog`)}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog-details">
                                            {t(`navbar.blogs.detail`)}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/contact">{t(`navbar.contact`)}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-right-part nav-right-part-desktop">
                        <ul>
                            <li>
                                <a className="search" href="#">
                                    <i className="fa fa-search" />
                                </a>
                            </li>
                            <li>
                                <NavDropdown
                                    className="dropdownx-menu"
                                    title={
                                        <span>
                                            <img
                                                src={
                                                    lngs[i18n.resolvedLanguage]
                                                        .src
                                                }
                                                width="25"
                                                alt={
                                                    lngs[i18n.resolvedLanguage]
                                                        .name
                                                }
                                                className="mr-2"
                                            />
                                            {lngs[i18n.resolvedLanguage].name}
                                        </span>
                                    }
                                    id="collasible-nav-dropdown"
                                >
                                    {Object.keys(lngs).map((lng) => (
                                        <NavDropdown.Item
                                            key={lng}
                                            style={{
                                                fontWeight:
                                                    i18n.resolvedLanguage ===
                                                    lng
                                                        ? "bold"
                                                        : "normal",
                                            }}
                                            type="submit"
                                            onClick={() =>
                                                i18n.changeLanguage(lng)
                                            }
                                        >
                                            <img
                                                src={lngs[lng].src}
                                                width="25px"
                                                className="mx-2"
                                                alt=""
                                            />
                                            {lngs[lng].name}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            </li>
                            <li>
                                <Link
                                    className="btn btn-base"
                                    to="/add-property"
                                >
                                    {t(`navbar.submit`)}{" "}
                                    <i className="fa fa-plus" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavbarV3;
