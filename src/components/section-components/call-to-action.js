import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CallToAction = () => {
    const { t } = useTranslation();

    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
        <div
            className="cta-area bg-overlay pd-top-118 go-top pd-bottom-120 text-center"
            style={{
                background: "url(" + publicUrl + "assets/img/other/1.png)",
            }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="section-title style-white mb-0">
                            <h6> {t(`cta.h6`)}</h6>
                            <h2>{t(`cta.h2`)}</h2>
                            <p>{t(`cta.p`)}</p>
                        </div>
                        <div className="btn-wrap mt-4 pt-3">
                            <Link
                                className="btn btn-base mr-2"
                                to="/add-property"
                            >
                                {t(`cta.submit`)}
                            </Link>
                            <Link
                                className="btn btn-base ml-2"
                                to="/property-details"
                            >
                                {t(`cta.buy`)}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
