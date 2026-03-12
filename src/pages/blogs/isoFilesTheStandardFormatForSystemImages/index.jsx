import React from "react";
import {
    FiHardDrive,
    FiDisc,
    FiDownload,
    FiFolder,
    FiBox,
    FiCheckCircle,
    FiAlertCircle,
    FiLayers,
    FiCpu,
    FiMonitor,
    FiTool,
    FiArrowRight,
    FiShield,
    FiPlayCircle,
    FiPackage,
    FiInfo,
} from "react-icons/fi";
import { FaUsb } from "react-icons/fa";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const quickCards = [
    {
        icon: <FiDisc />,
        title: "What an ISO is",
        text: "An ISO file is a complete image of a disc or a bootable system package stored inside one single file.",
    },
    {
        icon: <FiLayers />,
        title: "What it contains",
        text: "It can contain folders, files, boot information and the exact structure needed to recreate a disc or installation media.",
    },
    {
        icon: <FaUsb />,
        title: "Why people use it",
        text: "It is commonly used for operating system installers, rescue tools, bootable utilities and software distribution.",
    },
];

const conceptCards = [
    {
        icon: <FiBox />,
        title: "Think of it like a packed snapshot",
        text: "An ISO file is not just a normal folder compressed into one file. It is more like a full snapshot of a disc layout captured into a single image file.",
    },
    {
        icon: <FiFolder />,
        title: "It preserves structure",
        text: "It keeps the file structure, directory layout and often the boot information needed for installation or startup.",
    },
    {
        icon: <FiHardDrive />,
        title: "It can be mounted or written",
        text: "You can open it virtually like a disc on your computer or write it to a USB drive to create bootable media.",
    },
];

const commonUses = [
    {
        icon: <FiMonitor />,
        title: "Installing Windows or Linux",
        text: "Operating systems are often distributed as ISO files so users can create installation media and install the system on a new computer.",
    },
    {
        icon: <FiShield />,
        title: "Recovery and rescue tools",
        text: "Antivirus recovery disks, system repair tools and live rescue environments are often distributed as ISO files.",
    },
    {
        icon: <FiTool />,
        title: "Testing in virtual machines",
        text: "You can attach an ISO directly to a virtual machine and boot from it without needing a physical disc or USB drive.",
    },
    {
        icon: <FiPackage />,
        title: "Software distribution",
        text: "Some large software packages and archival distributions are shared as ISO images for convenience and consistency.",
    },
];

const examples = [
    {
        title: "Example 1 - Downloading Windows installation media",
        text: "When you download Windows from Microsoft, the file is often an ISO. You then use a tool to write that ISO to a USB drive so the computer can boot from it and start setup.",
    },
    {
        title: "Example 2 - Trying Linux without installing it first",
        text: "A Linux distribution ISO can be written to a USB drive. Then you can boot from that USB and try Linux in live mode before installing it.",
    },
    {
        title: "Example 3 - Opening an ISO inside Windows",
        text: "Modern Windows versions can mount many ISO files directly. That means the ISO appears like a virtual disc drive so you can open its files without burning anything.",
    },
    {
        title: "Example 4 - Using VirtualBox or VMware",
        text: "Instead of writing the ISO to USB, you can attach the ISO file directly to a virtual machine as if it were a real DVD. The virtual machine then boots from it.",
    },
    {
        title: "Example 5 - Keeping a clean installer backup",
        text: "A person may keep an ISO file of an operating system or rescue tool so it can be used later to recreate a bootable installer whenever needed.",
    },
];

const stepsToUseIso = [
    {
        icon: <FiDownload />,
        title: "Download the ISO",
        text: "Get the ISO file from a trusted official source if possible.",
    },
    {
        icon: <FiCheckCircle />,
        title: "Verify if needed",
        text: "Some sites provide checksums so you can confirm the file downloaded correctly and was not corrupted.",
    },
    {
        icon: <FiDisc />,
        title: "Mount it or inspect it",
        text: "If you just want to view files, you may be able to mount the ISO directly.",
    },
    {
        icon: <FaUsb />,
        title: "Write it to USB for booting",
        text: "If you want to install an operating system, use a proper tool to create a bootable USB from the ISO.",
    },
    {
        icon: <FiPlayCircle />,
        title: "Boot from the USB or VM",
        text: "Restart the system or virtual machine and boot from the medium created from the ISO.",
    },
];

