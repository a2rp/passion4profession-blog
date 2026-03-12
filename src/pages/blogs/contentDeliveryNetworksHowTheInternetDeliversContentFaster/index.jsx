import React from "react";
import {
    FiGlobe,
    FiZap,
    FiServer,
    FiMapPin,
    FiClock,
    FiImage,
    FiVideo,
    FiShield,
    FiCheckCircle,
    FiAlertCircle,
    FiArrowRight,
    FiWifi,
    FiHardDrive,
    FiLayers,
    FiBox,
    FiMonitor,
    FiCpu,
    FiActivity,
    FiDatabase,
    FiSend,
    FiLink,
    FiRefreshCw,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const whyCdnExistsCards = [
    {
        icon: <FiGlobe />,
        title: "The internet is physically far apart",
        text: "A website may be hosted in one country, while users are spread across many other countries. Physical distance adds delay.",
    },
    {
        icon: <FiClock />,
        title: "Distance creates latency",
        text: "Latency means delay. The farther data has to travel, the more time it usually takes to arrive.",
    },
    {
        icon: <FiVideo />,
        title: "Heavy content makes pages slower",
        text: "Images, videos, fonts, JavaScript files and downloads can be large. Large files delivered from far away feel slow.",
    },
    {
        icon: <FiZap />,
        title: "A CDN reduces that travel",
        text: "A CDN stores copies of content at multiple locations so users can receive data from a nearby server instead of a distant one.",
    },
];

const howItWorksSteps = [
    {
        icon: <FiMonitor />,
        title: "A user opens a website",
        text: "For example, someone in India opens a website whose main server may be in Germany or the United States.",
    },
    {
        icon: <FiLink />,
        title: "The request is routed smartly",
        text: "Instead of sending every asset request all the way to the original server, the CDN tries to serve the content from a nearby edge location.",
    },
    {
        icon: <FiMapPin />,
        title: "Nearest edge server responds",
        text: "The CDN chooses a server location that is closer to the user, which reduces delay and can improve loading speed.",
    },
    {
        icon: <FiHardDrive />,
        title: "Cached content is delivered",
        text: "If the edge server already has a stored copy of the needed file, it can send it immediately.",
    },
    {
        icon: <FiRefreshCw />,
        title: "Origin is contacted only when needed",
        text: "If the edge server does not have the latest copy, it fetches it from the origin server, stores it, and then serves it.",
    },
];

const simpleComparisons = [
    {
        label: "Without a CDN",
        text: "Every user gets content directly from the main origin server.",
    },
    {
        label: "With a CDN",
        text: "Many users receive content from nearby edge servers spread across multiple regions.",
    },
];

const terminologyCards = [
    {
        icon: <FiServer />,
        title: "Origin server",
        text: "The original main server where the real website or application content lives.",
    },
    {
        icon: <FiMapPin />,
        title: "Edge server",
        text: "A CDN server placed in different geographic locations closer to users.",
    },
    {
        icon: <FiDatabase />,
        title: "Cache",
        text: "A stored copy of content kept temporarily so it can be served faster next time.",
    },
    {
        icon: <FiClock />,
        title: "Latency",
        text: "The time delay between a request being made and a response starting to arrive.",
    },
    {
        icon: <FiActivity />,
        title: "Bandwidth usage",
        text: "How much data is being transferred across the network.",
    },
    {
        icon: <FiShield />,
        title: "DDoS protection",
        text: "Some CDNs help absorb or filter malicious traffic floods aimed at taking a site down.",
    },
];

const whatCanBeServedCards = [
    {
        icon: <FiImage />,
        title: "Images",
        text: "Product photos, banners, thumbnails, screenshots and galleries are excellent CDN candidates.",
    },
    {
        icon: <FiVideo />,
        title: "Video and media",
        text: "Large media files benefit a lot from geographically distributed delivery.",
    },
    {
        icon: <FiBox />,
        title: "Static website files",
        text: "CSS, JavaScript bundles, fonts, PDFs and downloadable assets are commonly served through CDNs.",
    },
    {
        icon: <FiGlobe />,
        title: "Entire static sites",
        text: "Many modern static websites are delivered almost fully through CDN networks.",
    },
];

const benefitsCards = [
    {
        icon: <FiZap />,
        title: "Faster loading",
        text: "Users often get files from a server closer to them, which lowers delay and improves speed.",
    },
    {
        icon: <FiServer />,
        title: "Less pressure on the origin server",
        text: "The main server does not need to handle every request directly if cached copies are already available elsewhere.",
    },
    {
        icon: <FiShield />,
        title: "Better resilience and protection",
        text: "Many CDN providers include security layers, traffic filtering and request handling improvements.",
    },
    {
        icon: <FiGlobe />,
        title: "Better experience for global users",
        text: "Users from different countries can get a more consistent experience instead of depending on one far away server.",
    },
];

const examplesCards = [
    {
        title: "Example 1 - A user loads your portfolio from another country",
        text: "Suppose your main server is in Mumbai, but a visitor opens your site from Canada. Without a CDN, files must travel from Mumbai to Canada. With a CDN, some files may be delivered from a location much closer to that visitor.",
    },
    {
        title: "Example 2 - E-commerce product images",
        text: "An online store may have hundreds of product images. Serving those images through a CDN reduces repeated load on the main server and usually improves page speed.",
    },
    {
        title: "Example 3 - JavaScript and CSS bundles",
        text: "Modern frontend apps often generate bundles. A CDN can distribute these files globally so users do not always pull them directly from the origin server.",
    },
    {
        title: "Example 4 - Viral content spike",
        text: "If a blog post suddenly gets huge traffic, cached CDN copies can handle much of that demand, reducing the chance that the origin server gets overwhelmed.",
    },
    {
        title: "Example 5 - Video streaming and large downloads",
        text: "Media and large files benefit greatly from global distribution because many users may request the same content from different parts of the world.",
    },
    {
        title: "Example 6 - Static site hosting",
        text: "Many modern static deployments use global edge networks so pages and assets load quickly from many regions.",
    },
];

const cacheConceptCards = [
    {
        icon: <FiDatabase />,
        title: "A cached copy is stored",
        text: "When the CDN first fetches a file from the origin, it may keep a copy at an edge location.",
    },
    {
        icon: <FiCheckCircle />,
        title: "Later requests can be faster",
        text: "If another user requests the same file from that region, the CDN can serve the cached version quickly.",
    },
    {
        icon: <FiRefreshCw />,
        title: "Cache expires or refreshes",
        text: "Content is not cached forever. Rules decide when the CDN should recheck or refresh the file.",
    },
    {
        icon: <FiAlertCircle />,
        title: "Old cache can cause confusion",
        text: "If caching rules are wrong, people may see outdated files until the cache is refreshed or purged.",
    },
];

const dynamicVsStaticRows = [
    {
        type: "Static content",
        description:
            "Files that do not change for every user, such as images, CSS, JavaScript, fonts or downloadable documents.",
        cdnUse: "Very common and highly effective",
    },
    {
        type: "Dynamic content",
        description:
            "Content that changes per user or per request, such as account dashboards, cart data or personalized API responses.",
        cdnUse: "Can be handled in some cases, but requires more care",
    },
];

const misconceptions = [
    {
        title: "A CDN is not the same as hosting",
        text: "A CDN is not automatically your main application server. It often works in front of, or alongside, your origin hosting setup.",
    },
    {
        title: "A CDN does not magically fix bad code",
        text: "If your page has huge JavaScript bundles, layout problems or slow backend logic, a CDN helps only part of the problem.",
    },
    {
        title: "A CDN does not always cache everything",
        text: "What gets cached depends on headers, rules, content type and platform behavior.",
    },
    {
        title: "A CDN is not only for giant companies",
        text: "Even personal portfolios, blogs, docs sites and small apps can benefit from CDN delivery, especially for global visitors.",
    },
];

const practicalCases = [
    {
        icon: <FiImage />,
        title: "Portfolio websites",
        text: "Images, icons, stylesheets and bundles can load faster for users in many regions.",
    },
    {
        icon: <FiMonitor />,
        title: "Blogs and documentation sites",
        text: "Static pages and assets are ideal for distribution through CDN networks.",
    },
    {
        icon: <FiBox />,
        title: "E-commerce stores",
        text: "Product images, category pages and common assets often benefit from CDN caching.",
    },
    {
        icon: <FiSend />,
        title: "Frontend apps with APIs",
        text: "A CDN can speed up static frontend assets even if dynamic API data still comes from another backend service.",
    },
];

const faqItems = [
    {
        question: "Does a CDN replace my backend server completely?",
        answer: "No. The backend or origin server still exists. The CDN usually sits in front of it and helps deliver content more efficiently.",
    },
    {
        question: "Why does a CDN make a site feel faster?",
        answer: "Because many files are served from geographically closer locations and because repeated requests can be answered from cache instead of always hitting the origin.",
    },
    {
        question: "Is a CDN useful only for large websites?",
        answer: "No. Even smaller websites benefit, especially when visitors are spread across different regions or when the site contains many static assets.",
    },
    {
        question: "Can a CDN help with security?",
        answer: "Yes, many CDN providers include security features such as rate limiting, shielding and DDoS mitigation, though exact features vary by provider.",
    },
    {
        question: "What is an edge location?",
        answer: "It is a geographically distributed CDN server location that serves users closer to where they are.",
    },
    {
        question:
            "Why do I sometimes still see old files after deploying updates?",
        answer: "Because the old version may still be cached. This is why cache invalidation, versioned asset names and proper cache rules matter.",
    },
];

const ContentDeliveryNetworksHowTheInternetDeliversContentFaster = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiGlobe />
                            Internet performance fundamentals
                        </span>
                    </div>

                    <h1>
                        Content Delivery Networks - How the Internet Delivers
                        Content Faster
                    </h1>

                    <p className="lead">
                        A Content Delivery Network, or CDN, is a system of
                        distributed servers placed in multiple locations around
                        the world. Its purpose is simple - deliver content
                        faster, closer and more efficiently to users instead of
                        forcing every request to travel all the way to one main
                        server.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiServer />
                            </span>
                            <div>
                                <strong>Main idea</strong>
                                <p>
                                    Keep content closer to users by using many
                                    servers in different locations.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiClock />
                            </span>
                            <div>
                                <strong>Big goal</strong>
                                <p>Reduce latency and improve loading speed.</p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiShield />
                            </span>
                            <div>
                                <strong>Extra value</strong>
                                <p>
                                    Many CDN providers also help with caching,
                                    traffic handling and security.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiInfoBox />
                    </span>
                    <h2>Start with the simplest possible meaning</h2>
                </div>

                <p>
                    Imagine you run a website from one city, but people visit it
                    from many countries. If every visitor has to fetch images,
                    scripts and videos from only that one far away server, the
                    experience can feel slower.
                </p>

                <p>
                    A CDN solves this by keeping copies of content in multiple
                    locations. So instead of asking one distant server for
                    everything, users can often receive content from a nearby
                    CDN location.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            A CDN is a geographically distributed network of
                            servers that helps deliver website and app content
                            faster by serving it from locations closer to users.
                        </p>
                    </div>
                </div>

                <div className="conceptGrid">
                    {whyCdnExistsCards.map((item) => (
                        <article key={item.title} className="conceptCard">
                            <span className="conceptIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiArrowRight />
                    </span>
                    <h2>How a CDN works step by step</h2>
                </div>

                <p>
                    The basic flow is not magical. It is just smart request
                    routing plus caching plus geographic distribution.
                </p>

                <div className="stepsGrid">
                    {howItWorksSteps.map((item, index) => (
                        <article key={item.title} className="stepCard">
                            <div className="stepTop">
                                <span className="stepIndex">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="stepIcon">{item.icon}</span>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="compareGrid">
                    {simpleComparisons.map((item) => (
                        <article key={item.label} className="compareCard">
                            <h3>{item.label}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>Important terms you must understand</h2>
                </div>

                <div className="termsGrid">
                    {terminologyCards.map((item) => (
                        <article key={item.title} className="termCard">
                            <span className="termIcon">{item.icon}</span>
                            <div className="termBody">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiBox />
                    </span>
                    <h2>
                        What kind of content is usually served through a CDN
                    </h2>
                </div>

                <p>
                    CDNs are especially useful for content that many users
                    request again and again, especially static files.
                </p>

                <div className="servedGrid">
                    {whatCanBeServedCards.map((item) => (
                        <article key={item.title} className="servedCard">
                            <span className="servedIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="callout soft">
                    <span className="calloutIcon">
                        <FiImage />
                    </span>
                    <div>
                        <strong>Easy memory trick</strong>
                        <p>
                            If many users request the same file, that file is
                            often a strong candidate for CDN delivery.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiZap />
                    </span>
                    <h2>Why websites and apps use CDNs</h2>
                </div>

                <div className="benefitsGrid">
                    {benefitsCards.map((item) => (
                        <article key={item.title} className="benefitCard">
                            <span className="benefitIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiMonitor />
                    </span>
                    <h2>Real examples that make CDNs easy to understand</h2>
                </div>

                <div className="examplesGrid">
                    {examplesCards.map((item) => (
                        <article key={item.title} className="exampleCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiDatabase />
                    </span>
                    <h2>Caching - the heart of most CDN behavior</h2>
                </div>

                <p>
                    One of the biggest ideas behind CDNs is caching. Caching
                    means storing a temporary copy so the same content does not
                    need to be regenerated or refetched every single time.
                </p>

                <div className="cacheGrid">
                    {cacheConceptCards.map((item) => (
                        <article key={item.title} className="cacheCard">
                            <span className="cacheIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiAlertCircle />
                    </span>
                    <div>
                        <strong>Important warning</strong>
                        <p>
                            Caching makes things faster, but wrong caching rules
                            can also make users see outdated content. This is
                            one of the most common CDN related beginner issues.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiWifi />
                    </span>
                    <h2>Static content vs dynamic content in CDN thinking</h2>
                </div>

                <p>
                    Beginners often hear that CDNs are mainly for static files.
                    That is a useful starting idea, but modern systems are more
                    nuanced than that.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Typical CDN use</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dynamicVsStaticRows.map((row) => (
                                <tr key={row.type}>
                                    <td>{row.type}</td>
                                    <td>{row.description}</td>
                                    <td>{row.cdnUse}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p>
                    A simple rule for beginners is this - CDNs are easiest to
                    understand when you first think of them as fast delivery
                    systems for repeated static files.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiActivity />
                    </span>
                    <h2>When a CDN is especially useful</h2>
                </div>

                <div className="practicalGrid">
                    {practicalCases.map((item) => (
                        <article key={item.title} className="practicalCard">
                            <span className="practicalIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiAlertCircle />
                    </span>
                    <h2>Common misconceptions</h2>
                </div>

                <div className="misconceptionGrid">
                    {misconceptions.map((item) => (
                        <article key={item.title} className="misconceptionCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiCheckCircle />
                    </span>
                    <h2>Frequently asked beginner questions</h2>
                </div>

                <div className="faqList">
                    {faqItems.map((item) => (
                        <article key={item.question} className="faqCard">
                            <h3>{item.question}</h3>
                            <p>{item.answer}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.FinalCard>
                <h2>Final takeaway</h2>
                <p>
                    A CDN exists because the internet is global, but a single
                    server is local. By spreading content across many locations,
                    CDNs reduce delay, improve delivery speed, lower pressure on
                    origin servers and often add practical security benefits.
                </p>

                <p>
                    The simplest memory line is this - a CDN helps users get
                    content from somewhere closer instead of always pulling it
                    from one far away place.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

const FiInfoBox = FiGlobe;

export default ContentDeliveryNetworksHowTheInternetDeliversContentFaster;
