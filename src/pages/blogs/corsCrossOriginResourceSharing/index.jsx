import React from "react";
import {
    FiGlobe,
    FiShield,
    FiAlertCircle,
    FiCheckCircle,
    FiArrowRight,
    FiServer,
    FiMonitor,
    FiLock,
    FiCode,
    FiSettings,
    FiRepeat,
    FiInfo,
    FiCommand,
    FiLayers,
    FiSlash,
    FiDatabase,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const originParts = [
    {
        icon: <FiGlobe />,
        title: "Protocol",
        text: "The protocol is the scheme part like http or https. Even if everything else is the same, http and https count as different origins.",
    },
    {
        icon: <FiMonitor />,
        title: "Domain",
        text: "The domain or hostname is the main website address like example.com, app.example.com or localhost.",
    },
    {
        icon: <FiCommand />,
        title: "Port",
        text: "The port is the number after the colon, like 3000, 5173 or 8080. Different ports mean different origins.",
    },
];

const sameOriginExamples = [
    {
        title: "Same origin example",
        value: "https://example.com and https://example.com/api",
        result: "Same origin because protocol, domain and port match.",
    },
    {
        title: "Different protocol",
        value: "http://example.com and https://example.com",
        result: "Different origin because http and https are not the same.",
    },
    {
        title: "Different subdomain",
        value: "https://app.example.com and https://api.example.com",
        result: "Different origin because the hostname changed.",
    },
    {
        title: "Different port",
        value: "http://localhost:3000 and http://localhost:5173",
        result: "Different origin because the port changed.",
    },
];

const coreIdeas = [
    {
        icon: <FiShield />,
        title: "CORS is a browser security rule",
        text: "CORS is mainly enforced by browsers. It helps stop a website from freely reading responses from another origin unless permission is given.",
    },
    {
        icon: <FiServer />,
        title: "The server decides whether to allow access",
        text: "The browser checks the response headers sent by the server. If the right CORS headers are missing, the browser blocks frontend JavaScript from reading the response.",
    },
    {
        icon: <FiMonitor />,
        title: "This is not the same as the server rejecting the request",
        text: "The request may still reach the server. The browser is the one that blocks your script from using the response when CORS rules fail.",
    },
    {
        icon: <FiLock />,
        title: "CORS protects users, not developers from boredom",
        text: "Without this rule, any malicious site opened in your browser could try to read sensitive responses from another site you are logged into.",
    },
];

const simpleVsPreflight = [
    {
        type: "Simple request",
        points: [
            "A common safe style request the browser can send directly.",
            "Often uses methods like GET, HEAD or POST under certain conditions.",
            "The browser still checks CORS in the response before allowing JavaScript to read it.",
        ],
    },
    {
        type: "Preflight request",
        points: [
            "Before the real request, the browser sends an OPTIONS request.",
            "This asks the server whether the actual cross origin request is allowed.",
            "If the server says yes with the correct headers, the real request is then sent.",
        ],
    },
];

const requestFlow = [
    {
        icon: <FiMonitor />,
        title: "Frontend sends a request",
        text: "Your React app on one origin tries to call an API on another origin.",
    },
    {
        icon: <FiRepeat />,
        title: "Browser checks if this is cross origin",
        text: "If protocol, domain or port differ, the browser treats it as cross origin.",
    },
    {
        icon: <FiServer />,
        title: "Server responds with CORS headers",
        text: "The server must clearly tell the browser whether this origin is allowed.",
    },
    {
        icon: <FiCheckCircle />,
        title: "Browser decides access",
        text: "If the response headers allow the origin, the frontend can read the response. Otherwise, the browser blocks access.",
    },
];

const corsHeaders = [
    {
        title: "Access-Control-Allow-Origin",
        text: "This is the most famous CORS header. It tells the browser which origin is allowed to read the response.",
        example: "Access-Control-Allow-Origin: https://myfrontend.com",
    },
    {
        title: "Access-Control-Allow-Methods",
        text: "This tells the browser which HTTP methods are allowed, such as GET, POST, PUT or DELETE.",
        example: "Access-Control-Allow-Methods: GET, POST, PUT, DELETE",
    },
    {
        title: "Access-Control-Allow-Headers",
        text: "This tells the browser which request headers are allowed, such as Content-Type or Authorization.",
        example: "Access-Control-Allow-Headers: Content-Type, Authorization",
    },
    {
        title: "Access-Control-Allow-Credentials",
        text: "This is used when cookies or credentials are involved. It must be configured carefully.",
        example: "Access-Control-Allow-Credentials: true",
    },
];

const practicalExamples = [
    {
        title: "Example 1 - React frontend and separate backend",
        text: "Your frontend runs on http://localhost:5173 and your API runs on http://localhost:5000. These are different origins because the ports differ. The backend must allow the frontend origin.",
    },
    {
        title: "Example 2 - Production frontend on one domain and API on another",
        text: "Your site loads from https://app.mysite.com and the API lives at https://api.mysite.com. These are different origins because the hostnames differ, so CORS must be configured correctly.",
    },
    {
        title: "Example 3 - Authorization header triggers preflight",
        text: "If you send custom headers like Authorization, the browser may send a preflight OPTIONS request first. Developers often forget to handle that on the backend.",
    },
    {
        title: "Example 4 - Browser shows a CORS error but Postman works",
        text: "Postman is not a browser and usually does not enforce browser CORS rules the same way. That is why an API may work in Postman but fail in frontend code.",
    },
    {
        title: "Example 5 - Wildcard origin fails with credentials",
        text: "If cookies are involved, using Access-Control-Allow-Origin with * usually does not work. Credentials require a specific allowed origin.",
    },
];

const commonMistakes = [
    {
        title: "Mistake - Thinking CORS is a backend error only",
        text: "CORS is mostly about the browser deciding whether frontend JavaScript may read a response. The backend must send the right headers, but the browser enforces the rule.",
    },
    {
        title: "Mistake - Confusing failed request with blocked response",
        text: "Sometimes the request did reach the server, but the browser blocked your code from reading the result.",
    },
    {
        title: "Mistake - Forgetting preflight OPTIONS handling",
        text: "Developers often allow GET or POST but forget that the browser may send OPTIONS first.",
    },
    {
        title: "Mistake - Using * everywhere",
        text: "Allowing every origin may be unsafe or may not work with credentials. Specific origins are usually better.",
    },
    {
        title: "Mistake - Blaming fetch or axios",
        text: "The library is usually not the real issue. The origin rules and server headers are the real story.",
    },
];

const debugChecklist = [
    "Check the frontend origin carefully - protocol, hostname and port all matter.",
    "Open browser developer tools and inspect the exact CORS error message.",
    "Check whether the request is simple or whether a preflight OPTIONS request is happening.",
    "Confirm the backend sends Access-Control-Allow-Origin correctly.",
    "If using custom headers or JSON body, verify Access-Control-Allow-Headers and methods too.",
    "If using cookies, confirm credentials are handled properly on both frontend and backend.",
    "Do not rely only on Postman results to judge browser behavior.",
];

const faqItems = [
    {
        question:
            "Why does the browser block a request even though the backend is running fine?",
        answer: "Because the backend may be reachable, but if it does not send the proper CORS headers, the browser will not let frontend JavaScript read the response.",
    },
    {
        question: "Why does it work in Postman but not in React?",
        answer: "Postman is not a browser and does not follow browser CORS restrictions in the same way. Frontend apps do.",
    },
    {
        question: "Is CORS a way to protect the API from everything?",
        answer: "No. CORS is not a general security wall for all clients. It is mainly a browser rule for cross origin reading by frontend code.",
    },
    {
        question: "Can I fix CORS from the frontend only?",
        answer: "Usually no. The backend server must send the correct CORS headers. Frontend code alone cannot override browser security rules.",
    },
    {
        question: "Can different ports on localhost still cause CORS issues?",
        answer: "Yes. http://localhost:3000 and http://localhost:5173 are different origins because the ports are different.",
    },
    {
        question: "Is CORS the same as authentication?",
        answer: "No. Authentication is about who you are. CORS is about whether a browser may allow one origin to read responses from another origin.",
    },
];

const keyTerms = [
    {
        icon: <FiGlobe />,
        title: "Origin",
        text: "An origin is the combination of protocol, hostname and port.",
    },
    {
        icon: <FiRepeat />,
        title: "Preflight",
        text: "A preflight request is the browser asking permission with an OPTIONS request before sending the real request.",
    },
    {
        icon: <FiServer />,
        title: "Response header",
        text: "These are headers returned by the backend server to tell the browser what is allowed.",
    },
    {
        icon: <FiLock />,
        title: "Credentials",
        text: "Credentials usually means cookies, authentication information or similar browser attached data.",
    },
];

const CorsCrossOriginResourceSharing = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiShield />
                            Browser security and APIs
                        </span>
                    </div>

                    <h1>
                        Cross Origin Resource Sharing - Why Browsers Block Some
                        Requests
                    </h1>

                    <p className="lead">
                        CORS is one of the most common things frontend
                        developers run into when a website tries to call an API
                        on another origin. It feels annoying at first, but once
                        you understand origins, browser security and server
                        headers, the whole topic becomes much less mysterious.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiGlobe />
                            </span>
                            <div>
                                <strong>
                                    Cross origin means different origin
                                </strong>
                                <p>
                                    If protocol, domain or port changes, the
                                    browser treats it as a different origin.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiShield />
                            </span>
                            <div>
                                <strong>CORS is enforced by browsers</strong>
                                <p>
                                    The browser decides whether frontend code
                                    may read the response from another origin.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiServer />
                            </span>
                            <div>
                                <strong>The server must allow it</strong>
                                <p>
                                    The backend sends CORS headers that tell the
                                    browser what origins are allowed.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiInfo />
                    </span>
                    <h2>Start with the simplest possible meaning</h2>
                </div>

                <p>
                    CORS stands for Cross Origin Resource Sharing. It is a
                    browser security mechanism that controls whether frontend
                    JavaScript running on one origin may read resources from
                    another origin.
                </p>

                <p>In simple language, CORS is the browser asking:</p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Main idea</strong>
                        <p>
                            "This webpage came from one place. Is it allowed to
                            read data from another place?"
                        </p>
                    </div>
                </div>

                <p>
                    If the target server says yes with the right headers, the
                    browser allows access. If not, the browser blocks your
                    script from reading the response.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiGlobe />
                    </span>
                    <h2>What exactly is an origin?</h2>
                </div>

                <p>
                    To understand CORS, you first need to understand origin. An
                    origin is made of three parts:
                </p>

                <div className="originGrid">
                    {originParts.map((item) => (
                        <article key={item.title} className="originCard">
                            <span className="originIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="callout soft">
                    <span className="calloutIcon">
                        <FiLayers />
                    </span>
                    <div>
                        <strong>Origin formula</strong>
                        <p>Origin = protocol + hostname + port</p>
                    </div>
                </div>

                <div className="comparisonGrid">
                    {sameOriginExamples.map((item) => (
                        <article key={item.title} className="comparisonCard">
                            <h3>{item.title}</h3>
                            <p className="codeLine">{item.value}</p>
                            <p>{item.result}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiShield />
                    </span>
                    <h2>Why browsers even need CORS</h2>
                </div>

                <p>
                    Imagine you are logged into a banking site in one browser
                    tab. Then you open a random malicious site in another tab.
                    Without browser restrictions, that malicious site could try
                    to make requests and read sensitive responses from your
                    bank.
                </p>

                <p>
                    CORS exists as part of browser security to reduce that kind
                    of cross origin reading.
                </p>

                <div className="ideaGrid">
                    {coreIdeas.map((item) => (
                        <article key={item.title} className="ideaCard">
                            <span className="ideaIcon">{item.icon}</span>
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
                    <h2>How CORS works in a real request flow</h2>
                </div>

                <div className="flowGrid">
                    {requestFlow.map((item, index) => (
                        <article key={item.title} className="flowCard">
                            <div className="flowTop">
                                <span className="flowIndex">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="flowIcon">{item.icon}</span>
                            </div>
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
                        <strong>Important detail</strong>
                        <p>
                            CORS errors often mean the browser blocked access to
                            the response. It does not always mean the server
                            never received the request.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiRepeat />
                    </span>
                    <h2>Simple requests and preflight requests</h2>
                </div>

                <p>
                    Not every cross origin request behaves exactly the same.
                    Browsers sometimes send the real request directly, and
                    sometimes send an OPTIONS request first.
                </p>

                <div className="requestTypesGrid">
                    {simpleVsPreflight.map((item) => (
                        <article key={item.type} className="requestTypeCard">
                            <h3>{item.type}</h3>
                            <ul>
                                {item.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <p>
                    A preflight request is basically the browser asking in
                    advance: "May I send the real request with this method and
                    these headers?"
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiServer />
                    </span>
                    <h2>Important CORS headers you should know</h2>
                </div>

                <div className="headersGrid">
                    {corsHeaders.map((item) => (
                        <article key={item.title} className="headerCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <div className="codeBox">{item.example}</div>
                        </article>
                    ))}
                </div>

                <p>
                    These headers are not decoration. They are the language used
                    by the server to tell the browser what cross origin access
                    is allowed.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiCode />
                    </span>
                    <h2>Practical real world examples</h2>
                </div>

                <div className="examplesGrid">
                    {practicalExamples.map((item) => (
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
                        <FiSlash />
                    </span>
                    <h2>Common developer mistakes around CORS</h2>
                </div>

                <div className="mistakesGrid">
                    {commonMistakes.map((item) => (
                        <article key={item.title} className="mistakeCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiSettings />
                    </span>
                    <h2>A practical checklist for debugging CORS issues</h2>
                </div>

                <div className="checklistCard">
                    <ul className="bulletList">
                        {debugChecklist.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiDatabase />
                    </span>
                    <h2>Important terms related to CORS</h2>
                </div>

                <div className="termsGrid">
                    {keyTerms.map((item) => (
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
                    CORS is not random browser cruelty. It is a browser security
                    rule built around origins. When your frontend and backend
                    live on different origins, the browser needs clear
                    permission from the server before your JavaScript can read
                    the response.
                </p>

                <p>
                    Once you understand origin, server headers, browser
                    enforcement and preflight requests, most CORS errors stop
                    feeling magical and start feeling mechanical.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default CorsCrossOriginResourceSharing;
