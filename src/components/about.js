import React from "react";
import Navbar from "./global-components/navbar-v3";
import PageHeader from "./global-components/page-header";
import About from "./section-components/about";
import Counter from "./section-components/counter";
import Service from "./section-components/service-v3";
import AgentV3 from "./section-components/agent-v3";
import Testimonial from "./section-components/testimonial-v3";
import MoreInfo from "./section-components/more-info";
import Footer from "./global-components/footer-v2";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Navbar />
            <PageHeader headertitle={t(`about.about`)} />
            <About />
            <Counter />
            <Service />
            <AgentV3 />
            <Testimonial />
            <MoreInfo />
            <Footer />
        </div>
    );
};

export default AboutPage;
