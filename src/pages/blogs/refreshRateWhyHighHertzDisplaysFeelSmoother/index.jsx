import React from "react";
import {
    FiMonitor,
    FiZap,
    FiCpu,
    FiPlayCircle,
    FiArrowRight,
    FiCheckCircle,
    FiAlertCircle,
    FiClock,
    FiEye,
    FiSmartphone,
    FiMousePointer,
    FiVideo,
    FiCommand,
    FiInfo,
    FiActivity,
    FiLayers,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const refreshSteps = [
    {
        icon: <FiMonitor />,
        title: "The display redraws the image again and again",
        text: "A monitor does not show a frame once and then stop forever. It keeps refreshing the image many times every second.",
    },
    {
        icon: <FiClock />,
        title: "Refresh rate tells how many times per second this happens",
        text: "If the display refreshes 60 times in one second, it is called 60 Hz. If it refreshes 144 times in one second, it is called 144 Hz.",
    },
    {
        icon: <FiPlayCircle />,
        title: "More refreshes can make motion look smoother",
        text: "Because the display updates more often, moving objects can appear more fluid and more responsive to the eye.",
    },
    {
        icon: <FiMousePointer />,
        title: "You can often feel it in cursor and scrolling movement",
        text: "Even before gaming, many people notice smoother mouse movement, scrolling and window dragging on a high refresh rate screen.",
    },
];

const comparisonRows = [
    {
        label: "How many refreshes each second",
        hz60: "60 refreshes",
        hz120: "120 refreshes",
        hz144: "144 refreshes",
    },
    {
        label: "How motion usually feels",
        hz60: "Normal and acceptable for many users",
        hz120: "Clearly smoother than 60 Hz",
        hz144: "Very smooth and popular for gaming",
    },
    {
        label: "Mouse and scrolling feel",
        hz60: "More standard feel",
        hz120: "Smoother and cleaner movement",
        hz144: "Even more fluid and responsive",
    },
    {
        label: "Best known usage",
        hz60: "Office work, casual use, many TVs and laptops",
        hz120: "Premium phones, tablets, some laptops and TVs",
        hz144: "Gaming monitors and performance focused setups",
    },
];

const practicalExamples = [
    {
        title: "Example 1 - Scrolling a long web page",
        text: "At 60 Hz, the page may still look fine, but at 120 Hz or 144 Hz the text and page movement often look smoother while scrolling quickly.",
    },
    {
        title: "Example 2 - Moving the mouse cursor around the desktop",
        text: "On a higher refresh rate display, the cursor can look more fluid and connected to your hand movement.",
    },
    {
        title: "Example 3 - Playing fast games",
        text: "In racing games, shooters and action titles, higher refresh rate can make fast motion easier to follow and can reduce the feeling of choppiness.",
    },
    {
        title: "Example 4 - Using a high refresh phone",
        text: "Many people first notice refresh rate on phones because app switching, scrolling and animation feel more buttery on 90 Hz or 120 Hz panels.",
    },
];

const importantConcepts = [
    {
        icon: <FiInfo />,
        title: "Refresh rate",
        text: "How many times the display updates the image every second.",
    },
    {
        icon: <FiVideo />,
        title: "Frame rate",
        text: "How many frames the graphics source, such as a game or video, is producing every second.",
    },
    {
        icon: <FiActivity />,
        title: "Response feeling",
        text: "How immediate and fluid motion appears while interacting with the screen.",
    },
    {
        icon: <FiCpu />,
        title: "Hardware load",
        text: "Higher refresh rate can demand more from the graphics system if you want content to fully take advantage of it.",
    },
];

const myths = [
    {
        title: "Myth - 144 Hz means everything will automatically run at 144 frames per second",
        text: "The screen can refresh at 144 Hz, but the game or software also needs to produce enough frames to truly use that refresh rate well.",
    },
    {
        title: "Myth - Refresh rate and resolution are the same thing",
        text: "They are different. Resolution tells you how many pixels the screen has. Refresh rate tells you how often the image updates each second.",
    },
    {
        title: "Myth - Higher refresh rate only matters for gamers",
        text: "Gamers benefit a lot, but many ordinary users also notice smoother scrolling, cleaner cursor movement and a more fluid desktop experience.",
    },
    {
        title: "Myth - A 60 Hz display is bad",
        text: "Not at all. 60 Hz is still perfectly usable for many people. Higher refresh rate is an improvement, not a requirement for basic computing.",
    },
];

const faqItems = [
    {
        question: "What does Hz mean in refresh rate?",
        answer: "Hz means hertz, which simply means cycles per second. So 60 Hz means the display refreshes 60 times every second.",
    },
    {
        question: "Is refresh rate the same as FPS?",
        answer: "No. Refresh rate belongs to the display. FPS, or frames per second, belongs to the content source like a game or graphics system.",
    },
    {
        question: "Will 144 Hz always look better than 60 Hz?",
        answer: "In motion, it often can look smoother. But how much you notice depends on the content, your hardware, your eyes and what you are doing.",
    },
    {
        question: "Do videos become 144 Hz automatically on a 144 Hz monitor?",
        answer: "Not exactly. A 24 fps or 30 fps video is still a low frame rate video. The monitor refreshes more often, but the source content itself may not have more motion information.",
    },
    {
        question: "Why do some people say they cannot see the difference?",
        answer: "The difference can depend on sensitivity, type of motion, screen quality, system settings and whether the refresh rate is actually enabled correctly in software.",
    },
    {
        question: "Can a higher refresh rate help in gaming?",
        answer: "Yes, especially in fast games. Motion can feel clearer and input can feel more immediate when the game and hardware support it properly.",
    },
];

const scenarios = [
    {
        icon: <FiMonitor />,
        title: "Office and study work",
        text: "Even normal work like scrolling documents, moving windows and browsing websites can feel smoother on high refresh displays.",
    },
    {
        icon: <FiPlayCircle />,
        title: "Gaming",
        text: "Fast camera movement and quick aim tracking often benefit the most from higher refresh rate.",
    },
    {
        icon: <FiSmartphone />,
        title: "Phones and tablets",
        text: "Modern high refresh mobile screens often feel instantly smoother when opening apps or scrolling social feeds.",
    },
    {
        icon: <FiEye />,
        title: "Visual comfort perception",
        text: "Some users find higher refresh motion more pleasant, though this varies from person to person.",
    },
];

const RefreshRateWhyHighHertzDisplaysFeelSmoother = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiMonitor />
                            Display fundamentals
                        </span>
                    </div>

                    <h1>
                        Refresh Rate - Why High Hertz Displays Feel Smoother
                    </h1>

                    <p className="lead">
                        Refresh rate is one of the most important display ideas
                        to understand if you want to know why some screens feel
                        fluid and smooth while others feel more ordinary. Once
                        you understand what 60 Hz, 120 Hz and 144 Hz actually
                        mean, high refresh displays stop feeling mysterious.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiClock />
                            </span>
                            <div>
                                <strong>60 Hz</strong>
                                <p>
                                    The screen refreshes 60 times every second.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiZap />
                            </span>
                            <div>
                                <strong>120 Hz</strong>
                                <p>
                                    Motion usually looks noticeably smoother
                                    than 60 Hz.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiActivity />
                            </span>
                            <div>
                                <strong>144 Hz</strong>
                                <p>
                                    A very common high refresh rate for gaming
                                    and fluid desktop usage.
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
                    A screen does not just draw one image and keep it frozen
                    forever. It keeps updating the image again and again.
                    Refresh rate tells you how many times that update happens
                    every second.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            Refresh rate is the number of times a display
                            updates its image in one second.
                        </p>
                    </div>
                </div>

                <div className="miniGrid">
                    <article className="miniCard">
                        <h3>60 Hz</h3>
                        <p>The display refreshes 60 times each second.</p>
                    </article>

                    <article className="miniCard">
                        <h3>120 Hz</h3>
                        <p>The display refreshes 120 times each second.</p>
                    </article>

                    <article className="miniCard">
                        <h3>144 Hz</h3>
                        <p>The display refreshes 144 times each second.</p>
                    </article>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiArrowRight />
                    </span>
                    <h2>What actually happens on a display</h2>
                </div>

                <div className="flowGrid">
                    {refreshSteps.map((item, index) => (
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
                    The reason high Hz displays often feel smoother is simple -
                    the screen is updating more frequently, so fast movement can
                    look less jumpy and more continuous.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>60 Hz vs 120 Hz vs 144 Hz</h2>
                </div>

                <p>
                    These numbers are not marketing magic. They directly tell
                    you how often the screen refreshes every second.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>60 Hz</th>
                                <th>120 Hz</th>
                                <th>144 Hz</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row) => (
                                <tr key={row.label}>
                                    <td>{row.label}</td>
                                    <td>{row.hz60}</td>
                                    <td>{row.hz120}</td>
                                    <td>{row.hz144}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="callout soft">
                    <span className="calloutIcon">
                        <FiMonitor />
                    </span>
                    <div>
                        <strong>Important note</strong>
                        <p>
                            Higher refresh rate does not change the resolution
                            of the display. It changes how often the image
                            updates.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiVideo />
                    </span>
                    <h2>
                        Refresh rate vs frame rate - one of the biggest beginner
                        confusions
                    </h2>
                </div>

                <p>These two are related, but they are not the same thing.</p>

                <div className="comparisonSplit">
                    <article className="splitCard">
                        <span className="splitIcon">
                            <FiMonitor />
                        </span>
                        <h3>Refresh rate</h3>
                        <p>
                            Belongs to the display. It tells how many times the
                            screen refreshes in one second.
                        </p>
                    </article>

                    <article className="splitCard">
                        <span className="splitIcon">
                            <FiCpu />
                        </span>
                        <h3>Frame rate</h3>
                        <p>
                            Belongs to the source, such as a game or graphics
                            processor. It tells how many frames are being
                            created each second.
                        </p>
                    </article>
                </div>

                <p>Example:</p>

                <ul className="bulletList">
                    <li>A 144 Hz monitor can refresh 144 times each second.</li>
                    <li>
                        But if a game is only producing 60 frames per second,
                        you are not fully using all 144 possible refreshes.
                    </li>
                    <li>
                        If the game can produce higher frame rates, the display
                        has more chances to show smoother motion.
                    </li>
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiEye />
                    </span>
                    <h2>Why high Hertz displays often feel smoother</h2>
                </div>

                <p>
                    Higher refresh rate can improve the feeling of smoothness
                    because the screen updates more often during movement. That
                    means your eyes may see less jumping from one position to
                    the next when objects move quickly.
                </p>

                <div className="scenarioGrid">
                    {scenarios.map((item) => (
                        <article key={item.title} className="scenarioCard">
                            <span className="scenarioIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiMousePointer />
                    </span>
                    <div>
                        <strong>One of the easiest things to notice</strong>
                        <p>
                            Many people first notice refresh rate not in games,
                            but in simple actions like moving the mouse cursor
                            or scrolling a page.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiPlayCircle />
                    </span>
                    <h2>Practical real life examples</h2>
                </div>

                <div className="examplesGrid">
                    {practicalExamples.map((item) => (
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
                    <h2>Important terms related to refresh rate</h2>
                </div>

                <div className="termsGrid">
                    {importantConcepts.map((item) => (
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
                    Refresh rate is how many times a display updates its image
                    in one second. Higher refresh rate often makes motion look
                    smoother because the display is updating more frequently.
                    That is why 120 Hz and 144 Hz screens often feel more fluid
                    than 60 Hz screens in scrolling, cursor movement and gaming.
                </p>

                <p>
                    The key thing to remember is this - refresh rate belongs to
                    the display, while frame rate belongs to the content source.
                    Once you understand that difference, the topic becomes much
                    easier to think about clearly.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default RefreshRateWhyHighHertzDisplaysFeelSmoother;
