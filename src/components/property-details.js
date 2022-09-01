import React from "react";
import Navbar from "./global-components/navbar-v3";
import PageHeader from "./global-components/page-header";
import PropertyDetailsPage from "./section-components/property-details";
import Footer from "./global-components/footer";
import { useTranslation } from "react-i18next";

const PropertyDetails = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <Navbar />
            <PageHeader headertitle={t(`navbar.properties.detail`)} />
            <PropertyDetailsPage />
            <Footer />
        </div>
    );
};

export default PropertyDetails;
