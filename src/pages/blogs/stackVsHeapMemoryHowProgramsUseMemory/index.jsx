import React from "react";
import {
    FiCpu,
    FiLayers,
    FiDatabase,
    FiBox,
    FiArrowRight,
    FiCheckCircle,
    FiAlertCircle,
    FiClock,
    FiCode,
    FiGitBranch,
    FiTrendingUp,
    FiHardDrive,
    FiTarget,
    FiInfo,
    FiZap,
    FiShield,
    FiMonitor,
    FiActivity,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const quickCompare = [
    {
        icon: <FiLayers />,
        title: "Stack",
        text: "Fast, automatic, structured memory used for function calls, local variables and return flow.",
    },
    {
        icon: <FiDatabase />,
        title: "Heap",
        text: "Flexible, larger memory area used for dynamic allocation when size or lifetime is not fixed at compile time.",
    },
    {
        icon: <FiCpu />,
        title: "Why both exist",
        text: "Programs need one area for speed and order, and another area for flexibility and variable sized data.",
    },
];

const stackFlow = [
    {
        title: "A function is called",
        text: "When a function starts, the program usually creates a stack frame for that function.",
        icon: <FiArrowRight />,
    },
    {
        title: "Local variables are placed",
        text: "Simple local variables often go into that stack frame.",
        icon: <FiBox />,
    },
    {
        title: "Function finishes",
        text: "When the function returns, the stack frame is removed automatically.",
        icon: <FiCheckCircle />,
    },
];

const heapFlow = [
    {
        title: "Program asks for memory",
        text: "The program requests memory from the heap when it needs flexible or long living data.",
        icon: <FiDatabase />,
    },
    {
        title: "Memory stays until released",
        text: "Heap memory does not disappear automatically when a function ends unless the language runtime handles it for you.",
        icon: <FiClock />,
    },
    {
        title: "Memory must be managed",
        text: "In some languages you free it manually. In some languages garbage collection cleans it later.",
        icon: <FiShield />,
    },
];

const comparisonRows = [
    {
        topic: "Speed",
        stack: "Usually faster",
        heap: "Usually slower than stack",
    },
    {
        topic: "Management",
        stack: "Automatic",
        heap: "Manual or runtime managed",
    },
    {
        topic: "Size",
        stack: "Usually smaller",
        heap: "Usually much larger",
    },
    {
        topic: "Structure",
        stack: "Very orderly, last in first out style",
        heap: "More flexible and less rigid",
    },
    {
        topic: "Lifetime",
        stack: "Usually tied to function execution",
        heap: "Can outlive the function that created it",
    },
    {
        topic: "Best for",
        stack: "Short lived local data",
        heap: "Dynamic data and variable sized data",
    },
];

const beginnerExamples = [
    {
        title: "Example 1 - A simple local number",
        code: `void demo() {
    int age = 25;
}`,
        explanation:
            "Here the local variable age is typically stored on the stack. When the function ends, that memory is automatically cleaned up.",
    },
    {
        title: "Example 2 - Dynamic array in C",
        code: `int* arr = malloc(100 * sizeof(int));`,
        explanation:
            "This memory usually comes from the heap. It remains allocated until you free it manually. If you forget, you create a memory leak.",
    },
    {
        title: "Example 3 - Java objects",
        code: `Person p = new Person();`,
        explanation:
            "The object itself is usually created on the heap. The local reference variable p may live on the stack depending on implementation details, but the actual object data is generally heap managed.",
    },
    {
        title: "Example 4 - Recursion",
        code: `function count(n) {
    if (n === 0) return;
    count(n - 1);
}`,
        explanation:
            "Each function call creates another stack frame. Too many nested calls can overflow the stack, which leads to a stack overflow error.",
    },
];

const commonTerms = [
    {
        icon: <FiLayers />,
        title: "Stack frame",
        text: "A block of stack memory used for one function call, often containing local variables, parameters and return related information.",
    },
    {
        icon: <FiDatabase />,
        title: "Dynamic allocation",
        text: "Memory requested during program execution instead of being fixed ahead of time.",
    },
    {
        icon: <FiAlertCircle />,
        title: "Stack overflow",
        text: "An error that happens when too much memory is used on the stack, often due to very deep recursion or huge local arrays.",
    },
    {
        icon: <FiShield />,
        title: "Memory leak",
        text: "A problem where heap memory is allocated but never released, so the program gradually wastes memory.",
    },
    {
        icon: <FiActivity />,
        title: "Garbage collection",
        text: "A runtime feature in some languages that automatically finds and cleans unreachable heap objects.",
    },
    {
        icon: <FiTarget />,
        title: "Pointer or reference",
        text: "A value that helps the program access data stored elsewhere, often used to reach heap allocated objects.",
    },
];

const useCases = [
    {
        icon: <FiZap />,
        title: "When stack is a good fit",
        points: [
            "Small local variables",
            "Function parameters",
            "Temporary values",
            "Fast short lived data",
        ],
    },
    {
        icon: <FiTrendingUp />,
        title: "When heap is a good fit",
        points: [
            "Objects that must live longer than one function call",
            "Arrays whose size is decided at runtime",
            "Large data structures like trees, graphs and linked lists",
            "Data shared across multiple parts of the program",
        ],
    },
];

const myths = [
    {
        title: "Myth - Stack is always better than heap",
        text: "Stack is usually faster, but heap is necessary for many real program designs. They solve different problems.",
    },
    {
        title: "Myth - Everything in a program is either only stack or only heap",
        text: "Programs use many memory regions. Code, globals, constants and runtime internals also exist. Stack and heap are important, but not the entire memory story.",
    },
    {
        title: "Myth - Heap means slow and bad",
        text: "Heap memory is not bad. It is essential for dynamic programming tasks. The cost is that it needs more careful management.",
    },
    {
        title: "Myth - If a language has garbage collection, heap problems disappear",
        text: "Garbage collection helps, but poor allocation patterns, excessive object creation and retained references can still cause memory issues.",
    },
];

const faqItems = [
    {
        question: "Why is the stack usually faster?",
        answer: "Because stack allocation and cleanup follow a very simple and predictable pattern. Memory can often be moved by adjusting a pointer rather than searching for a suitable block.",
    },
    {
        question: "Why is the heap more flexible?",
        answer: "Because the heap is built to support memory requests whose size and lifetime may vary during program execution.",
    },
    {
        question: "Why can recursion cause stack overflow?",
        answer: "Each recursive call adds another stack frame. If there are too many calls, the stack limit is exceeded.",
    },
    {
        question: "Can a large local array be dangerous?",
        answer: "Yes. Very large local arrays may consume too much stack space and cause stack overflow. In such cases heap allocation may be safer.",
    },
    {
        question: "Do all languages expose stack and heap directly?",
        answer: "No. Some languages make it obvious, like C and C++. Others hide much of the memory handling behind runtime systems, but the ideas still matter.",
    },
    {
        question: "Does 'new' always mean heap?",
        answer: "In many beginner level explanations, yes, but exact implementation details can vary by language and runtime. As a mental model, new usually points you toward heap style allocation.",
    },
];

const languageNotes = [
    {
        title: "C",
        text: "C makes the distinction quite visible. Local variables usually live on the stack. Functions like malloc allocate memory on the heap, and the programmer must free it manually.",
    },
    {
        title: "C++",
        text: "C++ also exposes stack and heap clearly. Objects can be created as local stack objects or dynamically using new. Modern C++ encourages safer patterns like smart pointers and RAII.",
    },
    {
        title: "Java",
        text: "Java objects are generally heap allocated, and garbage collection manages them. Local references still exist within method execution, but the main object storage model is heavily heap oriented.",
    },
    {
        title: "JavaScript",
        text: "JavaScript abstracts memory management heavily. Primitive values and objects are handled by the engine. You still benefit from understanding stack and heap conceptually, especially for references and object behavior.",
    },
    {
        title: "Python",
        text: "Python also abstracts memory handling. It uses dynamic objects and runtime management. The stack and heap model still helps explain why objects persist and how function calls behave.",
    },
];

const visualMemoryStory = [
    {
        icon: <FiCode />,
        title: "Code section",
        text: "Contains the machine instructions of your program.",
    },
    {
        icon: <FiLayers />,
        title: "Stack region",
        text: "Holds call frames, local execution context and short lived data.",
    },
    {
        icon: <FiDatabase />,
        title: "Heap region",
        text: "Holds dynamically allocated memory and many runtime objects.",
    },
    {
        icon: <FiHardDrive />,
        title: "Storage",
        text: "Files on SSD or HDD are not RAM at all. They are long term storage.",
    },
];

const StackVsHeapMemoryHowProgramsUseMemory = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiCpu />
                            Memory fundamentals for programming
                        </span>
                    </div>

                    <h1>Stack vs Heap Memory - How Programs Use Memory</h1>

                    <p className="lead">
                        Memory is one of the most important parts of
                        programming, but beginners often hear "stack" and "heap"
                        as if they are magical secret caves. They are not. They
                        are two different ways programs use RAM during
                        execution. Once you understand why both exist, function
                        calls, objects, recursion, dynamic allocation and memory
                        leaks all start making much more sense.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        {quickCompare.map((item) => (
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
                    <h2>Start with the simplest mental model</h2>
                </div>

                <p>
                    When a program runs, it needs RAM. But not all RAM is used
                    in the same way. Some memory is needed for temporary
                    function work. Some memory is needed for flexible data that
                    might live longer. To handle this cleanly, runtime memory is
                    often organized into different regions.
                </p>

                <p>
                    Two of the most important regions are the stack and the
                    heap.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            Stack memory is usually used for short lived,
                            ordered, automatic memory tied to function calls.
                            Heap memory is usually used for dynamic, flexible
                            memory whose size or lifetime is not fixed in
                            advance.
                        </p>
                    </div>
                </div>

                <div className="visualStoryGrid">
                    {visualMemoryStory.map((item) => (
                        <article key={item.title} className="visualStoryCard">
                            <span className="visualIcon">{item.icon}</span>
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
                    <h2>How stack memory works</h2>
                </div>

                <p>
                    The stack is usually used during function execution. When a
                    function is called, memory for that function call is
                    created. When the function finishes, that memory is removed
                    automatically.
                </p>

                <div className="flowGrid">
                    {stackFlow.map((item, index) => (
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

                <p>
                    The stack is often described as following a "last in, first
                    out" style. The most recent function call is typically the
                    first one to be removed.
                </p>

                <div className="callout soft">
                    <span className="calloutIcon">
                        <FiClock />
                    </span>
                    <div>
                        <strong>Important idea</strong>
                        <p>
                            Stack memory is usually automatic. You normally do
                            not manually free simple stack based local
                            variables.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiDatabase />
                    </span>
                    <h2>How heap memory works</h2>
                </div>

                <p>
                    The heap is used when the program needs memory that is more
                    flexible. Maybe the size is known only while the program is
                    running. Maybe the data must survive after the current
                    function returns. Maybe the program is building complex data
                    structures like linked lists, trees or objects.
                </p>

                <div className="flowGrid">
                    {heapFlow.map((item, index) => (
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

                <p>
                    Heap memory gives flexibility, but that flexibility comes
                    with extra responsibility. In some languages the programmer
                    manages it directly. In some languages the runtime manages
                    it with garbage collection.
                </p>

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiAlertCircle />
                    </span>
                    <div>
                        <strong>Important caution</strong>
                        <p>
                            Heap memory problems can lead to memory leaks, extra
                            fragmentation, unnecessary allocations or
                            performance issues when used carelessly.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiGitBranch />
                    </span>
                    <h2>Stack vs heap - side by side comparison</h2>
                </div>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Topic</th>
                                <th>Stack</th>
                                <th>Heap</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row) => (
                                <tr key={row.topic}>
                                    <td>{row.topic}</td>
                                    <td>{row.stack}</td>
                                    <td>{row.heap}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p>
                    The stack is optimized for order and speed. The heap is
                    optimized for flexibility. A real program needs both.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiCode />
                    </span>
                    <h2>Code examples that make the difference obvious</h2>
                </div>

                <div className="examplesGrid">
                    {beginnerExamples.map((item) => (
                        <article key={item.title} className="exampleCard">
                            <h3>{item.title}</h3>
                            <pre>
                                <code>{item.code}</code>
                            </pre>
                            <p>{item.explanation}</p>
                        </article>
                    ))}
                </div>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiMonitor />
                    </span>
                    <div>
                        <strong>Practical memory intuition</strong>
                        <p>
                            If data is small, short lived and tied to a
                            function, think stack. If data is dynamic, larger or
                            must outlive the current function, think heap.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiTarget />
                    </span>
                    <h2>When should each one be used?</h2>
                </div>

                <div className="useCaseGrid">
                    {useCases.map((item) => (
                        <article key={item.title} className="useCaseCard">
                            <div className="useCaseTop">
                                <span className="useCaseIcon">{item.icon}</span>
                                <h3>{item.title}</h3>
                            </div>

                            <ul>
                                {item.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <p>
                    This is why a program does not choose stack or heap
                    randomly. The choice depends on lifetime, size, flexibility
                    and language behavior.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiAlertCircle />
                    </span>
                    <h2>Common problems related to stack and heap</h2>
                </div>

                <div className="problemGrid">
                    <article className="problemCard">
                        <span className="problemIcon">
                            <FiAlertCircle />
                        </span>
                        <h3>Stack overflow</h3>
                        <p>
                            Too much stack memory usage, often from deep
                            recursion or very large local variables, can
                            overflow the stack.
                        </p>
                    </article>

                    <article className="problemCard">
                        <span className="problemIcon">
                            <FiShield />
                        </span>
                        <h3>Memory leak</h3>
                        <p>
                            Allocating heap memory and never releasing it causes
                            memory to remain occupied longer than needed.
                        </p>
                    </article>

                    <article className="problemCard">
                        <span className="problemIcon">
                            <FiTrendingUp />
                        </span>
                        <h3>Too many small allocations</h3>
                        <p>
                            Excessive heap allocations can hurt performance due
                            to bookkeeping and memory management overhead.
                        </p>
                    </article>

                    <article className="problemCard">
                        <span className="problemIcon">
                            <FiCheckCircle />
                        </span>
                        <h3>Dangling access</h3>
                        <p>
                            Accessing heap memory after it has been freed is a
                            serious bug in manual memory management languages.
                        </p>
                    </article>
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
                    <h2>How different languages make this feel different</h2>
                </div>

                <div className="languageGrid">
                    {languageNotes.map((item) => (
                        <article key={item.title} className="languageCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    Even when a language hides memory details, the stack and
                    heap model still helps you understand performance, object
                    lifetime, recursion and memory behavior.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiShield />
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
                    Stack and heap are two different memory usage models inside
                    a running program. The stack is usually fast, automatic and
                    tied to function calls. The heap is usually flexible, larger
                    and used for dynamic data that needs more control over size
                    and lifetime.
                </p>

                <p>
                    If you truly understand this topic, many other programming
                    ideas become easier - local variables, function calls,
                    recursion, objects, dynamic allocation, memory leaks,
                    garbage collection and performance tradeoffs all connect
                    back to it.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default StackVsHeapMemoryHowProgramsUseMemory;
