import React from "react";
import { useTranslation } from "react-i18next";

const BannerV3 = () => {
    const { t, i18n } = useTranslation();
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
        <div
            className="banner-area banner-area-3 banner-area-bg"
            style={{
                background: "url(" + publicUrl + "assets/img/banner/3.png)",
            }}
        >
            <div className="container">
                <div className="banner-slider owl-carousel">
                    <div className="item">
                        <div className="banner-area-inner">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="banner-inner text-center">
                                        <p>{t(`banner.banner1.text`)}</p>
                                        <div className="line" />
                                        <h2>{t(`banner.banner1.title`)}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-meta-inner">
                            <h4
                                dangerouslySetInnerHTML={{
                                    __html: t(`banner.banner1.apartment`),
                                }}
                            />

                            <img
                                src={publicUrl + "assets/img/icon/location.png"}
                                alt="img"
                            />
                            <span>{t(`banner.banner1.span`)}</span>
                            <div className="btn btn-blue">$ 80,650.00</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="banner-area-inner">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="banner-inner text-center">
                                        <p>{t(`banner.banner2.text`)}</p>
                                        <div className="line" />
                                        <h2>{t(`banner.banner2.title`)}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-meta-inner">
                            <h4
                                dangerouslySetInnerHTML={{
                                    __html: t(`banner.banner2.apartment`),
                                }}
                            />
                            <img
                                src={publicUrl + "assets/img/icon/location.png"}
                                alt="img"
                            />
                            <span>{t(`banner.banner2.span`)}</span>
                            <div className="btn btn-blue">$ 80,650.00</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="banner-area-inner">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="banner-inner text-center">
                                        <p>{t(`banner.banner3.text`)}</p>
                                        <div className="line" />
                                        <h2>{t(`banner.banner3.title`)}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-meta-inner">
                            <h4
                                dangerouslySetInnerHTML={{
                                    __html: t(`banner.banner3.apartment`),
                                }}
                            />
                            <img
                                src={publicUrl + "assets/img/icon/location.png"}
                                alt="img"
                            />
                            <span>{t(`banner.banner3.span`)}</span>
                            <div className="btn btn-blue">$ 80,650.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerV3;
