import React from "react";
import {
    FiCpu,
    FiHardDrive,
    FiMonitor,
    FiMusic,
    FiPrinter,
    FiWifi,
    FiTool,
    FiCheckCircle,
    FiAlertCircle,
    FiLayers,
    FiBox,
    FiSettings,
    FiArrowRight,
    FiShield,
    FiZap,
    FiInfo,
    FiLink2,
    FiDatabase,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const whyDriversExist = [
    {
        icon: <FiCpu />,
        title: "Hardware speaks in its own way",
        text: "A graphics card, printer, keyboard, WiFi adapter or sound card does not naturally understand what Windows or Linux wants in plain human terms.",
    },
    {
        icon: <FiLink2 />,
        title: "The operating system needs a bridge",
        text: "The operating system needs a special software layer that knows how to talk to that exact hardware model or device family.",
    },
    {
        icon: <FiTool />,
        title: "That bridge is the driver",
        text: "A driver is the translator between hardware and software. It helps the operating system send the right instructions and receive the right responses.",
    },
];

const startupFlow = [
    {
        icon: <FiZap />,
        title: "Computer starts",
        text: "The firmware and operating system begin startup. During this process the system starts identifying hardware devices attached to the machine.",
    },
    {
        icon: <FiBox />,
        title: "Device is detected",
        text: "The operating system sees something like a graphics card, storage controller, WiFi adapter, printer, webcam or audio chipset.",
    },
    {
        icon: <FiLayers />,
        title: "Driver is loaded",
        text: "The operating system loads the correct driver so it knows how to work with that device.",
    },
    {
        icon: <FiSettings />,
        title: "Communication becomes possible",
        text: "Now software can request actions such as show an image, play sound, print a page or connect to a network.",
    },
    {
        icon: <FiCheckCircle />,
        title: "Device becomes usable",
        text: "Once the driver is working properly, the hardware can do its job correctly inside the system.",
    },
];

const deviceExamples = [
    {
        icon: <FiMonitor />,
        title: "Graphics driver",
        text: "Without a proper graphics driver, your screen may still work in a basic way, but performance, resolution options, refresh rate control and advanced GPU features may be limited.",
    },
    {
        icon: <FiMusic />,
        title: "Audio driver",
        text: "The sound hardware needs a driver so the operating system knows how to send audio data to the correct output and control microphones, speakers and related features.",
    },
    {
        icon: <FiPrinter />,
        title: "Printer driver",
        text: "A printer does not understand a document the same way a word processor does. The driver translates print requests into instructions that the printer can use.",
    },
    {
        icon: <FiWifi />,
        title: "Network and WiFi driver",
        text: "Your WiFi card or Ethernet controller needs a driver so the system can send and receive network traffic correctly.",
    },
    {
        icon: <FiHardDrive />,
        title: "Storage controller driver",
        text: "The system needs drivers to properly communicate with storage controllers and manage reading and writing data to drives.",
    },
    {
        icon: <FiCpu />,
        title: "Chipset and motherboard related drivers",
        text: "These help the operating system talk properly to important parts of the motherboard and connected components.",
    },
];

const beginnerExamples = [
    {
        title: "Example 1 - A new printer is connected",
        text: "You connect a printer to your laptop. The computer detects new hardware, and the correct driver allows software to turn your document into printer instructions.",
    },
    {
        title: "Example 2 - Graphics driver is missing",
        text: "A laptop screen may still show the desktop, but games run badly, the brightness controls may behave oddly, or the maximum resolution may be missing because the full graphics driver is not installed.",
    },
    {
        title: "Example 3 - WiFi stops working after reinstalling Windows",
        text: "The laptop hardware is physically present, but the operating system may not have the correct network driver yet, so the WiFi device cannot work properly.",
    },
    {
        title: "Example 4 - Audio device shows but no sound comes out",
        text: "Sometimes a generic driver loads, but the full device features need the right audio driver from the manufacturer to work properly.",
    },
];

const importantTerms = [
    {
        icon: <FiInfo />,
        title: "Generic driver",
        text: "A generic driver is a basic driver provided by the operating system. It may make the device work in a simple way, but not always with full features.",
    },
    {
        icon: <FiShield />,
        title: "Signed driver",
        text: "A signed driver is a driver that has been digitally verified so the operating system can trust its source more safely.",
    },
    {
        icon: <FiDatabase />,
        title: "Driver package",
        text: "A driver package may contain the driver itself plus extra utilities, control panels or support files.",
    },
    {
        icon: <FiTool />,
        title: "Device Manager",
        text: "In Windows, Device Manager helps you view hardware devices, check driver status and troubleshoot driver issues.",
    },
];

const myths = [
    {
        title: "Myth - Drivers are only needed for printers",
        text: "Drivers are needed for many kinds of hardware, including graphics, audio, storage, networking, keyboards, webcams and more.",
    },
    {
        title: "Myth - If the computer turns on, every driver is already perfect",
        text: "A device may partially work with a basic driver, but still miss features, performance or stability until the correct driver is installed.",
    },
    {
        title: "Myth - Drivers are the same as regular apps",
        text: "Regular apps sit on top of the operating system. Drivers are lower level software that help the operating system communicate with hardware.",
    },
    {
        title: "Myth - More driver updates always mean better results",
        text: "Not always. Drivers should come from trusted sources and be updated sensibly, not randomly from suspicious third party driver tools.",
    },
];

const warningCards = [
    {
        icon: <FiAlertCircle />,
        title: "Wrong driver",
        text: "Installing the wrong driver can cause device issues, missing features, crashes or unstable behavior.",
    },
    {
        icon: <FiShield />,
        title: "Untrusted driver source",
        text: "Downloading drivers from sketchy sites can be risky. It is much safer to use the manufacturer or the operating system's trusted update channels.",
    },
    {
        icon: <FiCheckCircle />,
        title: "Correct source",
        text: "The safest places are the laptop or motherboard brand site, the graphics card vendor site, printer manufacturer site or built in system update tools.",
    },
];

const faqItems = [
    {
        question: "What is a driver in one line?",
        answer: "A driver is software that helps the operating system communicate with hardware correctly.",
    },
    {
        question: "Do all devices need drivers?",
        answer: "Yes, but the exact driver may already be built into the operating system, so you do not always notice it.",
    },
    {
        question: "Why does some hardware work immediately after plugging in?",
        answer: "Because the operating system may already include a compatible driver for that device or a generic one that is good enough.",
    },
    {
        question: "Why do gamers care about graphics drivers so much?",
        answer: "Because graphics drivers affect performance, stability, feature support and compatibility in games and graphics heavy applications.",
    },
    {
        question: "Can a bad driver crash the system?",
        answer: "Yes. Drivers work close to the hardware and operating system, so a faulty one can cause freezes, blue screens or device failures.",
    },
    {
        question: "Are drivers only for Windows?",
        answer: "No. Linux, macOS and other operating systems also use drivers. The concept exists across systems.",
    },
];

const deviceDriverLayers = [
    {
        label: "Application",
        text: "You click print, play music, connect WiFi or launch a game.",
    },
    {
        label: "Operating System",
        text: "The operating system receives the request and manages the overall process.",
    },
    {
        label: "Driver",
        text: "The driver translates that request into the exact low level instructions the device understands.",
    },
    {
        label: "Hardware Device",
        text: "The hardware finally performs the action such as printing, drawing graphics, playing sound or connecting to the network.",
    },
];

const DeviceDriversHowHardwareTalksToSoftware = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiCpu />
                            Hardware and system software basics
                        </span>
                    </div>

                    <h1>Device Drivers - How Hardware Talks to Software</h1>

                    <p className="lead">
                        A computer is full of hardware like graphics chips,
                        sound devices, printers, storage controllers, keyboards,
                        webcams and network adapters. But hardware does not
                        automatically understand what the operating system
                        wants. Device drivers are the special software layer
                        that makes this communication possible.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiLink2 />
                            </span>
                            <div>
                                <strong>Main idea</strong>
                                <p>
                                    A driver is the bridge between hardware and
                                    the operating system.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiSettings />
                            </span>
                            <div>
                                <strong>Why it matters</strong>
                                <p>
                                    Without the correct driver, a device may not
                                    work, may work badly, or may lose important
                                    features.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiShield />
                            </span>
                            <div>
                                <strong>Safe rule</strong>
                                <p>
                                    Drivers should come from trusted system
                                    updates or official hardware makers.
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
                    <h2>Start with the simplest possible explanation</h2>
                </div>

                <p>
                    Imagine you know English and a machine knows only its own
                    strange technical language. You need a translator between
                    you and that machine. In a computer, that translator is the
                    driver.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple definition</strong>
                        <p>
                            A device driver is software that helps the operating
                            system communicate with hardware correctly.
                        </p>
                    </div>
                </div>

                <div className="miniGrid">
                    {whyDriversExist.map((item) => (
                        <article key={item.title} className="miniCard">
                            <span className="miniIcon">{item.icon}</span>
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
                    <h2>How a driver fits into the system</h2>
                </div>

                <p>
                    When you click something in an application, the device does
                    not magically know what to do. A chain of communication is
                    involved.
                </p>

                <div className="layerFlow">
                    {deviceDriverLayers.map((item, index) => (
                        <article key={item.label} className="layerCard">
                            <div className="layerTop">
                                <span className="layerIndex">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <h3>{item.label}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="callout soft">
                    <span className="calloutIcon">
                        <FiLayers />
                    </span>
                    <div>
                        <strong>Key takeaway</strong>
                        <p>
                            Apps talk to the operating system, the operating
                            system uses the driver, and the driver talks to the
                            actual hardware.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiZap />
                    </span>
                    <h2>What happens when hardware starts working</h2>
                </div>

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

                <p>
                    This is why a device may physically exist inside a computer
                    but still not work properly if the correct driver is missing
                    or broken.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiBox />
                    </span>
                    <h2>Common types of drivers you use every day</h2>
                </div>

                <div className="featureGrid">
                    {deviceExamples.map((item) => (
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
                    <h2>
                        Real examples that make the topic easy to understand
                    </h2>
                </div>

                <div className="examplesGrid">
                    {beginnerExamples.map((item) => (
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
                    <h2>Important terms related to drivers</h2>
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
                        <FiShield />
                    </span>
                    <h2>Where should drivers come from</h2>
                </div>

                <p>
                    This matters more than many beginners realize. Drivers sit
                    close to the operating system and hardware, so bad or fake
                    drivers can create serious problems.
                </p>

                <div className="warningGrid">
                    {warningCards.map((item) => (
                        <article key={item.title} className="warningCard">
                            <span className="warningIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <ul className="bulletList">
                    <li>Official laptop or motherboard manufacturer website</li>
                    <li>
                        Official GPU vendor site such as NVIDIA, AMD or Intel
                    </li>
                    <li>Official printer or peripheral manufacturer site</li>
                    <li>Trusted operating system update channels</li>
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
                    Hardware by itself is not enough. The operating system needs
                    a proper communication layer so it can use graphics cards,
                    sound devices, printers, network adapters, storage
                    controllers and many other parts of the machine. That
                    communication layer is the device driver.
                </p>

                <p>
                    Once you understand drivers as translators between hardware
                    and software, many computer problems become easier to reason
                    about. A device may be physically present, but if the driver
                    is wrong, missing or broken, the system may still struggle
                    to use it correctly.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default DeviceDriversHowHardwareTalksToSoftware;
