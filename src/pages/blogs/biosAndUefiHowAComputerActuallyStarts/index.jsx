import React from "react";
import {
    FiCpu,
    FiHardDrive,
    FiSettings,
    FiZap,
    FiShield,
    FiCheckCircle,
    FiAlertCircle,
    FiLayers,
    FiPlayCircle,
    FiTool,
    FiBox,
    FiMonitor,
    FiDatabase,
    FiLock,
    FiArrowRight,
    FiInfo,
    FiCommand,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const startupFlow = [
    {
        icon: <FiZap />,
        title: "Power button is pressed",
        text: "Electric power reaches the motherboard, processor, memory, storage and other components. The machine is now physically awake, but the operating system has still not started.",
    },
    {
        icon: <FiCpu />,
        title: "Firmware starts first",
        text: "The first software to run is firmware stored on the motherboard. In older systems this is BIOS. In most modern systems this is UEFI.",
    },
    {
        icon: <FiCheckCircle />,
        title: "Basic hardware check happens",
        text: "The firmware checks whether key parts like RAM, processor, keyboard and storage are available and responding properly. This startup checking process is often called POST.",
    },
    {
        icon: <FiSettings />,
        title: "Hardware gets initialized",
        text: "The firmware prepares hardware so the computer can use it. It sets up low level communication with devices before the operating system takes over.",
    },
    {
        icon: <FiHardDrive />,
        title: "A bootable device is searched",
        text: "The firmware looks for a device that can start the operating system. This could be an SSD, HDD, USB drive or sometimes a network source.",
    },
    {
        icon: <FiPlayCircle />,
        title: "Bootloader is started",
        text: "After a valid boot target is found, the firmware hands control to a bootloader. The bootloader then starts Windows, Linux or another operating system.",
    },
];

const biosVsUefiRows = [
    {
        label: "Meaning",
        bios: "Basic Input Output System",
        uefi: "Unified Extensible Firmware Interface",
    },
    {
        label: "Age",
        bios: "Older startup system used in traditional PCs",
        uefi: "Newer and more advanced replacement",
    },
    {
        label: "Interface style",
        bios: "Usually simple keyboard based text menus",
        uefi: "Can support graphical menus, mouse input and richer settings",
    },
    {
        label: "Boot method",
        bios: "More limited and older style boot process",
        uefi: "More flexible startup process",
    },
    {
        label: "Drive support",
        bios: "Less friendly for very large modern drives",
        uefi: "Better support for large storage and modern partitioning",
    },
    {
        label: "Security",
        bios: "Very limited built in protection",
        uefi: "Can support Secure Boot and modern startup protections",
    },
    {
        label: "Speed and flexibility",
        bios: "Usually more limited",
        uefi: "Usually faster and more feature rich",
    },
];

const commonUses = [
    {
        icon: <FiHardDrive />,
        title: "Changing boot order",
        text: "You can decide whether the computer should try the SSD first, a USB drive first, or some other device first.",
    },
    {
        icon: <FiCommand />,
        title: "Installing a new operating system",
        text: "If you want to install Windows or Linux from a USB drive, you often need to enter BIOS or UEFI settings.",
    },
    {
        icon: <FiShield />,
        title: "Managing Secure Boot",
        text: "Some systems allow Secure Boot to be enabled or disabled depending on what you are trying to install or run.",
    },
    {
        icon: <FiCpu />,
        title: "Checking hardware information",
        text: "Many firmware menus show processor, RAM, storage and fan information directly on the setup screen.",
    },
    {
        icon: <FiTool />,
        title: "Enabling virtualization",
        text: "If you want to use some virtual machine software, you may need to enable virtualization features in firmware settings.",
    },
    {
        icon: <FiMonitor />,
        title: "Tuning low level settings",
        text: "Some desktops allow memory tuning, fan control, overclocking or power related settings through firmware menus.",
    },
];

const beginnerExamples = [
    {
        title: "Example 1 - Turning on a laptop",
        text: "You press the power button and after a few moments the Windows logo appears. During that short hidden period, BIOS or UEFI has already started, checked the machine and passed control to the operating system.",
    },
    {
        title: "Example 2 - Installing Linux from a USB drive",
        text: "You plug in a bootable USB and restart the computer. If the laptop still opens Windows instead of the USB installer, you may need to enter UEFI settings and change the boot order so the USB is checked first.",
    },
    {
        title: "Example 3 - Secure Boot confusion",
        text: "Some tools or operating systems may not start when Secure Boot is enabled. That does not mean the computer is broken. It often means the startup software is not matching the allowed secure startup rules.",
    },
    {
        title: "Example 4 - No operating system found",
        text: "If the firmware starts correctly but cannot find a bootable device, it may show an error such as no boot device found. This means BIOS or UEFI worked, but the next step failed.",
    },
    {
        title: "Example 5 - Upgrading storage",
        text: "You replace an old HDD with a new SSD. The firmware may detect the new drive first, then look for boot information. If the drive has no operating system yet, the computer will not boot normally.",
    },
];

const keyTerms = [
    {
        icon: <FiInfo />,
        title: "Firmware",
        text: "Firmware is low level software stored on hardware. BIOS and UEFI are firmware, not regular apps.",
    },
    {
        icon: <FiCheckCircle />,
        title: "POST",
        text: "POST means Power On Self Test. It is the early startup checking process that helps confirm essential hardware is available.",
    },
    {
        icon: <FiLayers />,
        title: "Bootloader",
        text: "A bootloader is the next program after firmware. It helps start the operating system.",
    },
    {
        icon: <FiDatabase />,
        title: "Boot device",
        text: "A boot device is the storage source from which the computer can start an operating system.",
    },
    {
        icon: <FiBox />,
        title: "Partition style",
        text: "Modern UEFI systems often work with GPT based setups, while older BIOS systems were commonly associated with older partitioning approaches.",
    },
    {
        icon: <FiLock />,
        title: "Secure Boot",
        text: "Secure Boot is a UEFI related feature meant to reduce the chance of untrusted startup code running before the operating system loads.",
    },
];

const myths = [
    {
        title: "Myth - BIOS and operating system are the same thing",
        text: "They are not the same. BIOS or UEFI starts first. The operating system starts after firmware hands over control.",
    },
    {
        title: "Myth - BIOS is useless now",
        text: "The old BIOS design is mostly replaced by UEFI, but the startup firmware layer is still absolutely necessary.",
    },
    {
        title: "Myth - Every setup screen is BIOS",
        text: "Many people still say BIOS settings, but modern systems usually use UEFI settings even if people casually call it BIOS.",
    },
    {
        title: "Myth - Changing firmware settings is always dangerous",
        text: "Not always. But careless changes can create boot problems. You should understand what a setting does before changing it.",
    },
];

const faqItems = [
    {
        question:
            "Why does the computer not directly open Windows the moment I press power?",
        answer: "Because the hardware first needs a low level startup system to check components, initialize devices and find where the operating system lives. BIOS or UEFI does that job.",
    },
    {
        question: "How do I open BIOS or UEFI settings?",
        answer: "Usually by pressing a key such as Delete, F2, F10 or Esc during startup. The exact key depends on the laptop or motherboard brand.",
    },
    {
        question: "Can BIOS or UEFI exist without a hard drive?",
        answer: "Yes. Firmware is stored on the motherboard, not on your SSD or HDD. That is why the setup screen can still open even if no storage drive is installed.",
    },
    {
        question: "Why do people still say BIOS when the machine uses UEFI?",
        answer: "Because BIOS became the popular word for startup firmware years ago. The name stuck in everyday conversation.",
    },
    {
        question: "Can a bad firmware setting stop the computer from booting?",
        answer: "Yes. Wrong boot order, disabled storage mode, incorrect security settings or unstable tuning can all cause boot issues.",
    },
    {
        question: "Does UEFI always mean better?",
        answer: "For most modern systems, yes, because it is more flexible, more secure and better suited to current hardware. But the main idea is that both BIOS and UEFI are startup firmware layers.",
    },
];

const BiosAndUefiHowAComputerActuallyStarts = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiCpu />
                            Computer startup fundamentals
                        </span>
                    </div>

                    <h1>BIOS and UEFI - How a Computer Actually Starts</h1>

                    <p className="lead">
                        Before Windows, Linux, or any operating system appears
                        on the screen, your computer first runs a low level
                        startup system stored on the motherboard. Older systems
                        use BIOS. Most modern systems use UEFI. Understanding
                        this single layer makes the whole boot process much
                        easier to understand.
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
                                <strong>BIOS</strong>
                                <p>
                                    The older traditional startup firmware used
                                    in earlier PCs.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiZap />
                            </span>
                            <div>
                                <strong>UEFI</strong>
                                <p>
                                    The modern replacement designed for better
                                    flexibility, security and hardware support.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiPlayCircle />
                            </span>
                            <div>
                                <strong>Main job</strong>
                                <p>
                                    Check hardware, prepare devices, find the
                                    bootloader and start the operating system.
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
                    Think of BIOS or UEFI as the computer's startup manager.
                    When you press the power button, the operating system is not
                    ready yet. The computer first needs something small and low
                    level that knows how to wake the machine up, test the
                    important parts, and figure out how to continue the startup
                    process.
                </p>

                <p>That is exactly where BIOS or UEFI comes in.</p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            BIOS or UEFI is startup firmware stored on the
                            motherboard that runs before the operating system.
                        </p>
                    </div>
                </div>

                <div className="miniGrid">
                    <article className="miniCard">
                        <h3>What it does first</h3>
                        <p>It starts as soon as the computer receives power.</p>
                    </article>

                    <article className="miniCard">
                        <h3>Why it matters</h3>
                        <p>
                            Without it, the computer would not know how to begin
                            loading the operating system.
                        </p>
                    </article>

                    <article className="miniCard">
                        <h3>Where it lives</h3>
                        <p>
                            It is stored on the motherboard as firmware, not as
                            a normal file inside Windows or Linux.
                        </p>
                    </article>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiArrowRight />
                    </span>
                    <h2>What happens when a computer starts</h2>
                </div>

                <p>
                    A lot of beginners think startup is just "press power and
                    open Windows". The real story has several steps.
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
                        <FiPlayCircle />
                    </span>
                    <div>
                        <strong>Key takeaway</strong>
                        <p>
                            The operating system does not start itself. Firmware
                            starts first and prepares the road.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>BIOS vs UEFI - the real difference</h2>
                </div>

                <p>
                    BIOS is the older startup system. UEFI is the newer and more
                    capable replacement. Many people still use the word BIOS for
                    any startup settings screen, but most modern machines
                    actually use UEFI.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>BIOS</th>
                                <th>UEFI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {biosVsUefiRows.map((row) => (
                                <tr key={row.label}>
                                    <td>{row.label}</td>
                                    <td>{row.bios}</td>
                                    <td>{row.uefi}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p>
                    In simple language, BIOS is the old road and UEFI is the
                    modern highway.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiTool />
                    </span>
                    <h2>
                        What you can actually do inside BIOS or UEFI settings
                    </h2>
                </div>

                <p>
                    The firmware setup screen is not just there for decoration.
                    It controls important startup and low level hardware
                    options.
                </p>

                <div className="featureGrid">
                    {commonUses.map((item) => (
                        <article key={item.title} className="featureCard">
                            <span className="featureIcon">{item.icon}</span>
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
                        <strong>Important caution</strong>
                        <p>
                            BIOS and UEFI settings can affect whether the
                            computer boots properly. Change settings carefully
                            and only when you understand what they do.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiMonitor />
                    </span>
                    <h2>
                        Real examples that make the topic easy to understand
                    </h2>
                </div>

                <div className="examplesGrid">
                    {beginnerExamples.map((item) => (
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
                    <h2>Important terms related to BIOS and UEFI</h2>
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
                    <h2>Why modern computers prefer UEFI</h2>
                </div>

                <p>
                    UEFI became popular because modern hardware needed a better
                    startup system. Larger drives, improved boot methods, better
                    hardware support and security features all pushed systems
                    away from classic BIOS.
                </p>

                <ul className="bulletList">
                    <li>It works better with modern large storage devices.</li>
                    <li>
                        It supports cleaner and often easier setup interfaces.
                    </li>
                    <li>It can support mouse input in firmware menus.</li>
                    <li>It can support Secure Boot.</li>
                    <li>
                        It gives manufacturers more flexibility for newer
                        hardware.
                    </li>
                </ul>

                <p>
                    So when people say BIOS on a modern laptop, the machine is
                    often actually using UEFI behind the scenes.
                </p>
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
                    BIOS and UEFI are the low level startup systems that run
                    before Windows or Linux. BIOS is the older traditional
                    model. UEFI is the modern replacement. Their job is to wake
                    the computer up, test basic hardware, prepare devices,
                    locate a bootable source and hand control to the operating
                    system.
                </p>

                <p>
                    Once this concept becomes clear, many other topics such as
                    boot order, Secure Boot, bootloaders, USB installation and
                    startup errors suddenly make much more sense.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default BiosAndUefiHowAComputerActuallyStarts;
