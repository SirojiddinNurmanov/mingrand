import React from "react";
import Navbar from "./global-components/navbar-v3";
import Banner from "./section-components/banner-v3";
import Banner1 from "./section-components/banner";
import Product from "./section-components/product-v4";
import Cta from "./section-components/call-to-action";
import PropertyFilter from "./section-components/property-filter";
import Testimonial from "./section-components/testimonial-v2";
import ProductV2 from "./section-components/product-v2";
import Agent from "./section-components/agent-v2";
import FeaturedProperty from "./section-components/featured-property";
import LatestNews from "./blog-components/latest-news-v3";
import Footer from "./global-components/footer";

const Home_V3 = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Banner1 />
            <Product />
            <Cta />
            <PropertyFilter />
            <Testimonial />
            <ProductV2 />
            <Agent />
            <FeaturedProperty />
            <LatestNews />
            <Footer />
        </div>
    );
};

export default Home_V3;
