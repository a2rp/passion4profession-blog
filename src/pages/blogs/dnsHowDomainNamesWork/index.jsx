import React from "react";
import {
    FiGlobe,
    FiSearch,
    FiServer,
    FiMapPin,
    FiArrowRight,
    FiCheckCircle,
    FiAlertCircle,
    FiLayers,
    FiClock,
    FiShield,
    FiWifi,
    FiLink,
    FiBox,
    FiInfo,
    FiActivity,
    FiMonitor,
    FiDatabase,
    FiHome,
    FiRefreshCw,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const whatDnsDoes = [
    {
        icon: <FiGlobe />,
        title: "You remember names",
        text: "Humans remember names like google.com and github.com much more easily than long strings of numbers.",
    },
    {
        icon: <FiServer />,
        title: "Computers use IP addresses",
        text: "Devices on networks communicate using IP addresses such as 142.250.x.x or 140.82.x.x, not friendly website names.",
    },
    {
        icon: <FiMapPin />,
        title: "DNS connects the two",
        text: "DNS translates human friendly domain names into machine friendly IP addresses so your browser knows where to connect.",
    },
];

const dnsFlow = [
    {
        icon: <FiSearch />,
        title: "You type a website name",
        text: "For example, you type openai.com into your browser.",
    },
    {
        icon: <FiMonitor />,
        title: "Browser checks local memory first",
        text: "Your browser and operating system may already remember the answer from a recent visit.",
    },
    {
        icon: <FiHome />,
        title: "The request goes to a DNS resolver",
        text: "If the answer is not already known locally, your system asks a DNS resolver, often provided by your internet provider or a public DNS service.",
    },
    {
        icon: <FiLayers />,
        title: "The resolver asks the DNS hierarchy",
        text: "If needed, it contacts root servers, top level domain servers, and then the domain's authoritative DNS server.",
    },
    {
        icon: <FiServer />,
        title: "The correct IP address is returned",
        text: "The resolver gets the answer and sends the IP address back to your computer.",
    },
    {
        icon: <FiArrowRight />,
        title: "Your browser connects to the website",
        text: "Now the browser knows where the website lives and can start loading the page.",
    },
];

const comparisonRows = [
    {
        concept: "Domain name",
        meaning: "A human readable website name such as example.com",
        example: "github.com",
    },
    {
        concept: "IP address",
        meaning: "The numerical network address used by devices",
        example: "140.82.x.x",
    },
    {
        concept: "DNS resolver",
        meaning: "The service that tries to find the IP for a domain name",
        example: "Your ISP DNS or a public DNS service",
    },
    {
        concept: "Authoritative DNS server",
        meaning: "The server that has the official answer for a domain",
        example: "The DNS server configured by the domain owner",
    },
    {
        concept: "Cache",
        meaning: "A temporary memory of earlier DNS lookups",
        example: "Your browser remembers a recent lookup",
    },
];

const commonRecordTypes = [
    {
        icon: <FiLink />,
        title: "A record",
        text: "Points a domain name to an IPv4 address.",
        example: "example.com -> 93.184.216.34",
    },
    {
        icon: <FiLink />,
        title: "AAAA record",
        text: "Points a domain name to an IPv6 address.",
        example: "example.com -> 2606:2800:220:1:248:1893:25c8:1946",
    },
    {
        icon: <FiRefreshCw />,
        title: "CNAME record",
        text: "Makes one domain name act like another domain name.",
        example: "www.example.com -> example.com",
    },
    {
        icon: <FiServer />,
        title: "MX record",
        text: "Tells the internet where email for a domain should go.",
        example: "Mail for mydomain.com goes to a specific mail server",
    },
    {
        icon: <FiInfo />,
        title: "TXT record",
        text: "Stores text data often used for verification and email protection settings.",
        example: "Domain verification, SPF, DKIM related text entries",
    },
    {
        icon: <FiShield />,
        title: "NS record",
        text: "Shows which name servers are responsible for the domain.",
        example: "ns1.provider.com and ns2.provider.com",
    },
];

const everydayExamples = [
    {
        title: "Example 1 - Opening a website",
        text: "You type youtube.com. DNS finds the website's IP address so your browser can connect to the right server.",
    },
    {
        title: "Example 2 - A website moves to a new server",
        text: "The site owner updates DNS records to point the domain name to the new server IP. Visitors still type the same domain name, but DNS sends them to the new location.",
    },
    {
        title: "Example 3 - Using www and non www",
        text: "A domain may use DNS to send www.example.com to example.com or vice versa. This is often done through CNAME style mapping and related configuration.",
    },
    {
        title: "Example 4 - Sending email",
        text: "When someone sends mail to a domain, MX records help mail systems know which server should receive that email.",
    },
    {
        title: "Example 5 - Faster repeat visits",
        text: "If your system recently looked up a domain, the result may be cached, so the next visit can feel faster because DNS does not need to start from scratch.",
    },
];

const dnsParts = [
    {
        icon: <FiDatabase />,
        title: "Root DNS servers",
        text: "These are the top level starting points of the DNS hierarchy. They do not usually give the final IP address, but they tell resolvers where to go next.",
    },
    {
        icon: <FiBox />,
        title: "Top level domain servers",
        text: "These servers manage domains under endings like .com, .org, .net, .in and many others.",
    },
    {
        icon: <FiServer />,
        title: "Authoritative name servers",
        text: "These servers hold the actual official DNS records for a domain and provide the final answer.",
    },
    {
        icon: <FiHome />,
        title: "Recursive resolver",
        text: "This is the helper that does the lookup work on behalf of your device and returns the answer to you.",
    },
];

const dnsBenefits = [
    {
        icon: <FiCheckCircle />,
        title: "Human friendly web usage",
        text: "People can use names instead of raw numerical addresses.",
    },
    {
        icon: <FiActivity />,
        title: "Flexible infrastructure",
        text: "A website can move servers and change IPs without forcing users to remember anything new.",
    },
    {
        icon: <FiWifi />,
        title: "Internet scale",
        text: "DNS helps billions of devices find online services in a structured way.",
    },
    {
        icon: <FiClock />,
        title: "Caching makes things faster",
        text: "Repeated lookups can often be answered from cache instead of repeating every step.",
    },
];

const myths = [
    {
        title: "Myth - DNS is only for websites",
        text: "DNS is heavily used for websites, but it is also important for email, subdomains, service discovery and many other network tasks.",
    },
    {
        title: "Myth - DNS stores the whole website",
        text: "DNS does not store the website content. It only helps point your device to the right server or service.",
    },
    {
        title: "Myth - One domain always means one server",
        text: "A single domain can point to multiple servers, services, CDNs and load balanced systems depending on configuration.",
    },
    {
        title: "Myth - If DNS changes, everyone sees it instantly",
        text: "Not always. DNS changes can take time to spread because of caching and record lifetimes.",
    },
];

const faqItems = [
    {
        question: "Why do we need DNS if computers already use IP addresses?",
        answer: "Because humans are bad at remembering lots of numerical addresses. DNS lets us use names while computers still use addresses behind the scenes.",
    },
    {
        question: "What happens if DNS is down?",
        answer: "You may still have internet connectivity, but many services will feel broken because names cannot be translated into the correct IP addresses.",
    },
    {
        question: "What is DNS cache?",
        answer: "DNS cache is temporary memory where earlier lookup results are stored so repeated requests can be answered faster.",
    },
    {
        question: "Why does a new DNS change not appear immediately?",
        answer: "Because old answers may still be cached by browsers, operating systems, resolvers or other systems for a certain amount of time.",
    },
    {
        question: "Can one domain name have more than one IP address?",
        answer: "Yes. That can happen for load balancing, redundancy, content delivery networks and other infrastructure reasons.",
    },
    {
        question: "What is the easiest one line meaning of DNS?",
        answer: "DNS is the internet's phonebook style lookup system that turns names into IP addresses.",
    },
];

const DnsHowDomainNamesWork = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiGlobe />
                            Internet fundamentals
                        </span>
                    </div>

                    <h1>
                        DNS - The System That Turns Website Names into IP
                        Addresses
                    </h1>

                    <p className="lead">
                        Every time you type a website name into a browser, a
                        quiet background system helps your computer figure out
                        where that website actually lives. That system is DNS.
                        Without it, the web would be much harder for humans to
                        use because we would need to remember raw IP addresses
                        instead of friendly domain names.
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
                                <strong>Domain name</strong>
                                <p>
                                    A human friendly name like openai.com or
                                    github.com.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiServer />
                            </span>
                            <div>
                                <strong>IP address</strong>
                                <p>
                                    The machine friendly address a computer uses
                                    for network communication.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiSearch />
                            </span>
                            <div>
                                <strong>DNS</strong>
                                <p>
                                    The lookup system that translates names into
                                    addresses.
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
                    Imagine trying to call people only by memorizing their phone
                    numbers and never using names. It would work, but it would
                    be painful. The internet has a similar problem. Computers
                    use IP addresses, but humans prefer names.
                </p>

                <p>DNS exists to solve that gap.</p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            DNS is the system that translates domain names into
                            IP addresses so computers can find the correct
                            servers.
                        </p>
                    </div>
                </div>

                <div className="analogyGrid">
                    {whatDnsDoes.map((item) => (
                        <article key={item.title} className="analogyCard">
                            <span className="analogyIcon">{item.icon}</span>
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
                    <h2>What actually happens when you open a website</h2>
                </div>

                <p>
                    The DNS process feels invisible because it usually happens
                    very quickly, but several steps may be involved behind the
                    scenes.
                </p>

                <div className="flowGrid">
                    {dnsFlow.map((item, index) => (
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
                        <FiActivity />
                    </span>
                    <div>
                        <strong>Important takeaway</strong>
                        <p>
                            DNS usually happens before your browser can start
                            talking properly to the website server.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>Important DNS concepts you should know</h2>
                </div>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Concept</th>
                                <th>Meaning</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row) => (
                                <tr key={row.concept}>
                                    <td>{row.concept}</td>
                                    <td>{row.meaning}</td>
                                    <td>{row.example}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p>
                    Once these five ideas become clear, most beginner confusion
                    around DNS disappears.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiDatabase />
                    </span>
                    <h2>The main parts of the DNS system</h2>
                </div>

                <div className="partsGrid">
                    {dnsParts.map((item) => (
                        <article key={item.title} className="partCard">
                            <span className="partIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    You can think of the DNS hierarchy as a chain of asking the
                    right people in the right order until someone gives the
                    final official answer.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLink />
                    </span>
                    <h2>Common DNS record types</h2>
                </div>

                <p>
                    DNS does not only map a website name to one IP address. It
                    also stores different kinds of records for different
                    purposes.
                </p>

                <div className="recordsGrid">
                    {commonRecordTypes.map((item) => (
                        <article key={item.title} className="recordCard">
                            <span className="recordIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <div className="recordExample">{item.example}</div>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiMonitor />
                    </span>
                    <h2>Real examples that make DNS easy to understand</h2>
                </div>

                <div className="examplesGrid">
                    {everydayExamples.map((item) => (
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
                        <FiClock />
                    </span>
                    <h2>Why DNS caching matters</h2>
                </div>

                <p>
                    DNS lookups can be cached at many places including your
                    browser, operating system, router and resolver. Caching
                    means that if the answer was recently discovered, the system
                    may reuse it for a while instead of asking again from the
                    beginning.
                </p>

                <ul className="bulletList">
                    <li>It makes repeated lookups faster.</li>
                    <li>It reduces unnecessary network traffic.</li>
                    <li>
                        It is one reason DNS changes may take time to appear
                        everywhere.
                    </li>
                </ul>

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiAlertCircle />
                    </span>
                    <div>
                        <strong>Important note</strong>
                        <p>
                            When someone says "DNS propagation takes time", a
                            big part of that real world behavior is related to
                            caching and record lifetime settings.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiShield />
                    </span>
                    <h2>Why DNS matters so much</h2>
                </div>

                <div className="benefitsGrid">
                    {dnsBenefits.map((item) => (
                        <article key={item.title} className="benefitCard">
                            <span className="benefitIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    DNS is one of those invisible systems that people only
                    notice when something goes wrong, but the modern internet
                    depends on it constantly.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiAlertCircle />
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
                    DNS is the system that helps humans use names while
                    computers use addresses. You type a domain name like
                    example.com, DNS helps discover the corresponding IP
                    address, and your browser then knows where to connect.
                </p>

                <p>
                    Once you understand DNS, many other internet topics such as
                    hosting, domains, CDNs, website migrations, email setup and
                    DNS propagation start making a lot more sense.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default DnsHowDomainNamesWork;
