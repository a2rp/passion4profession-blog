import React from "react";
import {
    FiHardDrive,
    FiDatabase,
    FiLayers,
    FiCheckCircle,
    FiAlertCircle,
    FiCpu,
    FiFolder,
    FiFileText,
    FiShield,
    FiZap,
    FiBox,
    FiArrowRight,
    FiInfo,
    FiMonitor,
} from "react-icons/fi";
import { FaUsb } from "react-icons/fa";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const analogyCards = [
    {
        icon: <FiHardDrive />,
        title: "Storage is like land",
        text: "Your SSD, HDD, memory card or USB drive is the physical space where data can live.",
    },
    {
        icon: <FiLayers />,
        title: "File system is the organization rule",
        text: "A file system decides how folders, files, names, locations and free space are managed on that storage.",
    },
    {
        icon: <FiFolder />,
        title: "Without a file system, storage is chaos",
        text: "The computer would have raw space, but no proper way to organize and find files reliably.",
    },
];

const coreJobs = [
    {
        icon: <FiFileText />,
        title: "Store files",
        text: "It helps save files like photos, videos, documents, installers and projects.",
    },
    {
        icon: <FiFolder />,
        title: "Organize folders",
        text: "It gives structure so files can live inside folders and subfolders in a meaningful way.",
    },
    {
        icon: <FiDatabase />,
        title: "Track free and used space",
        text: "It keeps account of which storage blocks are occupied and which are available.",
    },
    {
        icon: <FiCpu />,
        title: "Help the operating system access data",
        text: "It lets Windows, Linux and other systems read, write, rename, move and delete files.",
    },
];

const comparisonRows = [
    {
        feature: "Best known use",
        fat32: "Older USB drives, memory cards, simple compatibility",
        ntfs: "Windows system drives and internal storage",
        exfat: "Modern flash drives and large portable storage",
    },
    {
        feature: "Maximum single file size",
        fat32: "4 GB limit",
        ntfs: "Much larger files supported",
        exfat: "Much larger files supported",
    },
    {
        feature: "Compatibility",
        fat32: "Very widely supported",
        ntfs: "Best with Windows, mixed support elsewhere",
        exfat: "Good modern cross platform support",
    },
    {
        feature: "Good for Windows system drive",
        fat32: "No",
        ntfs: "Yes",
        exfat: "No",
    },
    {
        feature: "Permissions and advanced features",
        fat32: "Very limited",
        ntfs: "Strong support",
        exfat: "More basic than NTFS",
    },
    {
        feature: "Typical usage today",
        fat32: "Small removable media and legacy devices",
        ntfs: "Internal Windows drives",
        exfat: "Large USB drives, SD cards and external storage",
    },
];

const formatCards = [
    {
        icon: <FaUsb />,
        title: "FAT32",
        text: "FAT32 is old, simple and widely compatible. Many devices understand it, which is why it is still used on USB drives and memory cards. Its biggest weakness is the 4 GB file size limit.",
        examples: [
            "A small USB drive used across old TVs, printers and cars",
            "A memory card where broad device compatibility matters",
            "A bootable utility drive for older tools",
        ],
    },
    {
        icon: <FiShield />,
        title: "NTFS",
        text: "NTFS is the standard file system used by modern Windows installations. It supports large files, better reliability, permissions, journaling and more advanced features than FAT32.",
        examples: [
            "A Windows C drive",
            "A laptop SSD used mainly inside Windows",
            "A work PC where file permissions and stability matter",
        ],
    },
    {
        icon: <FiZap />,
        title: "exFAT",
        text: "exFAT is designed mainly for modern removable storage. It avoids the 4 GB FAT32 limitation and is often a better choice for large USB drives, SD cards and external SSDs shared across devices.",
        examples: [
            "A 128 GB pen drive for videos larger than 4 GB",
            "A memory card used with modern cameras",
            "An external SSD moving files between different systems",
        ],
    },
];

