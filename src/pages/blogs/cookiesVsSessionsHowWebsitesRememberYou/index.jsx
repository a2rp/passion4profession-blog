import React from "react";
import {
    FiActivity,
    FiAlertCircle,
    FiCheckCircle,
    FiClock,
    FiCode,
    FiDatabase,
    FiGlobe,
    FiInfo,
    FiKey,
    FiLayers,
    FiLock,
    FiRefreshCw,
    FiSearch,
    FiServer,
    FiShield,
    FiTool,
    FiUser,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const simpleFlow = [
    {
        icon: <FiUser />,
        title: "A user logs in",
        text: "A person enters credentials on a login page and submits the form.",
    },
    {
        icon: <FiServer />,
        title: "The server verifies identity",
        text: "The backend checks whether the email, username or password is valid.",
    },
    {
        icon: <FiKey />,
        title: "A session is created",
        text: "If login is successful, the server creates a session record that represents the authenticated user.",
    },
    {
        icon: <FiLock />,
        title: "A cookie is sent to the browser",
        text: "The browser receives a small cookie, often containing a session identifier rather than the full user data.",
    },
    {
        icon: <FiRefreshCw />,
        title: "Later requests include that cookie",
        text: "When the user opens another page or performs another action, the browser automatically sends the cookie again.",
    },
    {
        icon: <FiCheckCircle />,
        title: "The server recognizes the user",
        text: "The backend uses the cookie value to find the matching session and decide who the user is.",
    },
];

const keyParts = [
    {
        icon: <FiGlobe />,
        title: "Cookie",
        text: "A cookie is a small piece of data stored by the browser and sent back to the server with future requests.",
    },
    {
        icon: <FiDatabase />,
        title: "Session",
        text: "A session is usually server-side state that stores information about a user across multiple requests.",
    },
    {
        icon: <FiKey />,
        title: "Session ID",
        text: "A session ID is a unique identifier that links the browser's cookie to the actual session data stored on the server.",
    },
    {
        icon: <FiShield />,
        title: "Authentication",
        text: "Authentication confirms who the user is, often during login.",
    },
    {
        icon: <FiLayers />,
        title: "State",
        text: "State means remembering information between one request and the next.",
    },
    {
        icon: <FiLock />,
        title: "Security flags",
        text: "Cookie settings such as HttpOnly, Secure and SameSite help reduce common security risks.",
    },
];

const compareRows = [
    {
        topic: "Where it is stored",
        cookie: "In the browser",
        session: "Usually on the server",
    },
    {
        topic: "Typical size",
        cookie: "Small and limited",
        session: "Can hold more data because it stays server-side",
    },
    {
        topic: "Sent with requests",
        cookie: "Yes, usually automatically to matching domains and paths",
        session: "Not directly - usually identified through a cookie value",
    },
    {
        topic: "Good for",
        cookie: "Preferences, identifiers, small client-side data",
        session: "Authenticated user state and temporary server-side data",
    },
    {
        topic: "Security risk",
        cookie: "Can be read or stolen if configured poorly",
        session: "Can be hijacked if the session ID is stolen",
    },
    {
        topic: "Expires how",
        cookie: "By expiration time or browser close",
        session: "By server timeout or explicit logout/destroy",
    },
];

const examples = [
    {
        title: "Remembering dark mode",
        text: "A website may store a small cookie such as theme=dark so your preferred theme stays the same when you visit again.",
    },
    {
        title: "Keeping a user logged in",
        text: "A browser may store a session cookie that contains only a session ID. The real user information stays on the server.",
    },
    {
        title: "Shopping cart before login",
        text: "A small identifier in a cookie can help the server connect a browser to a temporary cart.",
    },
    {
        title: "Admin dashboard access",
        text: "The server checks the session on each request to confirm whether the user is logged in and allowed to view protected pages.",
    },
];

const securityPoints = [
    {
        title: "HttpOnly",
        text: "Prevents JavaScript in the browser from directly reading the cookie, which helps reduce the damage of some XSS attacks.",
    },
    {
        title: "Secure",
        text: "Tells the browser to send the cookie only over HTTPS rather than plain HTTP.",
    },
    {
        title: "SameSite",
        text: "Helps control when cookies are sent across sites and can reduce some CSRF risks.",
    },
    {
        title: "Session expiration",
        text: "Sessions should not stay alive forever. Timeouts and logout handling are important.",
    },
    {
        title: "Session rotation",
        text: "After login or privilege changes, many systems rotate the session ID to reduce fixation risks.",
    },
    {
        title: "Minimal data in cookies",
        text: "Sensitive user details should usually not be stored directly in browser cookies.",
    },
];

const myths = [
    {
        title: "Myth - Cookies and sessions are the same thing",
        text: "They are related, but not identical. A cookie is browser-stored data. A session is usually server-side state.",
    },
    {
        title: "Myth - Cookies are always insecure",
        text: "Cookies are not automatically bad. Poor configuration is the real problem. Proper flags and HTTPS matter a lot.",
    },
    {
        title: "Myth - Sessions mean no cookies are involved",
        text: "Many session-based systems still use a cookie to carry the session ID.",
    },
    {
        title: "Myth - If I use JWT, sessions disappear from reality",
        text: "Token-based auth changes the approach, but the broader problem of identity, expiry and security still remains.",
    },
];

const faqItems = [
    {
        question: "Why does a website forget me after I close the browser?",
        answer: "That often happens when a session cookie is used without a long-lived expiration date, so it disappears when the browser session ends.",
    },
    {
        question: "Can cookies store passwords?",
        answer: "They should not. Storing plain passwords in cookies is a spectacularly bad idea.",
    },
    {
        question: "Can a session exist without a cookie?",
        answer: "Yes in theory, but on the web cookies are a very common way to associate requests with a session.",
    },
    {
        question: "What happens on logout?",
        answer: "The server usually destroys or invalidates the session, and the browser cookie may also be cleared.",
    },
    {
        question: "Why not store everything in cookies?",
        answer: "Cookies are small, browser-visible unless protected, and sent on requests. Large or sensitive state is usually better kept on the server.",
    },
    {
        question: "Are cookies only for login?",
        answer: "No. They can also be used for preferences, analytics, localization and other small pieces of state.",
    },
];

const requestExamples = [
    {
        title: "Example 1 - Server sets a session cookie after login",
        request: `POST /api/login

{
  "email": "ash@example.com",
  "password": "your-password"
}`,
        response: `HTTP/1.1 200 OK
Set-Cookie: sid=abc123xyz; HttpOnly; Secure; SameSite=Lax

{
  "message": "Login successful"
}`,
    },
    {
        title: "Example 2 - Browser sends the cookie on the next request",
        request: `GET /api/profile
Cookie: sid=abc123xyz`,
        response: `{
  "id": 45,
  "name": "Ashish",
  "role": "user"
}`,
    },
    {
        title: "Example 3 - Logout destroys the session",
        request: `POST /api/logout
Cookie: sid=abc123xyz`,
        response: `{
  "message": "Logged out successfully"
}`,
    },
];

const CookiesVsSessionsHowWebsitesRememberYou = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiActivity />
                            Authentication and state fundamentals
                        </span>
                    </div>

                    <h1>Cookies vs Sessions - How Websites Remember You</h1>

                    <p className="lead">
                        Websites handle many separate requests, but users expect
                        continuity. You log in once and expect the site to
                        remember you on the next page, the next click and the
                        next refresh. Cookies and sessions are two of the main
                        ideas that make this possible.
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
                                <strong>Cookie</strong>
                                <p>
                                    Small browser-stored data that can be sent
                                    along with future requests.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiDatabase />
                            </span>
                            <div>
                                <strong>Session</strong>
                                <p>
                                    Usually server-side state that represents a
                                    user across multiple requests.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiUser />
                            </span>
                            <div>
                                <strong>Goal</strong>
                                <p>
                                    Help a website remember identity,
                                    preferences and temporary state.
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
                    <h2>Why websites need a memory system</h2>
                </div>

                <p>
                    HTTP is stateless by default. That means one request does
                    not automatically remember the previous request. If you open
                    a login page, then open your profile page, the server does
                    not magically know both actions came from the same person.
                </p>

                <p>
                    Real websites need continuity. They need to know whether you
                    are logged in, what language you prefer, what is in your
                    cart, and whether you are allowed to access a protected
                    route. Cookies and sessions help solve this problem.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple idea</strong>
                        <p>
                            Cookies help identify a browser across requests, and
                            sessions help the server remember what that identity
                            means.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiGlobe />
                    </span>
                    <h2>What is a cookie</h2>
                </div>

                <p>
                    A cookie is a small piece of data stored by the browser.
                    When a website sets a cookie, the browser can send that
                    cookie back on future requests to the same site, depending
                    on the domain, path and cookie settings.
                </p>

                <p>
                    Cookies are often used for things like remembering a session
                    ID, saving a theme preference, keeping language settings or
                    tracking whether a user has already dismissed a banner.
                </p>

                <div className="callout soft">
                    <span className="calloutIcon">
                        <FiCode />
                    </span>
                    <div>
                        <strong>Important distinction</strong>
                        <p>
                            A cookie is just data stored in the browser. It is
                            not automatically a login system by itself.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiDatabase />
                    </span>
                    <h2>What is a session</h2>
                </div>

                <p>
                    A session is usually server-side information associated with
                    a particular user or browser. For example, the server may
                    remember that session ID abc123xyz belongs to Ashish, is
                    authenticated, and has role user.
                </p>

                <p>
                    Instead of sending all that sensitive information to the
                    browser on every request, the server stores it centrally and
                    links it through a session identifier.
                </p>

                <div className="callout soft">
                    <span className="calloutIcon">
                        <FiServer />
                    </span>
                    <div>
                        <strong>Practical model</strong>
                        <p>
                            In many systems, the browser keeps only a small
                            session ID cookie, while the real session data stays
                            on the backend.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiRefreshCw />
                    </span>
                    <h2>How cookies and sessions work together</h2>
                </div>

                <div className="flowGrid">
                    {simpleFlow.map((item, index) => (
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

                <div className="callout">
                    <span className="calloutIcon">
                        <FiKey />
                    </span>
                    <div>
                        <strong>Main pattern</strong>
                        <p>
                            Session-based authentication often works by storing
                            the real user state on the server and sending only a
                            session ID through a cookie.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>Main parts you should understand</h2>
                </div>

                <div className="partsGrid">
                    {keyParts.map((item) => (
                        <article key={item.title} className="partCard">
                            <span className="partIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiSearch />
                    </span>
                    <h2>Cookies vs sessions side by side</h2>
                </div>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Topic</th>
                                <th>Cookie</th>
                                <th>Session</th>
                            </tr>
                        </thead>
                        <tbody>
                            {compareRows.map((row) => (
                                <tr key={row.topic}>
                                    <td>{row.topic}</td>
                                    <td>{row.cookie}</td>
                                    <td>{row.session}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiCode />
                    </span>
                    <h2>What requests and responses can look like</h2>
                </div>

                <p>
                    Here are simple examples showing how a login flow may use a
                    session cookie.
                </p>

                <div className="requestGrid">
                    {requestExamples.map((item) => (
                        <article key={item.title} className="requestCard">
                            <h3>{item.title}</h3>

                            <div className="codeBlock">
                                <strong>Request</strong>
                                <pre>{item.request}</pre>
                            </div>

                            <div className="codeBlock">
                                <strong>Response</strong>
                                <pre>{item.response}</pre>
                            </div>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiTool />
                    </span>
                    <h2>Common real world examples</h2>
                </div>

                <div className="examplesGrid">
                    {examples.map((item) => (
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
                        <FiShield />
                    </span>
                    <h2>Security points beginners should know</h2>
                </div>

                <p>
                    Authentication systems are juicy targets for bugs and abuse,
                    so cookie and session handling needs care. Tiny settings can
                    have big consequences. The internet is a strange zoo.
                </p>

                <div className="mythGrid">
                    {securityPoints.map((item) => (
                        <article key={item.title} className="mythCard">
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
                        <strong>Important point</strong>
                        <p>
                            Storing too much trust in the browser is risky.
                            Sensitive state and permission logic should stay on
                            the server side whenever possible.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiClock />
                    </span>
                    <h2>Expiration and logout</h2>
                </div>

                <p>
                    Cookies and sessions do not last forever unless you make
                    them. A session may expire after inactivity. A cookie may
                    disappear when the browser closes, or it may remain for
                    days, weeks or months depending on how it is set.
                </p>

                <p>
                    On logout, a good system usually invalidates the server-side
                    session and also clears the browser cookie. Doing only one
                    part and forgetting the other can cause weird behavior and
                    security confusion.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiAlertCircle />
                    </span>
                    <h2>Common myths and beginner confusion</h2>
                </div>

                <div className="mythGrid">
                    {myths.map((item) => (
                        <article key={item.title} className="mythCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiTool />
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
                    Cookies and sessions are about maintaining continuity in a
                    stateless web. Cookies live in the browser, sessions usually
                    live on the server, and many real applications use them
                    together.
                </p>

                <p>
                    The easiest mental model is this: the browser keeps a small
                    identifier, and the server uses that identifier to remember
                    who you are. Once this clicks, authentication and protected
                    routes stop feeling like black magic and start feeling like
                    engineering.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default CookiesVsSessionsHowWebsitesRememberYou;
