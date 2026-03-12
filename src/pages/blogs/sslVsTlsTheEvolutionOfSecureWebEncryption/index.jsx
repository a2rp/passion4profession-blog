import React from "react";
import {
    FiShield,
    FiLock,
    FiGlobe,
    FiArrowRight,
    FiCheckCircle,
    FiAlertCircle,
    FiRefreshCw,
    FiLayers,
    FiServer,
    FiKey,
    FiEye,
    FiSlash,
    FiInfo,
    FiCpu,
    FiBookOpen,
    FiZap,
    FiLink,
    FiCode,
    FiMonitor,
    FiFileText,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const whyNeededCards = [
    {
        icon: <FiEye />,
        title: "Privacy",
        text: "Without secure encryption, anyone sitting between your browser and a website could read the data moving across the network.",
    },
    {
        icon: <FiCheckCircle />,
        title: "Integrity",
        text: "Secure protocols help make sure the data was not modified while travelling from one side to the other.",
    },
    {
        icon: <FiServer />,
        title: "Authentication",
        text: "They help your browser verify that it is really talking to the intended website and not to an impostor.",
    },
];

const coreIdeas = [
    {
        icon: <FiLock />,
        title: "Encryption",
        text: "Encryption turns readable data into unreadable form so unauthorized people cannot understand it.",
    },
    {
        icon: <FiShield />,
        title: "Secure connection",
        text: "SSL and TLS are protocols used to create a secure communication channel between two systems.",
    },
    {
        icon: <FiGlobe />,
        title: "Web usage",
        text: "On the web, TLS is what gives us HTTPS. When you visit a secure website, TLS is usually doing the heavy lifting.",
    },
    {
        icon: <FiServer />,
        title: "Trust",
        text: "The browser uses digital certificates to decide whether a website can be trusted for secure communication.",
    },
];

const sslVsTlsRows = [
    {
        feature: "Meaning",
        ssl: "Secure Sockets Layer",
        tls: "Transport Layer Security",
    },
    {
        feature: "Status today",
        ssl: "Old and obsolete",
        tls: "Modern and actively used",
    },
    {
        feature: "Security strength",
        ssl: "Contains serious weaknesses in old versions",
        tls: "Designed to be safer and stronger",
    },
    {
        feature: "Web relevance",
        ssl: "Mostly mentioned historically or casually in conversation",
        tls: "Actually used for modern secure web traffic",
    },
    {
        feature: "Relationship",
        ssl: "The older family",
        tls: "The improved successor and replacement",
    },
    {
        feature: "In everyday speech",
        ssl: "People still say SSL certificate, SSL handshake or SSL security",
        tls: "Technically more correct for modern systems",
    },
];

const handshakeSteps = [
    {
        icon: <FiMonitor />,
        title: "Client says hello",
        text: "Your browser contacts the server and says which TLS versions and cryptographic options it supports.",
    },
    {
        icon: <FiServer />,
        title: "Server replies",
        text: "The server chooses compatible options and sends its certificate so the browser can inspect it.",
    },
    {
        icon: <FiFileText />,
        title: "Certificate is checked",
        text: "The browser checks whether the certificate is valid, trusted, not expired, and issued for the correct domain name.",
    },
    {
        icon: <FiKey />,
        title: "Keys are established",
        text: "Both sides derive shared encryption keys in a safe way so they can encrypt the session traffic.",
    },
    {
        icon: <FiCheckCircle />,
        title: "Secure session begins",
        text: "After the handshake finishes, normal HTTP data can move inside an encrypted TLS connection. That is HTTPS.",
    },
];

const examples = [
    {
        title: "Example 1 - Logging into a website",
        text: "When you enter your password on an HTTPS page, TLS helps protect the credentials while they travel across the network. Without TLS, someone intercepting the traffic could read the password much more easily.",
    },
    {
        title: "Example 2 - Online payments",
        text: "Payment pages use HTTPS because card details, billing information and session data must be protected in transit.",
    },
    {
        title: "Example 3 - Public WiFi",
        text: "If you are connected to a public network at an airport or cafe, TLS becomes even more important because you do not control that network environment.",
    },
    {
        title: "Example 4 - Browser padlock icon",
        text: "When the browser shows a lock icon, it usually means the site is using HTTPS backed by TLS. Many people casually call that SSL, but technically it is usually TLS.",
    },
    {
        title: "Example 5 - API requests",
        text: "A frontend app calling a backend API over HTTPS is also relying on TLS so data such as tokens or user information is protected in transit.",
    },
];

const importantTerms = [
    {
        icon: <FiFileText />,
        title: "Certificate",
        text: "A digital certificate helps prove the identity of a server. It contains important information including the domain and public key.",
    },
    {
        icon: <FiKey />,
        title: "Public key and private key",
        text: "These are paired cryptographic keys. The public key can be shared. The private key must stay secret.",
    },
    {
        icon: <FiLink />,
        title: "Certificate authority",
        text: "A certificate authority, often called a CA, is an entity trusted to issue certificates for domains and organizations.",
    },
    {
        icon: <FiRefreshCw />,
        title: "Handshake",
        text: "The handshake is the startup conversation where browser and server agree on how to secure the connection.",
    },
    {
        icon: <FiCode />,
        title: "Cipher suite",
        text: "This refers to the selected combination of cryptographic algorithms used for the secure session.",
    },
    {
        icon: <FiBookOpen />,
        title: "Protocol",
        text: "A protocol is a defined set of rules for how communication should happen between systems.",
    },
];

const myths = [
    {
        title: "Myth - SSL and TLS are completely unrelated",
        text: "TLS is the successor to SSL. They are related historically, but TLS is the modern replacement.",
    },
    {
        title: "Myth - If a site has HTTPS, it is automatically safe in every way",
        text: "HTTPS protects data in transit. It does not guarantee that the website itself is honest, secure, bug free or malware free.",
    },
    {
        title: "Myth - SSL certificates are only for ecommerce sites",
        text: "Any site that exchanges user data, login details, cookies, tokens or API traffic benefits from TLS and HTTPS.",
    },
    {
        title: "Myth - Encryption means nobody can ever attack the website",
        text: "TLS only protects the connection channel. The website can still have vulnerabilities such as XSS, SQL injection, weak auth or broken authorization.",
    },
];

const versions = [
    {
        title: "SSL 2.0",
        text: "Very old and insecure. No longer acceptable.",
    },
    {
        title: "SSL 3.0",
        text: "Also obsolete and vulnerable. Should not be used.",
    },
    {
        title: "TLS 1.0",
        text: "The early TLS generation. Now considered outdated for most serious modern usage.",
    },
    {
        title: "TLS 1.1",
        text: "Also outdated and largely deprecated.",
    },
    {
        title: "TLS 1.2",
        text: "Still widely used and considered secure when configured correctly.",
    },
    {
        title: "TLS 1.3",
        text: "Modern, faster and stronger. Preferred where supported.",
    },
];

const useCases = [
    {
        icon: <FiGlobe />,
        title: "HTTPS websites",
        text: "The most visible use case. Browsers and websites use TLS under the hood to protect web traffic.",
    },
    {
        icon: <FiServer />,
        title: "APIs and backend services",
        text: "Microservices, mobile apps and frontend apps often talk to APIs using TLS secured HTTPS.",
    },
    {
        icon: <FiLink />,
        title: "Email transport",
        text: "Modern email systems often rely on TLS in different stages of message delivery or client communication.",
    },
    {
        icon: <FiLayers />,
        title: "Other network protocols",
        text: "TLS is not only for web browsing. It can also be used to protect other types of network communication.",
    },
];

const faqItems = [
    {
        question: "If modern systems use TLS, why do people still say SSL?",
        answer: "Because the term SSL became famous earlier and stayed in everyday language. Even today many people say SSL certificate when they really mean a certificate used with modern TLS.",
    },
    {
        question: "What is the relationship between HTTPS and TLS?",
        answer: "HTTPS is basically HTTP running over a secure TLS connection. HTTP handles web data. TLS secures the transport channel.",
    },
    {
        question: "Can a website have a certificate and still be dangerous?",
        answer: "Yes. A valid certificate only means the connection can be secured and the domain identity has been checked to some extent. It does not guarantee the site's intentions or full application security.",
    },
    {
        question: "Does TLS hide everything?",
        answer: "Not everything. It protects the content of the communication, but some metadata may still be visible depending on context and network design.",
    },
    {
        question: "Why were old SSL versions replaced?",
        answer: "Because researchers discovered weaknesses and better security designs were needed. TLS evolved to solve many of those problems.",
    },
    {
        question:
            "Should developers care about TLS if they only build frontend apps?",
        answer: "Absolutely. Frontend apps use HTTPS for API calls, login flows, cookies, tokens, asset delivery and general trust on the web.",
    },
];

const SslVsTlsTheEvolutionOfSecureWebEncryption = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiShield />
                            Web security fundamentals
                        </span>
                    </div>

                    <h1>SSL vs TLS - The Evolution of Secure Web Encryption</h1>

                    <p className="lead">
                        When you open a secure website and see HTTPS, a lock
                        icon, or a certificate warning, you are stepping into
                        the world of SSL and TLS. Most people hear these terms
                        but do not fully know what they do. This article builds
                        the full picture from zero so the whole topic makes
                        sense even to a complete beginner.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiLock />
                            </span>
                            <div>
                                <strong>SSL</strong>
                                <p>
                                    The older secure protocol family that is now
                                    outdated and obsolete.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiShield />
                            </span>
                            <div>
                                <strong>TLS</strong>
                                <p>
                                    The modern successor that secures most HTTPS
                                    communication today.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiGlobe />
                            </span>
                            <div>
                                <strong>Main job</strong>
                                <p>
                                    Protect data travelling between client and
                                    server by creating a secure connection.
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
                    <h2>Start with the simplest idea</h2>
                </div>

                <p>
                    When two systems communicate over the internet, the data
                    does not magically fly through a private tunnel by default.
                    It moves across networks, routers and infrastructure where
                    it could potentially be observed or altered if there were no
                    protections.
                </p>

                <p>
                    SSL and TLS were created to solve that problem. They create
                    a secure communication channel so data can travel more
                    safely between a client and a server.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            SSL and TLS are security protocols used to protect
                            data while it moves across a network. TLS is the
                            modern replacement for SSL.
                        </p>
                    </div>
                </div>

                <div className="whyGrid">
                    {whyNeededCards.map((item) => (
                        <article key={item.title} className="whyCard">
                            <span className="whyIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
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
                    <h2>The core ideas behind SSL and TLS</h2>
                </div>

                <p>
                    Before comparing SSL and TLS directly, it helps to
                    understand the big concepts that sit underneath them.
                </p>

                <div className="ideasGrid">
                    {coreIdeas.map((item) => (
                        <article key={item.title} className="ideaCard">
                            <span className="ideaIcon">{item.icon}</span>
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
                        <strong>Very important connection</strong>
                        <p>
                            HTTP is the web communication protocol. HTTPS is
                            HTTP running through a secure TLS protected channel.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiRefreshCw />
                    </span>
                    <h2>SSL vs TLS - what is the actual difference</h2>
                </div>

                <p>
                    The short version is simple. SSL came first. TLS came later
                    as the stronger and improved successor. Modern systems
                    should use TLS, not old SSL versions.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>SSL</th>
                                <th>TLS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sslVsTlsRows.map((row) => (
                                <tr key={row.feature}>
                                    <td>{row.feature}</td>
                                    <td>{row.ssl}</td>
                                    <td>{row.tls}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p>
                    So when somebody says "SSL certificate" today, they are
                    often using older language for something that is actually
                    part of a TLS based modern setup.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiKey />
                    </span>
                    <h2>How a secure connection is established</h2>
                </div>

                <p>
                    Secure web traffic does not begin encrypted by magic. First
                    the client and server go through a handshake process. This
                    is the part many beginners hear about but rarely see
                    explained clearly.
                </p>

                <div className="flowGrid">
                    {handshakeSteps.map((item, index) => (
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
                        <strong>Important nuance</strong>
                        <p>
                            The exact handshake details differ between versions
                            such as TLS 1.2 and TLS 1.3, but the beginner level
                            idea stays the same - verify, agree, derive keys,
                            and then start protected communication.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiFileText />
                    </span>
                    <h2>Certificates, trust and identity</h2>
                </div>

                <p>
                    Encryption alone is not enough. Imagine talking privately to
                    the wrong person. That is why identity matters too. The
                    browser needs a way to decide whether the server is really
                    the website it claims to be.
                </p>

                <p>
                    This is where digital certificates and certificate
                    authorities come in. The server presents a certificate. The
                    browser checks whether it is valid, trusted, not expired,
                    and tied to the domain you requested.
                </p>

                <ul className="bulletList">
                    <li>
                        The certificate contains identity and key information.
                    </li>
                    <li>
                        The browser checks whether the certificate is trusted.
                    </li>
                    <li>
                        The domain name in the certificate must match the site.
                    </li>
                    <li>If checks fail, the browser may show a warning.</li>
                </ul>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiServer />
                    </span>
                    <div>
                        <strong>Important beginner insight</strong>
                        <p>
                            A certificate does not mean the website is morally
                            good or free from bugs. It mainly helps establish a
                            secure and authenticated transport channel.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiGlobe />
                    </span>
                    <h2>Real world examples that make this topic click</h2>
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
                        <FiBookOpen />
                    </span>
                    <h2>Important terms you should know</h2>
                </div>

                <div className="termsGrid">
                    {importantTerms.map((item) => (
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
                        <FiZap />
                    </span>
                    <h2>
                        Protocol versions and why old SSL is no longer
                        acceptable
                    </h2>
                </div>

                <p>
                    Security evolves. Old designs often become weak as research
                    improves and attackers discover new techniques. That is why
                    the security world moved from old SSL versions toward newer
                    TLS versions.
                </p>

                <div className="versionsGrid">
                    {versions.map((item) => (
                        <article key={item.title} className="versionCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    In practical modern web development, TLS 1.2 and TLS 1.3 are
                    the versions people usually care about. TLS 1.3 is the newer
                    and more streamlined option where supported.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiCpu />
                    </span>
                    <h2>Where TLS is used besides normal web pages</h2>
                </div>

                <p>
                    Many beginners think TLS is only about browsers and
                    websites. It is broader than that. It can protect different
                    kinds of network communication, not just page visits.
                </p>

                <div className="useCasesGrid">
                    {useCases.map((item) => (
                        <article key={item.title} className="useCaseCard">
                            <span className="useCaseIcon">{item.icon}</span>
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
                    <h2>Common myths and misunderstandings</h2>
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
                    SSL and TLS both belong to the story of secure network
                    communication, but TLS is the modern protocol that replaced
                    old SSL. When you use HTTPS, modern secure APIs, login pages
                    and many protected network services, TLS is usually the
                    protocol making that protection possible.
                </p>

                <p>
                    The most important beginner level understanding is this -
                    encryption protects the channel, certificates help verify
                    identity, and TLS is the modern standard that made secure
                    web communication practical and widespread.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default SslVsTlsTheEvolutionOfSecureWebEncryption;
