import React from "react";
import { useTranslation } from "react-i18next";

const Counter = () => {
    const { t, i18n } = useTranslation();
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
        <div
            className="couner-area bg-overlay pd-top-118 pd-bottom-120"
            style={{
                background: "url(" + publicUrl + "assets/img/other/6.png)",
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="single-counter-inner text-center">
                            <h2 className="counter">2981</h2>
                            <p>{t(`about.counter.work`)}</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="single-counter-inner text-center">
                            <h2 className="counter">414</h2>
                            <p>{t(`about.counter.team`)}</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="single-counter-inner text-center">
                            <h2 className="counter">678</h2>
                            <p>{t(`about.counter.client`)}</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="single-counter-inner text-center">
                            <h2 className="counter">541</h2>
                            <p>{t(`about.counter.project`)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
