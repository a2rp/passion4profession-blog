import React from "react";
import {
    FiCpu,
    FiHardDrive,
    FiZap,
    FiDatabase,
    FiClock,
    FiLayers,
    FiCheckCircle,
    FiAlertCircle,
    FiMonitor,
    FiBox,
    FiRefreshCw,
    FiPlayCircle,
    FiTool,
    FiInfo,
    FiTrendingUp,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const comparisonRows = [
    {
        feature: "Main purpose",
        ram: "Temporary working memory for active tasks",
        storage: "Long-term place to keep files and software",
    },
    {
        feature: "Keeps data after shutdown",
        ram: "No",
        storage: "Yes",
    },
    {
        feature: "Speed",
        ram: "Very fast",
        storage: "Slower than RAM",
    },
    {
        feature: "Used for",
        ram: "Running apps, tabs, current work",
        storage: "Saving Windows, apps, photos, videos, documents",
    },
    {
        feature: "Example parts",
        ram: "Memory sticks in motherboard slots",
        storage: "SSD, HDD, NVMe drive, USB drive",
    },
    {
        feature: "What happens when full",
        ram: "System slows down and starts swapping",
        storage: "You cannot save more files or install more software",
    },
];

const everydayExamples = [
    {
        icon: <FiMonitor />,
        title: "Opening browser tabs",
        text: "Each open browser tab uses RAM while it is active. The browser itself is stored on SSD or HDD, but when you run it, part of it gets loaded into RAM.",
    },
    {
        icon: <FiPlayCircle />,
        title: "Starting a game",
        text: "The game files live in storage. When you launch the game, important data is loaded into RAM so the CPU and GPU can use it quickly.",
    },
    {
        icon: <FiBox />,
        title: "Editing a photo or video",
        text: "The photo or video is saved in storage, but the active editing work uses RAM while the software is running.",
    },
    {
        icon: <FiRefreshCw />,
        title: "Restarting the computer",
        text: "After shutdown or restart, RAM is cleared. Your files are still safe because they were stored in SSD or HDD, not in RAM.",
    },
];

const simpleAnalogies = [
    {
        title: "Desk vs cupboard",
        text: "RAM is like the desk where you keep the things you are currently working on. Storage is like the cupboard where you keep everything when you are not using it.",
    },
    {
        title: "Kitchen counter vs refrigerator",
        text: "RAM is the counter space for the ingredients you are actively using right now. Storage is the refrigerator where things stay saved for later.",
    },
    {
        title: "Working table vs warehouse",
        text: "RAM is small but fast working space. Storage is bigger but not meant to be the main working surface.",
    },
];

const signsList = [
    {
        icon: <FiClock />,
        title: "Signs that RAM may be too low",
        points: [
            "Too many tabs make the browser slow",
            "Apps take a long time to switch",
            "Games stutter while multitasking",
            "System feels laggy even when storage has space left",
        ],
    },
    {
        icon: <FiHardDrive />,
        title: "Signs that storage may be too low",
        points: [
            "You cannot install updates or apps",
            "Downloads fail because disk space is low",
            "You keep deleting files to make room",
            "Your drive usage stays almost full all the time",
        ],
    },
];

const commonTerms = [
    {
        icon: <FiZap />,
        title: "RAM",
        text: "Random Access Memory. Fast temporary memory used while the computer is actively running tasks.",
    },
    {
        icon: <FiHardDrive />,
        title: "Storage",
        text: "The place where your operating system, files, games, apps and downloads are saved.",
    },
    {
        icon: <FiTrendingUp />,
        title: "SSD",
        text: "Solid State Drive. A modern storage device that is much faster than an old hard disk drive.",
    },
    {
        icon: <FiDatabase />,
        title: "HDD",
        text: "Hard Disk Drive. Older mechanical storage that is usually slower than SSD.",
    },
    {
        icon: <FiLayers />,
        title: "Swap or page file",
        text: "When RAM gets too full, the system may temporarily use storage as extra working space. This is much slower than real RAM.",
    },
    {
        icon: <FiCpu />,
        title: "Active memory usage",
        text: "The amount of RAM currently being used by the operating system and running apps.",
    },
];

const mythCards = [
    {
        title: "Myth - More storage makes a slow computer fast",
        text: "Not always. If the real problem is low RAM, adding storage space alone will not solve it.",
    },
    {
        title: "Myth - RAM stores your files forever",
        text: "It does not. RAM is temporary. When power is removed, RAM contents are cleared.",
    },
    {
        title: "Myth - SSD is the same thing as RAM",
        text: "An SSD is much faster than an HDD, but it is still storage. It is not a replacement for RAM.",
    },
    {
        title: "Myth - If a PC has 1 TB, it must be powerful",
        text: "That only tells you the storage size. A computer can have a lot of storage but still have weak performance because of low RAM or other limits.",
    },
];

const faqItems = [
    {
        question: "Why does my computer have both RAM and storage?",
        answer: "Because they do different jobs. Storage keeps everything saved long term. RAM gives the system a fast workspace for what is being used right now.",
    },
    {
        question: "Can a computer run without storage?",
        answer: "A normal personal computer needs storage to keep the operating system and files. Without storage, there is nothing permanent to boot from in everyday use.",
    },
    {
        question: "Can a computer run without RAM?",
        answer: "Not in a practical normal way. RAM is essential because the processor needs fast working memory to run the operating system and programs.",
    },
    {
        question: "If I add more RAM, will I get more space for files?",
        answer: "No. More RAM helps active performance and multitasking. It does not increase file saving capacity.",
    },
    {
        question: "If I upgrade from HDD to SSD, does that help?",
        answer: "Yes, often a lot. Boot time and app loading usually improve. But SSD is still storage, not RAM, so some performance problems may still remain if RAM is too low.",
    },
    {
        question: "Which is better to upgrade first - RAM or storage?",
        answer: "It depends on the bottleneck. If the system is slow with many apps open, RAM may help. If the machine boots slowly and app loading is painfully slow, switching from HDD to SSD may help more.",
    },
];

const performanceExamples = [
    {
        title: "Example 1 - 8 GB RAM with many Chrome tabs",
        text: "If you open many browser tabs, music, chat apps and design tools together, the system may feel heavy because RAM is filling up quickly.",
    },
    {
        title: "Example 2 - 128 GB SSD almost full",
        text: "Even if the computer has enough RAM, you may struggle to install apps, save files or update the operating system because storage space is too low.",
    },
    {
        title: "Example 3 - 16 GB RAM but old HDD",
        text: "The computer may still feel slow during startup and file opening because the storage device itself is slow even though RAM is decent.",
    },
    {
        title: "Example 4 - 4 GB RAM with SSD",
        text: "The system may boot quickly because the SSD helps startup, but multitasking can still feel weak because 4 GB RAM is very limited for modern use.",
    },
];

const RamVsStorageWhyYourComputerNeedsBoth = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiCpu />
                            Core computer fundamentals
                        </span>
                    </div>

                    <h1>RAM vs Storage - Why Your Computer Needs Both</h1>

                    <p className="lead">
                        One of the most common beginner confusions in computing
                        is this - if a laptop says 8 GB RAM and 512 GB SSD, what
                        do those numbers actually mean? RAM and storage are both
                        important, but they do completely different jobs. Once
                        you understand that difference clearly, computer
                        performance starts making much more sense.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiZap />
                            </span>
                            <div>
                                <strong>RAM</strong>
                                <p>
                                    Fast temporary workspace used while apps are
                                    running right now.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiHardDrive />
                            </span>
                            <div>
                                <strong>Storage</strong>
                                <p>
                                    Long term place where your system, apps and
                                    files stay saved.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiCheckCircle />
                            </span>
                            <div>
                                <strong>Main idea</strong>
                                <p>
                                    Storage keeps things. RAM helps use them
                                    quickly while you work.
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
                    <h2>Start with the simplest possible explanation</h2>
                </div>

                <p>
                    Storage is where your computer keeps things saved for later.
                    RAM is where your computer keeps things it is actively
                    working on right now.
                </p>

                <p>
                    Your operating system, games, software, photos and videos
                    live in storage. But when you open an app or play a game,
                    part of that data moves into RAM so the processor can access
                    it much more quickly.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            RAM is temporary working memory. Storage is
                            permanent saving space.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>RAM vs storage - side by side</h2>
                </div>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>RAM</th>
                                <th>Storage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row) => (
                                <tr key={row.feature}>
                                    <td>{row.feature}</td>
                                    <td>{row.ram}</td>
                                    <td>{row.storage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p>
                    This is the most important difference - RAM helps the
                    computer work right now, while storage helps the computer
                    remember things long term.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiBox />
                    </span>
                    <h2>Easy analogies that make the topic obvious</h2>
                </div>

                <div className="analogyGrid">
                    {simpleAnalogies.map((item) => (
                        <article key={item.title} className="analogyCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="callout soft">
                    <span className="calloutIcon">
                        <FiDatabase />
                    </span>
                    <div>
                        <strong>Remember this one line</strong>
                        <p>
                            Storage is where things live. RAM is where things
                            work.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiMonitor />
                    </span>
                    <h2>Everyday examples from normal computer use</h2>
                </div>

                <div className="exampleGrid">
                    {everydayExamples.map((item) => (
                        <article key={item.title} className="exampleCard">
                            <span className="exampleIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiTrendingUp />
                    </span>
                    <h2>How RAM affects performance</h2>
                </div>

                <p>
                    RAM is directly related to active multitasking and
                    smoothness. If you open too many things at once and RAM gets
                    full, the system becomes less comfortable to use.
                </p>

                <ul className="bulletList">
                    <li>More RAM usually helps with multitasking.</li>
                    <li>More RAM can help when using many browser tabs.</li>
                    <li>
                        More RAM is useful for editing, design and development
                        tools.
                    </li>
                    <li>
                        Games and heavy apps often need enough RAM to run
                        smoothly.
                    </li>
                </ul>

                <p>
                    If RAM is too low, the computer may start using storage as
                    backup working space through a page file or swap mechanism.
                    That works, but it is much slower than real RAM.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiHardDrive />
                    </span>
                    <h2>How storage affects performance</h2>
                </div>

                <p>
                    Storage affects how quickly the computer can load the
                    operating system, apps, files and games. It also determines
                    how much long term space you have.
                </p>

                <ul className="bulletList">
                    <li>
                        An SSD usually makes booting much faster than an HDD.
                    </li>
                    <li>Apps and files load faster from SSDs.</li>
                    <li>
                        Low storage space can cause update and installation
                        problems.
                    </li>
                    <li>
                        Storage size determines how many files and programs you
                        can keep.
                    </li>
                </ul>

                <p>
                    A system with a fast SSD can feel much snappier than one
                    with an old HDD, even if both have the same RAM amount.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiClock />
                    </span>
                    <h2>How to tell which one is causing your problem</h2>
                </div>

                <div className="signsGrid">
                    {signsList.map((item) => (
                        <article key={item.title} className="signCard">
                            <span className="signIcon">{item.icon}</span>
                            <h3>{item.title}</h3>

                            <ul className="bulletList innerList">
                                {item.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiCpu />
                    </span>
                    <h2>Important terms related to RAM and storage</h2>
                </div>

                <div className="termsGrid">
                    {commonTerms.map((item) => (
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
                        <FiPlayCircle />
                    </span>
                    <h2>Real world performance situations</h2>
                </div>

                <div className="performanceGrid">
                    {performanceExamples.map((item) => (
                        <article key={item.title} className="performanceCard">
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
                    <h2>Common myths and wrong assumptions</h2>
                </div>

                <div className="mythGrid">
                    {mythCards.map((item) => (
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
                    <h2>Upgrade advice in simple words</h2>
                </div>

                <p>
                    There is no single answer for everyone. The better upgrade
                    depends on what is actually slowing the computer down.
                </p>

                <div className="miniGrid">
                    <article className="miniCard">
                        <h3>If your laptop still uses an HDD</h3>
                        <p>
                            Upgrading to an SSD often gives one of the biggest
                            visible improvements in everyday speed.
                        </p>
                    </article>

                    <article className="miniCard">
                        <h3>If many apps and tabs make the system lag</h3>
                        <p>
                            Upgrading RAM may help more, especially for
                            multitasking and heavier work.
                        </p>
                    </article>

                    <article className="miniCard">
                        <h3>If the drive is nearly full</h3>
                        <p>
                            More storage capacity may be necessary so the system
                            can breathe and save files normally.
                        </p>
                    </article>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiInfo />
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
                    RAM and storage are both essential, but they are not the
                    same thing. Storage keeps your files, apps and operating
                    system saved for the long term. RAM is the fast temporary
                    workspace used while the computer is actively doing
                    something.
                </p>

                <p>
                    Once you understand this difference, many common questions
                    become easy - why some computers boot slowly, why too many
                    tabs make a system lag, why an SSD feels faster than an HDD,
                    and why having a lot of storage does not automatically mean
                    strong performance.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default RamVsStorageWhyYourComputerNeedsBoth;
