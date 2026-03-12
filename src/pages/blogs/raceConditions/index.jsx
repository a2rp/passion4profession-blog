import React from "react";
import {
    FiActivity,
    FiAlertCircle,
    FiArrowRight,
    FiCheckCircle,
    FiClock,
    FiCode,
    FiCommand,
    FiCpu,
    FiDatabase,
    FiGitMerge,
    FiInfo,
    FiLayers,
    FiLock,
    FiMonitor,
    FiPlayCircle,
    FiRepeat,
    FiShield,
    FiSliders,
    FiTool,
    FiZap,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const quickCards = [
    {
        icon: <FiClock />,
        title: "Core idea",
        text: "A race condition happens when the result of a program depends on timing or execution order in a way you did not safely control.",
    },
    {
        icon: <FiLayers />,
        title: "Where it appears",
        text: "It usually appears when two or more tasks use the same data or resource at the same time.",
    },
    {
        icon: <FiAlertCircle />,
        title: "Why it is dangerous",
        text: "The program may work sometimes, fail sometimes, and produce inconsistent or incorrect results.",
    },
];

const analogyCards = [
    {
        icon: <FiRepeat />,
        title: "Two people editing the same notebook",
        text: "Imagine two people reading the same notebook page, both deciding to update the same value, and both writing back their changes without knowing what the other person just did. One update may silently overwrite the other.",
    },
    {
        icon: <FiZap />,
        title: "Traffic at a one-lane bridge",
        text: "If two cars enter a one-lane bridge at the same time without traffic control, the result depends on timing. Sometimes one gets through, sometimes both block each other, sometimes chaos wins.",
    },
    {
        icon: <FiDatabase />,
        title: "Same bank balance updated twice",
        text: "If two withdrawals happen together and both read the same old balance before writing the new balance, the final amount may be wrong.",
    },
];

const flowSteps = [
    {
        icon: <FiPlayCircle />,
        title: "Task A reads a shared value",
        text: "Task A looks at a variable, file, memory location, or database row.",
    },
    {
        icon: <FiPlayCircle />,
        title: "Task B reads the same shared value",
        text: "Before Task A safely finishes, Task B also reads the same old value.",
    },
    {
        icon: <FiSliders />,
        title: "Both compute new results",
        text: "Each task calculates what the updated value should be based on stale information.",
    },
    {
        icon: <FiGitMerge />,
        title: "Writes happen in a risky order",
        text: "One task writes first, then the other writes later and overwrites it, or both interfere in another unsafe way.",
    },
    {
        icon: <FiAlertCircle />,
        title: "Final result becomes wrong",
        text: "The program ends with lost updates, inconsistent state, unexpected behavior, or random bugs.",
    },
];

const raceExamples = [
    {
        title: "Counter increment example",
        text: "Suppose a shared counter starts at 5. Task A reads 5 and plans to write 6. Task B also reads 5 and plans to write 6. Both finish. The expected value after two increments should be 7, but the actual value becomes 6. One increment was lost.",
    },
    {
        title: "Bank account withdrawal example",
        text: "A balance is 1000. Two withdrawals of 100 start at the same time. Both operations read 1000 and compute 900. If both write back 900, the final result becomes 900 instead of 800.",
    },
    {
        title: "Shopping inventory example",
        text: "There is only one product left in stock. Two customers place an order at the same time. If both requests check stock before either one updates it, both orders may succeed even though only one item existed.",
    },
    {
        title: "File writing example",
        text: "Two threads write to the same file without coordination. Lines may appear in mixed order, partially overwritten, or corrupted depending on timing.",
    },
    {
        title: "UI state example",
        text: "A web page makes multiple async requests. An older request finishes later than a newer one and overwrites the latest data with stale data. The screen shows the wrong result because response timing was not controlled.",
    },
    {
        title: "Login session example",
        text: "Two session update operations happen very close together. One writes older data after the other already wrote newer data. The final session becomes inconsistent.",
    },
];

const relatedTerms = [
    {
        icon: <FiLayers />,
        title: "Shared resource",
        text: "Anything multiple tasks can access - a variable, file, database row, memory buffer, object, API state, queue, or hardware device.",
    },
    {
        icon: <FiRepeat />,
        title: "Concurrent execution",
        text: "Tasks overlap in time. They may run truly in parallel on different CPU cores or appear parallel through interleaving.",
    },
    {
        icon: <FiLock />,
        title: "Critical section",
        text: "A part of code that accesses shared data and must not be interrupted by another unsafe operation on the same data.",
    },
    {
        icon: <FiShield />,
        title: "Synchronization",
        text: "Techniques used to control order and safe access, such as locks, mutexes, semaphores, transactions, atomic operations, and queues.",
    },
];

const causes = [
    {
        title: "Shared mutable state",
        text: "When multiple tasks can both read and change the same data, timing problems become possible.",
    },
    {
        title: "Lack of synchronization",
        text: "If there is no lock, atomic operation, transaction, or other protection, operations can overlap unsafely.",
    },
    {
        title: "Assuming order that is not guaranteed",
        text: "Programmers often mentally imagine one task finishing before another, but the system may schedule them differently.",
    },
    {
        title: "Async operations returning in random order",
        text: "In frontend and backend code, network responses and async jobs may complete in a different order than they started.",
    },
    {
        title: "Read, modify, write pattern",
        text: "This pattern is very risky when not protected. Read value, change it, write it back - if another task does the same at the same time, you can lose updates.",
    },
];

const preventionCards = [
    {
        icon: <FiLock />,
        title: "Locks and mutexes",
        text: "Use a lock so only one task at a time can enter a critical section that touches shared data.",
    },
    {
        icon: <FiShield />,
        title: "Atomic operations",
        text: "Use operations that the system guarantees will happen as one indivisible step, such as atomic increment.",
    },
    {
        icon: <FiDatabase />,
        title: "Database transactions",
        text: "Use transactions, row locks, or proper isolation when multiple requests may update the same record.",
    },
    {
        icon: <FiRepeat />,
        title: "Queues and serialized processing",
        text: "Instead of allowing many workers to modify the same thing at once, send operations through a controlled queue.",
    },
    {
        icon: <FiCommand />,
        title: "Immutable data patterns",
        text: "Reduce shared mutable state wherever possible. If tasks do not mutate the same thing, race risk drops.",
    },
    {
        icon: <FiTool />,
        title: "Version checks and stale response guards",
        text: "In async UI code, track the latest request and ignore old responses that arrive late.",
    },
];

const frontendExamples = [
    {
        title: "Search request race",
        text: "A user types quickly. Request for 're' starts, then request for 'react' starts. If the slower old request returns last and overwrites the newer result, the UI shows stale search data.",
    },
    {
        title: "Multiple button clicks",
        text: "A payment or submit button gets clicked twice before the first request fully completes. Without proper protection, two updates or two orders may happen.",
    },
    {
        title: "State updates from stale closures",
        text: "Two async handlers both use an old value of state and then write updates based on it. The final state may miss one update.",
    },
];

const backendExamples = [
    {
        title: "Inventory update race",
        text: "Two checkout requests reduce stock at nearly the same time. Without locking or transactional logic, the remaining quantity may become incorrect.",
    },
    {
        title: "Wallet balance race",
        text: "Two money updates read the same initial balance and then both write a new balance computed from stale data.",
    },
    {
        title: "Worker queue race",
        text: "Multiple workers pick the same job because reservation was not done safely. One job gets processed twice.",
    },
];

const myths = [
    {
        title: "Myth - Race conditions only happen in multithreaded code",
        text: "They are common in multithreaded code, but they also happen in async frontend code, backend requests, distributed systems, databases and queues.",
    },
    {
        title: "Myth - If it works on my machine, it is safe",
        text: "Race conditions often hide during testing because timing changes from one run to another. A program can appear correct many times before failing.",
    },
    {
        title: "Myth - Fast code causes race conditions",
        text: "Speed itself is not the issue. Unsafe coordination of shared state is the issue. Slow code can race too.",
    },
    {
        title: "Myth - One CPU core means no race conditions",
        text: "Even on a single core, tasks can interleave over time in unsafe ways. True parallel hardware is not required for races to exist.",
    },
];

const faqItems = [
    {
        question: "Why is it called a race condition?",
        answer: "Because multiple operations are effectively racing to read or write shared state, and the winner or order of completion changes the result.",
    },
    {
        question: "Is every timing issue a race condition?",
        answer: "Not necessarily. A race condition specifically involves unsafe dependence on timing or ordering, usually around shared resources or state.",
    },
    {
        question:
            "Can JavaScript have race conditions even though it is single threaded at the language level?",
        answer: "Yes. Async behavior, event timing, stale responses, shared state updates, browser tasks and external systems can still create race conditions.",
    },
    {
        question: "What is the easiest beginner warning sign?",
        answer: "A feature that behaves correctly sometimes and incorrectly at other times without obvious pattern is a classic warning sign.",
    },
    {
        question:
            "How do I think about race conditions while designing software?",
        answer: "Whenever more than one task can touch the same data, ask what happens if both operate at the same time or finish in a different order than expected.",
    },
    {
        question: "Are race conditions the same as deadlocks?",
        answer: "No. A race condition means timing changes correctness. A deadlock means tasks get stuck waiting and stop making progress.",
    },
];

const RaceConditions = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiActivity />
                            Concurrency and program correctness
                        </span>
                    </div>

                    <h1>Race Conditions - When Timing Breaks Your Program</h1>

                    <p className="lead">
                        A race condition is one of the most important bug
                        patterns in programming. It happens when the correctness
                        of a program depends on timing or order in a way you did
                        not safely control. The result is weird behavior -
                        sometimes correct, sometimes wrong, sometimes impossible
                        to reproduce cleanly, and always deeply annoying.
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
                    <h2>Start with the simplest understanding</h2>
                </div>

                <p>
                    A race condition happens when two or more operations
                    interact with shared state in an unsafe way, and the final
                    result depends on which operation happens first or finishes
                    last.
                </p>

                <p>
                    In other words, your code is not truly broken because of the
                    logic alone. It is broken because the logic becomes unsafe
                    when timing changes.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            A race condition is a bug where program behavior
                            depends on unpredictable timing or execution order
                            between tasks that share data or resources.
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
                        <FiArrowRight />
                    </span>
                    <h2>How a race condition actually happens</h2>
                </div>

                <p>
                    The most common form looks like this: multiple tasks read
                    the same old value, compute updates independently, then
                    write back results in an unsafe order.
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
                        <FiRepeat />
                    </span>
                    <div>
                        <strong>The dangerous pattern</strong>
                        <p>
                            Read - modify - write becomes risky when multiple
                            tasks can do it at the same time without protection.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiCode />
                    </span>
                    <h2>The classic counter example</h2>
                </div>

                <p>
                    A shared counter starts at 5. Two tasks both want to
                    increment it by 1.
                </p>

                <div className="codeWalkthrough">
                    <div className="codeStep">
                        <strong>Step 1</strong>
                        <p>Task A reads the counter and sees 5.</p>
                    </div>

                    <div className="codeStep">
                        <strong>Step 2</strong>
                        <p>Task B also reads the counter and sees 5.</p>
                    </div>

                    <div className="codeStep">
                        <strong>Step 3</strong>
                        <p>Task A computes 6 and writes it.</p>
                    </div>

                    <div className="codeStep">
                        <strong>Step 4</strong>
                        <p>Task B also computes 6 and writes it.</p>
                    </div>
                </div>

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiAlertCircle />
                    </span>
                    <div>
                        <strong>What went wrong</strong>
                        <p>
                            After two increments, the correct result should be
                            7. But the final value became 6. One update was
                            lost.
                        </p>
                    </div>
                </div>

                <p>
                    This is one of the cleanest beginner examples of a race
                    condition because it shows that the problem is not
                    arithmetic. The problem is unsafe timing.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiDatabase />
                    </span>
                    <h2>Real examples from real software</h2>
                </div>

                <div className="examplesGrid">
                    {raceExamples.map((item) => (
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
                    <h2>Important terms related to race conditions</h2>
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
                        <FiCpu />
                    </span>
                    <h2>Why race conditions happen</h2>
                </div>

                <p>
                    Race conditions do not appear because the computer is evil,
                    although it does sometimes have goblin energy. They appear
                    because the design allowed multiple operations to interfere
                    with shared state without safe coordination.
                </p>

                <div className="causesGrid">
                    {causes.map((item) => (
                        <article key={item.title} className="causeCard">
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
                    <h2>Frontend race conditions</h2>
                </div>

                <p>
                    Many developers first hear about race conditions in threads
                    or systems programming, but frontend applications absolutely
                    have them too.
                </p>

                <div className="examplesGrid">
                    {frontendExamples.map((item) => (
                        <article key={item.title} className="exampleCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    This is why "single threaded" does not mean "race proof".
                    Async timing can still make old data beat new data to the
                    screen.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiDatabase />
                    </span>
                    <h2>Backend and database race conditions</h2>
                </div>

                <p>
                    Backends often deal with many requests at once, which makes
                    race conditions extremely common if shared records are
                    updated carelessly.
                </p>

                <div className="examplesGrid">
                    {backendExamples.map((item) => (
                        <article key={item.title} className="exampleCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiShield />
                    </span>
                    <div>
                        <strong>Important backend lesson</strong>
                        <p>
                            If two requests can touch the same data, assume they
                            eventually will, and design as if they will arrive
                            at the same time.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLock />
                    </span>
                    <h2>How to prevent race conditions</h2>
                </div>

                <p>
                    There is no single magic cure because the right fix depends
                    on the type of system, but the general goal is always the
                    same - make shared updates safe and predictable.
                </p>

                <div className="preventionGrid">
                    {preventionCards.map((item) => (
                        <article key={item.title} className="preventionCard">
                            <span className="preventionIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <ul className="bulletList">
                    <li>Protect critical sections.</li>
                    <li>Reduce shared mutable state.</li>
                    <li>Use transactions where needed.</li>
                    <li>Do not trust request completion order.</li>
                    <li>Design as if concurrency is normal, not rare.</li>
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiTool />
                    </span>
                    <h2>How to detect race conditions in practice</h2>
                </div>

                <p>
                    Race conditions are sneaky because they often do not fail
                    every time. They love randomness and embarrassment.
                </p>

                <div className="detectionGrid">
                    <article className="detectionCard">
                        <h3>Symptom 1 - Random failures</h3>
                        <p>
                            The same action sometimes works and sometimes does
                            not.
                        </p>
                    </article>

                    <article className="detectionCard">
                        <h3>Symptom 2 - Missing updates</h3>
                        <p>
                            Counters, balances, stock values or state changes
                            mysteriously skip expected results.
                        </p>
                    </article>

                    <article className="detectionCard">
                        <h3>Symptom 3 - Out of order UI</h3>
                        <p>
                            Old requests overwrite fresh results or stale data
                            appears after the user already changed input.
                        </p>
                    </article>

                    <article className="detectionCard">
                        <h3>Symptom 4 - Hard to reproduce bugs</h3>
                        <p>
                            The bug disappears when you add logs, breakpoints or
                            debugger pauses because timing changed.
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
                    A race condition is not just "something ran in parallel". It
                    is a correctness problem caused by unsafe dependence on
                    timing or ordering. The classic warning sign is a program
                    that seems correct, but produces different results depending
                    on how fast tasks run or which one finishes first.
                </p>

                <p>
                    The best mental model is simple - whenever more than one
                    task can touch the same state, ask what happens if both
                    operate at once, or if they finish in a different order than
                    you expect. That one question will save you from a
                    surprising number of bugs.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default RaceConditions;