const isoVsZipRows = [
    {
        feature: "Main purpose",
        iso: "Disc or bootable image",
        zip: "Compressed archive for general file packaging",
    },
    {
        feature: "Keeps boot structure",
        iso: "Yes, often",
        zip: "No, not in the same bootable way",
    },
    {
        feature: "Used for installers",
        iso: "Very common",
        zip: "Sometimes for file delivery, not usually full boot media",
    },
    {
        feature: "Can act like a virtual disc",
        iso: "Yes",
        zip: "No",
    },
    {
        feature: "Typical use case",
        iso: "Operating systems, rescue tools, installation media",
        zip: "Documents, projects, general compression and transfer",
    },
];

const commonTerms = [
    {
        icon: <FiInfo />,
        title: "Disk image",
        text: "A disk image is a file that represents the contents and structure of a storage medium. ISO is a very common disk image format.",
    },
    {
        icon: <FiDisc />,
        title: "Mounting",
        text: "Mounting means making the ISO appear like a readable disc drive without burning it to a physical disc.",
    },
    {
        icon: <FaUsb />,
        title: "Bootable USB",
        text: "A USB drive created from an ISO in a way that allows a computer to start from it.",
    },
    {
        icon: <FiCheckCircle />,
        title: "Checksum",
        text: "A checksum is a value used to verify that a downloaded ISO file is complete and unchanged.",
    },
];

const myths = [
    {
        title: "Myth - An ISO is just a renamed ZIP file",
        text: "No. A ZIP archive and an ISO file are different things. A ZIP mainly compresses and packages files. An ISO represents a disc image and can preserve boot related structure.",
    },
    {
        title: "Myth - Copying an ISO file to USB is enough to make it bootable",
        text: "Usually not. A proper bootable USB tool is typically required because the USB must be written in the correct bootable format, not just used like normal file storage.",
    },
    {
        title: "Myth - ISO files are only for DVDs",
        text: "They became popular with disc media, but today ISO files are heavily used with USB installers, virtual machines and system recovery tools.",
    },
    {
        title: "Myth - Mounting and booting are the same thing",
        text: "Mounting lets you open the ISO like a virtual disc inside your current system. Booting means starting a machine from that image as startup media.",
    },
];

const faqItems = [
    {
        question: "Why is it called ISO?",
        answer: "The name comes from the ISO 9660 standard related to CD and disc file systems. In everyday usage people simply say ISO file to mean a disc image file.",
    },
    {
        question: "Can I open an ISO like a normal folder?",
        answer: "Often yes. Modern operating systems can mount many ISO files directly so you can browse the contents.",
    },
    {
        question: "Can I install Windows by double clicking the ISO?",
        answer: "Sometimes you can run setup from inside an already running system, but for a clean install you usually create bootable media from the ISO and boot from it.",
    },
    {
        question:
            "Why does an operating system download come as ISO instead of many loose files?",
        answer: "Because an ISO keeps the full installer structure together in one controlled image that is easy to distribute and recreate on installation media.",
    },
    {
        question: "Is an ISO always bootable?",
        answer: "Not always. Many ISO files are bootable, especially installer and rescue images, but not every ISO has boot information.",
    },
    {
        question: "Should I delete the ISO after making a bootable USB?",
        answer: "That depends on you. Some people keep it as a backup so they can create another bootable USB later without downloading it again.",
    },
];

