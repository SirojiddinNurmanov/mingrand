import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="banner-area-inner container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10 my-4">
            <form className="main-search-inner">
              <div className="row custom-gutters-10">
                <div className="col-md-2">
                  <div className="single-select-inner">
                    <select>
                      <option>{t(`bannerBottom.locations.location`)}</option>
                      <option value={1}>
                        {t(`bannerBottom.locations.location1`)}
                      </option>
                      <option value={2}>
                        {t(`bannerBottom.locations.location2`)}
                      </option>
                      <option value={3}>
                        {t(`bannerBottom.locations.location3`)}
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="single-select-inner">
                    <select>
                      <option>{t(`bannerBottom.properties.property`)}</option>
                      <option value={1}>
                        {t(`bannerBottom.properties.property1`)}
                      </option>
                      <option value={2}>
                        {t(`bannerBottom.properties.property2`)}
                      </option>
                      <option value={3}>
                        {t(`bannerBottom.properties.property3`)}
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="single-select-inner">
                    <select>
                      <option>{t(`bannerBottom.maxPrices.maxPrice`)}</option>
                      <option value={1}>
                        {t(`bannerBottom.maxPrices.maxPrice1`)}
                      </option>
                      <option value={2}>
                        {t(`bannerBottom.maxPrices.maxPrice2`)}
                      </option>
                      <option value={3}>
                        {t(`bannerBottom.maxPrices.maxPrice3`)}
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="single-select-inner">
                    <select>
                      <option>{t(`bannerBottom.minPrices.minPrice`)}</option>
                      <option value={1}>
                        {t(`bannerBottom.minPrices.minPrice1`)}
                      </option>
                      <option value={2}>
                        {t(`bannerBottom.minPrices.minPrice2`)}
                      </option>
                      <option value={3}>
                        {t(`bannerBottom.minPrices.minPrice3`)}
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="single-select-inner">
                    <select>
                      <option> {t(`bannerBottom.sells.sell`)}</option>
                      <option value={2}> {t(`bannerBottom.sells.rent`)}</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2">
                  <Link className="btn btn-base w-100" to="/property-grid">
                    <i className="fa fa-search mr-1" />{" "}
                    {t(`bannerBottom.search`)}
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
