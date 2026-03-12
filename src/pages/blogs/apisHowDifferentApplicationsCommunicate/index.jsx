import React from "react";
import {
    FiActivity,
    FiArrowRight,
    FiAlertCircle,
    FiCheckCircle,
    FiCode,
    FiCommand,
    FiDatabase,
    FiGlobe,
    FiInfo,
    FiLayers,
    FiLock,
    FiMonitor,
    FiRefreshCw,
    FiSearch,
    FiSend,
    FiServer,
    FiSettings,
    FiShield,
    FiSmartphone,
    FiTool,
    FiUser,
    FiZap,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const simpleFlow = [
    {
        icon: <FiUser />,
        title: "A user takes an action",
        text: "A person clicks a button, submits a form, opens a screen, or searches for something in an app or website.",
    },
    {
        icon: <FiSmartphone />,
        title: "The frontend prepares a request",
        text: "The app decides what data it needs and sends a request to another system through an API.",
    },
    {
        icon: <FiServer />,
        title: "The server receives the request",
        text: "The backend reads the request, checks the route, validates the input, verifies permissions and decides what should happen next.",
    },
    {
        icon: <FiDatabase />,
        title: "Work is done behind the scenes",
        text: "The server may read a database, save data, call another service, process logic or combine information from multiple places.",
    },
    {
        icon: <FiArrowRight />,
        title: "A response comes back",
        text: "The API sends a structured response, often JSON, back to the frontend or other application.",
    },
    {
        icon: <FiMonitor />,
        title: "The user sees the result",
        text: "The interface updates and shows a success message, profile data, products, weather details or whatever was requested.",
    },
];

const apiParts = [
    {
        icon: <FiGlobe />,
        title: "Endpoint",
        text: "An endpoint is a specific API address such as /users or /products/42. It is the place where you send a request.",
    },
    {
        icon: <FiSend />,
        title: "Request",
        text: "A request is what the client sends to the server. It can include the method, headers, parameters and sometimes a body.",
    },
    {
        icon: <FiCheckCircle />,
        title: "Response",
        text: "A response is what the server sends back. It often contains data, a status code and a message about whether the request succeeded.",
    },
    {
        icon: <FiCommand />,
        title: "HTTP method",
        text: "Methods like GET, POST, PUT, PATCH and DELETE describe the kind of action being requested.",
    },
    {
        icon: <FiCode />,
        title: "Payload",
        text: "Payload usually means the actual data sent in a request or response body.",
    },
    {
        icon: <FiShield />,
        title: "Authentication",
        text: "Authentication checks who the client is. APIs often use tokens, cookies, API keys or sessions for this.",
    },
];

const methodCards = [
    {
        method: "GET",
        title: "Read data",
        text: "Used when you want to fetch or read data from the server.",
        example: "GET /api/products",
    },
    {
        method: "POST",
        title: "Create data",
        text: "Used when you want to create something new on the server.",
        example: "POST /api/users",
    },
    {
        method: "PUT",
        title: "Replace data",
        text: "Often used when replacing an entire existing resource with new data.",
        example: "PUT /api/profile/12",
    },
    {
        method: "PATCH",
        title: "Update part of data",
        text: "Usually used when changing only some fields instead of replacing everything.",
        example: "PATCH /api/profile/12",
    },
    {
        method: "DELETE",
        title: "Remove data",
        text: "Used when deleting an existing resource from the server.",
        example: "DELETE /api/cart/5",
    },
];

const statusRows = [
    {
        code: "200",
        meaning: "OK",
        detail: "The request worked and the server returned the expected result.",
    },
    {
        code: "201",
        meaning: "Created",
        detail: "A new resource was successfully created.",
    },
    {
        code: "400",
        meaning: "Bad Request",
        detail: "The server could not understand or accept the request because something was wrong with it.",
    },
    {
        code: "401",
        meaning: "Unauthorized",
        detail: "The client is not authenticated properly.",
    },
    {
        code: "403",
        meaning: "Forbidden",
        detail: "The client is recognized but does not have permission.",
    },
    {
        code: "404",
        meaning: "Not Found",
        detail: "The requested API endpoint or resource does not exist.",
    },
    {
        code: "500",
        meaning: "Internal Server Error",
        detail: "Something failed on the server side.",
    },
];

const realExamples = [
    {
        title: "Weather app",
        text: "A weather app does not usually predict weather by itself. It calls a weather API, sends a city name, and gets back temperature, humidity, forecast and conditions.",
    },
    {
        title: "Login form",
        text: "When you log in, the frontend sends your credentials to an API endpoint. The server checks them and returns success or failure along with a token, cookie or session.",
    },
    {
        title: "E-commerce product listing",
        text: "The frontend does not hardcode every product on the page. It asks the backend API for products, then renders them on the screen.",
    },
    {
        title: "Payment gateway integration",
        text: "An application talks to external payment APIs to create payment sessions, verify transactions and update order status.",
    },
    {
        title: "Maps and location search",
        text: "A map app or delivery app uses location APIs to search addresses, calculate routes and get map data.",
    },
    {
        title: "Chat application",
        text: "Messages are often sent from the frontend to an API and then stored, processed or distributed through backend services.",
    },
];

const apiTypes = [
    {
        icon: <FiServer />,
        title: "Internal API",
        text: "Used inside a company or product ecosystem. One service talks to another service through these APIs.",
    },
    {
        icon: <FiGlobe />,
        title: "Public API",
        text: "Made available to external developers or applications. Examples include payment, weather, maps or social platform APIs.",
    },
    {
        icon: <FiLayers />,
        title: "Private API",
        text: "Restricted to internal teams or systems and not intended for public use.",
    },
    {
        icon: <FiTool />,
        title: "Partner API",
        text: "Shared with selected business partners rather than everyone.",
    },
];

const requestExamples = [
    {
        title: "Example 1 - Fetch all products",
        request: "GET /api/products",
        response: `[
  {
    "id": 1,
    "name": "Laptop",
    "price": 65000
  },
  {
    "id": 2,
    "name": "Mouse",
    "price": 899
  }
]`,
    },
    {
        title: "Example 2 - Create a new user",
        request: `POST /api/users

{
  "name": "Ash",
  "email": "ash@example.com"
}`,
        response: `{
  "message": "User created successfully",
  "userId": 45
}`,
    },
    {
        title: "Example 3 - Update profile name",
        request: `PATCH /api/profile/45

{
  "name": "Ashish"
}`,
        response: `{
  "message": "Profile updated"
}`,
    },
];

const myths = [
    {
        title: "Myth - API means only backend code",
        text: "An API is an interface or contract for communication. Backend APIs are common, but APIs exist in many forms, including browser APIs and library APIs.",
    },
    {
        title: "Myth - APIs are only for big companies",
        text: "Even a very small project with frontend and backend can use APIs. A basic form submission endpoint is already an API.",
    },
    {
        title: "Myth - API and database are the same thing",
        text: "They are different. The API is the communication layer. The database is where data may be stored.",
    },
    {
        title: "Myth - JSON itself is an API",
        text: "JSON is just a data format. It is commonly used by APIs, but it is not the API itself.",
    },
];

const faqItems = [
    {
        question: "What does API stand for?",
        answer: "API stands for Application Programming Interface.",
    },
    {
        question: "Do APIs always use the internet?",
        answer: "No. Many APIs work over networks, but APIs can also exist locally inside software systems, operating systems or libraries.",
    },
    {
        question: "Is REST the same as API?",
        answer: "No. REST is one style of designing web APIs. API is the broader idea.",
    },
    {
        question:
            "Can a frontend talk directly to a database instead of an API?",
        answer: "In many real applications, that is not a good idea. The backend API usually sits in the middle to handle security, validation and business logic.",
    },
    {
        question: "Why are APIs so important in modern development?",
        answer: "Because modern applications are made of different parts that need to exchange data cleanly and reliably.",
    },
    {
        question: "How do I know an app is using an API?",
        answer: "If a frontend fetches data from a backend, sends a login request, loads products, posts a comment or updates a profile, an API is usually involved.",
    },
];

const ApisHowDifferentApplicationsCommunicate = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiActivity />
                            Software communication fundamentals
                        </span>
                    </div>

                    <h1>APIs - How Different Applications Communicate</h1>

                    <p className="lead">
                        Modern software almost never works in isolation. Apps,
                        websites, servers, databases, payment systems, maps,
                        weather services and mobile clients constantly exchange
                        data. APIs are the rules and communication paths that
                        make that possible.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiSend />
                            </span>
                            <div>
                                <strong>Request</strong>
                                <p>
                                    One system asks another system to do
                                    something or return some data.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiServer />
                            </span>
                            <div>
                                <strong>API</strong>
                                <p>
                                    The agreed interface through which systems
                                    communicate safely and clearly.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiCheckCircle />
                            </span>
                            <div>
                                <strong>Response</strong>
                                <p>
                                    The server or service sends back data,
                                    status information or an error.
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
                    <h2>What is an API in simple language</h2>
                </div>

                <p>
                    API stands for Application Programming Interface. The name
                    sounds technical, but the core idea is simple. An API is a
                    way for one software system to ask another software system
                    for something in a structured, agreed format.
                </p>

                <p>
                    You can think of an API like a waiter in a restaurant. You
                    do not walk into the kitchen and cook your own food. You
                    place an order through a defined interface. The kitchen does
                    the work and sends the result back. In software, the client
                    sends a request, the server does the work, and the response
                    comes back.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            An API is a set of rules and communication points
                            that allows one application to request data or
                            services from another application.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiRefreshCw />
                    </span>
                    <h2>How API communication usually works</h2>
                </div>

                <p>
                    Most beginners understand APIs much better once they see the
                    flow step by step.
                </p>

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

                <div className="callout soft">
                    <span className="calloutIcon">
                        <FiArrowRight />
                    </span>
                    <div>
                        <strong>Main idea</strong>
                        <p>
                            APIs let software systems talk in a predictable,
                            structured and reusable way instead of directly
                            digging into each other's internal code.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>The main parts of an API</h2>
                </div>

                <div className="partsGrid">
                    {apiParts.map((item) => (
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
                        <FiCommand />
                    </span>
                    <h2>
                        HTTP methods - what kind of action is being requested
                    </h2>
                </div>

                <p>
                    In web APIs, methods such as GET and POST tell the server
                    what kind of action the client wants to perform.
                </p>

                <div className="methodGrid">
                    {methodCards.map((item) => (
                        <article key={item.method} className="methodCard">
                            <div className="methodBadge">{item.method}</div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <code>{item.example}</code>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiCode />
                    </span>
                    <h2>What requests and responses often look like</h2>
                </div>

                <p>
                    Many APIs use JSON because it is easy for both humans and
                    machines to read. Here are simple examples.
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
                        <FiCheckCircle />
                    </span>
                    <h2>Common status codes you should know</h2>
                </div>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>What it usually means</th>
                            </tr>
                        </thead>
                        <tbody>
                            {statusRows.map((row) => (
                                <tr key={row.code}>
                                    <td>{row.code}</td>
                                    <td>{row.meaning}</td>
                                    <td>{row.detail}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiGlobe />
                    </span>
                    <h2>
                        Real world examples that make APIs easy to understand
                    </h2>
                </div>

                <div className="examplesGrid">
                    {realExamples.map((item) => (
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
                        <FiSettings />
                    </span>
                    <h2>Different kinds of APIs</h2>
                </div>

                <div className="typesGrid">
                    {apiTypes.map((item) => (
                        <article key={item.title} className="typeCard">
                            <span className="typeIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLock />
                    </span>
                    <h2>Why APIs need security and validation</h2>
                </div>

                <p>
                    If an API accepts requests from clients, it also needs to be
                    careful. Otherwise anyone could send invalid data, fake
                    identities, overload the server or access information they
                    should not see.
                </p>

                <ul className="bulletList">
                    <li>Authentication checks who the client is.</li>
                    <li>
                        Authorization checks what the client is allowed to do.
                    </li>
                    <li>
                        Validation checks whether the incoming data is
                        acceptable.
                    </li>
                    <li>Rate limiting helps prevent abuse or overload.</li>
                    <li>
                        HTTPS protects data while it moves across the network.
                    </li>
                </ul>

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiAlertCircle />
                    </span>
                    <div>
                        <strong>Important point</strong>
                        <p>
                            A useful API is not just about returning data. It
                            also needs correctness, safety, permissions and
                            predictable behavior.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiSearch />
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
                    APIs are one of the core ideas behind modern software. They
                    allow apps, websites, servers and services to communicate in
                    a structured way. Once you understand requests, responses,
                    endpoints, methods and status codes, a huge part of
                    frontend, backend and full stack development starts making
                    practical sense.
                </p>

                <p>
                    The big idea is simple - an API is how one application asks
                    another application for data or functionality without
                    needing direct access to its internal implementation.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default ApisHowDifferentApplicationsCommunicate;
