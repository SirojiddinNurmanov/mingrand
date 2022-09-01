import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: "uz",
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            uz: {
                translation: {
                    navbar: {
                        home: "uy",
                        properties: {
                            property: "Ko'chmas mulk",
                            detail: "Ko'chmas mulk haqida",
                        },
                        pages: {
                            page: "sahifa",
                            about: "Haqida",
                            team: "Jamoa",
                            signin: "Kirish",
                            signup: "Ulanish",
                            addproperty: "Uy qo'shish",
                        },
                        blogs: {
                            blog: "blog",
                            detail: "Blog haqida",
                        },
                        contact: "Bog'lanish",
                        submit: "Qabul qilish",
                    },
                    banner: {
                        banner1: {
                            text: "Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet,",
                            title: "The Best Way To Find Your Perfect Home",
                            apartment:
                                " Mordan Appertment In <br /> The City Center",
                            span: " 420 Love Sreet 133/2 Mirpur City, Dhaka",
                        },
                        banner2: {
                            text: "Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet,",
                            title: "The Best Way To Find Your Perfect Home",
                            apartment:
                                " Mordan Appertment In <br /> The City Center",
                            span: " 420 Love Sreet 133/2 Mirpur City, Dhaka",
                        },
                        banner3: {
                            text: "Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet,",
                            title: "The Best Way To Find Your Perfect Home",
                            apartment:
                                " Mordan Appertment In <br /> The City Center",
                            span: " 420 Love Sreet 133/2 Mirpur City, Dhaka",
                        },
                    },
                    bannerBottom: {
                        locations: {
                            location: "Joylashuv",
                            location1: "Joylashuv 1",
                            location2: "Joylashuv 2",
                            location3: "Joylashuv 3",
                        },
                        properties: {
                            property: "Ko'chmas Mulk",
                            property1: "Ko'chmas Mulk 1",
                            property2: "Ko'chmas Mulk 2",
                            property3: "Ko'chmas Mulk 3",
                        },
                        maxPrices: {
                            maxPrice: "Maksimal narx",
                            maxPrice1: "Maksimal narx 1",
                            maxPrice2: "Maksimal narx 2",
                            maxPrice3: "Maksimal narx 3",
                        },
                        minPrices: {
                            minPrice: "Minimal narx",
                            minPrice1: "Minimal narx 1",
                            minPrice2: "Minimal narx 2",
                            minPrice3: "Minimal narx 3",
                        },
                        sells: {
                            sell: "Sotish",
                            rent: "Ijaraga Olish",
                        },
                        search: "Qidirish",
                    },
                    product: {
                        subtitle: " We are offring the best real estate",
                        title: "Best House For You",
                        more: "LOAD MORE",
                    },
                    cta: {
                        h6: "Buy Or Sell",
                        h2: "Submit Property",
                        p: "consecte Lorem ipsum dolor sit amet, Lorem ipsum dolor  amet, consecte Lorem ipsum dolor sit adipisicing amet, consectetur  sed do eiusmod tempor incididunt dolore magna consecrem adipisicing ipsum dolor sit amet, consectetur elit,",
                        submit: "Submit",
                        buy: "Buy Now",
                    },
                    filter: {
                        h6: "Meet Our Propartes",
                        h2: "Our Propartes",
                        rent: "Rentals",
                        sale: "Sales",
                        apartment: "Apartment",
                        villa: "Villa",
                    },
                    testimonial: {
                        h6: "Our testimonials",
                        h2: "What Client Say",
                        p: "  Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor sit amet",
                    },
                    popular_product: {
                        h6: "We are offring the best real estate",
                        h2: "Populer Categores",
                    },
                    agent: {
                        h6: "Meet Our Agent",
                        h2: "Our Best Agent",
                    },
                    featured: {
                        h6: "Our Exclusives",
                        h2: "Featured Properties",
                    },
                    latest: {
                        h6: "Blog &amp; News",
                        h2: "News Feads",
                    },
                    footer: {
                        company: "Company",
                        text: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur et adipisicing  eiusmod tempor incididunt labore",
                        address: "420 Love Sreet 133/2 Mirpur City, Dhaka",
                        tel: "+(066) 19 5017 800 628",
                        email: "info.contact@gmail.com",
                        news: "News Feed",
                        newsletter: " Newslatter",
                        news_text: "Lorem ipsum dolor sit amet,",
                        subscribe: "Subscribe",
                        tags: "House Tags",
                        tag1: "Creative",
                        tag2: "Development",
                        tag3: "Beach",
                        tag4: "Villa",
                        tag5: "Clean",
                        tag6: "Seo",
                        tag7: "Appartment",
                        copyright:
                            "©2022, Copy Right By Solverwp. All Rights Reserved",
                        home: "Uy",
                        about: "Haqida",
                        blog: "Blog",
                        contact: "Contact",
                    },
                    property: {
                        search: {
                            quenttiy: "21 properties",
                            placeholder: "Search your keyword",
                            sorts: {
                                sort1: "Sort by",
                                sort2: "Sort by",
                                sort3: "Sort by",
                                sort4: "Sort by",
                            },
                        },
                        category: {
                            category: "Category",
                            design: "Design",
                            villa: " Villa House",
                            business: "Business",
                            global: "Global World",
                            tech: " Technology",
                            ui: "Ui Design",
                        },
                        place: {
                            place: "Place",
                            place1: "New York",
                            place2: "Love Road",
                            place3: "Beach Side",
                            place4: "Golden City",
                        },
                        popular: "Popular Feeds",
                    },
                    about: {
                        about: "Biz Haqimizda",
                        subtitle: "We are offring the best real estate",
                        title: "The exparts in local.",
                        text: "  Lorem ipsum dolor consectetur aLorem ipsum amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo",
                        features: {
                            feature1: "Tempor incididunt Amet",
                            feature2: "Tempor incididunt Amet",
                            feature3: "Tempor incididunt Amet",
                            feature4: "Tempor incididunt Amet",
                            feature5: "Tempor incididunt Amet",
                            feature6: "Tempor incididunt Amet",
                            feature7: "Tempor incididunt Amet",
                        },
                        more: "SEE MORE",
                        counter: {
                            work: "Creative Works",
                            team: "Growing Team",
                            client: "Client Works",
                            project: "Project Done",
                        },
                        service: {
                            
                        }
                    },
                },
            },
            ru: {
                translation: {
                    navbar: {
                        home: "uy ru",
                        properties: {
                            property: "Ko'chmas mulk",
                            detail: "Ko'chmas mulk haqida",
                        },
                        pages: {
                            page: "sahifa ru",
                            about: "Haqida",
                            team: "Jamoa",
                            signin: "Kirish",
                            signup: "Ulanish",
                            addproperty: "Uy qo'shish",
                        },
                        blogs: {
                            blog: "blog ru",
                            detail: "Blog haqida",
                        },
                        contact: "Bog'lanish",
                        submit: "Qabul qilish",
                    },
                    banner: {
                        banner1: {
                            text: "Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, ru",
                            title: "The Best Way To Find Your Perfect Home ru",
                            apartment:
                                " Mordan Appertment In <br /> The City Center",
                            span: " 420 Love Sreet 133/2 Mirpur City, Dhaka",
                        },
                        banner2: {
                            text: "Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet,",
                            title: "The Best Way To Find Your Perfect Home",
                            apartment:
                                " Mordan Appertment In <br /> The City Center",
                            span: " 420 Love Sreet 133/2 Mirpur City, Dhaka",
                        },
                        banner3: {
                            text: "Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet,",
                            title: "The Best Way To Find Your Perfect Home",
                            apartment:
                                " Mordan Appertment In <br /> The City Center",
                            span: " 420 Love Sreet 133/2 Mirpur City, Dhaka",
                        },
                    },
                    bannerBottom: {
                        locations: {
                            location: "Joylashuv",
                            location1: "Joylashuv 1",
                            location2: "Joylashuv 2",
                            location3: "Joylashuv 3",
                        },
                        properties: {
                            property: "Ko'chmas Mulk",
                            property1: "Ko'chmas Mulk 1",
                            property2: "Ko'chmas Mulk 2",
                            property3: "Ko'chmas Mulk 3",
                        },
                        maxPrices: {
                            maxPrice: "Maksimal narx",
                            maxPrice1: "Maksimal narx 1",
                            maxPrice2: "Maksimal narx 2",
                            maxPrice3: "Maksimal narx 3",
                        },
                        minPrices: {
                            minPrice: "Minimal narx",
                            minPrice1: "Minimal narx 1",
                            minPrice2: "Minimal narx 2",
                            minPrice3: "Minimal narx 3",
                        },
                        sells: {
                            sell: "Sotish ru",
                            rent: "Ijaraga Olish",
                        },
                        search: "Qidirish ru",
                    },
                    product: {
                        subtitle: " We are offring the best real estate ru",
                        title: "Best House For You ru",
                        more: "LOAD MORE ru",
                    },
                },
            },
        },
    });

export default i18n;
