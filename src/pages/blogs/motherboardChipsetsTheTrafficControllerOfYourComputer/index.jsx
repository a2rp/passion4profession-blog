import React from "react";
import {
    FiCpu,
    FiHardDrive,
    FiGrid,
    FiActivity,
    FiZap,
    FiSettings,
    FiBox,
    FiCheckCircle,
    FiAlertCircle,
    FiLayers,
    FiMonitor,
    FiDatabase,
    FiShield,
    FiCommand,
    FiArrowRight,
    FiInfo,
    FiWifi,
    FiTool,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const analogyCards = [
    {
        icon: <FiGrid />,
        title: "Think of the chipset like a traffic controller",
        text: "Many parts inside a computer need to communicate - storage, USB ports, networking, audio, expansion devices and more. The chipset helps organize and manage how those lower level connections work.",
    },
    {
        icon: <FiCpu />,
        title: "The processor is still the main brain",
        text: "The chipset is important, but it is not the CPU. The processor does the main computing work. The chipset supports communication and platform features around it.",
    },
    {
        icon: <FiLayers />,
        title: "It is part of the motherboard platform",
        text: "The chipset works with the motherboard design, processor family, RAM support, storage options, ports and expansion features.",
    },
];

const whatItDoes = [
    {
        icon: <FiHardDrive />,
        title: "Helps manage storage connections",
        text: "Drives like SSDs and HDDs often connect through controller paths that depend on motherboard and chipset capabilities.",
    },
    {
        icon: <FiZap />,
        title: "Handles platform level input and output",
        text: "Many USB ports, SATA ports, networking features, audio functions and other motherboard level features are tied to the chipset design.",
    },
    {
        icon: <FiSettings />,
        title: "Defines motherboard features",
        text: "A chipset influences what the motherboard can offer - such as number of ports, connectivity options, RAID support, expansion flexibility and tuning features.",
    },
    {
        icon: <FiActivity />,
        title: "Supports device communication",
        text: "The chipset helps the processor communicate with many supporting components in a structured way.",
    },
];

const oldVsNewRows = [
    {
        topic: "Older motherboard design",
        older: "Northbridge and southbridge were often separate chips",
        modern: "Many functions moved into the CPU, while chipset handles remaining platform level features",
    },
    {
        topic: "Graphics and memory communication",
        older: "More of this work used to involve the northbridge",
        modern: "Much of it is now integrated directly into modern processors",
    },
    {
        topic: "Ports and storage support",
        older: "Handled by southbridge style controller logic",
        modern: "Handled through a modern chipset platform design",
    },
    {
        topic: "Overall trend",
        older: "More work was spread across multiple motherboard chips",
        modern: "More work moved closer to or inside the CPU, with chipset still remaining important",
    },
];

const examples = [
    {
        title: "Example 1 - Two motherboards with the same CPU support",
        text: "Two boards may support the same processor but offer different USB counts, storage options, expansion slots and tuning features because they use different chipsets.",
    },
    {
        title: "Example 2 - Budget board vs premium board",
        text: "A cheaper motherboard may support the CPU just fine, but a higher end chipset may offer more fast storage lanes, more ports, better connectivity or advanced tweaking options.",
    },
    {
        title: "Example 3 - A board with more PCIe flexibility",
        text: "If someone wants more expansion cards, extra storage devices or better I O options, chipset and motherboard design become very important.",
    },
    {
        title: "Example 4 - Feature limits are not always CPU limits",
        text: "Sometimes a missing feature is not because the processor is weak. It may simply be that the motherboard chipset platform does not provide that feature.",
    },
];

const keyTerms = [
    {
        icon: <FiCpu />,
        title: "CPU",
        text: "The processor is the main computation engine. The chipset is not a replacement for it.",
    },
    {
        icon: <FiGrid />,
        title: "Motherboard",
        text: "The motherboard is the physical board connecting major computer parts. The chipset is one important part of that board's logic and platform design.",
    },
    {
        icon: <FiDatabase />,
        title: "PCIe lanes",
        text: "These are data paths used by devices like graphics cards, SSDs and expansion hardware. Some lane behavior and options depend on the platform design.",
    },
    {
        icon: <FiCommand />,
        title: "I O",
        text: "I O means input and output. This includes things like USB, storage connections, audio, networking and other ways data enters or leaves the system.",
    },
    {
        icon: <FiHardDrive />,
        title: "SATA and NVMe support",
        text: "Storage options and counts often depend on motherboard and chipset capabilities.",
    },
    {
        icon: <FiWifi />,
        title: "Connectivity features",
        text: "Networking, wireless support and modern port options may vary depending on chipset class and board design.",
    },
];

const whyItMatters = [
    {
        icon: <FiTool />,
        title: "It affects upgrade options",
        text: "A better chipset platform may give more room for storage upgrades, expansion cards and future flexibility.",
    },
    {
        icon: <FiShield />,
        title: "It affects motherboard value",
        text: "A motherboard is not judged only by CPU socket. The chipset helps define what features you actually get.",
    },
    {
        icon: <FiMonitor />,
        title: "It affects real user experience",
        text: "Port count, storage flexibility, USB speed, connectivity and tuning options all shape daily usage.",
    },
];

const myths = [
    {
        title: "Myth - The chipset is the same thing as the CPU",
        text: "No. The CPU performs the main processing work. The chipset supports the motherboard platform and communication features.",
    },
    {
        title: "Myth - Any motherboard with the same socket is basically identical",
        text: "Not true. Two boards may fit the same CPU but differ a lot in features because of chipset and board design.",
    },
    {
        title: "Myth - The chipset controls every single thing in a modern PC",
        text: "Modern processors handle many things internally now. The chipset still matters, but it is part of a bigger platform design.",
    },
    {
        title: "Myth - Chipset only matters to gamers or experts",
        text: "Even normal users are affected by it because it changes storage options, USB ports, expansion support and overall motherboard capability.",
    },
];

const faqItems = [
    {
        question: "Is the chipset a physical chip on the motherboard?",
        answer: "Yes, in modern systems the chipset is a real controller component on the motherboard platform, although many functions that used to be spread across older designs have changed over time.",
    },
    {
        question: "Why do people compare motherboards by chipset name?",
        answer: "Because chipset class often tells you what level of features, expansion, connectivity and tuning the board may support.",
    },
    {
        question: "Does a better chipset make the CPU faster by itself?",
        answer: "Not directly in the simple sense. It usually affects platform features and flexibility more than raw processor power.",
    },
    {
        question:
            "If modern CPUs handle more internally now, does the chipset still matter?",
        answer: "Yes. It still matters because the motherboard platform around the CPU still needs structured support for ports, storage, expansion and many system features.",
    },
    {
        question: "Should beginners care about chipset when buying a PC?",
        answer: "Yes, especially when comparing motherboards. Socket compatibility alone is not enough. Feature set matters too.",
    },
    {
        question: "Can two boards with the same chipset still differ?",
        answer: "Yes. The board manufacturer also matters. Same chipset does not guarantee identical quality, VRM design, cooling, ports or layout.",
    },
];

const MotherboardChipsetsTheTrafficControllerOfYourComputer = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiGrid />
                            Motherboard and platform basics
                        </span>
                    </div>

                    <h1>
                        Motherboard Chipsets - The Traffic Controller of Your
                        Computer
                    </h1>

                    <p className="lead">
                        A motherboard chipset helps define how many important
                        parts of a computer platform connect and work together.
                        It is not the main brain like the CPU, but it plays a
                        major supporting role in storage, USB, expansion,
                        connectivity and overall motherboard features.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiCpu />
                            </span>
                            <div>
                                <strong>CPU</strong>
                                <p>
                                    The processor does the main computing work.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiGrid />
                            </span>
                            <div>
                                <strong>Chipset</strong>
                                <p>
                                    Helps manage platform level communication,
                                    connectivity and motherboard features.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiLayers />
                            </span>
                            <div>
                                <strong>Main idea</strong>
                                <p>
                                    Socket compatibility is not enough. The
                                    chipset affects what the motherboard can
                                    actually offer.
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
                    If the CPU is the main worker in a computer, the chipset is
                    part of the system that helps organize how the rest of the
                    motherboard platform behaves. It helps manage many of the
                    supporting roads that connect devices and features around
                    the processor.
                </p>

                <p>
                    That is why the title says traffic controller. It is not a
                    perfect one-to-one metaphor, but it helps beginners picture
                    the idea clearly.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            A motherboard chipset is a controller part of the
                            motherboard platform that helps manage many system
                            level connections, features and communication paths
                            around the CPU.
                        </p>
                    </div>
                </div>

                <div className="analogyGrid">
                    {analogyCards.map((item) => (
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
                        <FiActivity />
                    </span>
                    <h2>What the chipset actually helps with</h2>
                </div>

                <p>
                    Beginners often hear that the chipset is important, but not
                    why. The reason is simple - it affects how rich or limited
                    the motherboard platform is.
                </p>

                <div className="featureGrid">
                    {whatItDoes.map((item) => (
                        <article key={item.title} className="featureCard">
                            <span className="featureIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    In daily life, this can affect how many drives you can use,
                    which ports you get, what expansion options exist and how
                    flexible the whole system feels.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>Older vs modern motherboard design</h2>
                </div>

                <p>
                    Years ago, motherboard architecture often talked about
                    northbridge and southbridge. Modern platforms changed a lot.
                    Many tasks that used to belong to older supporting chips are
                    now integrated directly into the CPU, while the chipset
                    still remains important for the wider motherboard platform.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Topic</th>
                                <th>Older design</th>
                                <th>Modern design</th>
                            </tr>
                        </thead>
                        <tbody>
                            {oldVsNewRows.map((row) => (
                                <tr key={row.topic}>
                                    <td>{row.topic}</td>
                                    <td>{row.older}</td>
                                    <td>{row.modern}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="callout soft">
                    <span className="calloutIcon">
                        <FiArrowRight />
                    </span>
                    <div>
                        <strong>Key idea</strong>
                        <p>
                            Modern processors do more than older ones used to,
                            but the chipset still matters because the whole
                            motherboard platform still needs organized support.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiMonitor />
                    </span>
                    <h2>Real examples that make the topic clear</h2>
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
                        <FiBox />
                    </span>
                    <h2>Important terms you should know</h2>
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
                        <FiTool />
                    </span>
                    <h2>
                        Why chipset matters when buying or building a computer
                    </h2>
                </div>

                <p>
                    People often focus only on the CPU model, but the
                    motherboard chipset matters too because it can change the
                    practical feature set of the entire build.
                </p>

                <div className="whyGrid">
                    {whyItMatters.map((item) => (
                        <article key={item.title} className="whyCard">
                            <span className="whyIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <ul className="bulletList">
                    <li>It affects storage flexibility.</li>
                    <li>It affects number and type of ports.</li>
                    <li>It affects connectivity options.</li>
                    <li>It affects expansion possibilities.</li>
                    <li>It can affect tuning and platform level features.</li>
                </ul>

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiAlertCircle />
                    </span>
                    <div>
                        <strong>Important caution</strong>
                        <p>
                            Same CPU socket does not automatically mean same
                            motherboard experience. Feature set can differ a lot
                            depending on chipset and board design.
                        </p>
                    </div>
                </div>
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
                        <FiCommand />
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
                    A motherboard chipset is one of the key pieces that helps
                    define what your motherboard platform can do. It is not the
                    processor, and it does not replace the CPU. Instead, it
                    helps organize many surrounding system features such as
                    storage support, ports, connectivity, expansion options and
                    motherboard level capability.
                </p>

                <p>
                    Once you understand this, motherboard comparisons become
                    much easier. You stop asking only "Will this CPU fit?" and
                    start asking the smarter question - "What can this platform
                    actually do?"
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default MotherboardChipsetsTheTrafficControllerOfYourComputer;