const realExamples = [
    {
        title: "Example 1 - A 6 GB movie file does not copy to a FAT32 USB drive",
        text: "The drive may still have enough free space, but FAT32 has a maximum single file size limit of 4 GB. So the copy fails even though the storage is not full.",
    },
    {
        title: "Example 2 - Windows system drive uses NTFS",
        text: "Most Windows installations use NTFS because the operating system needs features that FAT32 and exFAT do not provide in the same way.",
    },
    {
        title: "Example 3 - A new memory card comes as exFAT",
        text: "Modern high capacity cards often use exFAT because they may hold very large video files and need better practical limits than FAT32.",
    },
    {
        title: "Example 4 - A very old device only reads FAT32",
        text: "Some old media players, TVs, routers and car systems only understand FAT32. In such cases, wider compatibility matters more than advanced features.",
    },
];

const commonTerms = [
    {
        icon: <FiInfo />,
        title: "Formatting",
        text: "Formatting prepares storage with a file system so it can store data in an organized way.",
    },
    {
        icon: <FiDatabase />,
        title: "Partition",
        text: "A partition is a logical section of a storage device. Each partition can use its own file system.",
    },
    {
        icon: <FiShield />,
        title: "Journaling",
        text: "Journaling is a reliability feature used by NTFS to help reduce damage during unexpected shutdowns or crashes.",
    },
    {
        icon: <FiFileText />,
        title: "File size limit",
        text: "This means the largest size a single file can have on a given file system.",
    },
];

const faqItems = [
    {
        question: "Is a file system the same as storage?",
        answer: "No. Storage is the physical device like an SSD or USB drive. The file system is the method used to organize data on that device.",
    },
    {
        question: "Why does Windows ask me to format a new drive?",
        answer: "Because the drive may not yet have a usable file system, or it may use one the system cannot currently work with properly.",
    },
    {
        question: "Which one is best for a Windows internal drive?",
        answer: "Usually NTFS, because Windows is designed to work deeply with it for system storage.",
    },
    {
        question: "Which one is best for a USB drive used in many devices?",
        answer: "It depends. FAT32 gives broad compatibility, but exFAT is often better for modern large drives because it supports larger files.",
    },
    {
        question: "Can I change FAT32 to NTFS or exFAT later?",
        answer: "Yes, but often this involves formatting, and formatting can erase data. So backup matters.",
    },
    {
        question: "Does exFAT replace NTFS?",
        answer: "Not really. exFAT is great for removable storage, but NTFS is still more suitable for Windows system drives and advanced Windows usage.",
    },
];

const myths = [
    {
        title: "Myth - More file systems means one of them is useless",
        text: "Different file systems exist because different situations need different tradeoffs like compatibility, limits, portability and advanced features.",
    },
    {
        title: "Myth - Formatting only deletes files and does nothing else",
        text: "Formatting does much more. It prepares the storage structure and applies or changes the file system.",
    },
    {
        title: "Myth - exFAT is always better than NTFS",
        text: "exFAT is not automatically better. It is better in some portable storage situations, but NTFS is usually better for Windows internal system usage.",
    },
    {
        title: "Myth - FAT32 is outdated so it has no use",
        text: "FAT32 is old, but it still matters because many older and simpler devices support it reliably.",
    },
];