const IsoFilesTheStandardFormatForSystemImages = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiDisc />
                            Boot media and system images
                        </span>
                    </div>

                    <h1>ISO Files - The Standard Format for System Images</h1>

                    <p className="lead">
                        If you have ever downloaded Windows, Linux, a recovery
                        tool or a bootable utility, you have probably seen an
                        ISO file. It is one of the most important file formats
                        in the world of operating systems, installation media
                        and system recovery. Once you understand what an ISO
                        actually is, a lot of computer setup tasks start making
                        much more sense.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        {quickCards.map((item) => (
                            <article key={item.title} className="heroQuickCard">
                                <span className="quickIcon">{item.icon}</span>
                                <div>
                                    <strong>{item.title}</strong>
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
                    <h2>Start with the simplest definition</h2>
                </div>

                <p>
                    An ISO file is a disk image file. In plain language, it is a
                    single file that contains the contents and structure of a
                    disc or system image in a way that can often be recreated,
                    mounted or used for booting.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            An ISO file is a single file that stores the full
                            layout of a disc or installation image, often
                            including the files and startup information needed
                            for setup or recovery.
                        </p>
                    </div>
                </div>

                <div className="conceptGrid">
                    {conceptCards.map((item) => (
                        <article key={item.title} className="conceptCard">
                            <span className="conceptIcon">{item.icon}</span>
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
                    <h2>Why ISO files matter so much</h2>
                </div>

                <p>
                    ISO files matter because they let software publishers share
                    a complete installable image in one neat package. Instead of
                    sending hundreds or thousands of separate files, they can
                    send one image that preserves the exact structure needed for
                    installation or booting.
                </p>

                <ul className="bulletList">
                    <li>They keep everything together in one file.</li>
                    <li>They can preserve boot information.</li>
                    <li>They are ideal for installation media.</li>
                    <li>They work well with virtual machines.</li>
                    <li>They are useful for recovery and rescue tools.</li>
                </ul>

                <p>
                    That is why operating system downloads and system recovery
                    tools are so often distributed as ISO files.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiTool />
                    </span>
                    <h2>Where you usually see ISO files in real life</h2>
                </div>

                <div className="usesGrid">
                    {commonUses.map((item) => (
                        <article key={item.title} className="useCard">
                            <span className="useIcon">{item.icon}</span>
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
                    <h2>How people usually work with an ISO file</h2>
                </div>

                <p>
                    An ISO file can be used in different ways depending on what
                    you want to do. Sometimes you just inspect it. Sometimes you
                    mount it. Sometimes you turn it into a bootable USB drive.
                </p>

                <div className="stepsGrid">
                    {stepsToUseIso.map((item, index) => (
                        <article key={item.title} className="stepCard">
                            <div className="stepTop">
                                <span className="stepIndex">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="stepIcon">{item.icon}</span>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="callout soft">
                    <span className="calloutIcon">
                        <FiPlayCircle />
                    </span>
                    <div>
                        <strong>Important idea</strong>
                        <p>
                            Downloading an ISO is only the beginning. What you
                            do next depends on whether you want to inspect it,
                            mount it, install from it or boot from it.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiMonitor />
                    </span>
                    <h2>Real examples that make the concept easy</h2>
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
                        <FiPackage />
                    </span>
                    <h2>ISO vs ZIP - not the same thing</h2>
                </div>

                <p>
                    Beginners often confuse ISO files with ZIP files because
                    both are single files that can contain other files inside.
                    But their jobs are different.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>ISO</th>
                                <th>ZIP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isoVsZipRows.map((row) => (
                                <tr key={row.feature}>
                                    <td>{row.feature}</td>
                                    <td>{row.iso}</td>
                                    <td>{row.zip}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p>
                    So if someone says "Just extract the ISO like a ZIP", that
                    may miss the whole point of the file. Many ISO files are
                    meant to be mounted or written to bootable media, not merely
                    unpacked.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiBox />
                    </span>
                    <h2>Important terms related to ISO files</h2>
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
                    <h2>What beginners often get wrong</h2>
                </div>

                <div className="mythGrid">
                    {myths.map((item) => (
                        <article key={item.title} className="mythCard">
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
                        <strong>Very important warning</strong>
                        <p>
                            If you want a bootable USB, do not just drag the ISO
                            file onto the USB like a normal file in most cases.
                            Use a proper bootable media creation tool.
                        </p>
                    </div>
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
                    An ISO file is not just a random large file with software
                    inside. It is a system image format used to preserve the
                    contents and structure of installation media or disc based
                    distributions inside one file. That is why it is so common
                    in operating systems, rescue tools, bootable utilities and
                    virtual machine setups.
                </p>

                <p>
                    Once you understand that an ISO is basically a portable
                    system image that can be mounted, inspected or turned into
                    boot media, the format stops feeling mysterious and starts
                    feeling very practical.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default IsoFilesTheStandardFormatForSystemImages;
