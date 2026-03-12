import React from "react";
import {
    FiCode,
    FiCpu,
    FiTerminal,
    FiLayers,
    FiBox,
    FiPlayCircle,
    FiCheckCircle,
    FiAlertCircle,
    FiSettings,
    FiFileText,
    FiGitBranch,
    FiDatabase,
    FiArrowRight,
    FiTool,
    FiCommand,
    FiZap,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const conversionFlow = [
    {
        icon: <FiCode />,
        title: "Source code",
        text: "This is the code humans write in languages like C, C++, Java, Python or JavaScript. It is meant to be readable by people, not directly by the processor.",
    },
    {
        icon: <FiSettings />,
        title: "Translator step",
        text: "A compiler, interpreter or assembler reads the source code and translates it into a lower level form that the machine can use.",
    },
    {
        icon: <FiLayers />,
        title: "Intermediate or machine friendly form",
        text: "Depending on the language, the result may be bytecode, object code or machine code. Different languages follow different routes.",
    },
    {
        icon: <FiPlayCircle />,
        title: "Execution",
        text: "Finally the machine runs instructions that the processor understands. At that point your program is no longer just text. It is active logic being executed.",
    },
];

const comparisonRows = [
    {
        stage: "Source code",
        description: "Human readable code written by developers",
        example: "int sum = a + b;",
    },
    {
        stage: "Assembly",
        description:
            "Very low level symbolic instructions close to CPU behavior",
        example: "MOV, ADD, JMP",
    },
    {
        stage: "Machine code",
        description: "Binary instructions directly understood by the processor",
        example: "10110000 01100001",
    },
    {
        stage: "Bytecode",
        description:
            "Intermediate instructions run by a virtual machine in some ecosystems",
        example: "Used by Java class files",
    },
    {
        stage: "Executable",
        description:
            "A runnable program file prepared for the operating system",
        example: ".exe, ELF, app bundle",
    },
];

const routeCards = [
    {
        icon: <FiTool />,
        title: "Compiled languages",
        text: "Languages like C and C++ are usually compiled ahead of time. The compiler converts source code into machine friendly output before the program runs.",
        points: [
            "You write source code",
            "Compiler translates it",
            "Linker joins pieces together",
            "Operating system runs the final executable",
        ],
    },
    {
        icon: <FiCommand />,
        title: "Interpreted languages",
        text: "Languages like Python are often executed through an interpreter. The interpreter reads your code and runs it step by step.",
        points: [
            "You write source code",
            "Interpreter reads it",
            "Program is executed through the interpreter environment",
            "There may still be internal compiled steps behind the scenes",
        ],
    },
    {
        icon: <FiBox />,
        title: "Hybrid model",
        text: "Languages like Java often compile source code into bytecode first, then a virtual machine executes that bytecode.",
        points: [
            "You write source code",
            "Compiler produces bytecode",
            "Virtual machine reads bytecode",
            "Program runs on the target system",
        ],
    },
];

const realWorldExamples = [
    {
        title: "Example 1 - C program",
        text: "You write a small C program that prints Hello. The C compiler translates your source code into lower level code, a linker joins the pieces, and the final executable can run directly on your computer.",
    },
    {
        title: "Example 2 - Python script",
        text: "You write a Python file and run it using python file.py. The operating system is not directly reading your Python syntax. The Python runtime reads and executes it.",
    },
    {
        title: "Example 3 - Java program",
        text: "You write Java source code, compile it into bytecode, and then the Java Virtual Machine runs that bytecode. That is why Java often follows the phrase write once, run anywhere.",
    },
    {
        title: "Example 4 - Browser JavaScript",
        text: "You write JavaScript in a web page. The browser engine reads it, processes it and executes it. Again, the CPU is not directly reading your original source code text.",
    },
];

const importantTerms = [
    {
        icon: <FiCode />,
        title: "Source code",
        text: "The original human written program text.",
    },
    {
        icon: <FiTerminal />,
        title: "Compiler",
        text: "A tool that translates source code into another form before execution.",
    },
    {
        icon: <FiCommand />,
        title: "Interpreter",
        text: "A program that reads and executes code rather than producing a fully standalone native executable first.",
    },
    {
        icon: <FiGitBranch />,
        title: "Assembler",
        text: "A tool that converts assembly language into machine code.",
    },
    {
        icon: <FiDatabase />,
        title: "Linker",
        text: "A tool that combines different compiled pieces and libraries into a final program.",
    },
    {
        icon: <FiCpu />,
        title: "Machine code",
        text: "The actual low level instructions the processor can run.",
    },
];

const myths = [
    {
        title: "Myth - The CPU reads C, Python or Java directly",
        text: "It does not. The CPU ultimately runs machine level instructions. Human friendly languages must go through a translation path.",
    },
    {
        title: "Myth - Interpreted means no translation happens",
        text: "Translation still happens. It just happens differently and often during execution time or inside a runtime environment.",
    },
    {
        title: "Myth - Source code and executable are basically the same thing",
        text: "They are related, but not the same. Source code is for humans. Executables are prepared for the operating system and processor environment.",
    },
    {
        title: "Myth - Machine code always means plain visible binary files everywhere",
        text: "At the conceptual level yes, the CPU needs machine instructions. But the real path can involve object files, linkers, runtimes, bytecode and virtual machines.",
    },
];

const faqItems = [
    {
        question: "Why can humans not just write machine code all the time?",
        answer: "Because machine code is extremely hard to read, write and maintain. High level languages exist so humans can think in clearer structures like variables, functions and classes.",
    },
    {
        question: "Does every language become machine code at some point?",
        answer: "At the final execution level, the CPU still needs machine instructions. The path to get there may differ depending on the language and runtime.",
    },
    {
        question: "What is the role of the operating system here?",
        answer: "The operating system loads programs into memory, gives them resources and helps them run. But the code itself still has to be in a form the machine can execute.",
    },
    {
        question: "Is assembly the same as machine code?",
        answer: "Not exactly. Assembly is a human readable symbolic form that closely represents machine instructions. An assembler converts it into actual machine code.",
    },
    {
        question:
            "Why do people say Java is compiled and Python is interpreted?",
        answer: "Because their usual execution models differ. Java often compiles to bytecode first, while Python commonly runs through an interpreter. But real systems can be more complex than the simple labels suggest.",
    },
];

const SourceCodeToMachineCode = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiCode />
                            Programming language fundamentals
                        </span>
                    </div>

                    <h1>
                        Source Code to Machine Code - How Software Actually Runs
                    </h1>

                    <p className="lead">
                        When you write a program, the processor cannot directly
                        understand your nicely written source code. Computers
                        finally run machine level instructions, so your code has
                        to travel through one or more translation steps before
                        it becomes something the machine can execute.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiCode />
                            </span>
                            <div>
                                <strong>Source code</strong>
                                <p>
                                    Human readable instructions written by a
                                    developer.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiSettings />
                            </span>
                            <div>
                                <strong>Translation</strong>
                                <p>
                                    Compiler, interpreter or assembler converts
                                    code into machine usable form.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiCpu />
                            </span>
                            <div>
                                <strong>Execution</strong>
                                <p>
                                    The processor finally runs machine
                                    instructions, not your original text file.
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
                    Source code is written for humans. Machine code is written
                    for the processor. The whole journey from one to the other
                    exists because humans need readable languages and processors
                    need exact low level instructions.
                </p>

                <p>If you write:</p>

                <div className="codeBlock">
                    <pre>
                        <code>{`let total = price + tax;`}</code>
                    </pre>
                </div>

                <p>
                    the CPU does not understand that line directly. It must be
                    translated into lower level operations that the machine can
                    execute.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            Source code is the human readable version of a
                            program. Machine code is the processor readable
                            version of a program.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiArrowRight />
                    </span>
                    <h2>The overall journey from code to execution</h2>
                </div>

                <div className="flowGrid">
                    {conversionFlow.map((item, index) => (
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
                    Different languages follow different exact routes, but this
                    general idea remains the same. Human readable code must be
                    transformed into something the machine can actually run.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>Important forms of code along the way</h2>
                </div>

                <p>
                    Not every language jumps directly from source code to final
                    execution in the same way. Some systems use one intermediate
                    step. Some use several.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stage</th>
                                <th>Description</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row) => (
                                <tr key={row.stage}>
                                    <td>{row.stage}</td>
                                    <td>{row.description}</td>
                                    <td>{row.example}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="callout soft">
                    <span className="calloutIcon">
                        <FiAlertCircle />
                    </span>
                    <div>
                        <strong>Important point</strong>
                        <p>
                            Source code, bytecode, object code, machine code and
                            executables are related, but they are not all the
                            same thing.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiTool />
                    </span>
                    <h2>Different routes different languages can take</h2>
                </div>

                <div className="routeGrid">
                    {routeCards.map((item) => (
                        <article key={item.title} className="routeCard">
                            <span className="routeIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>

                            <ul className="bulletList">
                                {item.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <p>
                    These are simplified models, but they are very useful for
                    beginners. Real language implementations can be more
                    complex, but this gives you the correct big picture.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiPlayCircle />
                    </span>
                    <h2>Real world examples</h2>
                </div>

                <div className="examplesGrid">
                    {realWorldExamples.map((item) => (
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
                        <FiDatabase />
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
                        <FiZap />
                    </span>
                    <h2>Why high level languages exist at all</h2>
                </div>

                <p>
                    Imagine building a large application by writing only binary
                    digits or raw processor instructions. It would be painfully
                    difficult to read, debug, improve and maintain. High level
                    languages exist because humans need abstraction.
                </p>

                <ul className="bulletList">
                    <li>Variables make data easier to work with.</li>
                    <li>Functions help organize repeated logic.</li>
                    <li>Classes and modules help structure large projects.</li>
                    <li>
                        Readable syntax helps teams understand each other's
                        work.
                    </li>
                    <li>
                        Translation tools handle the painful low level details.
                    </li>
                </ul>

                <p>
                    So the source code to machine code pipeline is not a useless
                    extra step. It is the very reason modern software
                    development is practical at all.
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
                    Software does not run because computers magically understand
                    human style programming languages. It runs because source
                    code is translated into lower level instructions the machine
                    can execute. Whether the path uses a compiler, interpreter,
                    assembler, bytecode system or runtime environment, the core
                    idea stays the same.
                </p>

                <p>
                    Once you understand this journey, many other topics such as
                    compilers, interpreters, executables, runtimes, assembly,
                    virtual machines and operating systems become much easier to
                    connect together.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

const FiInfoFix = FiFileText;

export default SourceCodeToMachineCode;