const Fat32NtfsExfatUnderstandingFileSystems = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiHardDrive />
                            Storage and file organization
                        </span>
                    </div>

                    <h1>FAT32, NTFS and exFAT - Understanding File Systems</h1>

                    <p className="lead">
                        A storage device is not useful just because it has
                        space. It also needs a system that tells the computer
                        how files should be stored, named, organized and found.
                        That system is called a file system. Once you understand
                        this idea, FAT32, NTFS and exFAT become much easier to
                        understand.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FaUsb />
                            </span>
                            <div>
                                <strong>FAT32</strong>
                                <p>
                                    Older, simple and widely compatible, but
                                    limited by a 4 GB single file size cap.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiShield />
                            </span>
                            <div>
                                <strong>NTFS</strong>
                                <p>
                                    The standard file system used by Windows for
                                    internal drives and advanced features.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiZap />
                            </span>
                            <div>
                                <strong>exFAT</strong>
                                <p>
                                    A modern choice for portable drives and
                                    large files with good practical flexibility.
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
                    <h2>What is a file system in the simplest possible way</h2>
                </div>

                <p>
                    Imagine buying a huge empty warehouse. The warehouse gives
                    you space, but that alone does not organize anything. You
                    still need rules for shelves, labels, sections and records
                    so you can actually find things later.
                </p>

                <p>
                    A storage device is like that warehouse. The file system is
                    the method used to organize files inside it.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            A file system is the structure a computer uses to
                            store, organize, find and manage files on a storage
                            device.
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
                        <FiFolder />
                    </span>
                    <h2>What a file system actually does</h2>
                </div>

                <p>
                    A file system is not just a technical label. It does real
                    practical work every time you save, open, move or delete
                    files.
                </p>

                <div className="featureGrid">
                    {coreJobs.map((item) => (
                        <article key={item.title} className="featureCard">
                            <span className="featureIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    That is why two drives with the same capacity can behave
                    differently depending on which file system they use.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>FAT32 vs NTFS vs exFAT - the big picture</h2>
                </div>

                <p>
                    These are three common file systems you will often see while
                    formatting drives, memory cards and external storage. Each
                    one was designed with different priorities.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>FAT32</th>
                                <th>NTFS</th>
                                <th>exFAT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row) => (
                                <tr key={row.feature}>
                                    <td>{row.feature}</td>
                                    <td>{row.fat32}</td>
                                    <td>{row.ntfs}</td>
                                    <td>{row.exfat}</td>
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
                        <strong>Quick summary</strong>
                        <p>
                            FAT32 is old and widely supported, NTFS is strong
                            for Windows internal use, and exFAT is often ideal
                            for modern removable storage.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiDatabase />
                    </span>
                    <h2>Understanding each one properly</h2>
                </div>

                <div className="formatGrid">
                    {formatCards.map((item) => (
                        <article key={item.title} className="formatCard">
                            <div className="formatTop">
                                <span className="formatIcon">{item.icon}</span>
                                <h3>{item.title}</h3>
                            </div>

                            <p>{item.text}</p>

                            <div className="exampleList">
                                <strong>Good examples</strong>
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
                        <FiMonitor />
                    </span>
                    <h2>Real world situations that make the topic clear</h2>
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
                        <FiBox />
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
                    <h2>How to choose the right file system</h2>
                </div>

                <p>
                    Beginners often ask which one is best. The honest answer is
                    that the right choice depends on what the drive is for.
                </p>

                <ul className="bulletList">
                    <li>
                        Choose FAT32 when you need very broad compatibility with
                        older or simple devices.
                    </li>
                    <li>
                        Choose NTFS when the drive will mainly live inside
                        Windows, especially for internal system use.
                    </li>
                    <li>
                        Choose exFAT when you want large file support on a
                        portable drive or memory card used across modern
                        systems.
                    </li>
                </ul>

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiAlertCircle />
                    </span>
                    <div>
                        <strong>Very important</strong>
                        <p>
                            Changing the file system usually means formatting
                            the drive, and formatting can erase existing data.
                            Always back up important files first.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiAlertCircle />
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
                    A storage device without a file system is just raw space. A
                    file system gives that space structure so files can be
                    saved, organized and found properly. FAT32, NTFS and exFAT
                    are not random format names. They represent different design
                    choices for compatibility, file size limits, portability and
                    advanced features.
                </p>

                <p>
                    Once you understand that a file system is basically the
                    rulebook for how data lives on a drive, the whole topic
                    stops feeling mysterious.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default Fat32NtfsExfatUnderstandingFileSystems;
