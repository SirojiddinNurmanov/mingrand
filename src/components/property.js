import React from "react";
import Navbar from "./global-components/navbar-v3";
import PageHeader from "./global-components/page-header";
import Property from "./section-components/property-page";
import Footer from "./global-components/footer-v2";
import { useTranslation } from "react-i18next";

const PropertyPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <PageHeader headertitle={t(`navbar.properties.property`)} />
      <Property />
      <Footer />
    </div>
  );
};

export default PropertyPage;
