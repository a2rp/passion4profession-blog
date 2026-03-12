import React from "react";
import {
    FiActivity,
    FiAlertCircle,
    FiArrowRight,
    FiCheckCircle,
    FiCheckSquare,
    FiClock,
    FiCode,
    FiCpu,
    FiDatabase,
    FiDisc,
    FiDownload,
    FiFileText,
    FiGrid,
    FiHardDrive,
    FiHash,
    FiInfo,
    FiLayers,
    FiMail,
    FiRefreshCw,
    FiRepeat,
    FiSave,
    FiServer,
    FiShield,
    FiTool,
    FiUpload,
    FiWifi,
    FiXCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const simpleIdeaCards = [
    {
        icon: <FiFileText />,
        title: "Data can get damaged",
        text: "A file, message, packet, or storage block can change by accident while being saved, transferred, copied, or received.",
    },
    {
        icon: <FiHash />,
        title: "A checksum is a small calculated value",
        text: "The checksum is generated from the original data using a rule or formula. It acts like a compact summary of that data.",
    },
    {
        icon: <FiCheckSquare />,
        title: "Compare later to detect errors",
        text: "When the data arrives or is read again, the checksum is recalculated. If the value changes, the data likely changed too.",
    },
];

const whyErrorsHappen = [
    {
        icon: <FiWifi />,
        title: "Network noise",
        text: "While data travels over networks, some bits may flip or packets may be corrupted.",
    },
    {
        icon: <FiHardDrive />,
        title: "Storage issues",
        text: "Bad sectors, weak media, hardware faults, or physical wear can damage stored data.",
    },
    {
        icon: <FiCpu />,
        title: "Memory or hardware glitches",
        text: "Faulty RAM, overheating, unstable power, or hardware problems can change data unexpectedly.",
    },
    {
        icon: <FiRefreshCw />,
        title: "Copy or transfer mistakes",
        text: "Moving files between devices can occasionally introduce corruption if something goes wrong mid-transfer.",
    },
];

const stepCards = [
    {
        step: "01",
        icon: <FiCode />,
        title: "Start with original data",
        text: "Take the file, message, block, packet, or any data you want to protect against accidental corruption.",
    },
    {
        step: "02",
        icon: <FiHash />,
        title: "Calculate checksum",
        text: "Apply a checksum algorithm or rule to produce a smaller value based on the original data.",
    },
    {
        step: "03",
        icon: <FiSave />,
        title: "Store or send both",
        text: "Keep the original data together with the checksum, or send the checksum alongside the data.",
    },
    {
        step: "04",
        icon: <FiRepeat />,
        title: "Recalculate later",
        text: "When the data is read again or received at the destination, calculate the checksum again using the same rule.",
    },
    {
        step: "05",
        icon: <FiCheckCircle />,
        title: "Compare both values",
        text: "If the old and new checksum match, the data probably survived correctly. If not, the data likely changed somewhere.",
    },
];

const realWorldCards = [
    {
        icon: <FiDownload />,
        title: "Downloaded files",
        text: "A website may publish a checksum for a file. After downloading, you calculate the checksum on your copy and compare both values to verify the file was not corrupted.",
    },
    {
        icon: <FiMail />,
        title: "Data communication",
        text: "Messages or packets can include checksums so the receiver can verify whether the content changed during transmission.",
    },
    {
        icon: <FiDisc />,
        title: "Storage systems",
        text: "Disks, filesystems, and backup systems may use checksum style verification to detect data corruption over time.",
    },
    {
        icon: <FiServer />,
        title: "Databases and servers",
        text: "Systems may use checksum based integrity checks to detect damage in pages, blocks, or transferred data.",
    },
];

const comparisonRows = [
    {
        label: "Main purpose",
        checksum: "Detect accidental errors or corruption",
        hash: "Identify data, verify integrity, and often support security related uses",
    },
    {
        label: "Typical strength",
        checksum: "Usually simpler and lighter",
        hash: "Usually stronger and harder to fake accidentally",
    },
    {
        label: "Security use",
        checksum: "Not meant for serious security protection",
        hash: "Can be used in stronger integrity and security workflows",
    },
    {
        label: "Speed",
        checksum: "Often very fast and lightweight",
        hash: "Can be heavier depending on algorithm",
    },
    {
        label: "Best use case",
        checksum: "Quick error detection in storage or transmission",
        hash: "Strong verification and identity of data",
    },
];

const examples = [
    {
        title: "Example 1 - A text message in transit",
        text: "Suppose the sender wants to send 'HELLO'. A checksum is calculated from those letters. The receiver gets the text and recalculates the checksum. If one letter changed into something else during transmission, the checksum would likely no longer match.",
    },
    {
        title: "Example 2 - Downloading an ISO image",
        text: "A Linux distribution may publish a checksum for its ISO. After downloading the ISO, you calculate the checksum on your local file. If your value matches the published value, your file was likely downloaded correctly.",
    },
    {
        title: "Example 3 - Copying a file to a USB drive",
        text: "You copy a large video to a USB drive. If the system or tool uses integrity checking, it can compare checksum values before and after the copy to detect corruption.",
    },
    {
        title: "Example 4 - Damaged packet on a network",
        text: "A packet leaves one machine with a checksum. During travel, one bit changes because of noise or corruption. The receiver recalculates the checksum and sees a mismatch, which signals that the packet is bad.",
    },
];

const commonTerms = [
    {
        icon: <FiHash />,
        title: "Checksum",
        text: "A smaller calculated value derived from data so errors can be detected later.",
    },
    {
        icon: <FiActivity />,
        title: "Integrity",
        text: "Integrity means the data is still correct and unchanged from its expected original form.",
    },
    {
        icon: <FiAlertCircle />,
        title: "Corruption",
        text: "Corruption means data has changed in an unintended way because of damage, faults, or transfer errors.",
    },
    {
        icon: <FiShield />,
        title: "Verification",
        text: "Verification means checking whether what you received or stored still matches what was originally intended.",
    },
];

const algorithmCards = [
    {
        title: "Simple sum style checksum",
        text: "The system adds parts of the data together in some controlled way and keeps the result. This is easy and fast, but not very strong.",
    },
    {
        title: "CRC",
        text: "CRC means Cyclic Redundancy Check. It is widely used in communication and storage because it is good at detecting many common accidental errors.",
    },
    {
        title: "Application specific checks",
        text: "Some software and file formats use their own integrity fields or checksum style rules depending on performance and reliability needs.",
    },
];

const myths = [
    {
        title: "Myth - If checksum matches, the data is guaranteed perfect in every possible way",
        text: "A matching checksum is a very useful sign, but it is still a detection method based on an algorithm. It greatly helps, but it is not magic in the absolute philosophical sense.",
    },
    {
        title: "Myth - Checksum and hash are exactly the same thing",
        text: "They are related because both come from data, but they are not the same in purpose or strength. Checksums usually focus on accidental error detection.",
    },
    {
        title: "Myth - Checksums are only for programmers",
        text: "Anyone who downloads large files, manages backups, or works with storage and data transfer benefits from understanding checksums.",
    },
    {
        title: "Myth - A checksum protects data from hackers",
        text: "A checksum is mainly for detecting accidental corruption. It is not a strong security tool by itself.",
    },
];

const faqItems = [
    {
        question: "What is the main job of a checksum?",
        answer: "Its main job is to detect whether data changed accidentally after being stored, copied, or transmitted.",
    },
    {
        question: "Does a checksum tell me what exactly changed?",
        answer: "Usually no. It mainly tells you that something changed, not necessarily which exact byte or bit changed.",
    },
    {
        question: "Can a checksum fix damaged data?",
        answer: "A checksum usually detects errors. It does not automatically repair the original content by itself.",
    },
    {
        question: "Why not just compare the whole file every time?",
        answer: "Sometimes you can, but checksums are much smaller and more efficient to store or transmit than sending the full original data again just for verification.",
    },
    {
        question: "Is checksum useful only for files?",
        answer: "No. It can be used for files, packets, messages, disk blocks, database pages, backups, and many other forms of data.",
    },
    {
        question: "If a checksum fails, what happens next?",
        answer: "That depends on the system. It may reject the data, request retransmission, show an error, or mark the content as corrupted.",
    },
];

const ChecksumsDetectingErrorsInData = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiHash />
                            Data integrity and error detection
                        </span>
                    </div>

                    <h1>Checksums - Detecting Errors in Data</h1>

                    <p className="lead">
                        A checksum is a calculated value used to check whether
                        data changed by accident. It is one of the simplest and
                        most important ideas in storage, networking, downloads,
                        backups and data integrity. If you understand checksums,
                        you start to see how computers notice corrupted files,
                        damaged packets and broken transfers.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiHash />
                            </span>
                            <div>
                                <strong>What it is</strong>
                                <p>A compact value calculated from data.</p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiCheckCircle />
                            </span>
                            <div>
                                <strong>What it does</strong>
                                <p>
                                    Helps detect whether data changed
                                    accidentally.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiShield />
                            </span>
                            <div>
                                <strong>What it is not</strong>
                                <p>
                                    It is not the same as full security
                                    protection.
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
                    <h2>The simplest possible idea</h2>
                </div>

                <p>
                    Imagine you send a long document to someone. You worry that
                    one character or one part of the file may change while being
                    transmitted or stored. Sending the whole document again just
                    for checking would be wasteful. So instead, you calculate a
                    much smaller value from the original document. That smaller
                    value is the checksum.
                </p>

                <p>
                    Later, the receiver calculates the checksum again from the
                    received data. If the newly calculated checksum matches the
                    original checksum, the data probably survived correctly. If
                    the values differ, something changed.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckSquare />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            A checksum is a calculated value used to detect
                            accidental changes in data.
                        </p>
                    </div>
                </div>

                <div className="simpleGrid">
                    {simpleIdeaCards.map((item) => (
                        <article key={item.title} className="simpleCard">
                            <span className="simpleIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiXCircle />
                    </span>
                    <h2>Why data errors happen in the first place</h2>
                </div>

                <p>
                    Beginners sometimes assume digital data is perfect forever.
                    In reality, data can be damaged or changed accidentally in
                    many ways.
                </p>

                <div className="reasonGrid">
                    {whyErrorsHappen.map((item) => (
                        <article key={item.title} className="reasonCard">
                            <span className="reasonIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="callout soft">
                    <span className="calloutIcon">
                        <FiAlertCircle />
                    </span>
                    <div>
                        <strong>Important idea</strong>
                        <p>
                            Checksums exist because accidental corruption is a
                            real engineering problem, not just a theoretical
                            one.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiArrowRight />
                    </span>
                    <h2>How a checksum works step by step</h2>
                </div>

                <div className="stepsGrid">
                    {stepCards.map((item) => (
                        <article key={item.step} className="stepCard">
                            <div className="stepTop">
                                <span className="stepNumber">{item.step}</span>
                                <span className="stepIcon">{item.icon}</span>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    The exact algorithm may vary, but the overall logic remains
                    the same. Generate a value from the data, then generate it
                    again later and compare.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiServer />
                    </span>
                    <h2>Where checksums are used in real life</h2>
                </div>

                <div className="usageGrid">
                    {realWorldCards.map((item) => (
                        <article key={item.title} className="usageCard">
                            <span className="usageIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiGrid />
                    </span>
                    <h2>Checksum vs hash</h2>
                </div>

                <p>
                    These two ideas are related, but not identical. Many people
                    mix them together. That confusion is common, so it is worth
                    clearing up properly.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Aspect</th>
                                <th>Checksum</th>
                                <th>Hash</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row) => (
                                <tr key={row.label}>
                                    <td>{row.label}</td>
                                    <td>{row.checksum}</td>
                                    <td>{row.hash}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiShield />
                    </span>
                    <div>
                        <strong>Key distinction</strong>
                        <p>
                            Checksums are mainly for accidental error detection.
                            They are not strong security tools by themselves.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiTool />
                    </span>
                    <h2>Common types of checksum style methods</h2>
                </div>

                <div className="algorithmGrid">
                    {algorithmCards.map((item) => (
                        <article key={item.title} className="algorithmCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    You do not need to master the math first. The main thing to
                    understand is the purpose - detect accidental change.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiDownload />
                    </span>
                    <h2>Examples that make checksums easy to understand</h2>
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
                        <FiLayers />
                    </span>
                    <h2>Important terms related to checksums</h2>
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
                        <FiDatabase />
                    </span>
                    <h2>What a checksum can do and what it cannot do</h2>
                </div>

                <div className="splitGrid">
                    <article className="splitCard success">
                        <h3>What it can do</h3>
                        <ul className="bulletList">
                            <li>Detect many accidental changes in data</li>
                            <li>
                                Help verify transfers, downloads and stored
                                files
                            </li>
                            <li>Provide a compact way to check integrity</li>
                            <li>
                                Signal when retransmission or error handling is
                                needed
                            </li>
                        </ul>
                    </article>

                    <article className="splitCard danger">
                        <h3>What it cannot do by itself</h3>
                        <ul className="bulletList">
                            <li>
                                Guarantee perfect security against malicious
                                tampering
                            </li>
                            <li>
                                Always repair the damaged data automatically
                            </li>
                            <li>Tell you exactly where every error happened</li>
                            <li>
                                Replace stronger cryptographic verification when
                                security matters
                            </li>
                        </ul>
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
                        <FiClock />
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
                    A checksum is one of the most practical ideas in computing.
                    It gives systems a compact way to ask an important question:
                    "Did the data survive unchanged?" It does not need to know
                    the entire original file again. It just needs a calculated
                    value that can be checked later.
                </p>

                <p>
                    Once you understand checksums, a lot of everyday computing
                    suddenly becomes more logical - file verification, download
                    validation, packet checking, storage reliability, backup
                    integrity and many low level data systems.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default ChecksumsDetectingErrorsInData;
