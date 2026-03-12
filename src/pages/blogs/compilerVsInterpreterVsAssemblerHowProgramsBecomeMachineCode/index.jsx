import React from "react";
import {
    FiCode,
    FiCpu,
    FiPlayCircle,
    FiSettings,
    FiLayers,
    FiCheckCircle,
    FiAlertCircle,
    FiArrowRight,
    FiCommand,
    FiBox,
    FiFileText,
    FiTool,
    FiZap,
    FiDatabase,
    FiMonitor,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const translationFlow = [
    {
        icon: <FiCode />,
        title: "You write source code",
        text: "This is the code you write in a language such as C, Python or Assembly. Humans can read and edit it more easily than raw machine instructions.",
    },
    {
        icon: <FiSettings />,
        title: "A translator processes the code",
        text: "That translator may be a compiler, an interpreter or an assembler depending on the language you used.",
    },
    {
        icon: <FiLayers />,
        title: "Code is converted into lower level instructions",
        text: "The translator changes human readable code into a form the computer can understand better.",
    },
    {
        icon: <FiCpu />,
        title: "Machine level instructions are produced or executed",
        text: "At the end of the process, the CPU gets instructions in a form it can actually run.",
    },
    {
        icon: <FiPlayCircle />,
        title: "The program runs",
        text: "The computer follows those instructions step by step and your software starts doing useful work.",
    },
];

const comparisonRows = [
    {
        feature: "Main job",
        compiler: "Translates the whole program before running",
        interpreter: "Reads and runs code step by step",
        assembler: "Translates assembly language into machine code",
    },
    {
        feature: "Typical languages",
        compiler: "C, C++, Rust",
        interpreter: "Python, JavaScript in many contexts",
        assembler: "Assembly language",
    },
    {
        feature: "Output",
        compiler: "Usually creates executable or object files",
        interpreter: "Usually runs code directly through an interpreter engine",
        assembler: "Creates machine code or object code from assembly",
    },
    {
        feature: "Execution style",
        compiler: "Translate first, run later",
        interpreter: "Translate and run during execution",
        assembler:
            "Convert symbolic low level instructions into machine instructions",
    },
    {
        feature: "Human readability",
        compiler: "Works on higher level languages",
        interpreter: "Works on higher level languages",
        assembler: "Works on very low level symbolic instructions",
    },
    {
        feature: "Common beginner feeling",
        compiler: "More setup, then fast running program",
        interpreter: "Easy to test quickly line by line",
        assembler: "Very close to hardware, more detailed and harder",
    },
];

const conceptCards = [
    {
        icon: <FiTool />,
        title: "Compiler",
        text: "A compiler takes the whole source program and translates it before the program starts running. In many compiled languages, if there are errors, the program will not build successfully.",
    },
    {
        icon: <FiZap />,
        title: "Interpreter",
        text: "An interpreter reads the source code and runs it step by step. This often makes development feel interactive because you can test code quickly without a separate full build step.",
    },
    {
        icon: <FiCommand />,
        title: "Assembler",
        text: "An assembler works on assembly language, which is much closer to CPU instructions. Assembly uses symbolic names instead of raw binary, and the assembler converts those into machine level instructions.",
    },
];

const realExamples = [
    {
        title: "Example 1 - C program",
        text: "You write a C file such as main.c. A compiler translates that file into machine level output. After compilation succeeds, you run the produced program.",
    },
    {
        title: "Example 2 - Python script",
        text: "You write a Python file and run it with Python. The interpreter reads and executes the code while the program is running instead of producing a normal standalone executable first in the same style as C.",
    },
    {
        title: "Example 3 - Assembly language",
        text: "You write assembly instructions using symbolic names such as MOV or ADD. The assembler translates those instructions into machine code the processor can execute.",
    },
    {
        title: "Example 4 - Fixing an error",
        text: "In a compiled language, you often find many problems during the compile step before the program runs. In an interpreted flow, some issues may appear when a certain line or block is actually reached during execution.",
    },
];

const beginnerQuestions = [
    {
        question: "Why can the CPU not just run my source code directly?",
        answer: "Because the CPU understands machine instructions, not human friendly languages such as C, Python or JavaScript. Source code needs translation.",
    },
    {
        question:
            "Does interpreted mean slow and compiled mean fast every time?",
        answer: "Not always. That is a rough beginner idea, but real performance depends on many things such as implementation, runtime optimizations and the specific task.",
    },
    {
        question: "Is assembly the same as machine code?",
        answer: "Not exactly. Assembly is still written for humans using symbolic instructions. Machine code is the actual numeric instruction form the CPU executes.",
    },
    {
        question: "Can one language use both compiling and interpreting ideas?",
        answer: "Yes. Real language ecosystems can be more complex than simple textbook labels. Some languages are compiled to bytecode first and then interpreted or just in time compiled later.",
    },
];

const importantTerms = [
    {
        icon: <FiFileText />,
        title: "Source code",
        text: "The program text written by a human in a programming language.",
    },
    {
        icon: <FiCpu />,
        title: "Machine code",
        text: "The raw instructions the processor can directly execute.",
    },
    {
        icon: <FiLayers />,
        title: "Assembly language",
        text: "A low level symbolic language that is much closer to machine instructions than high level languages.",
    },
    {
        icon: <FiBox />,
        title: "Executable",
        text: "A program file that can be launched by the operating system.",
    },
    {
        icon: <FiDatabase />,
        title: "Object code",
        text: "A lower level compiled output that may still need linking before becoming a final executable.",
    },
    {
        icon: <FiMonitor />,
        title: "Runtime",
        text: "The period when the program is actually running and doing work.",
    },
];

const myths = [
    {
        title: "Myth - Interpreters never translate anything",
        text: "In practice, language runtimes can do more than the simplest beginner model suggests. But the beginner level idea is still useful - interpreters usually execute code in a more immediate step by step style.",
    },
    {
        title: "Myth - Compilers are only for experts",
        text: "Not true. Many beginners learn compiled languages early. The compiler is just another tool in the development process.",
    },
    {
        title: "Myth - Assembly is useless today",
        text: "Most application code is not written in assembly, but assembly still matters for learning, debugging, embedded systems, reverse engineering and understanding how computers really work.",
    },
    {
        title: "Myth - Compiled means no errors at runtime",
        text: "Compilation can catch many issues, but programs can still fail while running due to logic errors, invalid input, missing files or many other reasons.",
    },
];

const analogyCards = [
    {
        title: "Compiler analogy",
        text: "Imagine translating an entire book from English to Hindi first, printing the translated book, and then reading it. That is similar to compile first, run later.",
    },
    {
        title: "Interpreter analogy",
        text: "Imagine someone reading one English sentence at a time and immediately speaking the translation out loud. That is similar to reading and executing line by line.",
    },
    {
        title: "Assembler analogy",
        text: "Imagine using a short symbolic shorthand that is already very close to machine instructions. The assembler turns that shorthand into exact low level instructions.",
    },
];

const CompilerVsInterpreterVsAssemblerHowProgramsBecomeMachineCode = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiCode />
                            Program translation fundamentals
                        </span>
                    </div>

                    <h1>
                        Compiler vs Interpreter vs Assembler - How Programs
                        Become Machine Code
                    </h1>

                    <p className="lead">
                        Computers do not understand human style source code
                        directly. They understand machine instructions. That is
                        why compilers, interpreters and assemblers exist. These
                        tools act like translators between your code and the
                        CPU.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiTool />
                            </span>
                            <div>
                                <strong>Compiler</strong>
                                <p>
                                    Translates the whole program before it runs.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiZap />
                            </span>
                            <div>
                                <strong>Interpreter</strong>
                                <p>
                                    Reads and runs code step by step during
                                    execution.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiCommand />
                            </span>
                            <div>
                                <strong>Assembler</strong>
                                <p>
                                    Converts assembly language into machine
                                    level instructions.
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
                    <h2>Start with the core idea</h2>
                </div>

                <p>
                    When you write code, you are writing instructions in a form
                    that humans can read. But the CPU is not waiting there like
                    a thoughtful English teacher. It only understands machine
                    level instructions.
                </p>

                <p>
                    So there has to be a translation step between your source
                    code and the machine. That translation can happen in
                    different ways, and that is where compiler, interpreter and
                    assembler come in.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            A compiler, interpreter or assembler is a tool that
                            helps convert programmer written instructions into a
                            form the computer can execute.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiArrowRight />
                    </span>
                    <h2>How code reaches the CPU</h2>
                </div>

                <p>
                    At a beginner level, you can think of the process like this:
                </p>

                <div className="flowGrid">
                    {translationFlow.map((item, index) => (
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
                    The exact path differs between compiled, interpreted and
                    assembled code, but the final goal is always the same - the
                    CPU must receive executable instructions.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>The three translation approaches</h2>
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

                <div className="callout soft">
                    <span className="calloutIcon">
                        <FiPlayCircle />
                    </span>
                    <div>
                        <strong>The important beginner insight</strong>
                        <p>
                            These tools are different paths to the same final
                            destination - making the computer actually run your
                            logic.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiSettings />
                    </span>
                    <h2>Compiler vs Interpreter vs Assembler</h2>
                </div>

                <p>
                    The easiest way to understand the difference is by comparing
                    what each one does and when it does it.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Compiler</th>
                                <th>Interpreter</th>
                                <th>Assembler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row) => (
                                <tr key={row.feature}>
                                    <td>{row.feature}</td>
                                    <td>{row.compiler}</td>
                                    <td>{row.interpreter}</td>
                                    <td>{row.assembler}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p>At beginner level, this mental model works well:</p>

                <ul className="bulletList">
                    <li>Compiler - translate first, then run</li>
                    <li>Interpreter - read and run step by step</li>
                    <li>
                        Assembler - convert assembly into machine instructions
                    </li>
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiBox />
                    </span>
                    <h2>Human language analogy</h2>
                </div>

                <div className="analogyGrid">
                    {analogyCards.map((item) => (
                        <article key={item.title} className="analogyCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    Analogies are not perfect, but they help beginners build a
                    useful first mental model.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiMonitor />
                    </span>
                    <h2>Real world examples</h2>
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
                        <FiAlertCircle />
                    </span>
                    <h2>Common beginner doubts</h2>
                </div>

                <div className="faqList">
                    {beginnerQuestions.map((item) => (
                        <article key={item.question} className="faqCard">
                            <h3>{item.question}</h3>
                            <p>{item.answer}</p>
                        </article>
                    ))}
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

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiAlertCircle />
                    </span>
                    <div>
                        <strong>Important note</strong>
                        <p>
                            Real language systems can be more complex than the
                            basic classroom model. But the basic model is still
                            the right place to start because it builds the
                            foundation clearly.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.FinalCard>
                <h2>Final takeaway</h2>
                <p>
                    Compilers, interpreters and assemblers are different kinds
                    of translators between human written code and machine
                    executable instructions. A compiler usually translates the
                    whole program first. An interpreter usually reads and runs
                    code more directly during execution. An assembler converts
                    assembly language into machine level instructions.
                </p>

                <p>
                    Once you understand this topic clearly, many other concepts
                    such as executables, bytecode, runtimes, assembly language
                    and machine code become much easier to understand.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

const FiInfoFix = FiCode;

export default CompilerVsInterpreterVsAssemblerHowProgramsBecomeMachineCode;
