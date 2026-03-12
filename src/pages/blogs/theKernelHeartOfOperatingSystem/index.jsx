import React from "react";
import {
    FiCpu,
    FiHardDrive,
    FiShield,
    FiSettings,
    FiDatabase,
    FiLayers,
    FiCommand,
    FiMonitor,
    FiCheckCircle,
    FiAlertCircle,
    FiArrowRight,
    FiBox,
    FiTool,
    FiLock,
    FiActivity,
    FiPlayCircle,
    FiServer,
    FiZap,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const kernelJobs = [
    {
        icon: <FiCpu />,
        title: "Manages the CPU",
        text: "The kernel decides which program gets processor time and for how long. Without this control, multiple programs would fight for the CPU and the system would become unstable.",
    },
    {
        icon: <FiDatabase />,
        title: "Manages memory",
        text: "The kernel controls how RAM is used. It gives memory to programs, tracks what is free, and helps protect one program from reading or damaging another program's memory.",
    },
    {
        icon: <FiHardDrive />,
        title: "Manages storage access",
        text: "When programs read or write files, the kernel coordinates that work through the file system and storage drivers.",
    },
    {
        icon: <FiMonitor />,
        title: "Manages devices",
        text: "Keyboards, screens, printers, USB devices, sound cards and many other devices are accessed through the kernel with help from drivers.",
    },
    {
        icon: <FiShield />,
        title: "Provides protection",
        text: "The kernel helps isolate programs from each other and from critical system resources so that one app cannot casually destroy the whole machine.",
    },
    {
        icon: <FiLayers />,
        title: "Provides a bridge",
        text: "Applications usually do not talk directly to hardware. They ask the kernel, and the kernel handles the low level details.",
    },
];

const startupFlow = [
    {
        icon: <FiZap />,
        title: "Power on",
        text: "The computer powers up and firmware such as BIOS or UEFI starts first.",
    },
    {
        icon: <FiSettings />,
        title: "Bootloader starts",
        text: "After firmware finishes its job, it hands control to a bootloader.",
    },
    {
        icon: <FiPlayCircle />,
        title: "Kernel loads",
        text: "The bootloader loads the kernel into memory and starts it.",
    },
    {
        icon: <FiServer />,
        title: "Kernel initializes the system",
        text: "The kernel starts setting up memory, processor handling, devices and low level services.",
    },
    {
        icon: <FiCommand />,
        title: "Operating system services and apps begin",
        text: "After the kernel prepares the system, other parts of the operating system and then user applications can start.",
    },
];

const analogyCards = [
    {
        title: "Kernel as a traffic controller",
        text: "Imagine hundreds of vehicles trying to move through a city with no signals, no lanes and no police. Chaos. The kernel is like the central controller that keeps order between programs, memory, processor time and devices.",
    },
    {
        title: "Kernel as a manager",
        text: "Applications are like employees asking for resources. One wants memory, another wants disk access, another wants to print something. The kernel decides what is allowed, when it happens and how resources are shared.",
    },
    {
        title: "Kernel as a translator",
        text: "Applications speak in higher level requests like open file, play sound or display text. Hardware does not understand those directly. The kernel helps translate such requests into lower level actions.",
    },
];

const examples = [
    {
        title: "Example 1 - Opening a file",
        text: "When you open a PDF or image, your app does not directly control the storage hardware. It asks the operating system, and the kernel helps manage the file read operation.",
    },
    {
        title: "Example 2 - Playing music",
        text: "A music player sends requests to the system. The kernel works with audio related components so sound can be produced through the right hardware.",
    },
    {
        title: "Example 3 - Running many apps together",
        text: "You may have a browser, code editor, music player and chat app open at the same time. The kernel helps distribute CPU time and memory among all of them.",
    },
    {
        title: "Example 4 - Plugging in a USB device",
        text: "When you connect a USB device, the kernel plays a major role in detecting it, talking to the driver and making it available to the rest of the system.",
    },
    {
        title: "Example 5 - A program crashes",
        text: "If a normal application crashes, the whole operating system usually should not collapse. Kernel level protection helps isolate failures so one app does not automatically destroy everything else.",
    },
];

const userVsKernelRows = [
    {
        label: "Purpose",
        userMode:
            "Runs normal applications such as browsers, editors and games",
        kernelMode: "Runs core operating system code with deep hardware access",
    },
    {
        label: "Access level",
        userMode: "Limited and restricted",
        kernelMode: "High privilege and direct control",
    },
    {
        label: "Risk of failure",
        userMode: "App may crash without destroying the entire system",
        kernelMode:
            "A serious kernel level failure can affect the whole system",
    },
    {
        label: "Examples",
        userMode: "Chrome, VS Code, media player, chat app",
        kernelMode: "Memory manager, scheduler, low level hardware control",
    },
];

const keyTerms = [
    {
        icon: <FiActivity />,
        title: "Scheduler",
        text: "The scheduler is the kernel part that decides which process or thread gets CPU time and when.",
    },
    {
        icon: <FiDatabase />,
        title: "Memory management",
        text: "This is the part of the kernel responsible for allocating, tracking and protecting memory.",
    },
    {
        icon: <FiTool />,
        title: "Device driver",
        text: "A driver helps the kernel communicate with a specific hardware device.",
    },
    {
        icon: <FiLock />,
        title: "Privilege level",
        text: "The kernel operates with very high privilege because it must control critical system resources.",
    },
];

const myths = [
    {
        title: "Myth - The kernel is the whole operating system",
        text: "The kernel is the core part of the operating system, but the full operating system also includes many other parts such as utilities, graphical interfaces, services and user applications.",
    },
    {
        title: "Myth - Apps directly control hardware",
        text: "Usually they do not. In most cases, applications go through the operating system and the kernel rather than directly controlling hardware on their own.",
    },
    {
        title: "Myth - The kernel matters only to low level programmers",
        text: "Even if you never write low level code, understanding the kernel helps you understand performance, memory issues, device handling, crashes and system behavior.",
    },
    {
        title: "Myth - Kernel and driver are the same thing",
        text: "They are related, but not the same. Drivers help the kernel talk to specific hardware. The kernel is the larger core system that manages many areas at once.",
    },
];

const faqItems = [
    {
        question: "Is the kernel the first thing that starts?",
        answer: "Not exactly. Firmware starts first, then usually a bootloader, and then the kernel is loaded into memory and started.",
    },
    {
        question: "Can an operating system exist without a kernel?",
        answer: "A practical modern operating system needs some kind of kernel or kernel like core because it must manage hardware and resources.",
    },
    {
        question: "Why is the kernel called the heart of the operating system?",
        answer: "Because it handles the most essential low level responsibilities that keep the system alive and functional.",
    },
    {
        question: "Why are kernel level bugs considered serious?",
        answer: "Because the kernel has powerful access to the system. A serious fault there can affect the whole machine, not just one application.",
    },
    {
        question: "Does Windows have a kernel? Does Linux have one too?",
        answer: "Yes. Both Windows and Linux rely on kernels. They differ in design and implementation, but each operating system needs a core control layer.",
    },
    {
        question:
            "Do programmers working in web development need to understand kernels?",
        answer: "You do not need deep kernel programming knowledge for normal web work, but understanding the concept makes you better at debugging, performance thinking and general computer science reasoning.",
    },
];

const TheKernelTheMostImportantPartOfAnOperatingSystem = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiCpu />
                            Operating system fundamentals
                        </span>
                    </div>

                    <h1>
                        The Kernel - The Most Important Part of an Operating
                        System
                    </h1>

                    <p className="lead">
                        If the operating system is a city, the kernel is the
                        control room that keeps everything working. It manages
                        the processor, memory, devices and system level rules.
                        Most programs never directly control hardware. They go
                        through the kernel, which is why the kernel is often
                        called the heart of the operating system.
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
                                <strong>Core role</strong>
                                <p>
                                    The kernel manages hardware resources and
                                    provides the low level services needed by
                                    the rest of the operating system.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiShield />
                            </span>
                            <div>
                                <strong>Main value</strong>
                                <p>
                                    It keeps order, protection and coordination
                                    between programs and hardware.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiLayers />
                            </span>
                            <div>
                                <strong>Big idea</strong>
                                <p>
                                    Applications ask, the kernel decides, and
                                    the hardware responds through controlled
                                    system pathways.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiInfoFix />
                    </span>
                    <h2>Start with the simplest idea</h2>
                </div>

                <p>
                    A beginner friendly way to think about the kernel is this:
                    it is the part of the operating system that directly manages
                    the most important low level work. It decides how the
                    processor is shared, how memory is used, how devices are
                    accessed, and how programs are allowed to interact with the
                    machine.
                </p>

                <p>
                    Without the kernel, your applications would not have a safe,
                    organized and reliable way to use the hardware.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            The kernel is the central low level part of an
                            operating system that manages hardware resources and
                            provides essential services to software.
                        </p>
                    </div>
                </div>

                <div className="miniGrid">
                    <article className="miniCard">
                        <h3>It is not a normal app</h3>
                        <p>
                            The kernel has a special and powerful role inside
                            the system.
                        </p>
                    </article>

                    <article className="miniCard">
                        <h3>It runs close to hardware</h3>
                        <p>
                            This is why it can manage devices, memory and the
                            CPU directly.
                        </p>
                    </article>

                    <article className="miniCard">
                        <h3>It keeps order</h3>
                        <p>
                            Without it, programs would compete chaotically for
                            system resources.
                        </p>
                    </article>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>What the kernel actually does</h2>
                </div>

                <p>
                    The kernel is important because it sits between software and
                    hardware. It handles many critical responsibilities all the
                    time, not just at startup.
                </p>

                <div className="jobGrid">
                    {kernelJobs.map((item) => (
                        <article key={item.title} className="jobCard">
                            <span className="jobIcon">{item.icon}</span>
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
                    <h2>How the kernel fits into startup</h2>
                </div>

                <p>
                    The kernel does not appear out of nowhere. It becomes active
                    during the startup process after some earlier steps happen
                    first.
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
                        <strong>Important point</strong>
                        <p>
                            The kernel is not usually the first software layer,
                            but once it starts, it becomes one of the most
                            important active parts of the system.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiBox />
                    </span>
                    <h2>
                        Three analogies that make the kernel easy to understand
                    </h2>
                </div>

                <div className="analogyGrid">
                    {analogyCards.map((item) => (
                        <article key={item.title} className="analogyCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiMonitor />
                    </span>
                    <h2>Real examples from everyday computer use</h2>
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
                        <FiShield />
                    </span>
                    <h2>User mode vs kernel mode</h2>
                </div>

                <p>
                    One of the most important ideas in operating systems is that
                    not all code runs with the same level of authority. Normal
                    applications usually run with limited privileges, while
                    kernel code runs with much deeper system power.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>User mode</th>
                                <th>Kernel mode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userVsKernelRows.map((row) => (
                                <tr key={row.label}>
                                    <td>{row.label}</td>
                                    <td>{row.userMode}</td>
                                    <td>{row.kernelMode}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiAlertCircle />
                    </span>
                    <div>
                        <strong>Why this matters</strong>
                        <p>
                            Kernel level code is powerful, which is exactly why
                            mistakes at that level are more serious than
                            mistakes inside ordinary user applications.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiSettings />
                    </span>
                    <h2>Important terms related to the kernel</h2>
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
                        <FiCommand />
                    </span>
                    <h2>
                        Why the kernel is called the heart of the operating
                        system
                    </h2>
                </div>

                <p>
                    The kernel is called the heart because it keeps the system
                    alive at the most fundamental level. When applications need
                    resources, when memory must be tracked, when processor time
                    must be shared, when devices must be controlled, the kernel
                    is involved.
                </p>

                <ul className="bulletList">
                    <li>It keeps the processor busy in an organized way.</li>
                    <li>It prevents memory from becoming complete chaos.</li>
                    <li>It helps hardware become usable by software.</li>
                    <li>
                        It supports stability and protection across the system.
                    </li>
                    <li>It provides the foundation for everything above it.</li>
                </ul>
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
                    The kernel is the operating system's core control layer. It
                    manages the processor, memory, devices, storage access and
                    protection rules that make the whole system usable. Most
                    software depends on it even if users never see it directly.
                </p>

                <p>
                    Once you understand the kernel, many other topics begin to
                    click - processes, threads, memory, drivers, crashes,
                    permissions, performance and how software actually reaches
                    hardware. It is one of the most important ideas in all of
                    operating systems.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

const FiInfoFix = FiInfoComponent;

function FiInfoComponent() {
    return <FiLayers />;
}

export default TheKernelTheMostImportantPartOfAnOperatingSystem;
