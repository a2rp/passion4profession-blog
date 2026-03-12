import React from "react";
import {
    FiCode,
    FiUsers,
    FiGlobe,
    FiGitBranch,
    FiCheckCircle,
    FiAlertCircle,
    FiShield,
    FiBox,
    FiCpu,
    FiLayers,
    FiFileText,
    FiTool,
    FiTerminal,
    FiBookOpen,
    FiLock,
    FiUpload,
    FiArrowRight,
    FiMessageSquare,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const foundationCards = [
    {
        icon: <FiCode />,
        title: "Source code is visible",
        text: "In open source software, the human readable code is available for people to inspect, study and improve.",
    },
    {
        icon: <FiUsers />,
        title: "Others can contribute",
        text: "Developers from anywhere can report bugs, suggest changes, improve documentation or add features depending on the license and project rules.",
    },
    {
        icon: <FiGlobe />,
        title: "Knowledge spreads faster",
        text: "Because the code is open, people can learn from it, reuse ideas and build better software on top of shared work.",
    },
];

const misconceptionCards = [
    {
        title: "Open source does not always mean free of cost",
        text: "Many open source tools are free to use, but the phrase open source mainly refers to access to source code and permission rules in the license.",
    },
    {
        title: "Open source does not mean no rules",
        text: "Projects still have licenses, maintainers, contribution rules, coding standards and release processes.",
    },
    {
        title: "Open source is not just for hobby projects",
        text: "Many of the most important tools in the world are open source and are used by companies, governments, schools and developers everywhere.",
    },
];

const whyItMattersCards = [
    {
        icon: <FiBookOpen />,
        title: "You can learn from real code",
        text: "Instead of only reading theory, you can inspect how real world software is structured, written and improved.",
    },
    {
        icon: <FiShield />,
        title: "Transparency builds trust",
        text: "People can inspect what the software does instead of blindly depending on a black box.",
    },
    {
        icon: <FiTool />,
        title: "Faster improvement",
        text: "When many people find bugs and improve features, software can evolve quickly.",
    },
    {
        icon: <FiLayers />,
        title: "Software builds on software",
        text: "Open source projects often become the foundation for many other tools, apps, libraries and platforms.",
    },
];

const examples = [
    {
        title: "Linux",
        text: "Linux is one of the most famous open source projects. It powers servers, cloud systems, embedded devices, Android and much more.",
        icon: <FiTerminal />,
    },
    {
        title: "Git",
        text: "Git is the version control system used by millions of developers. It is open source and forms the backbone of modern software collaboration.",
        icon: <FiGitBranch />,
    },
    {
        title: "VS Code",
        text: "Visual Studio Code is based on open source code and shows how modern developer tools can grow quickly with community ecosystems.",
        icon: <FiCode />,
    },
    {
        title: "React",
        text: "React is open source and widely used for building user interfaces. Developers can inspect how it works and build huge ecosystems around it.",
        icon: <FiCpu />,
    },
];

const lifecycleSteps = [
    {
        icon: <FiCode />,
        title: "A project is created",
        text: "Someone or a team writes software and decides to publish its source code.",
    },
    {
        icon: <FiFileText />,
        title: "A license is added",
        text: "The license explains what others are allowed to do with the code.",
    },
    {
        icon: <FiUpload />,
        title: "The code is published",
        text: "The project is shared on a platform such as GitHub or another code hosting service.",
    },
    {
        icon: <FiMessageSquare />,
        title: "People discuss and report issues",
        text: "Users and contributors suggest improvements, report bugs and ask questions.",
    },
    {
        icon: <FiGitBranch />,
        title: "Contributions are reviewed",
        text: "Maintainers check proposed changes before accepting them into the project.",
    },
    {
        icon: <FiCheckCircle />,
        title: "The project improves over time",
        text: "Updates, fixes, features and documentation slowly make the software stronger.",
    },
];

const commonTerms = [
    {
        icon: <FiFileText />,
        title: "Source code",
        text: "The human readable instructions written by developers in programming languages like JavaScript, Python, C or Java.",
    },
    {
        icon: <FiBox />,
        title: "License",
        text: "A legal document that explains how software can be used, modified and distributed.",
    },
    {
        icon: <FiGitBranch />,
        title: "Fork",
        text: "A fork is a copy of a project that someone creates to experiment, modify or continue in a different direction.",
    },
    {
        icon: <FiUsers />,
        title: "Maintainer",
        text: "A maintainer is a person or team responsible for reviewing changes, guiding the project and deciding what gets merged.",
    },
    {
        icon: <FiUpload />,
        title: "Pull request",
        text: "A pull request is a proposal to add changes from one branch or fork into the main project.",
    },
    {
        icon: <FiLock />,
        title: "Proprietary software",
        text: "This is the opposite style where the source code is usually closed and controlled by the owner.",
    },
];

const beginnerExamples = [
    {
        title: "Example 1 - Learning by reading code",
        text: "A beginner wants to understand how a real React project is structured. They open an open source repo and see components, routing, state and styles in a practical form.",
    },
    {
        title: "Example 2 - Fixing a typo in docs",
        text: "A person notices a spelling mistake in a project's documentation. They submit a tiny change through a pull request. That is still a valid open source contribution.",
    },
    {
        title: "Example 3 - Reusing a library",
        text: "A developer uses an open source chart library instead of building every chart from zero. That saves time and lets them focus on solving the real business problem.",
    },
    {
        title: "Example 4 - Reporting a bug",
        text: "A user finds a bug, creates an issue and explains how to reproduce it. Even without writing code, they still help improve the project.",
    },
];

const advantages = [
    "Anyone can inspect how the software works",
    "People can learn from real production level code",
    "Communities can improve quality over time",
    "Projects can grow faster through shared effort",
    "Developers can customize software when licenses allow it",
    "Knowledge does not stay locked inside one company",
];

const myths = [
    {
        title: "Myth - Open source means no one owns or manages it",
        text: "Most open source projects still have owners, maintainers, organizations or teams guiding the direction.",
    },
    {
        title: "Myth - Open source is insecure because everyone can see the code",
        text: "Visibility can actually help security because more people can inspect, audit and improve the software. Of course, quality still depends on the project and its maintenance.",
    },
    {
        title: "Myth - Only expert programmers can contribute",
        text: "People can contribute through documentation, testing, issue reporting, translation, design feedback and community help.",
    },
    {
        title: "Myth - Open source means you can do absolutely anything",
        text: "Licenses matter. Some licenses are more permissive, and some have stronger conditions.",
    },
];

const faqItems = [
    {
        question: "What is the simplest meaning of open source software?",
        answer: "It is software whose source code is publicly available under a license that allows people to inspect, use, modify and often redistribute it.",
    },
    {
        question: "Is open source the same as free software?",
        answer: "They overlap a lot, but the terms come from different philosophical and practical discussions. In everyday beginner conversation, people often use them loosely, but the ideas are not identical in every context.",
    },
    {
        question: "Can companies make money from open source?",
        answer: "Yes. They may earn through support, hosting, enterprise features, consulting, integrations, training or related services.",
    },
    {
        question: "Can I use open source code in my own project?",
        answer: "Usually yes, but you must follow the software license. That is why licenses are important.",
    },
    {
        question:
            "What if the code is visible but I am not allowed to change or redistribute it?",
        answer: "Then it may be source available, but that does not automatically make it open source in the usual licensing sense.",
    },
    {
        question: "Why do developers care so much about open source?",
        answer: "Because it helps learning, collaboration, transparency, reuse and community driven progress across the software world.",
    },
];

const OpenSourceSoftwareWhyCollaborationPowersTechnology = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiUsers />
                            Software, collaboration and community
                        </span>
                    </div>

                    <h1>
                        Open Source Software - Why Collaboration Powers
                        Technology
                    </h1>

                    <p className="lead">
                        Open source software is one of the most important ideas
                        in modern technology. It allows people to inspect source
                        code, learn from it, improve it and build on top of
                        shared work. Once you understand open source properly,
                        you begin to see how deeply it influences the tools,
                        frameworks, platforms and systems used every day.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiCode />
                            </span>
                            <div>
                                <strong>Core idea</strong>
                                <p>
                                    The source code is available for people to
                                    inspect and often modify under a license.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiUsers />
                            </span>
                            <div>
                                <strong>Main strength</strong>
                                <p>
                                    Many people can help improve one shared
                                    project instead of everyone working alone.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiGlobe />
                            </span>
                            <div>
                                <strong>Big impact</strong>
                                <p>
                                    A huge part of modern software
                                    infrastructure is built on open source
                                    foundations.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiInfoBlock />
                    </span>
                    <h2>Start with the simplest meaning</h2>
                </div>

                <p>
                    Open source software is software whose source code is made
                    available to people under a license that allows them to
                    study, use, and often modify and share it.
                </p>

                <p>
                    The key phrase here is "source code". That means the human
                    readable code that programmers write. If that code is locked
                    away and hidden, the software is usually not open source. If
                    that code is available with meaningful permissions, the
                    software may be open source.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            Open source software is software whose code is open
                            for inspection and shared under a license that
                            allows collaboration.
                        </p>
                    </div>
                </div>

                <div className="foundationGrid">
                    {foundationCards.map((item) => (
                        <article key={item.title} className="foundationCard">
                            <span className="foundationIcon">{item.icon}</span>
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
                    <h2>What open source does not mean</h2>
                </div>

                <p>
                    Beginners often hear the term and assume it means only one
                    thing. In reality, several misunderstandings float around
                    this topic like little software goblins.
                </p>

                <div className="misconceptionGrid">
                    {misconceptionCards.map((item) => (
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
                        <FiArrowRight />
                    </span>
                    <h2>Why open source matters so much</h2>
                </div>

                <p>
                    Open source matters because software is not built in a
                    vacuum. Modern technology grows when knowledge spreads, when
                    tools are shared, and when people can improve each other's
                    work.
                </p>

                <div className="importanceGrid">
                    {whyItMattersCards.map((item) => (
                        <article key={item.title} className="importanceCard">
                            <span className="importanceIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <ul className="bulletList">
                    {advantages.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiGlobe />
                    </span>
                    <h2>Famous open source examples</h2>
                </div>

                <div className="examplesGrid">
                    {examples.map((item) => (
                        <article key={item.title} className="exampleCard">
                            <span className="exampleIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    These examples are not random. They show that open source is
                    not some side hobby floating on the edges of the internet.
                    It is deeply woven into modern computing.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiGitBranch />
                    </span>
                    <h2>How an open source project usually works</h2>
                </div>

                <div className="flowGrid">
                    {lifecycleSteps.map((item, index) => (
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
                        <FiMessageSquare />
                    </span>
                    <div>
                        <strong>Important idea</strong>
                        <p>
                            Open source is not just code on display. It is
                            usually a living collaboration process involving
                            maintainers, contributors, reviews, issues and
                            releases.
                        </p>
                    </div>
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
                        <FiCpu />
                    </span>
                    <h2>Real beginner friendly examples</h2>
                </div>

                <div className="beginnerExamplesGrid">
                    {beginnerExamples.map((item) => (
                        <article
                            key={item.title}
                            className="beginnerExampleCard"
                        >
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
                    <h2>Open source vs proprietary software</h2>
                </div>

                <div className="comparisonWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Point</th>
                                <th>Open source</th>
                                <th>Proprietary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Source code</td>
                                <td>Usually visible under a license</td>
                                <td>Usually hidden from the public</td>
                            </tr>
                            <tr>
                                <td>Modification</td>
                                <td>Often allowed depending on license</td>
                                <td>Usually controlled only by the owner</td>
                            </tr>
                            <tr>
                                <td>Redistribution</td>
                                <td>May be allowed under license rules</td>
                                <td>Usually restricted</td>
                            </tr>
                            <tr>
                                <td>Transparency</td>
                                <td>Higher because code can be inspected</td>
                                <td>Lower because internals are hidden</td>
                            </tr>
                            <tr>
                                <td>Community contribution</td>
                                <td>Often encouraged</td>
                                <td>Usually limited or closed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    Neither model automatically guarantees perfection. The point
                    is to understand how they differ in visibility, control and
                    collaboration.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiAlertCircle />
                    </span>
                    <h2>Common myths and confusion</h2>
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
                    Open source software is not just about showing code to the
                    public. It is about creating an environment where software
                    can be studied, improved, shared and extended through
                    collaboration. That is why open source has become one of the
                    strongest forces in modern technology.
                </p>

                <p>
                    Once you understand open source, you begin to understand why
                    so many tools, frameworks and platforms evolve so quickly.
                    They are often powered not by one isolated person, but by
                    communities building together.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

const FiInfoBlock = FiCode;

export default OpenSourceSoftwareWhyCollaborationPowersTechnology;
