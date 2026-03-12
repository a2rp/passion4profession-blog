import React from "react";
import {
    FiCpu,
    FiLayers,
    FiGitBranch,
    FiPlayCircle,
    FiCheckCircle,
    FiAlertCircle,
    FiBox,
    FiClock,
    FiMonitor,
    FiSettings,
    FiActivity,
    FiCommand,
    FiArrowRight,
    FiShare2,
    FiHardDrive,
    FiCodesandbox,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const simpleCards = [
    {
        icon: <FiBox />,
        title: "Process",
        text: "A process is a running program with its own memory, resources and identity inside the operating system.",
    },
    {
        icon: <FiGitBranch />,
        title: "Thread",
        text: "A thread is a path of execution inside a process. A process can have one thread or many threads.",
    },
    {
        icon: <FiLayers />,
        title: "Relationship",
        text: "A process is the container. Threads are the workers inside that container doing the actual tasks.",
    },
];

const startupFlow = [
    {
        icon: <FiPlayCircle />,
        title: "You open an application",
        text: "When you open a browser, editor or game, the operating system creates a process for it.",
    },
    {
        icon: <FiBox />,
        title: "Resources are assigned",
        text: "The process gets memory space, access to files, handles, security context and other required resources.",
    },
    {
        icon: <FiGitBranch />,
        title: "At least one thread starts",
        text: "The process needs execution flow, so at least one thread begins running code.",
    },
    {
        icon: <FiActivity />,
        title: "More threads may appear",
        text: "The application may create extra threads for background work, UI updates, network tasks or calculations.",
    },
    {
        icon: <FiCheckCircle />,
        title: "The operating system schedules them",
        text: "The OS decides when each process and thread gets CPU time so many things can appear to run together.",
    },
];

const processVsThreadRows = [
    {
        point: "Basic meaning",
        process: "A running program",
        thread: "A unit of execution inside a process",
    },
    {
        point: "Memory",
        process: "Has its own memory space",
        thread: "Shares the process memory with sibling threads",
    },
    {
        point: "Isolation",
        process: "More isolated from other processes",
        thread: "Less isolated because threads inside one process share resources",
    },
    {
        point: "Communication",
        process: "Usually heavier and more controlled",
        thread: "Usually easier because shared memory already exists",
    },
    {
        point: "Creation cost",
        process: "Heavier to create",
        thread: "Lighter than a full process",
    },
    {
        point: "Failure impact",
        process: "Often isolated from unrelated processes",
        thread: "A bad thread can crash the whole process",
    },
];

const whyThreadsExist = [
    {
        icon: <FiMonitor />,
        title: "Keep the UI responsive",
        text: "A program may use one thread for the interface and another for heavy work so the app does not freeze.",
    },
    {
        icon: <FiActivity />,
        title: "Do background work",
        text: "Downloads, autosave, rendering, logging and syncing can run in background threads.",
    },
    {
        icon: <FiCpu />,
        title: "Use multiple CPU cores better",
        text: "Threads can help split work so a program can use modern multi-core processors more effectively.",
    },
    {
        icon: <FiCommand />,
        title: "Separate responsibilities",
        text: "One thread may listen for input, another may calculate results, another may wait for network responses.",
    },
];

const realExamples = [
    {
        title: "Example 1 - Web browser",
        text: "Your browser is a process. Inside it, one thread may handle the user interface, another may load a tab, another may decode video and another may handle network activity.",
    },
    {
        title: "Example 2 - Music player",
        text: "The app process exists as one program, but one thread may play audio while another updates the seek bar and another reads keyboard input.",
    },
    {
        title: "Example 3 - Code editor",
        text: "The editor process may keep the typing experience smooth using one thread while syntax checking, indexing and autosave happen in other threads.",
    },
    {
        title: "Example 4 - Game",
        text: "A game may have separate threads for rendering, input handling, physics, sound and resource loading.",
    },
    {
        title: "Example 5 - Operating system itself",
        text: "Your computer runs many processes at once such as browser, terminal, antivirus, file explorer and background services. Each of those may contain multiple threads.",
    },
];

const keyTerms = [
    {
        icon: <FiClock />,
        title: "Scheduling",
        text: "Scheduling means the operating system decides which process or thread gets CPU time and when.",
    },
    {
        icon: <FiHardDrive />,
        title: "Context switch",
        text: "A context switch happens when the CPU stops running one task and starts running another, saving and restoring state as needed.",
    },
    {
        icon: <FiLayers />,
        title: "Shared memory",
        text: "Threads of the same process usually share memory, which makes communication easier but also introduces risks.",
    },
    {
        icon: <FiSettings />,
        title: "Synchronization",
        text: "Synchronization means coordinating threads so they do not interfere with each other when using shared data.",
    },
];

const beginnerConfusions = [
    {
        title: "A process is not the same as a program file",
        text: "A program file is something stored on disk, like an app installer or executable. A process is what exists after that program starts running.",
    },
    {
        title: "A thread is not a separate app",
        text: "A thread belongs to a process. It does not normally live independently like a full separate process.",
    },
    {
        title: "More threads do not always mean faster code",
        text: "Too many threads can increase complexity, overhead and bugs. Threads help only when the work suits parallel or background execution.",
    },
    {
        title: "One app can create many processes",
        text: "Some apps use multiple processes intentionally. Modern browsers are a classic example.",
    },
];

const problemCards = [
    {
        title: "Race condition",
        text: "Two threads access shared data at the same time and the final result depends on timing. This can produce random and confusing bugs.",
    },
    {
        title: "Deadlock",
        text: "Two or more threads wait on each other forever, so none of them can move forward.",
    },
    {
        title: "Starvation",
        text: "One thread keeps getting ignored because others keep getting CPU time or resource access first.",
    },
    {
        title: "UI freezing",
        text: "Heavy work happens on the main thread, so the app stops responding to clicks and input until the work finishes.",
    },
];

const faqItems = [
    {
        question: "Can a process exist without a thread?",
        answer: "To actually execute code, a process needs at least one thread. In practical terms, running work means there is at least one thread involved.",
    },
    {
        question: "Why are threads considered lighter than processes?",
        answer: "Because threads inside one process usually share memory and resources instead of getting a fully separate environment from scratch.",
    },
    {
        question: "Why can threads be dangerous?",
        answer: "Because shared memory makes coordination harder. If two threads modify the same data carelessly, bugs can appear.",
    },
    {
        question: "Why use processes at all if threads are lighter?",
        answer: "Processes give stronger isolation. If one process crashes, unrelated processes are often safer than threads inside the same process would be.",
    },
    {
        question:
            "Does multi-core CPU mean every thread runs at the same time?",
        answer: "Not always. Some may run in parallel on different cores, while others are scheduled in turns depending on hardware and workload.",
    },
    {
        question: "Why does Task Manager show many processes?",
        answer: "Because your system is running many applications and services at the same time, and each running application or service can appear as one or more processes.",
    },
];

const ProcessesAndThreadsHowOperatingSystemsRunPrograms = () => {
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
                        Processes and Threads - How Operating Systems Run
                        Programs
                    </h1>

                    <p className="lead">
                        Every time you open an app, the operating system creates
                        a running environment for it. That environment is called
                        a process. Inside that process, the actual lines of
                        execution are called threads. Once this clicks, Task
                        Manager, CPU usage, responsiveness and many programming
                        concepts suddenly make much more sense.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        {simpleCards.map((item) => (
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
                        <FiInfoIcon />
                    </span>
                    <h2>Start with the simplest mental model</h2>
                </div>

                <p>
                    Imagine a restaurant kitchen. The restaurant itself is like
                    a process. Inside that kitchen, individual cooks are like
                    threads. The process gives the working environment, tools,
                    ingredients and space. The threads do the actual work.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            A process is a running program. A thread is a path
                            of execution inside that running program.
                        </p>
                    </div>
                </div>

                <div className="miniGrid">
                    <article className="miniCard">
                        <h3>Program</h3>
                        <p>
                            A file stored on disk, such as a browser executable
                            or a music player app.
                        </p>
                    </article>

                    <article className="miniCard">
                        <h3>Process</h3>
                        <p>
                            The running version of that program with memory and
                            resources.
                        </p>
                    </article>

                    <article className="miniCard">
                        <h3>Thread</h3>
                        <p>
                            The actual worker inside the process that executes
                            code.
                        </p>
                    </article>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiPlayCircle />
                    </span>
                    <h2>What happens when you open an application</h2>
                </div>

                <p>
                    Startup is more than just clicking an icon. The operating
                    system has to prepare a proper running environment.
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
                        <FiArrowRight />
                    </span>
                    <div>
                        <strong>Key idea</strong>
                        <p>
                            The process is the environment. The thread is the
                            active flow that actually runs the instructions.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>Process vs thread - the core difference</h2>
                </div>

                <p>
                    These two ideas are related, but they are not the same.
                    Beginners often mix them up because both are connected to
                    running code.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Point</th>
                                <th>Process</th>
                                <th>Thread</th>
                            </tr>
                        </thead>
                        <tbody>
                            {processVsThreadRows.map((row) => (
                                <tr key={row.point}>
                                    <td>{row.point}</td>
                                    <td>{row.process}</td>
                                    <td>{row.thread}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p>
                    If you remember only one thing, remember this - a process is
                    the bigger container, and threads are the workers inside it.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiGitBranch />
                    </span>
                    <h2>Why threads exist at all</h2>
                </div>

                <p>
                    Threads exist because a single application often needs to do
                    more than one kind of work. Without threads, many programs
                    would feel slow, frozen or poorly organized.
                </p>

                <div className="featureGrid">
                    {whyThreadsExist.map((item) => (
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
                        <FiMonitor />
                    </span>
                    <h2>Real examples from daily computer use</h2>
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
                        <FiCommand />
                    </span>
                    <h2>Important terms related to processes and threads</h2>
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
                        <FiAlertCircle />
                    </span>
                    <h2>Beginner confusions that cause trouble</h2>
                </div>

                <div className="mythGrid">
                    {beginnerConfusions.map((item) => (
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
                        <FiSettings />
                    </span>
                    <h2>Common problems when multiple threads are involved</h2>
                </div>

                <p>
                    Threads are useful, but shared work also creates complexity.
                    This is where many bugs are born.
                </p>

                <div className="problemGrid">
                    {problemCards.map((item) => (
                        <article key={item.title} className="problemCard">
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
                            Threads can improve responsiveness and performance,
                            but careless shared access to data can produce some
                            of the hardest bugs to debug.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiActivity />
                    </span>
                    <h2>
                        What the operating system is doing behind the scenes
                    </h2>
                </div>

                <p>
                    Your CPU may have a limited number of cores, but your system
                    may still appear to run dozens or even hundreds of tasks.
                    That is because the operating system schedules work in small
                    chunks and switches between tasks very quickly.
                </p>

                <ul className="bulletList">
                    <li>
                        The OS keeps track of runnable processes and threads.
                    </li>
                    <li>
                        It gives CPU time to one task, then another, then
                        another.
                    </li>
                    <li>
                        It saves and restores execution state during switching.
                    </li>
                    <li>
                        On multi-core systems, some threads can truly run in
                        parallel.
                    </li>
                    <li>
                        On single-core moments, many tasks still appear
                        concurrent because of fast scheduling.
                    </li>
                </ul>

                <p>
                    This is why your music can keep playing while you type,
                    browse and download at the same time.
                </p>
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
                    A process is a running program with its own resources. A
                    thread is a path of execution inside that process. One
                    process can contain one thread or many threads. Processes
                    help organize and isolate work. Threads help perform work
                    efficiently inside a process.
                </p>

                <p>
                    Once you understand this, many operating system ideas become
                    clearer - Task Manager entries, app responsiveness,
                    multi-core CPU behavior, UI freezing, background work and
                    synchronization issues all connect back to processes and
                    threads.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

const FiInfoIcon = FiCodesandbox;

export default ProcessesAndThreadsHowOperatingSystemsRunPrograms;
