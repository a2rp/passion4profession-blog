import React from "react";
import {
    FiThermometer,
    FiCpu,
    FiZap,
    FiShield,
    FiAlertTriangle,
    FiCheckCircle,
    FiInfo,
    FiSettings,
    FiActivity,
    FiWind,
    FiClock,
    FiTrendingDown,
    FiTool,
    FiBox,
    FiMonitor,
    FiHardDrive,
    FiAlertCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const quickCards = [
    {
        icon: <FiThermometer />,
        title: "What it is",
        text: "Thermal throttling is when a processor reduces its speed to lower temperature and avoid damage.",
    },
    {
        icon: <FiShield />,
        title: "Why it happens",
        text: "Heat goes up during heavy work. The system slows the chip down to stay within safe thermal limits.",
    },
    {
        icon: <FiTrendingDown />,
        title: "What you notice",
        text: "Games lose FPS, exports take longer, apps feel slower, and performance becomes inconsistent.",
    },
];

const flowSteps = [
    {
        icon: <FiZap />,
        title: "Heavy workload starts",
        text: "You open a game, render a video, train a model, compile code, or run many apps together.",
    },
    {
        icon: <FiCpu />,
        title: "CPU or GPU works harder",
        text: "The chip increases activity, uses more power, and produces more heat.",
    },
    {
        icon: <FiThermometer />,
        title: "Temperature rises",
        text: "If cooling cannot remove heat fast enough, the chip gets hotter and hotter.",
    },
    {
        icon: <FiSettings />,
        title: "Safety logic steps in",
        text: "The firmware and hardware protection logic watch temperatures continuously.",
    },
    {
        icon: <FiTrendingDown />,
        title: "Speed is reduced",
        text: "Clock speed, boost level, or power draw gets reduced so heat can come down.",
    },
    {
        icon: <FiCheckCircle />,
        title: "System stays safe",
        text: "Performance drops, but the chip avoids overheating and possible shutdown or damage.",
    },
];

const reasons = [
    {
        icon: <FiWind />,
        title: "Weak cooling",
        text: "A small heatsink, weak fan, poor airflow, or a thin laptop body may not remove enough heat.",
    },
    {
        icon: <FiBox />,
        title: "Dust buildup",
        text: "Dust blocks vents and fan blades, reducing airflow and trapping heat inside the system.",
    },
    {
        icon: <FiTool />,
        title: "Old thermal paste",
        text: "Thermal paste helps heat move from the chip to the cooler. Old or dry paste can reduce cooling efficiency.",
    },
    {
        icon: <FiMonitor />,
        title: "Hot environment",
        text: "If the room itself is already hot, the cooling system has a harder job.",
    },
    {
        icon: <FiHardDrive />,
        title: "Poor laptop placement",
        text: "Using a laptop on a bed, pillow, or soft surface can block air intake and trap heat.",
    },
    {
        icon: <FiActivity />,
        title: "Long sustained load",
        text: "Short bursts may be fine, but long renders, gaming sessions, and stress loads can slowly push temperatures too high.",
    },
];

const symptoms = [
    "The laptop starts fast but slows down after 10 to 20 minutes",
    "Game FPS drops during long sessions",
    "Video export starts strong and then becomes slower",
    "The fan becomes loud but performance still falls",
    "The system feels hot near vents or keyboard area",
    "The processor clock speed drops under heavy load",
    "Performance becomes unstable instead of consistently fast",
];

const examples = [
    {
        title: "Example 1 - Gaming laptop",
        text: "A laptop runs a game smoothly for the first few minutes. Then the CPU and GPU heat up, clocks drop, and frame rate starts falling. That is a classic thermal throttling pattern.",
    },
    {
        title: "Example 2 - Video rendering",
        text: "You export a long 4K video. At first the processor boosts to high speed, but after sustained heat buildup it reduces speed to stay under thermal limits, making the remaining export slower.",
    },
    {
        title: "Example 3 - Summer weather",
        text: "The same computer that worked fine in winter may throttle more during hot weather because the cooling system cannot dump heat as easily into a warm room.",
    },
    {
        title: "Example 4 - Dusty desktop",
        text: "A desktop with clogged front filters and dusty fans may start throttling even though the hardware itself is still good. The issue is airflow, not necessarily the chip.",
    },
];

const myths = [
    {
        title: "Myth - Thermal throttling means the processor is bad",
        text: "Not necessarily. Throttling is often a normal safety response. The real issue may be cooling, airflow, room temperature, or sustained workload.",
    },
    {
        title: "Myth - If the fan is spinning, cooling is fine",
        text: "A spinning fan does not guarantee good cooling. Dust, blocked vents, weak heat transfer, or a poor cooling design can still cause thermal throttling.",
    },
    {
        title: "Myth - More heat always means more performance",
        text: "Higher performance can create more heat, but once thermal limits are reached, extra heat can cause lower performance, not higher.",
    },
    {
        title: "Myth - Only laptops throttle",
        text: "Laptops are more common examples, but desktops, phones, consoles, tablets, and GPUs can all throttle thermally.",
    },
];

const fixes = [
    {
        icon: <FiWind />,
        title: "Improve airflow",
        text: "Clean vents, fans, and dust filters. Make sure air can enter and exit the machine properly.",
    },
    {
        icon: <FiMonitor />,
        title: "Use the device on a hard surface",
        text: "A table helps much more than a bed or blanket because air intakes stay open.",
    },
    {
        icon: <FiThermometer />,
        title: "Reduce room temperature",
        text: "Cooler surroundings make it easier for the system to get rid of heat.",
    },
    {
        icon: <FiTool />,
        title: "Service the cooling system",
        text: "Cleaning fans and replacing old thermal paste can improve heat transfer significantly in older machines.",
    },
    {
        icon: <FiSettings />,
        title: "Lower unnecessary load",
        text: "Close heavy background tasks, reduce graphics settings, or avoid running many demanding apps together.",
    },
    {
        icon: <FiZap />,
        title: "Use smarter power tuning",
        text: "Balanced settings, controlled boost behavior, or careful undervolting may help some systems stay cooler.",
    },
];

const terms = [
    {
        term: "Clock speed",
        text: "The operating speed of the processor. When thermal throttling happens, clock speed may drop.",
    },
    {
        term: "Boost",
        text: "A temporary increase in performance when thermal and power conditions allow it.",
    },
    {
        term: "Thermal limit",
        text: "A temperature threshold above which the chip starts protecting itself.",
    },
    {
        term: "Sustained load",
        text: "A heavy workload running for a long period rather than a quick short burst.",
    },
    {
        term: "Cooling solution",
        text: "The overall heat management setup, including heatsink, fan, airflow path, and thermal paste.",
    },
];

const faqItems = [
    {
        question: "Is thermal throttling dangerous?",
        answer: "Thermal throttling itself is a protection feature, so in that sense it is helping the hardware. But frequent throttling usually means your cooling situation needs attention.",
    },
    {
        question:
            "Can thermal throttling happen even if my computer does not shut down?",
        answer: "Yes. Most systems throttle first. Shutdown is usually a later emergency protection if temperature control fails badly enough.",
    },
    {
        question: "How is thermal throttling different from power saving mode?",
        answer: "Power saving mode is a chosen operating mode. Thermal throttling is a heat-triggered protective response.",
    },
    {
        question: "Can a powerful laptop throttle more than a weaker one?",
        answer: "Yes. A very powerful chip inside a thin body can hit thermal limits more easily than a weaker chip in the same cooling envelope.",
    },
    {
        question: "Will a laptop cooling pad always fix it?",
        answer: "Not always. Cooling pads can help some laptops, but if the inside is dusty or thermal paste is degraded, the improvement may be limited.",
    },
    {
        question: "Can throttling affect GPU too?",
        answer: "Yes. CPUs and GPUs can both throttle when they get too hot.",
    },
];

const ThermalThrottling = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiThermometer />
                            Performance and cooling basics
                        </span>
                    </div>

                    <h1>
                        Thermal Throttling - Why CPUs Slow Down When They Get
                        Hot
                    </h1>

                    <p className="lead">
                        A processor wants to run fast, but it also needs to stay
                        within safe temperature limits. When heat goes too high,
                        the system reduces speed to protect the hardware. That
                        protective slowdown is called thermal throttling.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroGrid">
                        {quickCards.map((item) => (
                            <article key={item.title} className="heroMiniCard">
                                <span className="heroMiniIcon">
                                    {item.icon}
                                </span>
                                <div>
                                    <h3>{item.title}</h3>
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
                    <h2>Start with the simplest idea</h2>
                </div>

                <p>
                    Imagine you are sprinting in very hot weather. At first you
                    move quickly, but if your body gets too hot, you naturally
                    slow down to protect yourself. A processor behaves in a
                    similar way.
                </p>

                <p>
                    When a CPU or GPU gets too hot, the system reduces its speed
                    and sometimes power draw. This lowers heat generation and
                    helps the hardware stay safe.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            Thermal throttling is an automatic safety mechanism
                            where a chip reduces performance because temperature
                            has gone too high.
                        </p>
                    </div>
                </div>

                <div className="miniGrid">
                    <article className="miniCard">
                        <h3>Why it exists</h3>
                        <p>
                            To prevent overheating, instability, shutdowns, and
                            possible long term hardware stress.
                        </p>
                    </article>

                    <article className="miniCard">
                        <h3>What it affects</h3>
                        <p>
                            Clock speeds, boost behavior, frame rates, render
                            times, and overall responsiveness under heavy load.
                        </p>
                    </article>

                    <article className="miniCard">
                        <h3>What it means</h3>
                        <p>
                            It usually means performance is limited by heat, not
                            by software alone.
                        </p>
                    </article>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiActivity />
                    </span>
                    <h2>How thermal throttling actually happens</h2>
                </div>

                <p>
                    Thermal throttling is not random. There is a clear chain of
                    events behind it.
                </p>

                <div className="stepsGrid">
                    {flowSteps.map((item, index) => (
                        <article key={item.title} className="stepCard">
                            <div className="stepTop">
                                <span className="stepIndex">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="stepIcon">{item.icon}</span>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="callout soft">
                    <span className="calloutIcon">
                        <FiShield />
                    </span>
                    <div>
                        <strong>Important point</strong>
                        <p>
                            Thermal throttling is a protective behavior, not a
                            random bug. The system is choosing lower speed over
                            unsafe temperature.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiAlertTriangle />
                    </span>
                    <h2>What causes thermal throttling</h2>
                </div>

                <div className="reasonsGrid">
                    {reasons.map((item) => (
                        <article key={item.title} className="reasonCard">
                            <span className="reasonIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiClock />
                    </span>
                    <h2>Common signs that thermal throttling is happening</h2>
                </div>

                <p>
                    You may not always see a warning message. Most of the time,
                    you notice the behavior instead.
                </p>

                <ul className="bulletList">
                    {symptoms.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiMonitor />
                    </span>
                    <h2>Real examples that make it easy to understand</h2>
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
                        <FiTool />
                    </span>
                    <h2>How to reduce or prevent thermal throttling</h2>
                </div>

                <div className="fixesGrid">
                    {fixes.map((item) => (
                        <article key={item.title} className="fixCard">
                            <span className="fixIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiAlertTriangle />
                    </span>
                    <div>
                        <strong>Do not do random tuning blindly</strong>
                        <p>
                            Changes like overclocking, voltage tuning, or
                            firmware settings should be done carefully. Wrong
                            settings can make thermal problems worse.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiBox />
                    </span>
                    <h2>Important terms related to thermal throttling</h2>
                </div>

                <div className="termsGrid">
                    {terms.map((item) => (
                        <article key={item.term} className="termCard">
                            <h3>{item.term}</h3>
                            <p>{item.text}</p>
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
                    Thermal throttling is what happens when a processor slows
                    down because it has become too hot. The slowdown is not the
                    real problem by itself. It is the visible result of a heat
                    problem or a cooling limit.
                </p>

                <p>
                    Once you understand that performance, power, and temperature
                    are deeply connected, thermal throttling stops feeling like
                    a mysterious issue and starts looking like a predictable
                    engineering response.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default ThermalThrottling;
