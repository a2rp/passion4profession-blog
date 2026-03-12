import React from "react";
import {
    FiType,
    FiCode,
    FiGlobe,
    FiDatabase,
    FiCheckCircle,
    FiAlertCircle,
    FiHash,
    FiFileText,
    FiLayers,
    FiCpu,
    FiBookOpen,
    FiInfo,
    FiArrowRight,
    FiMessageCircle,
    FiBox,
    FiLock,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const problemCards = [
    {
        icon: <FiType />,
        title: "Humans see characters",
        text: "We see letters, numbers, punctuation marks, emojis and symbols as visible text.",
    },
    {
        icon: <FiCpu />,
        title: "Computers see numbers",
        text: "A computer stores everything as numbers and bits, not as magical letters floating in the air.",
    },
    {
        icon: <FiAlertCircle />,
        title: "A mapping system is needed",
        text: "The computer needs a standard way to understand which number means which character.",
    },
];

const asciiRows = [
    {
        char: "A",
        decimal: "65",
        note: "Uppercase English letter",
    },
    {
        char: "a",
        decimal: "97",
        note: "Lowercase English letter",
    },
    {
        char: "0",
        decimal: "48",
        note: "Digit zero",
    },
    {
        char: "!",
        decimal: "33",
        note: "Exclamation mark",
    },
    {
        char: "Space",
        decimal: "32",
        note: "Blank space between words",
    },
];

const unicodeConcepts = [
    {
        icon: <FiGlobe />,
        title: "Unicode is universal",
        text: "Unicode was created so text from many languages and writing systems can be represented using one shared standard.",
    },
    {
        icon: <FiHash />,
        title: "Each character gets a code point",
        text: "A Unicode code point is a number assigned to a character. For example, the letter A has a code point, Hindi letters have code points, Chinese characters have code points, and emojis also have code points.",
    },
    {
        icon: <FiLayers />,
        title: "Unicode is not the same as UTF-8",
        text: "Unicode is the overall character standard. UTF-8 is one way to store Unicode characters as bytes.",
    },
];

const utf8Cards = [
    {
        icon: <FiDatabase />,
        title: "UTF-8 stores Unicode characters as bytes",
        text: "UTF-8 is an encoding. It turns Unicode code points into byte sequences that computers can store and transmit.",
    },
    {
        icon: <FiCheckCircle />,
        title: "ASCII stays compatible",
        text: "UTF-8 keeps standard ASCII characters in a simple one-byte form, which is one reason it became so popular on the web.",
    },
    {
        icon: <FiBox />,
        title: "Character length can vary",
        text: "In UTF-8, some characters use 1 byte, some use 2, some use 3, and some use 4 bytes depending on what character they are.",
    },
];

const comparisonRows = [
    {
        item: "Unicode",
        meaning: "A character standard",
        role: "Defines characters and code points",
        example: "The character U+0041 means A",
    },
    {
        item: "UTF-8",
        meaning: "A character encoding",
        role: "Stores Unicode characters as bytes",
        example: "Encodes A in 1 byte and many emojis in multiple bytes",
    },
    {
        item: "ASCII",
        meaning: "An older limited character set",
        role: "Represents basic English letters and symbols",
        example: "A, B, 1, ?, space",
    },
];

const examples = [
    {
        title: "Example 1 - The letter A",
        text: "Unicode assigns A a code point. UTF-8 stores that code point in bytes. Because A is a basic ASCII character, UTF-8 can store it very efficiently in 1 byte.",
    },
    {
        title: "Example 2 - The Hindi letter क",
        text: "This character is not part of old ASCII. Unicode gives it a code point, and UTF-8 uses more than 1 byte to store it properly.",
    },
    {
        title: "Example 3 - Emoji like 😀",
        text: "Emoji are also Unicode characters. UTF-8 can store them too, but they usually take more bytes than simple English letters.",
    },
    {
        title: "Example 4 - Broken text like à¤¹à¤¿à¤¨à¥à¤¦à¥",
        text: "This kind of weird output often happens when text encoded in UTF-8 is incorrectly read using another encoding. The text is still data, but it is being interpreted using the wrong rulebook.",
    },
];

const byteExamples = [
    {
        label: "A",
        value: "Usually 1 byte in UTF-8",
    },
    {
        label: "é",
        value: "Usually 2 bytes in UTF-8",
    },
    {
        label: "क",
        value: "Usually 3 bytes in UTF-8",
    },
    {
        label: "😀",
        value: "Usually 4 bytes in UTF-8",
    },
];

const whyUtf8Wins = [
    {
        icon: <FiGlobe />,
        title: "Perfect for the web",
        text: "Web pages need to support many languages, symbols and emojis. UTF-8 handles that extremely well.",
    },
    {
        icon: <FiCode />,
        title: "Works well with English text too",
        text: "Basic English text remains compact because ASCII characters still use 1 byte in UTF-8.",
    },
    {
        icon: <FiMessageCircle />,
        title: "Great for modern apps",
        text: "Apps, APIs, databases, JSON, HTML and source code often use UTF-8 because it is practical and widely supported.",
    },
];

const myths = [
    {
        title: "Myth - Unicode and UTF-8 are the same thing",
        text: "They are related but not identical. Unicode is the character standard. UTF-8 is one encoding used to store Unicode characters.",
    },
    {
        title: "Myth - Computers naturally understand all text the same way",
        text: "They do not. Text must be interpreted using the correct encoding rules.",
    },
    {
        title: "Myth - ASCII is enough for everything",
        text: "ASCII is useful historically, but it only covers a small part of the text used across the world.",
    },
    {
        title: "Myth - Broken text always means corrupted text",
        text: "Sometimes the text is not corrupted at all. It is just being decoded using the wrong encoding.",
    },
];

const faqItems = [
    {
        question: "What is a character encoding in one line?",
        answer: "A character encoding is the rule that tells the computer how characters should be stored as bytes.",
    },
    {
        question: "Why do we need Unicode?",
        answer: "Because the world uses far more than basic English letters. Unicode provides one shared system for representing text from many languages and symbol sets.",
    },
    {
        question: "Why is UTF-8 so common?",
        answer: "Because it supports Unicode well, stays compatible with ASCII and works efficiently for the web and modern software systems.",
    },
    {
        question: "What is a code point?",
        answer: "A code point is the numeric identity of a character in Unicode.",
    },
    {
        question: "Why do some characters use more bytes in UTF-8?",
        answer: "Because UTF-8 is variable length. Basic ASCII characters use fewer bytes, while many other characters need more space.",
    },
    {
        question: "How do websites avoid text breaking?",
        answer: "By correctly declaring and consistently using the same encoding, usually UTF-8, from storage to output.",
    },
];

const practicalPlaces = [
    {
        icon: <FiFileText />,
        title: "HTML pages",
        text: "Websites commonly declare UTF-8 so browsers know how to interpret page text correctly.",
    },
    {
        icon: <FiDatabase />,
        title: "Databases",
        text: "Databases store text using encodings too. Wrong settings can lead to broken characters.",
    },
    {
        icon: <FiCode />,
        title: "Source code files",
        text: "Editors and programming tools often save files in UTF-8, which is useful for comments, strings and multilingual content.",
    },
    {
        icon: <FiMessageCircle />,
        title: "APIs and JSON",
        text: "Modern APIs commonly use UTF-8 so data can move between systems without text turning into chaos goblins.",
    },
];

const UnicodeAndUtf8HowComputersRepresentText = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiType />
                            Text, encoding and computer fundamentals
                        </span>
                    </div>

                    <h1>Unicode and UTF-8 - How Computers Represent Text</h1>

                    <p className="lead">
                        Letters look simple when humans read them, but computers
                        cannot store text as visible letters directly. They need
                        numbers, rules and consistent encoding systems. Unicode
                        and UTF-8 are the main reason modern computers can
                        handle English, Hindi, Arabic, Chinese, emojis and many
                        other forms of text in one connected digital world.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="heroQuickGrid">
                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiGlobe />
                            </span>
                            <div>
                                <strong>Unicode</strong>
                                <p>
                                    The global character standard that defines
                                    what characters exist and what numeric code
                                    points represent them.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiDatabase />
                            </span>
                            <div>
                                <strong>UTF-8</strong>
                                <p>
                                    The most common encoding used to store
                                    Unicode characters as bytes.
                                </p>
                            </div>
                        </article>

                        <article className="heroQuickCard">
                            <span className="quickIcon">
                                <FiAlertCircle />
                            </span>
                            <div>
                                <strong>Main confusion</strong>
                                <p>
                                    Unicode and UTF-8 are related, but they are
                                    not the same thing.
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
                    <h2>Start with the basic problem</h2>
                </div>

                <p>
                    Humans look at text and immediately understand letters,
                    words, symbols and emojis. A computer does not do that.
                    Internally, a computer stores data using bits and bytes. So
                    the machine needs a system that says which numeric value
                    corresponds to which character.
                </p>

                <p>That is the root of the whole topic.</p>

                <div className="problemGrid">
                    {problemCards.map((item) => (
                        <article key={item.title} className="problemCard">
                            <span className="problemIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple idea</strong>
                        <p>
                            Text works on computers only when characters are
                            mapped to numbers and those numbers are stored using
                            a defined encoding.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiBookOpen />
                    </span>
                    <h2>Before Unicode - the age of ASCII</h2>
                </div>

                <p>
                    Before Unicode became the universal standard, one of the
                    most common older systems was ASCII. ASCII worked for basic
                    English letters, digits and some punctuation symbols. It was
                    useful, but very limited.
                </p>

                <p>
                    ASCII could handle things like A, B, C, numbers and symbols
                    such as ! or ?. But it could not properly represent the full
                    richness of world languages.
                </p>

                <div className="tableWrap narrow">
                    <table>
                        <thead>
                            <tr>
                                <th>Character</th>
                                <th>Decimal value</th>
                                <th>Meaning</th>
                            </tr>
                        </thead>
                        <tbody>
                            {asciiRows.map((row) => (
                                <tr key={row.char}>
                                    <td>{row.char}</td>
                                    <td>{row.decimal}</td>
                                    <td>{row.note}</td>
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
                        <strong>Problem with ASCII</strong>
                        <p>
                            ASCII was fine for basic English computing, but it
                            was nowhere near enough for a multilingual world.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiGlobe />
                    </span>
                    <h2>What Unicode actually is</h2>
                </div>

                <p>
                    Unicode is a universal character standard. Its goal is to
                    give characters from many languages and symbol systems a
                    unified numeric identity.
                </p>

                <div className="conceptGrid">
                    {unicodeConcepts.map((item) => (
                        <article key={item.title} className="conceptCard">
                            <span className="conceptIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    So when people talk about Unicode, they are talking about
                    the standard that says "this character exists, and this is
                    its code point."
                </p>

                <div className="miniGrid">
                    <article className="miniCard">
                        <h3>English letters</h3>
                        <p>
                            Unicode includes basic Latin letters like A, B and
                            C.
                        </p>
                    </article>

                    <article className="miniCard">
                        <h3>World languages</h3>
                        <p>
                            Unicode includes scripts used by many languages such
                            as Hindi, Arabic, Bengali, Chinese and much more.
                        </p>
                    </article>

                    <article className="miniCard">
                        <h3>Symbols and emoji</h3>
                        <p>
                            Unicode also includes arrows, currency signs,
                            punctuation symbols and emojis.
                        </p>
                    </article>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiCode />
                    </span>
                    <h2>What UTF-8 actually is</h2>
                </div>

                <p>
                    Unicode defines characters, but computers still need a way
                    to store those characters as bytes. That is where encodings
                    come in. UTF-8 is one of the most important Unicode
                    encodings.
                </p>

                <div className="utfGrid">
                    {utf8Cards.map((item) => (
                        <article key={item.title} className="utfCard">
                            <span className="utfIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiArrowRight />
                    </span>
                    <div>
                        <strong>One line summary</strong>
                        <p>
                            Unicode tells us what character we mean. UTF-8 tells
                            us how that character is stored in bytes.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>Unicode vs UTF-8 vs ASCII</h2>
                </div>

                <p>
                    This is the part that confuses many beginners, so here is a
                    direct comparison.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>What it means</th>
                                <th>Main role</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row) => (
                                <tr key={row.item}>
                                    <td>{row.item}</td>
                                    <td>{row.meaning}</td>
                                    <td>{row.role}</td>
                                    <td>{row.example}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p>So the clean mental model is this:</p>

                <ul className="bulletList">
                    <li>ASCII is an older limited character set.</li>
                    <li>Unicode is the broader global character standard.</li>
                    <li>UTF-8 is a way to encode Unicode into bytes.</li>
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiHash />
                    </span>
                    <h2>
                        Why different characters use different numbers of bytes
                        in UTF-8
                    </h2>
                </div>

                <p>
                    UTF-8 is a variable length encoding. That means not every
                    character uses the same number of bytes.
                </p>

                <div className="byteGrid">
                    {byteExamples.map((item) => (
                        <article key={item.label} className="byteCard">
                            <div className="byteChar">{item.label}</div>
                            <p>{item.value}</p>
                        </article>
                    ))}
                </div>

                <p>
                    This design is clever because common ASCII characters stay
                    compact while the encoding still supports a much larger set
                    of world characters.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiMessageCircle />
                    </span>
                    <h2>Examples that make the whole idea click</h2>
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
                        <FiCheckCircle />
                    </span>
                    <h2>Why UTF-8 became the most practical choice</h2>
                </div>

                <div className="whyGrid">
                    {whyUtf8Wins.map((item) => (
                        <article key={item.title} className="whyCard">
                            <span className="whyIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <p>
                    This is why UTF-8 became the default or near default in many
                    modern systems, editors, frameworks, APIs and websites.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiFileText />
                    </span>
                    <h2>Where you actually see this topic in the real world</h2>
                </div>

                <div className="placesGrid">
                    {practicalPlaces.map((item) => (
                        <article key={item.title} className="placeCard">
                            <span className="placeIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLock />
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
                        <FiInfo />
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
                    Computers do not store letters the way humans see them. They
                    store numeric data, and text becomes possible only because
                    there is a standard way to map characters to numbers and
                    then encode those numbers into bytes.
                </p>

                <p>
                    Unicode gives characters a universal identity. UTF-8 is one
                    of the main ways those Unicode characters are stored and
                    transmitted. Once you understand that distinction, the
                    entire topic becomes much less mysterious.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default UnicodeAndUtf8HowComputersRepresentText;
