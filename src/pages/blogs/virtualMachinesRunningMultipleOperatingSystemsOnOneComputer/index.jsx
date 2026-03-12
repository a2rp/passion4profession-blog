import React from "react";
import {
    FiMonitor,
    FiCpu,
    FiHardDrive,
    FiLayers,
    FiPlayCircle,
    FiBox,
    FiShield,
    FiSettings,
    FiCheckCircle,
    FiAlertCircle,
    FiArrowRight,
    FiDatabase,
    FiCode,
    FiServer,
    FiGlobe,
    FiCopy,
    FiZap,
    FiInfo,
    FiLock,
    FiTool,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const flowSteps = [
    {
        icon: <FiMonitor />,
        title: "You have one real computer",
        text: "This is your physical machine. It has the real processor, real RAM, real storage and the actual operating system installed on it.",
    },
    {
        icon: <FiLayers />,
        title: "A virtualization layer is used",
        text: "A virtualization program creates a controlled virtual environment. This layer lets one physical machine behave like it contains another separate computer inside it.",
    },
    {
        icon: <FiBox />,
        title: "A virtual machine is created",
        text: "You create a VM and assign it virtual hardware such as virtual RAM, virtual CPU cores, virtual disk space and sometimes virtual network settings.",
    },
    {
        icon: <FiPlayCircle />,
        title: "An operating system is installed inside the VM",
        text: "The VM can run its own operating system such as Windows, Linux or another supported system, almost like a separate computer.",
    },
    {
        icon: <FiCheckCircle />,
        title: "You can use both systems on one machine",
        text: "Your host system keeps running, and the guest operating system inside the VM also runs at the same time.",
    },
];

const comparisonRows = [
    {
        feature: "Real hardware",
        physical: "Uses hardware directly",
        virtual: "Uses virtual hardware created from real hardware",
    },
    {
        feature: "Isolation",
        physical: "Runs directly on the machine",
        virtual: "Runs inside a controlled sandbox like environment",
    },
    {
        feature: "Flexibility",
        physical: "Changing systems is slower and more involved",
        virtual: "Easy to create, delete, duplicate and test",
    },
    {
        feature: "Performance",
        physical: "Usually fastest",
        virtual: "Good, but some overhead exists",
    },
    {
        feature: "Risk level",
        physical: "System changes affect the real machine directly",
        virtual: "Mistakes usually stay inside the VM",
    },
    {
        feature: "Best use",
        physical: "Daily main computer work",
        virtual: "Testing, learning, development and isolated environments",
    },
];

const importantTerms = [
    {
        icon: <FiMonitor />,
        title: "Host machine",
        text: "The real physical computer running the virtualization software is called the host.",
    },
    {
        icon: <FiBox />,
        title: "Guest operating system",
        text: "The operating system running inside the virtual machine is called the guest.",
    },
    {
        icon: <FiLayers />,
        title: "Hypervisor",
        text: "A hypervisor is the technology layer that makes virtualization possible by managing virtual machines and hardware access.",
    },
    {
        icon: <FiHardDrive />,
        title: "Virtual disk",
        text: "A VM usually stores its virtual hard drive inside a file on the host system.",
    },
    {
        icon: <FiCpu />,
        title: "Allocated resources",
        text: "You decide how much RAM, CPU power and storage the VM should use from the host machine.",
    },
    {
        icon: <FiCopy />,
        title: "Snapshot",
        text: "A snapshot is like a saved state of a VM. It lets you return to an earlier point if something breaks.",
    },
];

const useCases = [
    {
        icon: <FiCode />,
        title: "Testing software safely",
        text: "You can install tools, packages or apps inside a VM without affecting your main operating system.",
    },
    {
        icon: <FiGlobe />,
        title: "Trying another operating system",
        text: "You can run Linux inside Windows or Windows inside another system without replacing your main setup.",
    },
    {
        icon: <FiShield />,
        title: "Security research and isolation",
        text: "Potentially risky files or experiments can be opened in a more controlled environment.",
    },
    {
        icon: <FiServer />,
        title: "Learning server administration",
        text: "You can create Linux server VMs to learn commands, networking, users, permissions and services.",
    },
    {
        icon: <FiTool />,
        title: "Development and testing",
        text: "Developers often use VMs to test apps in different environments, versions or system configurations.",
    },
    {
        icon: <FiSettings />,
        title: "Reproducible environments",
        text: "Teams can create standard VM setups so everyone works in similar conditions.",
    },
];

const examples = [
    {
        title: "Example 1 - Running Ubuntu inside Windows",
        text: "Suppose your main laptop runs Windows, but you want to learn Linux commands. Instead of dual booting, you can install a virtualization tool and run Ubuntu in a VM window inside Windows.",
    },
    {
        title: "Example 2 - Testing unknown software",
        text: "You want to test a tool but do not fully trust it. Installing it inside a VM is safer than installing it directly on your main system because the VM is more isolated.",
    },
    {
        title: "Example 3 - Practicing server setup",
        text: "You can create a Linux VM and use it to learn SSH, package installation, web servers, users, services and firewall rules without needing another physical machine.",
    },
    {
        title: "Example 4 - Classroom or lab work",
        text: "One powerful desktop can run multiple VMs for experiments. This is often easier than maintaining several separate physical systems.",
    },
    {
        title: "Example 5 - Breaking things on purpose",
        text: "Inside a VM, you can misconfigure settings, crash services or test recovery steps. If things go wrong, you can often restore a snapshot instead of repairing your whole real machine.",
    },
];

const advantages = [
    "Run multiple operating systems on one physical computer",
    "Learn safely without damaging your main setup",
    "Take snapshots and roll back changes",
    "Create test labs without buying extra machines",
    "Keep experiments isolated from the main system",
    "Useful for development, networking and system administration practice",
];

const limitations = [
    "Virtual machines still use real host resources like RAM, CPU and storage",
    "Performance is usually lower than running directly on real hardware",
    "Heavy 3D graphics or gaming often works better on native systems",
    "If the host machine is weak, the VM experience may feel slow",
    "Poor resource allocation can make both host and guest unstable or sluggish",
];

const typeRows = [
    {
        title: "Type 1 hypervisor",
        text: "Runs closer to the hardware and is commonly used in data centers and enterprise virtualization platforms.",
    },
    {
        title: "Type 2 hypervisor",
        text: "Runs as a normal application on top of an existing operating system. This is what most beginners use on personal computers.",
    },
];

const faqItems = [
    {
        question: "Is a virtual machine the same as an emulator?",
        answer: "Not exactly. Virtual machines usually rely on virtualization to run systems closer to real hardware behavior. Emulators often imitate different hardware or architectures more deeply. They are related ideas, but not always the same thing.",
    },
    {
        question: "Can a virtual machine damage my real operating system?",
        answer: "Usually the risk is much lower than running everything directly on the host. The VM is isolated, but it still uses the host's resources, so careless file sharing or network settings can reduce that isolation.",
    },
    {
        question: "Do I need a very powerful computer for VMs?",
        answer: "Not always, but more RAM, a decent processor and SSD storage make a huge difference. Weak hardware can run VMs too, but the experience may be slower.",
    },
    {
        question: "Can I use the internet inside a VM?",
        answer: "Yes. Virtual machines can use virtual network adapters and connect to the internet depending on how networking is configured.",
    },
    {
        question: "Can I install Windows inside Linux or Linux inside Windows?",
        answer: "Yes. That is one of the most common uses of virtual machines.",
    },
    {
        question: "What happens if the guest OS crashes?",
        answer: "Usually the host system stays fine. The guest VM may freeze or crash, but that crash is often contained inside the VM.",
    },
];

const myths = [
    {
        title: "Myth - A virtual machine is fake so it is useless",
        text: "A VM is virtual, but it is still extremely useful for learning, development, testing, labs and isolation. Many companies rely heavily on virtualization every day.",
    },
    {
        title: "Myth - A VM gives infinite extra computer power",
        text: "No. A VM borrows real resources from the host machine. It cannot create magical extra RAM or processor power from the void goblins.",
    },
    {
        title: "Myth - Running a VM means complete security",
        text: "A VM improves isolation, but it is not absolute magic armor. Poor configuration, unsafe sharing and advanced threats can still create risks.",
    },
    {
        title: "Myth - You only need VMs if you are an expert",
        text: "Beginners can benefit a lot from VMs because they offer a safer place to practice, break things and learn.",
    },
];

const VirtualMachinesRunningMultipleOperatingSystemsOnOneComputer = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiMonitor />
                            Virtualization fundamentals
                        </span>
                    </div>

                    <h1>
                        Virtual Machines - Running Multiple Operating Systems on
                        One Computer
                    </h1>

                    <p className="lead">
                        A virtual machine is like creating a computer inside
                        your computer. It lets one physical machine run another
                        operating system in an isolated virtual environment.
                        This is one of the most useful ideas in modern computing
                        because it helps with learning, testing, development,
                        labs, security experiments and server workloads.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiMonitor />
                            </span>
                            <div>
                                <strong>Host</strong>
                                <p>
                                    The real physical computer that provides the
                                    actual hardware.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiBox />
                            </span>
                            <div>
                                <strong>Guest</strong>
                                <p>
                                    The operating system running inside the
                                    virtual machine.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiLayers />
                            </span>
                            <div>
                                <strong>Main idea</strong>
                                <p>
                                    One machine can behave like many machines by
                                    dividing and managing resources carefully.
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
                    <h2>Start with the simplest possible idea</h2>
                </div>

                <p>
                    Suppose you already have one laptop with Windows installed.
                    Now imagine that inside that same laptop, in a window, you
                    run another operating system such as Ubuntu Linux. That
                    second operating system behaves like it has its own
                    computer, even though it is really borrowing resources from
                    the same physical machine.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            A virtual machine is a software created computer
                            that runs inside a real computer and can have its
                            own operating system, storage, memory and settings.
                        </p>
                    </div>
                </div>

                <div className="miniGrid">
                    <article className="miniCard">
                        <h3>Real machine</h3>
                        <p>
                            The physical computer is still the actual source of
                            CPU, RAM, storage and network hardware.
                        </p>
                    </article>

                    <article className="miniCard">
                        <h3>Virtual machine</h3>
                        <p>
                            The VM gets virtual versions of these resources and
                            uses them as if they were its own.
                        </p>
                    </article>

                    <article className="miniCard">
                        <h3>Main advantage</h3>
                        <p>
                            You can test and learn without directly disturbing
                            your main operating system.
                        </p>
                    </article>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiArrowRight />
                    </span>
                    <h2>How a virtual machine works</h2>
                </div>

                <p>
                    Virtualization may sound magical, but the idea is actually
                    very structured. The real machine shares part of its
                    resources with the virtual machine through a software layer.
                </p>

                <div className="flowGrid">
                    {flowSteps.map((item, index) => (
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
                        <strong>Key point</strong>
                        <p>
                            The guest system feels like a separate machine, but
                            underneath it is still using the host machine's real
                            hardware through virtualization.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiDatabase />
                    </span>
                    <h2>Physical computer vs virtual machine</h2>
                </div>

                <p>
                    The easiest way to understand VMs is to compare them
                    directly with normal physical computers.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Physical computer</th>
                                <th>Virtual machine</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row) => (
                                <tr key={row.feature}>
                                    <td>{row.feature}</td>
                                    <td>{row.physical}</td>
                                    <td>{row.virtual}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>Important terms you should know</h2>
                </div>

                <div className="termsGrid">
                    {importantTerms.map((item) => (
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
                        <FiSettings />
                    </span>
                    <h2>Why people use virtual machines</h2>
                </div>

                <p>
                    Virtual machines are not just a curiosity. They solve many
                    practical problems in learning, development and real
                    production work.
                </p>

                <div className="featureGrid">
                    {useCases.map((item) => (
                        <article key={item.title} className="featureCard">
                            <span className="featureIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiPlayCircle />
                    </span>
                    <h2>Real world examples that make the concept obvious</h2>
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
                        <FiZap />
                    </span>
                    <h2>Main advantages of virtual machines</h2>
                </div>

                <ul className="bulletList">
                    {advantages.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCopy />
                    </span>
                    <div>
                        <strong>Snapshots are a superpower</strong>
                        <p>
                            If your virtualization platform supports snapshots,
                            you can freeze a working state, test risky changes,
                            and then roll back if needed. That is ridiculously
                            useful for learning and testing.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiAlertCircle />
                    </span>
                    <h2>Limitations you should understand clearly</h2>
                </div>

                <ul className="bulletList">
                    {limitations.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <p>
                    A virtual machine is powerful, but it is not a cheat code
                    for unlimited performance. If the host system has weak
                    hardware, the guest system will also feel constrained.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiServer />
                    </span>
                    <h2>Type 1 and Type 2 hypervisors</h2>
                </div>

                <p>
                    Beginners do not always need to memorize this deeply on day
                    one, but it is useful to know the broad difference.
                </p>

                <div className="typeGrid">
                    {typeRows.map((item) => (
                        <article key={item.title} className="typeCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiLock />
                    </span>
                    <div>
                        <strong>Important practical note</strong>
                        <p>
                            Most personal computer users learn virtualization
                            first through Type 2 hypervisors because they run as
                            normal applications on an existing host operating
                            system.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiShield />
                    </span>
                    <h2>Are virtual machines safe?</h2>
                </div>

                <p>
                    They are usually safer than doing risky experiments directly
                    on your host system because they add isolation. But
                    isolation is not infinite magic. The VM still interacts with
                    the host through storage, networking, shared clipboard,
                    shared folders and other features if you enable them.
                </p>

                <ul className="bulletList">
                    <li>
                        Use VMs to reduce risk, not to pretend risk no longer
                        exists.
                    </li>
                    <li>Be careful with shared folders and copied files.</li>
                    <li>
                        Network settings matter if you are testing exposed
                        services.
                    </li>
                    <li>
                        Snapshots help recovery, but they are not backups of
                        everything forever.
                    </li>
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
                    A virtual machine is a software created computer running
                    inside a real computer. It gets virtual CPU, RAM, storage
                    and networking, then runs its own guest operating system as
                    if it were a separate machine.
                </p>

                <p>
                    This makes virtualization one of the most useful ideas in
                    modern computing because it gives you flexibility,
                    isolation, testability and learning power without needing a
                    room full of extra hardware.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default VirtualMachinesRunningMultipleOperatingSystemsOnOneComputer;
