import React from "react";
import {
    FiShield,
    FiServer,
    FiWifi,
    FiArrowRight,
    FiCheckCircle,
    FiAlertCircle,
    FiLock,
    FiGlobe,
    FiHome,
    FiDatabase,
    FiSettings,
    FiMonitor,
    FiCpu,
    FiLayers,
    FiEye,
    FiXCircle,
    FiZap,
    FiLink,
    FiBox,
    FiInfo,
    FiActivity,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const firewallBasics = [
    {
        icon: <FiShield />,
        title: "A firewall is a traffic filter",
        text: "A firewall watches network traffic and applies rules to decide what should be allowed and what should be blocked.",
    },
    {
        icon: <FiArrowRight />,
        title: "It sits between trust and risk",
        text: "A firewall stands between your device or network and incoming or outgoing traffic. It does not make the internet disappear. It acts like a checkpoint.",
    },
    {
        icon: <FiSettings />,
        title: "It works using rules",
        text: "Those rules can say things like allow web traffic, block unknown ports, allow this app, deny that IP, or stop unsolicited incoming connections.",
    },
];

const packetJourney = [
    {
        icon: <FiGlobe />,
        title: "Traffic appears",
        text: "Some network traffic tries to reach your computer or leave your computer. This might be a website request, game connection, file transfer, malicious scan, or background app activity.",
    },
    {
        icon: <FiShield />,
        title: "Firewall checks the rule set",
        text: "The firewall looks at what kind of traffic this is. It may inspect the source, destination, port number, protocol, direction, or the application involved.",
    },
    {
        icon: <FiCheckCircle />,
        title: "Traffic is allowed or blocked",
        text: "If the traffic matches an allowed rule, it passes through. If it matches a deny rule or violates policy, it gets blocked.",
    },
    {
        icon: <FiActivity />,
        title: "Logs may be created",
        text: "Many firewalls record what happened. Logs help administrators understand blocked attempts, suspicious patterns and configuration mistakes.",
    },
];

const whyFirewallsMatter = [
    {
        icon: <FiHome />,
        title: "Home users need protection",
        text: "A firewall helps stop unwanted inbound access from random devices or malicious scans coming from the internet.",
    },
    {
        icon: <FiServer />,
        title: "Servers need controlled exposure",
        text: "A public server may need web traffic on one port but should block many other unnecessary services.",
    },
    {
        icon: <FiMonitor />,
        title: "Apps should not get unlimited freedom",
        text: "Some firewalls can stop unknown or unwanted programs from making network connections.",
    },
    {
        icon: <FiLock />,
        title: "Layered security matters",
        text: "A firewall is one defensive layer. It is not magic, but it reduces exposure and narrows attack paths.",
    },
];

const firewallTypes = [
    {
        title: "Network firewall",
        icon: <FiWifi />,
        text: "This protects an entire network or a group of devices. It may exist inside a router, a dedicated firewall appliance, or a cloud network setup.",
        examples: [
            "Your home router blocking unsolicited inbound connections",
            "An office firewall protecting all computers inside the company network",
            "A cloud firewall in front of web servers",
        ],
    },
    {
        title: "Host based firewall",
        icon: <FiMonitor />,
        text: "This runs directly on a computer or server. It protects that specific machine by applying rules to its own incoming and outgoing traffic.",
        examples: [
            "Windows Defender Firewall on a laptop",
            "Linux firewall rules on a server",
            "A firewall feature inside endpoint security software",
        ],
    },
    {
        title: "Hardware firewall",
        icon: <FiBox />,
        text: "This is usually a physical device placed between networks, often used in homes, offices and data centers.",
        examples: [
            "A dedicated firewall box in an office rack",
            "A router with firewall features",
            "An enterprise security appliance",
        ],
    },
    {
        title: "Software firewall",
        icon: <FiCpu />,
        text: "This is software running on an operating system that manages and filters network traffic on that machine.",
        examples: [
            "Firewall settings inside Windows",
            "Firewall tools in Linux distributions",
            "Third party firewall applications",
        ],
    },
];

const firewallRuleExamples = [
    {
        title: "Allow web browsing",
        text: "A firewall may allow outbound traffic on ports typically used for web browsing so your browser can open websites.",
    },
    {
        title: "Block an unused service",
        text: "If your machine does not need remote desktop or a file sharing service, a firewall can block those ports from outside traffic.",
    },
    {
        title: "Allow a game but block another app",
        text: "Some host based firewalls can allow one application to connect online while blocking another unknown app.",
    },
    {
        title: "Restrict admin access by IP",
        text: "A server firewall can allow SSH or admin traffic only from trusted office IP addresses and block everyone else.",
    },
];

const keyConcepts = [
    {
        icon: <FiLink />,
        title: "Port",
        text: "A port is like a numbered door used by network services. Firewalls often allow or block traffic based on port numbers.",
    },
    {
        icon: <FiLayers />,
        title: "Protocol",
        text: "A protocol is a communication rule set such as TCP or UDP. Firewalls may treat them differently.",
    },
    {
        icon: <FiArrowRight />,
        title: "Inbound traffic",
        text: "Inbound traffic is data coming toward your device or network from elsewhere.",
    },
    {
        icon: <FiArrowRight />,
        title: "Outbound traffic",
        text: "Outbound traffic is data leaving your device or network to the outside world.",
    },
    {
        icon: <FiDatabase />,
        title: "Rule set",
        text: "A rule set is the collection of allow and deny instructions used by the firewall.",
    },
    {
        icon: <FiEye />,
        title: "Log",
        text: "A log records what the firewall saw and what decision it made. Logs help with troubleshooting and security analysis.",
    },
];

const commonUseCases = [
    {
        title: "At home",
        text: "Your router firewall helps protect devices in your house from direct unsolicited access from the public internet.",
    },
    {
        title: "At work",
        text: "An office firewall can separate departments, restrict risky traffic, block unknown regions, and expose only approved services.",
    },
    {
        title: "On servers",
        text: "A server firewall allows only the services that should be public. Everything else should usually stay closed.",
    },
    {
        title: "On laptops",
        text: "A host based firewall protects the machine when it moves across home, office, hotel or public WiFi environments.",
    },
];

const myths = [
    {
        title: "Myth - A firewall blocks all hacking by itself",
        text: "No. A firewall is important, but it is only one security layer. Weak passwords, vulnerable apps, phishing and bad configuration can still cause serious trouble.",
    },
    {
        title: "Myth - If I have antivirus, I do not need a firewall",
        text: "Antivirus and firewalls do different jobs. Antivirus focuses on malicious software. A firewall focuses on traffic control.",
    },
    {
        title: "Myth - A firewall only matters for big companies",
        text: "Even home devices benefit from controlled network exposure. The internet is full of automated scans and random probing.",
    },
    {
        title: "Myth - More open ports means faster internet",
        text: "That is nonsense in most normal situations. Open ports increase exposure. They do not magically make your connection faster.",
    },
];

const limitations = [
    {
        icon: <FiAlertCircle />,
        title: "A firewall cannot fix every problem",
        text: "If you willingly download malware, enter your password into a phishing page, or run a vulnerable application, the firewall alone may not save you.",
    },
    {
        icon: <FiXCircle />,
        title: "Bad rules create bad security",
        text: "A poorly configured firewall can block useful traffic or accidentally expose sensitive services.",
    },
    {
        icon: <FiInfo />,
        title: "It does not replace updates",
        text: "Even with a firewall, systems and apps must still be patched and maintained.",
    },
];

const examples = [
    {
        title: "Example 1 - Visiting a website",
        text: "Your browser sends outbound traffic to the internet. The firewall usually allows this because web browsing is normal expected traffic. The website response comes back and is treated as part of that allowed connection.",
    },
    {
        title: "Example 2 - Random internet scan hits your home IP",
        text: "An automated bot scans the public internet looking for open services. Your router firewall drops unsolicited inbound traffic because no allowed rule exists for that scan to reach your internal laptop.",
    },
    {
        title: "Example 3 - A game asks for network permission",
        text: "A host based firewall may ask whether a new game is allowed to communicate on private or public networks. Your answer creates or changes a rule.",
    },
    {
        title: "Example 4 - Server only needs a website port",
        text: "A web server may need public access on the web port, but not on dozens of other ports. A firewall can allow the required port and deny the rest.",
    },
    {
        title: "Example 5 - Unknown app tries to connect out",
        text: "A stricter outbound firewall policy can alert you that some new application is trying to contact a remote server. That may be normal, or it may be suspicious.",
    },
];

const faqItems = [
    {
        question: "Is a firewall hardware or software?",
        answer: "It can be either. Some firewalls are built into routers or dedicated devices. Others run as software directly on a machine.",
    },
    {
        question: "Do I already have a firewall at home?",
        answer: "Very often yes. Most home routers perform basic firewall functions, and your operating system may also have its own host based firewall.",
    },
    {
        question: "Should all inbound traffic be blocked?",
        answer: "Usually most unsolicited inbound traffic should be blocked unless you intentionally run a service that needs outside access.",
    },
    {
        question: "What about outbound traffic?",
        answer: "Many systems allow most outbound traffic by default, but stricter environments may control outbound traffic too.",
    },
    {
        question: "Can a firewall see everything inside encrypted traffic?",
        answer: "Not always. Basic firewalls may mainly use metadata like ports, IP addresses and protocols. Some advanced security systems can inspect deeper, depending on architecture and policy.",
    },
    {
        question: "Why do apps sometimes stop working after a firewall change?",
        answer: "Because the firewall may be blocking traffic the app actually needs. That is why correct rule design matters.",
    },
];

const FirewallsTheSecurityGateOfANetwork = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiShield />
                            Network security fundamentals
                        </span>
                    </div>

                    <h1>Firewalls - The Security Gate of a Network</h1>

                    <p className="lead">
                        A firewall is one of the most important security
                        concepts in networking. It acts like a checkpoint that
                        examines network traffic and applies rules to decide
                        what should pass and what should be blocked. If you
                        understand firewalls clearly, a huge part of network
                        security suddenly starts making sense.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiShield />
                            </span>
                            <div>
                                <strong>Main job</strong>
                                <p>
                                    Allow wanted traffic and block unwanted or
                                    risky traffic.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiWifi />
                            </span>
                            <div>
                                <strong>Where it works</strong>
                                <p>
                                    On routers, servers, laptops, office
                                    networks, cloud systems and more.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiLock />
                            </span>
                            <div>
                                <strong>What it is not</strong>
                                <p>
                                    It is not magic. It helps reduce exposure,
                                    but it does not replace all other security.
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
                    <h2>Start with the simplest possible idea</h2>
                </div>

                <p>
                    Imagine a building with a security gate. Not every person,
                    vehicle or package is allowed to enter freely. The gate
                    checks who is coming, what they want, whether they match the
                    rules, and whether they should be allowed through.
                </p>

                <p>
                    A firewall works in a similar way for network traffic.
                    Instead of people and vehicles, it deals with data packets,
                    applications, ports, IP addresses and connection requests.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            A firewall is a security system that monitors and
                            filters network traffic using rules.
                        </p>
                    </div>
                </div>

                <div className="basicsGrid">
                    {firewallBasics.map((item) => (
                        <article key={item.title} className="basicCard">
                            <span className="basicIcon">{item.icon}</span>
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
                    <h2>What a firewall actually does step by step</h2>
                </div>

                <p>
                    Beginners often hear "firewall blocks bad traffic" and stop
                    there. That is too fuzzy. The real idea becomes clearer if
                    you imagine the actual flow.
                </p>

                <div className="flowGrid">
                    {packetJourney.map((item, index) => (
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
                        <strong>Key mental model</strong>
                        <p>
                            A firewall is not the internet itself. It is a
                            controlled filter sitting in the path of traffic.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLock />
                    </span>
                    <h2>Why firewalls matter in the real world</h2>
                </div>

                <div className="importanceGrid">
                    {whyFirewallsMatter.map((item) => (
                        <article key={item.title} className="importanceCard">
                            <span className="importanceIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    The internet is full of automated scanning, noisy traffic,
                    mistakes, opportunistic attacks and unnecessary exposure. A
                    firewall reduces how much of that reaches systems that never
                    needed to be open in the first place.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>Different types of firewalls</h2>
                </div>

                <div className="typesGrid">
                    {firewallTypes.map((item) => (
                        <article key={item.title} className="typeCard">
                            <div className="typeTop">
                                <span className="typeIcon">{item.icon}</span>
                                <h3>{item.title}</h3>
                            </div>

                            <p>{item.text}</p>

                            <div className="exampleList">
                                <strong>Examples</strong>
                                <ul>
                                    {item.examples.map((example) => (
                                        <li key={example}>{example}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiSettings />
                    </span>
                    <h2>How firewall rules work</h2>
                </div>

                <p>
                    A firewall follows rules. Those rules may be simple or very
                    detailed. The exact design depends on the product and the
                    environment, but the logic is always about traffic control.
                </p>

                <div className="rulesGrid">
                    {firewallRuleExamples.map((item) => (
                        <article key={item.title} className="ruleCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <ul className="bulletList">
                    <li>Allow this port</li>
                    <li>Block that protocol</li>
                    <li>Allow only from this IP range</li>
                    <li>Block inbound traffic by default</li>
                    <li>Allow this application but not that one</li>
                    <li>Log denied attempts</li>
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLink />
                    </span>
                    <h2>Important concepts you must understand</h2>
                </div>

                <div className="conceptGrid">
                    {keyConcepts.map((item) => (
                        <article key={item.title} className="conceptCard">
                            <span className="conceptIcon">{item.icon}</span>
                            <div className="conceptBody">
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
                        <FiHome />
                    </span>
                    <h2>Where firewalls appear in daily life</h2>
                </div>

                <div className="useCaseGrid">
                    {commonUseCases.map((item) => (
                        <article key={item.title} className="useCaseCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    Many people use firewalls every day without noticing. Your
                    home router may already be doing important firewall work.
                    Your laptop operating system may also be running its own
                    host based firewall at the same time.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiMonitor />
                    </span>
                    <h2>Real examples that make the idea click</h2>
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
                        <FiAlertCircle />
                    </span>
                    <h2>What a firewall cannot do by itself</h2>
                </div>

                <div className="limitGrid">
                    {limitations.map((item) => (
                        <article key={item.title} className="limitCard">
                            <span className="limitIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiXCircle />
                    </span>
                    <div>
                        <strong>Important reality check</strong>
                        <p>
                            A firewall is powerful, but it is only one part of
                            security. Safe behavior, updates, strong passwords,
                            patched software and monitoring still matter.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiEye />
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
                    A firewall is the security gate of a network because it
                    helps decide what traffic should pass and what should be
                    stopped. It can live in a router, a dedicated hardware box,
                    a server, a laptop or a cloud environment. Its power comes
                    from rules.
                </p>

                <p>
                    Once you stop thinking of a firewall as a mysterious black
                    box and start thinking of it as a traffic control system,
                    the concept becomes much easier. It is not magic. It is
                    disciplined filtering.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default FirewallsTheSecurityGateOfANetwork;
