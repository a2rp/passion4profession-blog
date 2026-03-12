import React from "react";
import {
    FiCpu,
    FiHardDrive,
    FiPlayCircle,
    FiSettings,
    FiShield,
    FiLayers,
    FiCheckCircle,
    FiAlertCircle,
    FiArrowRight,
    FiBox,
    FiMonitor,
    FiTool,
    FiLock,
    FiInfo,
    FiCommand,
    FiServer,
    FiZap,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const startupFlow = [
    {
        icon: <FiZap />,
        title: "Power reaches the machine",
        text: "You press the power button and the hardware wakes up. The processor, memory, motherboard and storage devices receive power.",
    },
    {
        icon: <FiCpu />,
        title: "Firmware starts first",
        text: "Before Windows or Linux appears, BIOS or UEFI firmware starts first. It checks important hardware and prepares the system for the next stage.",
    },
    {
        icon: <FiHardDrive />,
        title: "Bootable device is located",
        text: "The firmware looks for a bootable device such as an SSD, HDD, USB drive or sometimes a network source.",
    },
    {
        icon: <FiPlayCircle />,
        title: "Bootloader is launched",
        text: "Once a valid boot target is found, the firmware loads the bootloader. The bootloader becomes the next important piece of code in the startup chain.",
    },
    {
        icon: <FiMonitor />,
        title: "Operating system starts loading",
        text: "The bootloader loads the operating system kernel and the system continues into the normal boot process.",
    },
];

const responsibilities = [
    {
        icon: <FiPlayCircle />,
        title: "Start the operating system",
        text: "The most basic job of a bootloader is to begin loading the operating system after firmware finishes its own work.",
    },
    {
        icon: <FiLayers />,
        title: "Bridge firmware and operating system",
        text: "The bootloader sits in the middle. Firmware runs first, the operating system comes later, and the bootloader connects the two stages.",
    },
    {
        icon: <FiSettings />,
        title: "Handle boot choices",
        text: "Some bootloaders can show a menu so you can choose between Windows, Linux, recovery mode or another installed system.",
    },
    {
        icon: <FiTool />,
        title: "Pass startup options",
        text: "A bootloader can pass special startup instructions to the operating system, such as safe mode options or kernel parameters.",
    },
];

const examples = [
    {
        title: "Example 1 - Windows startup",
        text: "When you turn on a Windows computer, BIOS or UEFI runs first, finds the Windows boot files, and then the Windows bootloader begins loading Windows.",
    },
    {
        title: "Example 2 - Linux dual boot machine",
        text: "If your system has both Windows and Linux, a bootloader such as GRUB may show a menu where you choose which operating system to start.",
    },
    {
        title: "Example 3 - Booting from a USB installer",
        text: "When you install an operating system from a USB drive, the firmware starts from the USB and then launches the bootloader stored on that installer media.",
    },
    {
        title: "Example 4 - No boot device found",
        text: "This error usually means the firmware could not find a usable bootloader on the expected storage device, or the storage itself is not being detected properly.",
    },
    {
        title: "Example 5 - Corrupted boot files",
        text: "If the bootloader files are damaged, the firmware may still work perfectly but the operating system still will not load.",
    },
    {
        title: "Example 6 - Secure Boot problem",
        text: "Some startup issues happen because the firmware security rules do not trust the bootloader being used. This is one area where Secure Boot becomes important.",
    },
];

const commonBootloaders = [
    {
        icon: <FiMonitor />,
        title: "Windows Boot Manager",
        text: "This is commonly used on Windows systems. It helps load Windows during startup.",
    },
    {
        icon: <FiServer />,
        title: "GRUB",
        text: "GRUB is a very common Linux bootloader. It is often used in Linux systems and dual boot setups.",
    },
    {
        icon: <FiBox />,
        title: "System specific bootloaders",
        text: "Some devices and embedded systems use their own custom bootloaders designed for that hardware.",
    },
];

const keyTerms = [
    {
        icon: <FiInfo />,
        title: "Firmware",
        text: "Firmware is low level software stored on hardware. BIOS and UEFI are firmware and they run before the bootloader.",
    },
    {
        icon: <FiCpu />,
        title: "Kernel",
        text: "The kernel is the core part of the operating system. The bootloader helps load it into memory.",
    },
    {
        icon: <FiHardDrive />,
        title: "Boot sector or boot files",
        text: "Older systems often relied on boot sectors. Modern systems often use structured boot files, especially on UEFI based setups.",
    },
    {
        icon: <FiLock />,
        title: "Secure Boot",
        text: "Secure Boot is a protection feature in many UEFI systems that helps allow trusted boot software and reduce certain startup attacks.",
    },
];

const myths = [
    {
        title: "Myth - The bootloader and BIOS are the same thing",
        text: "They are not the same. BIOS or UEFI runs first. The bootloader is the next stage after firmware.",
    },
    {
        title: "Myth - The operating system starts directly from the power button",
        text: "That skips important steps. First firmware starts, then the bootloader, and then the operating system begins loading.",
    },
    {
        title: "Myth - A computer with a working SSD will always boot",
        text: "Not necessarily. The storage can exist physically, but the bootloader or boot configuration may still be missing or damaged.",
    },
    {
        title: "Myth - Bootloaders matter only in Linux",
        text: "No. Windows also uses a bootloader. Linux users just notice bootloaders more often because dual boot menus are common there.",
    },
];

const faqItems = [
    {
        question: "What is a bootloader in one line?",
        answer: "A bootloader is the program that starts loading the operating system after BIOS or UEFI finishes its early startup work.",
    },
    {
        question: "Where does the bootloader live?",
        answer: "It usually lives on a bootable storage device such as an internal SSD, HDD, USB installer or other startup medium.",
    },
    {
        question: "Can a computer work without a bootloader?",
        answer: "Not in the normal startup path. Firmware needs some valid boot code or boot files to continue into the operating system.",
    },
    {
        question: "Why do dual boot systems show a menu before startup?",
        answer: "Because the bootloader can offer choices and let you decide which operating system to start.",
    },
    {
        question: "Can a broken bootloader be repaired?",
        answer: "Yes, many systems provide repair tools, recovery environments or commands that can rebuild or restore bootloader related files.",
    },
    {
        question: "Is the bootloader part of the operating system?",
        answer: "It is related to the operating system startup process, but it runs before the operating system is fully loaded.",
    },
];

const BootloadersAndStartup = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiPlayCircle />
                            Startup and boot process
                        </span>
                    </div>

                    <h1>
                        Bootloaders - The Program That Starts Your Operating
                        System
                    </h1>

                    <p className="lead">
                        A bootloader is one of the most important but least
                        noticed parts of a computer's startup process. It sits
                        between firmware and the operating system. Without it,
                        your system would have power, hardware and storage, but
                        it still would not know how to properly begin loading
                        Windows, Linux or another operating system.
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
                                <strong>Before the bootloader</strong>
                                <p>
                                    BIOS or UEFI checks hardware and finds a
                                    bootable source.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiPlayCircle />
                            </span>
                            <div>
                                <strong>The bootloader</strong>
                                <p>
                                    It takes over after firmware and begins
                                    loading the operating system.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiMonitor />
                            </span>
                            <div>
                                <strong>After the bootloader</strong>
                                <p>
                                    The operating system kernel starts loading
                                    and the machine continues booting normally.
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
                    <h2>Start with the simplest possible meaning</h2>
                </div>

                <p>
                    A bootloader is a small but critical program whose job is to
                    start loading the operating system after the computer
                    firmware finishes its initial startup work.
                </p>

                <p>In plain language, think of startup like a relay race:</p>

                <ul className="bulletList">
                    <li>Power button starts the machine.</li>
                    <li>BIOS or UEFI runs first.</li>
                    <li>Then the bootloader takes over.</li>
                    <li>Then the operating system starts loading.</li>
                </ul>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            A bootloader is the program that loads the operating
                            system after firmware finishes the early startup
                            stage.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiArrowRight />
                    </span>
                    <h2>Where the bootloader fits in the startup chain</h2>
                </div>

                <p>
                    Many beginners think the operating system just appears
                    directly after the power button is pressed. In reality,
                    there are multiple stages.
                </p>

                <div className="flowGrid">
                    {startupFlow.map((item, index) => (
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
                        <FiLayers />
                    </span>
                    <div>
                        <strong>Why this matters</strong>
                        <p>
                            If firmware works but the bootloader fails, the
                            operating system still will not start. This is why
                            startup problems are not always caused by Windows or
                            Linux itself.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiSettings />
                    </span>
                    <h2>What a bootloader actually does</h2>
                </div>

                <div className="featureGrid">
                    {responsibilities.map((item) => (
                        <article key={item.title} className="featureCard">
                            <span className="featureIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    So the bootloader is not just a random startup file. It is
                    the stage that actively begins the operating system loading
                    process.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiMonitor />
                    </span>
                    <h2>
                        Real examples that make bootloaders easy to understand
                    </h2>
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
                    <h2>Common bootloaders you may hear about</h2>
                </div>

                <div className="miniGrid">
                    {commonBootloaders.map((item) => (
                        <article key={item.title} className="miniCard">
                            <span className="miniIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    The exact bootloader depends on the system and operating
                    system, but the role remains similar - start the operating
                    system after firmware finishes.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLock />
                    </span>
                    <h2>Bootloaders, UEFI and Secure Boot</h2>
                </div>

                <p>
                    On many modern systems, UEFI firmware can work together with
                    Secure Boot. Secure Boot helps check whether the boot
                    software is trusted before allowing the startup process to
                    continue.
                </p>

                <p>
                    This means the bootloader is not just loaded blindly. In
                    some systems, the firmware may verify whether the bootloader
                    is allowed under the active security policy.
                </p>

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiAlertCircle />
                    </span>
                    <div>
                        <strong>Important startup detail</strong>
                        <p>
                            Some boot problems happen not because the bootloader
                            is missing, but because firmware security settings
                            do not allow it to run.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiCommand />
                    </span>
                    <h2>Important terms related to bootloaders</h2>
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
                        <FiShield />
                    </span>
                    <h2>Why bootloaders matter so much</h2>
                </div>

                <ul className="bulletList">
                    <li>They are necessary for operating system startup.</li>
                    <li>They can provide boot menus for multiple systems.</li>
                    <li>
                        They help pass startup information to the operating
                        system.
                    </li>
                    <li>
                        They are often involved when repairing startup problems.
                    </li>
                    <li>
                        They are a major part of the trust chain in secure
                        startup.
                    </li>
                </ul>

                <p>
                    So even though users rarely think about bootloaders during
                    normal daily work, they are one of the core reasons a
                    machine can move from powered hardware to a running
                    operating system.
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
                    A bootloader is the program that starts loading the
                    operating system after BIOS or UEFI finishes its early
                    hardware and startup work. It is the bridge between firmware
                    and the operating system.
                </p>

                <p>
                    Once you understand this role clearly, many startup topics
                    become easier to understand - boot menus, no boot device
                    errors, dual boot systems, Secure Boot, recovery tools and
                    startup repair all begin to make much more sense.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default BootloadersAndStartup;
