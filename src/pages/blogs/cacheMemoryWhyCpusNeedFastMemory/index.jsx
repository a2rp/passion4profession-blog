import React from "react";
import {
    FiCpu,
    FiZap,
    FiClock,
    FiLayers,
    FiDatabase,
    FiArrowRight,
    FiCheckCircle,
    FiAlertCircle,
    FiMonitor,
    FiBox,
    FiTarget,
    FiBarChart2,
    FiHardDrive,
    FiHelpCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const cacheLevels = [
    {
        icon: <FiZap />,
        title: "L1 Cache",
        subtitle: "Smallest and fastest",
        text: "L1 cache sits closest to the CPU core. It is tiny compared to RAM, but it is extremely fast. The processor checks here first because every nanosecond matters.",
    },
    {
        icon: <FiLayers />,
        title: "L2 Cache",
        subtitle: "Bigger than L1, slower than L1",
        text: "L2 cache is usually larger than L1 and still very fast. It acts like the next quick storage area if the needed data is not found in L1 cache.",
    },
    {
        icon: <FiDatabase />,
        title: "L3 Cache",
        subtitle: "Largest cache on many CPUs",
        text: "L3 cache is larger and shared more broadly across cores in many processors. It is slower than L1 and L2, but still much faster than going to RAM.",
    },
];

const memoryJourney = [
    {
        icon: <FiCpu />,
        title: "CPU needs data",
        text: "The processor wants instructions or data to continue its work.",
    },
    {
        icon: <FiZap />,
        title: "Check L1 cache first",
        text: "If the needed data is already there, the CPU gets it very quickly.",
    },
    {
        icon: <FiLayers />,
        title: "Then L2 and L3",
        text: "If the data is not in L1, the CPU tries the next cache levels.",
    },
    {
        icon: <FiHardDrive />,
        title: "Then RAM if needed",
        text: "If cache does not contain the data, the processor has to fetch it from RAM, which is much slower.",
    },
];

const comparisons = [
    {
        label: "Size",
        cache: "Very small",
        ram: "Much larger",
    },
    {
        label: "Speed",
        cache: "Very fast",
        ram: "Fast, but slower than cache",
    },
    {
        label: "Location",
        cache: "Inside or very close to the CPU",
        ram: "Separate memory modules on the motherboard",
    },
    {
        label: "Main job",
        cache: "Hold frequently needed data for immediate CPU use",
        ram: "Hold active programs and working data for the whole system",
    },
];

const realExamples = [
    {
        title: "Opening the same program again",
        text: "If the CPU keeps dealing with similar instructions repeatedly, cache can help because recently used data is more likely to be needed again soon.",
    },
    {
        title: "Loops in programs",
        text: "When a loop runs many times, the processor may reuse the same instructions or nearby data. Cache helps because repeated access becomes much faster.",
    },
    {
        title: "Gaming and real time work",
        text: "In games, simulations, and other fast moving tasks, the processor constantly needs data quickly. Better cache usage can help reduce waiting.",
    },
    {
        title: "Modern browsers",
        text: "A browser is doing many small operations all the time. The CPU benefits when common instructions and frequently used data stay close at hand in cache.",
    },
];

const commonConcepts = [
    {
        icon: <FiCheckCircle />,
        title: "Cache hit",
        text: "A cache hit happens when the CPU finds the needed data in cache. This is the good outcome because the processor gets the data quickly.",
    },
    {
        icon: <FiAlertCircle />,
        title: "Cache miss",
        text: "A cache miss happens when the needed data is not found in cache. Then the CPU must go to a slower place such as RAM.",
    },
    {
        icon: <FiTarget />,
        title: "Locality",
        text: "Programs often reuse nearby data or recently used data. Cache works well because software behavior often has this pattern.",
    },
    {
        icon: <FiClock />,
        title: "Latency",
        text: "Latency means delay. Cache exists mainly to reduce the waiting time between the CPU needing data and the data arriving.",
    },
];

const myths = [
    {
        title: "More cache always means a faster computer in every situation",
        text: "Not always. More cache can help, but processor design, clock speed, software behavior, RAM speed, and workload type also matter a lot.",
    },
    {
        title: "Cache memory is the same as storage cache in apps",
        text: "The idea is similar because both are temporary fast access layers, but CPU cache is a hardware memory system used by the processor itself.",
    },
    {
        title: "Cache replaces RAM",
        text: "It does not. Cache and RAM have different jobs. Cache is tiny and ultra fast. RAM is much larger and holds active working data for the entire system.",
    },
    {
        title: "You can upgrade CPU cache the way you upgrade RAM",
        text: "Usually no. CPU cache is built into the processor design. You typically cannot add more cache separately like RAM sticks.",
    },
];

const faqItems = [
    {
        question: "Why does the CPU not just use RAM directly all the time?",
        answer: "Because even RAM is too slow compared to how fast the processor can operate. The CPU would spend too much time waiting.",
    },
    {
        question: "Why is cache so small if it is so important?",
        answer: "Because ultra fast memory is expensive, power sensitive, and physically limited. Making huge amounts of very fast cache is much harder than making larger RAM.",
    },
    {
        question: "Is L1 always better than L3?",
        answer: "L1 is faster but much smaller. L3 is bigger but slower. They are not enemies. They work together as levels.",
    },
    {
        question: "Does every CPU have cache?",
        answer: "Modern general purpose processors do because without cache, performance would fall badly.",
    },
    {
        question: "Should I care about cache when buying a CPU?",
        answer: "Yes, especially for workloads that benefit from fast repeated access patterns. But cache should be considered along with the full CPU architecture, not alone.",
    },
];

const cacheVsOther = [
    {
        icon: <FiZap />,
        title: "Cache is closer to the CPU than RAM",
        text: "That is why it can respond faster.",
    },
    {
        icon: <FiBarChart2 />,
        title: "Cache reduces waiting",
        text: "The whole point is to stop the CPU from being idle while data is fetched.",
    },
    {
        icon: <FiMonitor />,
        title: "Software behavior affects cache usefulness",
        text: "Programs that reuse data smartly benefit more from cache.",
    },
    {
        icon: <FiBox />,
        title: "Cache is automatic",
        text: "Normal users do not manually fill CPU cache. The processor and system handle it behind the scenes.",
    },
];

const CacheMemoryWhyCpusNeedFastMemory = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiCpu />
                            CPU and memory fundamentals
                        </span>
                    </div>

                    <h1>Cache Memory - Why CPUs Need Ultra Fast Memory</h1>

                    <p className="lead">
                        Modern processors are incredibly fast. The problem is
                        that fetching data from slower memory takes time. Cache
                        memory exists to reduce that delay. It keeps frequently
                        needed instructions and data very close to the CPU so
                        the processor can keep working instead of waiting.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroStatsGrid">
                        <article className="heroStatCard">
                            <span className="statIcon">
                                <FiZap />
                            </span>
                            <div>
                                <strong>Main idea</strong>
                                <p>
                                    Cache is a tiny but very fast memory layer
                                    placed close to the CPU.
                                </p>
                            </div>
                        </article>

                        <article className="heroStatCard">
                            <span className="statIcon">
                                <FiClock />
                            </span>
                            <div>
                                <strong>Main purpose</strong>
                                <p>
                                    Reduce waiting time when the processor needs
                                    data quickly.
                                </p>
                            </div>
                        </article>

                        <article className="heroStatCard">
                            <span className="statIcon">
                                <FiLayers />
                            </span>
                            <div>
                                <strong>Common levels</strong>
                                <p>
                                    L1, L2 and L3 caches work together as memory
                                    layers.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiHelpCircle />
                    </span>
                    <h2>Start with the simplest possible idea</h2>
                </div>

                <p>
                    Imagine a chef cooking in a kitchen. The chef can walk to a
                    large storage room every time salt, oil, or spices are
                    needed, but that would waste time again and again. So the
                    chef keeps small amounts of frequently used ingredients very
                    close on the counter.
                </p>

                <p>
                    Cache memory works in a similar way. RAM is like the larger
                    storage area. Cache is like the tiny fast access area kept
                    right near the CPU.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            Cache memory is a very fast small memory that stores
                            frequently used data and instructions close to the
                            CPU.
                        </p>
                    </div>
                </div>

                <div className="miniGrid">
                    <article className="miniCard">
                        <h3>Why it exists</h3>
                        <p>
                            The CPU is much faster than RAM, so it needs a
                            faster temporary helper layer.
                        </p>
                    </article>

                    <article className="miniCard">
                        <h3>Why it is small</h3>
                        <p>
                            Very fast memory is costly and harder to scale, so
                            cache stays much smaller than RAM.
                        </p>
                    </article>

                    <article className="miniCard">
                        <h3>What it improves</h3>
                        <p>
                            It reduces delay and helps the processor keep moving
                            through work smoothly.
                        </p>
                    </article>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiArrowRight />
                    </span>
                    <h2>What actually happens when the CPU needs data</h2>
                </div>

                <p>
                    The processor constantly needs instructions and data. It
                    does not want to wait for slower memory if it can avoid it.
                </p>

                <div className="flowGrid">
                    {memoryJourney.map((item, index) => (
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
                        <FiClock />
                    </span>
                    <div>
                        <strong>Important thought</strong>
                        <p>
                            Even small delays become a big deal when the CPU
                            does billions of operations. Cache exists to shave
                            off those delays again and again.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>L1, L2 and L3 cache - why there are levels</h2>
                </div>

                <p>
                    A processor usually does not rely on a single cache block.
                    Instead, it uses multiple levels. Smaller levels are faster,
                    larger levels are slower but still much quicker than RAM.
                </p>

                <div className="levelsGrid">
                    {cacheLevels.map((item) => (
                        <article key={item.title} className="levelCard">
                            <span className="levelIcon">{item.icon}</span>
                            <div className="levelBody">
                                <h3>{item.title}</h3>
                                <span className="levelSubtitle">
                                    {item.subtitle}
                                </span>
                                <p>{item.text}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <p>
                    The CPU does not think in dramatic human sentences like "I
                    shall now consult L2". It follows hardware logic. But the
                    concept is simple - check the fastest place first, then the
                    next, then the next.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiDatabase />
                    </span>
                    <h2>Cache memory vs RAM</h2>
                </div>

                <p>
                    Beginners often hear "memory" and assume all memory is doing
                    the same job. It is not. Cache and RAM are related, but they
                    serve different roles.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Cache Memory</th>
                                <th>RAM</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((row) => (
                                <tr key={row.label}>
                                    <td>{row.label}</td>
                                    <td>{row.cache}</td>
                                    <td>{row.ram}</td>
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
                        <strong>Do not mix them up</strong>
                        <p>
                            Cache does not replace RAM. It only helps the CPU
                            get certain data faster when that data is likely to
                            be needed immediately.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiTarget />
                    </span>
                    <h2>Cache hit, cache miss and why locality matters</h2>
                </div>

                <div className="conceptGrid">
                    {commonConcepts.map((item) => (
                        <article key={item.title} className="conceptCard">
                            <span className="conceptIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    Cache works well because many programs repeat patterns.
                    Recently used data often gets used again soon. Nearby data
                    often gets used next. Hardware designers take advantage of
                    this beautiful little habit of software.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiMonitor />
                    </span>
                    <h2>
                        Real world examples that make cache easy to understand
                    </h2>
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
                        <FiBarChart2 />
                    </span>
                    <h2>Important things to understand about cache</h2>
                </div>

                <div className="featureGrid">
                    {cacheVsOther.map((item) => (
                        <article key={item.title} className="featureCard">
                            <span className="featureIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <ul className="bulletList">
                    <li>
                        Cache is fast because it is designed for speed, not
                        size.
                    </li>
                    <li>Different cache levels balance size and speed.</li>
                    <li>Better cache behavior can improve real performance.</li>
                    <li>
                        Software patterns can strongly affect how useful cache
                        becomes.
                    </li>
                </ul>
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
                        <FiHelpCircle />
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
                    Cache memory exists because processors are extremely fast
                    and waiting for slower memory wastes performance. By keeping
                    frequently needed data close to the CPU, cache reduces delay
                    and helps the processor work more efficiently.
                </p>

                <p>
                    If you remember only one thing, remember this - cache is the
                    CPU's tiny high speed helper memory that prevents constant
                    slow trips to RAM.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default CacheMemoryWhyCpusNeedFastMemory;
