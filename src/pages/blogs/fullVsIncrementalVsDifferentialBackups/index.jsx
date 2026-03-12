import React from "react";
import {
    FiArchive,
    FiCheckCircle,
    FiClock,
    FiCopy,
    FiDatabase,
    FiDownload,
    FiExternalLink,
    FiFileText,
    FiHardDrive,
    FiInfo,
    FiLayers,
    FiRefreshCw,
    FiSave,
    FiShield,
    FiTrendingUp,
    FiUpload,
    FiZap,
    FiAlertCircle,
    FiFolder,
    FiServer,
    FiBox,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const backupTypes = [
    {
        icon: <FiArchive />,
        title: "Full backup",
        shortLabel: "Full",
        text: "A full backup copies all selected data every time the backup runs. It is the most complete and the simplest to restore, but it takes the most storage space and usually the most time to create.",
        points: [
            "Copies all selected files",
            "Simple restore process",
            "Uses the most storage",
            "Usually slower to create",
        ],
    },
    {
        icon: <FiTrendingUp />,
        title: "Incremental backup",
        shortLabel: "Incremental",
        text: "An incremental backup copies only the data changed since the most recent backup of any kind. That makes backups smaller and faster after the first one, but restores can become more complex because multiple backup sets may be needed.",
        points: [
            "Copies only changes since the last backup",
            "Fast and storage efficient",
            "Restore can require multiple backup sets",
            "Popular for frequent scheduled backups",
        ],
    },
    {
        icon: <FiLayers />,
        title: "Differential backup",
        shortLabel: "Differential",
        text: "A differential backup copies all data changed since the last full backup. It usually grows larger each day until a new full backup is made. It sits in the middle between full and incremental in both backup size and restore complexity.",
        points: [
            "Copies changes since the last full backup",
            "Restore is simpler than incremental",
            "Backup size grows over time",
            "Balanced approach in many environments",
        ],
    },
];

const scheduleRows = [
    {
        day: "Sunday",
        full: "All selected files are copied",
        incremental:
            "All selected files are copied because this is the first backup",
        differential:
            "All selected files are copied because this is the first backup",
    },
    {
        day: "Monday",
        full: "All selected files are copied again",
        incremental: "Only changes made after Sunday are copied",
        differential: "Only changes made after Sunday are copied",
    },
    {
        day: "Tuesday",
        full: "All selected files are copied again",
        incremental: "Only changes made after Monday are copied",
        differential: "All changes made since Sunday are copied",
    },
    {
        day: "Wednesday",
        full: "All selected files are copied again",
        incremental: "Only changes made after Tuesday are copied",
        differential: "All changes made since Sunday are copied",
    },
    {
        day: "Thursday",
        full: "All selected files are copied again",
        incremental: "Only changes made after Wednesday are copied",
        differential: "All changes made since Sunday are copied",
    },
];

const practicalExamples = [
    {
        title: "Example 1 - Personal laptop photos and documents",
        text: "Suppose you back up your laptop every night. A full backup every night would be simple but heavy. Incremental would save only what changed after the previous backup. Differential would save everything changed since the last full backup, usually making restores easier than incremental.",
    },
    {
        title: "Example 2 - Office server with daily changes",
        text: "A company server changes throughout the day. Doing a full backup every day may waste time and storage. Many teams use a weekly full backup and then daily incremental or differential backups to reduce overhead.",
    },
    {
        title: "Example 3 - Large video editing project",
        text: "Video files can be huge. If only one project file changed, an incremental backup may be much smaller and faster than repeatedly copying everything. But restore planning becomes important.",
    },
    {
        title: "Example 4 - Quick disaster recovery",
        text: "If restoring speed matters most, a full backup is easiest. If you have one full backup plus one differential backup, restore is also fairly manageable. Incremental can be slower to restore because each piece in the chain matters.",
    },
];

const prosCons = [
    {
        title: "Full backup - strengths",
        icon: <FiCheckCircle />,
        items: [
            "Very simple to understand",
            "Very simple to restore",
            "Each full backup can stand on its own",
            "Useful for clean recovery points",
        ],
    },
    {
        title: "Full backup - weaknesses",
        icon: <FiAlertCircle />,
        items: [
            "Uses the most storage",
            "Takes more time to create",
            "Can be expensive at scale",
        ],
    },
    {
        title: "Incremental backup - strengths",
        icon: <FiZap />,
        items: [
            "Usually the fastest daily backup method",
            "Very storage efficient",
            "Great when changes are frequent but small",
        ],
    },
    {
        title: "Incremental backup - weaknesses",
        icon: <FiAlertCircle />,
        items: [
            "Restore can be more complex",
            "If one backup in the chain is broken, recovery may fail",
            "Backup chains need careful management",
        ],
    },
    {
        title: "Differential backup - strengths",
        icon: <FiShield />,
        items: [
            "Restore is simpler than incremental",
            "Still avoids doing a full backup every time",
            "Good middle ground",
        ],
    },
    {
        title: "Differential backup - weaknesses",
        icon: <FiAlertCircle />,
        items: [
            "Gets larger each day after the last full backup",
            "Can become slower than incremental over time",
            "Uses more storage than incremental",
        ],
    },
];

const restoreScenarios = [
    {
        icon: <FiDownload />,
        title: "Restoring from a full backup",
        text: "You usually need only that one full backup set. Recovery is straightforward because all selected files are already there.",
    },
    {
        icon: <FiRefreshCw />,
        title: "Restoring from an incremental backup chain",
        text: "You usually need the last full backup plus every incremental backup after it up to the desired recovery point.",
    },
    {
        icon: <FiLayers />,
        title: "Restoring from a differential backup",
        text: "You usually need the last full backup plus the latest differential backup. That is simpler than restoring through a long incremental chain.",
    },
];

const myths = [
    {
        title: "Myth - A backup is any copy of a file",
        text: "Not exactly. A random copy can help, but a real backup plan usually includes scheduling, versioning, storage strategy, testing and recovery planning.",
    },
    {
        title: "Myth - Full backup is always best",
        text: "Full backup is simplest, but not always the best choice. Storage cost, backup time and system size all matter.",
    },
    {
        title: "Myth - Incremental is always better because it is smaller",
        text: "Smaller backups are nice, but recovery complexity matters too. The best strategy depends on your recovery goals.",
    },
    {
        title: "Myth - If backups exist, recovery is guaranteed",
        text: "Not true. Backups should be verified and restoration should be tested. A backup you cannot restore from is basically decorative optimism.",
    },
];

const keyTerms = [
    {
        icon: <FiClock />,
        title: "Recovery point",
        text: "The exact point in time to which you can restore data. For example, restoring your files as they existed yesterday at 11 PM.",
    },
    {
        icon: <FiTrendingUp />,
        title: "Backup chain",
        text: "A sequence of related backups, especially common with incremental strategies where later recovery depends on earlier pieces.",
    },
    {
        icon: <FiSave />,
        title: "Retention",
        text: "How long backups are kept before being deleted or replaced.",
    },
    {
        icon: <FiServer />,
        title: "Recovery objective",
        text: "The practical goal of how quickly and how accurately data should be restored after a problem.",
    },
];

const choosingCards = [
    {
        icon: <FiHardDrive />,
        title: "Choose full backup when",
        items: [
            "You want the simplest restore",
            "You have enough storage",
            "Your data set is not huge",
            "You need strong standalone restore points",
        ],
    },
    {
        icon: <FiUpload />,
        title: "Choose incremental backup when",
        items: [
            "You back up often",
            "Storage efficiency matters a lot",
            "Changes are frequent",
            "You can manage more complex restore chains",
        ],
    },
    {
        icon: <FiBox />,
        title: "Choose differential backup when",
        items: [
            "You want a balance between speed and restore simplicity",
            "You are okay with backup size growing after a full backup",
            "You want easier restores than incremental",
        ],
    },
];

const faqItems = [
    {
        question: "Which backup type is easiest for beginners to understand?",
        answer: "Full backup is usually easiest to understand because it simply copies everything selected each time.",
    },
    {
        question: "Which backup type usually saves the most storage?",
        answer: "Incremental backup usually saves the most storage after the initial full backup because it stores only changes since the most recent backup.",
    },
    {
        question:
            "Which one is easier to restore, differential or incremental?",
        answer: "Differential is usually easier because you generally need the last full backup plus the latest differential backup, while incremental often requires a longer chain.",
    },
    {
        question: "Can I use more than one backup type together?",
        answer: "Yes. A common strategy is one weekly full backup plus daily incremental or daily differential backups.",
    },
    {
        question: "Should backups be tested?",
        answer: "Absolutely. A backup strategy should include test restores. Otherwise you may only discover problems when it is too late.",
    },
    {
        question: "Is cloud sync the same as backup?",
        answer: "Not always. Sync and backup can overlap, but they are not automatically the same. Good backup usually includes version history and controlled recovery options.",
    },
];

const FullVsIncrementalVsDifferentialBackups = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiArchive />
                            Backup strategies and recovery planning
                        </span>
                    </div>

                    <h1>Full vs Incremental vs Differential Backups</h1>

                    <p className="lead">
                        Backups are not just about making copies. They are about
                        deciding how much data to copy, how often to copy it,
                        how much storage to use, and how easy it should be to
                        restore everything later. Full, incremental and
                        differential backups are three common strategies, and
                        each one makes a different tradeoff.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        {backupTypes.map((item) => (
                            <article key={item.title} className="heroQuickCard">
                                <span className="quickIcon">{item.icon}</span>
                                <div>
                                    <strong>{item.shortLabel}</strong>
                                    <p>{item.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiInfo />
                    </span>
                    <h2>Start with the basic idea</h2>
                </div>

                <p>
                    Imagine you have a folder containing photos, videos,
                    documents and project files. Over time, some files change,
                    some are added and some are deleted. A backup strategy tells
                    you how to preserve that data so that if something goes
                    wrong, you can restore it later.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            A backup is a protected copy of data kept so that it
                            can be restored after loss, corruption, deletion,
                            damage or failure.
                        </p>
                    </div>
                </div>

                <p>
                    The real question is not just "Should I back up my data?"
                    but also "How should I back it up?"
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>The three main backup types</h2>
                </div>

                <div className="typeGrid">
                    {backupTypes.map((item) => (
                        <article key={item.title} className="typeCard">
                            <div className="typeTop">
                                <span className="typeIcon">{item.icon}</span>
                                <h3>{item.title}</h3>
                            </div>

                            <p>{item.text}</p>

                            <ul className="bulletList compact">
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
                        <FiCalendarFix />
                    </span>
                    <h2>How they behave across a week</h2>
                </div>

                <p>
                    This weekly example helps beginners understand the
                    difference quickly. Let us assume Sunday is the first main
                    backup day.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Full backup</th>
                                <th>Incremental backup</th>
                                <th>Differential backup</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleRows.map((row) => (
                                <tr key={row.day}>
                                    <td>{row.day}</td>
                                    <td>{row.full}</td>
                                    <td>{row.incremental}</td>
                                    <td>{row.differential}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="callout soft">
                    <span className="calloutIcon">
                        <FiLayers />
                    </span>
                    <div>
                        <strong>Key pattern to remember</strong>
                        <p>
                            Incremental looks back to the most recent backup.
                            Differential looks back to the most recent full
                            backup.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiDownload />
                    </span>
                    <h2>Restoring data - where the real difference appears</h2>
                </div>

                <p>
                    Backup size and backup speed matter, but restore complexity
                    matters just as much. A backup strategy that saves storage
                    can still become annoying if restoration is complicated
                    during an emergency.
                </p>

                <div className="restoreGrid">
                    {restoreScenarios.map((item) => (
                        <article key={item.title} className="restoreCard">
                            <span className="restoreIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    This is why teams do not choose a backup type based only on
                    backup speed. They also think about restore speed,
                    dependency chains and risk.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiFolder />
                    </span>
                    <h2>Practical real world examples</h2>
                </div>

                <div className="exampleGrid">
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
                        <FiCheckCircle />
                    </span>
                    <h2>Strengths and weaknesses of each strategy</h2>
                </div>

                <div className="prosConsGrid">
                    {prosCons.map((item) => (
                        <article key={item.title} className="prosConsCard">
                            <div className="prosConsTop">
                                <span className="prosConsIcon">
                                    {item.icon}
                                </span>
                                <h3>{item.title}</h3>
                            </div>

                            <ul className="bulletList compact">
                                {item.items.map((entry) => (
                                    <li key={entry}>{entry}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiBox />
                    </span>
                    <h2>Important related terms</h2>
                </div>

                <div className="termGrid">
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
                        <FiShield />
                    </span>
                    <h2>How to choose the right backup type</h2>
                </div>

                <p>
                    There is no single perfect answer for everyone. The best
                    backup strategy depends on storage budget, restore speed
                    requirements, how often data changes, and how comfortable
                    you are with complexity.
                </p>

                <div className="chooseGrid">
                    {choosingCards.map((item) => (
                        <article key={item.title} className="chooseCard">
                            <span className="chooseIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <ul className="bulletList compact">
                                {item.items.map((entry) => (
                                    <li key={entry}>{entry}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiAlertCircle />
                    </span>
                    <div>
                        <strong>The practical truth</strong>
                        <p>
                            The best backup strategy is not the one that sounds
                            smartest. It is the one you can actually run
                            consistently and restore from successfully.
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
                        <FiFileText />
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
                    Full backups copy everything and are simplest to restore.
                    Incremental backups copy only recent changes and usually use
                    the least storage, but restoration can be more complex.
                    Differential backups copy all changes since the last full
                    backup and sit between the other two in both backup size and
                    restore simplicity.
                </p>

                <p>
                    If you remember only one thing, remember this - backup
                    strategy is really about tradeoffs between storage, speed,
                    simplicity and recovery confidence.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

const FiCalendarFix = FiClock;

export default FullVsIncrementalVsDifferentialBackups;
