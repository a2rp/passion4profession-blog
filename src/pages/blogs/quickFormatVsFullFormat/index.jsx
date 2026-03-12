import React from "react";
import {
    FiHardDrive,
    FiZap,
    FiShield,
    FiAlertCircle,
    FiCheckCircle,
    FiClock,
    FiTrash2,
    FiDatabase,
    FiInfo,
    FiTool,
    FiRefreshCw,
    FiLayers,
    FiCpu,
    FiFileText,
    FiMonitor,
    FiBox,
    FiArrowRight,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const coreIdeaCards = [
    {
        icon: <FiHardDrive />,
        title: "Formatting prepares storage",
        text: "Formatting is the process of preparing a storage device or a partition so a computer can use it properly with a file system.",
    },
    {
        icon: <FiLayers />,
        title: "It is not just deletion",
        text: "Formatting does not simply mean removing visible files. It changes or rebuilds the structure used to organize data on the drive.",
    },
    {
        icon: <FiDatabase />,
        title: "The file system matters",
        text: "When a drive is formatted, the system creates or refreshes file system information such as metadata, indexes and free space tracking.",
    },
];

const comparisonRows = [
    {
        feature: "Speed",
        quick: "Usually much faster",
        full: "Usually slower because more checking work is done",
    },
    {
        feature: "File visibility after format",
        quick: "Old files become inaccessible in normal use",
        full: "Old files become far harder to recover in normal situations",
    },
    {
        feature: "Bad sector checking",
        quick: "Usually no deep checking",
        full: "Typically checks the drive more thoroughly",
    },
    {
        feature: "Best use case",
        quick: "Fast reuse of a healthy drive",
        full: "Checking an old or suspicious drive or preparing storage more thoroughly",
    },
    {
        feature: "Chance of simple recovery tools helping",
        quick: "Higher compared to full format",
        full: "Much lower in many practical cases",
    },
    {
        feature: "Mental model",
        quick: "Removes the table of contents quickly",
        full: "More thorough cleanup and inspection",
    },
];

const quickFormatPoints = [
    {
        icon: <FiZap />,
        title: "What it really does",
        text: "Quick format usually rebuilds the basic file system structure and marks the space as available without deeply rewriting every part of the drive.",
    },
    {
        icon: <FiClock />,
        title: "Why it is fast",
        text: "Because the system does not spend much time scanning or processing the entire disk in a deep way.",
    },
    {
        icon: <FiFileText />,
        title: "What happens to old files",
        text: "The old file references are removed from normal view, but parts of the underlying data may still remain until new data overwrites them.",
    },
];

const fullFormatPoints = [
    {
        icon: <FiShield />,
        title: "What it does differently",
        text: "Full format does more work than quick format. It prepares the drive and also performs more thorough checking of the storage surface or blocks, depending on the system and context.",
    },
    {
        icon: <FiTool />,
        title: "Why it takes longer",
        text: "Because the entire drive gets more attention. The system takes more time scanning and preparing it rather than doing a fast structural reset only.",
    },
    {
        icon: <FiAlertCircle />,
        title: "Why people use it",
        text: "It is useful when the drive is old, suspicious, unstable, or when you want a more thorough setup process instead of just a fast reset.",
    },
];

const realExamples = [
    {
        title: "Example 1 - Reusing a healthy USB drive",
        text: "If your pen drive is working fine and you just want to clear it quickly, quick format is usually enough.",
    },
    {
        title: "Example 2 - An old external hard drive behaves strangely",
        text: "If the drive freezes, disconnects, or gives file errors, a full format is often a better choice because it is more thorough and may help reveal deeper issues.",
    },
    {
        title: "Example 3 - You accidentally formatted a drive",
        text: "If it was a quick format and you stopped using the drive immediately, recovery chances may be better than if heavy writing happened afterward.",
    },
    {
        title: "Example 4 - Preparing a storage device before serious use",
        text: "Some people use full format when setting up old reused drives so the system performs a more complete check before important data is stored on them.",
    },
];

const myths = [
    {
        title: "Myth - Formatting always destroys every bit instantly",
        text: "Not always. Quick format mainly removes file structure visibility for normal use. Old data may still exist until overwritten.",
    },
    {
        title: "Myth - Quick format and full format are basically the same",
        text: "They are related, but not the same. The amount of checking and preparation is different.",
    },
    {
        title: "Myth - Full format repairs all bad drives",
        text: "No. It may help identify problems or prepare a drive more thoroughly, but it cannot magically fix failing hardware.",
    },
    {
        title: "Myth - Deleting files and formatting are identical",
        text: "Deleting files usually removes selected file references. Formatting prepares the storage structure itself on a broader level.",
    },
];

const faqItems = [
    {
        question: "Does quick format delete my files?",
        answer: "It makes them disappear from normal access and marks the space as available, but it often does not deeply erase all underlying data immediately.",
    },
    {
        question:
            "Does full format always erase everything completely forever?",
        answer: "In normal practical terms it is much more thorough than quick format, but exact behavior can depend on the operating system, storage type and method used.",
    },
    {
        question: "Which one should I use for a new healthy drive?",
        answer: "Quick format is often fine for a healthy drive when you just need it ready to use quickly.",
    },
    {
        question: "Which one should I use for an old suspicious drive?",
        answer: "Full format is usually the better choice if you want a more thorough process and basic checking.",
    },
    {
        question: "Will formatting change the file system too?",
        answer: "Yes, formatting can create or change the file system such as NTFS, exFAT or FAT32 depending on what you choose.",
    },
    {
        question: "Can files be recovered after formatting?",
        answer: "Sometimes yes, especially after quick format if new data has not overwritten the old areas yet. Recovery becomes harder after more writing or a more thorough format process.",
    },
];

const relatedTerms = [
    {
        icon: <FiLayers />,
        title: "Partition",
        text: "A partition is a logical section of a drive. You usually format a partition, not the abstract concept of storage itself.",
    },
    {
        icon: <FiDatabase />,
        title: "File system",
        text: "The file system is the method used to organize and manage files on a partition or drive.",
    },
    {
        icon: <FiTrash2 />,
        title: "Overwrite",
        text: "Overwrite means new data is written on top of old storage locations. Once this happens, recovery becomes much harder.",
    },
    {
        icon: <FiMonitor />,
        title: "Bad sectors or bad blocks",
        text: "These are damaged or unreliable areas on storage media that may cause read or write problems.",
    },
];

const QuickFormatVsFullFormat = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiHardDrive />
                            Storage, drives and formatting
                        </span>
                    </div>

                    <h1>
                        Quick Format vs Full Format - What Really Happens to
                        Your Drive
                    </h1>

                    <p className="lead">
                        Formatting a drive sounds simple, but many beginners do
                        not know what the computer is actually doing behind the
                        scenes. Quick format and full format are not identical.
                        They both prepare storage for use, but the depth, speed
                        and practical consequences are different.
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
                                <strong>Quick format</strong>
                                <p>
                                    Fast structural reset that usually makes old
                                    files disappear from normal access without a
                                    deep full drive process.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiShield />
                            </span>
                            <div>
                                <strong>Full format</strong>
                                <p>
                                    Slower and more thorough process that
                                    prepares the drive with deeper checking.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiAlertCircle />
                            </span>
                            <div>
                                <strong>Main beginner confusion</strong>
                                <p>
                                    Many people think both are just different
                                    names for the same thing. They are not.
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
                    <h2>
                        Start with the basic idea - what does formatting mean?
                    </h2>
                </div>

                <p>
                    Formatting is the process of preparing a drive or partition
                    so the operating system can use it properly. The computer
                    creates or refreshes the structure that will manage files,
                    folders, names and free space.
                </p>

                <p>
                    In simple words, formatting gives the storage a usable
                    structure.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            Formatting prepares storage so the system can
                            organize and manage files on it correctly.
                        </p>
                    </div>
                </div>

                <div className="coreIdeaGrid">
                    {coreIdeaCards.map((item) => (
                        <article key={item.title} className="coreIdeaCard">
                            <span className="coreIdeaIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiRefreshCw />
                    </span>
                    <h2>
                        Quick format vs full format - the essential difference
                    </h2>
                </div>

                <p>The easiest way to understand the difference is this:</p>

                <ul className="bulletList">
                    <li>
                        Quick format mainly resets the file system structure
                        very quickly.
                    </li>
                    <li>Full format does more work and is more thorough.</li>
                </ul>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Quick format</th>
                                <th>Full format</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row) => (
                                <tr key={row.feature}>
                                    <td>{row.feature}</td>
                                    <td>{row.quick}</td>
                                    <td>{row.full}</td>
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
                        <strong>Best mental model</strong>
                        <p>
                            Quick format is like quickly removing the library
                            catalog. Full format is more like rebuilding the
                            catalog and inspecting the shelves more thoroughly.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiZap />
                    </span>
                    <h2>What really happens in a quick format</h2>
                </div>

                <div className="detailGrid">
                    {quickFormatPoints.map((item) => (
                        <article key={item.title} className="detailCard">
                            <span className="detailIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    That is why quick format is often used when a drive is
                    already healthy and you simply want to reuse it fast.
                </p>

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiAlertCircle />
                    </span>
                    <div>
                        <strong>Important practical point</strong>
                        <p>
                            After a quick format, the old files may be gone from
                            normal view, but some underlying data may still
                            remain until new files overwrite those areas.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiShield />
                    </span>
                    <h2>What really happens in a full format</h2>
                </div>

                <div className="detailGrid">
                    {fullFormatPoints.map((item) => (
                        <article key={item.title} className="detailCard">
                            <span className="detailIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    Full format is a better choice when you want more confidence
                    about the drive's condition or when the drive has a history
                    of strange behavior.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiMonitor />
                    </span>
                    <h2>Real examples that make the difference obvious</h2>
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
                        <FiCpu />
                    </span>
                    <h2>When should you choose quick format?</h2>
                </div>

                <ul className="bulletList">
                    <li>When the drive is healthy and working normally</li>
                    <li>When you need speed and convenience</li>
                    <li>When you simply want to clear a USB drive quickly</li>
                    <li>
                        When you are reusing storage and do not need a deep
                        check
                    </li>
                </ul>

                <p>
                    Quick format is common in everyday use because it is fast
                    and good enough for many normal situations.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiTool />
                    </span>
                    <h2>When should you choose full format?</h2>
                </div>

                <ul className="bulletList">
                    <li>When the drive is old or questionable</li>
                    <li>When you suspect storage problems</li>
                    <li>When you want a more thorough preparation process</li>
                    <li>
                        When you want the system to spend more time checking the
                        drive
                    </li>
                </ul>

                <p>
                    Full format is not something you must always use, but it is
                    a smarter choice for drives that deserve more caution.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiBox />
                    </span>
                    <h2>Related terms you should understand</h2>
                </div>

                <div className="termsGrid">
                    {relatedTerms.map((item) => (
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
                        <FiTrash2 />
                    </span>
                    <h2>Formatting vs deleting - not the same thing</h2>
                </div>

                <p>
                    Deleting files usually means removing selected file
                    references from a folder or file system. Formatting is
                    broader. It rebuilds or resets the storage structure used to
                    organize data.
                </p>

                <div className="miniCompareGrid">
                    <article className="miniCompareCard">
                        <h3>Deleting files</h3>
                        <p>
                            Usually affects selected files or folders while the
                            broader file system remains in place.
                        </p>
                    </article>

                    <article className="miniCompareCard">
                        <h3>Formatting</h3>
                        <p>
                            Prepares or refreshes the structure of the whole
                            partition so it can be used again.
                        </p>
                    </article>
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
                    Quick format and full format both prepare storage for use,
                    but they do not do it in the same way. Quick format is
                    faster and mainly resets the drive's file structure for
                    normal use. Full format is slower and more thorough, making
                    it a better choice when you want more checking or caution.
                </p>

                <p>
                    Once you understand that formatting is about preparing
                    storage structure rather than merely making files disappear,
                    the whole topic becomes much less confusing.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default QuickFormatVsFullFormat;
