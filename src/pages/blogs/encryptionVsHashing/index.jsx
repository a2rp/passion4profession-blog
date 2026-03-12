import React from "react";
import {
    FiLock,
    FiUnlock,
    FiShield,
    FiKey,
    FiRefreshCw,
    FiCheckCircle,
    FiAlertCircle,
    FiArrowRight,
    FiFileText,
    FiDatabase,
    FiUser,
    FiServer,
    FiEye,
    FiCpu,
    FiLayers,
    FiCode,
    FiInfo,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const quickCards = [
    {
        icon: <FiLock />,
        title: "Encryption",
        text: "Encryption protects readable data by converting it into an unreadable form that can later be turned back into the original data using the right key.",
    },
    {
        icon: <FiShield />,
        title: "Hashing",
        text: "Hashing converts data into a fixed output called a hash. It is mainly used to verify integrity and store sensitive values like passwords more safely.",
    },
    {
        icon: <FiArrowRight />,
        title: "Main difference",
        text: "Encryption is meant to be reversed by authorized parties. Hashing is not meant to be reversed back into the original input.",
    },
];

const comparisonRows = [
    {
        feature: "Main purpose",
        encryption: "Protect readable data from unauthorized access",
        hashing:
            "Verify data integrity or represent data as a fixed fingerprint",
    },
    {
        feature: "Can it be reversed",
        encryption: "Yes, with the correct key",
        hashing: "Not meant to be reversed",
    },
    {
        feature: "Needs a key",
        encryption: "Yes",
        hashing: "No decryption key is used",
    },
    {
        feature: "Input and output",
        encryption: "Readable input becomes unreadable ciphertext",
        hashing: "Any input becomes a fixed length hash output",
    },
    {
        feature: "Common use",
        encryption: "Secure messages, files, network traffic",
        hashing: "Passwords, file integrity, signatures, data checking",
    },
    {
        feature: "If output changes slightly",
        encryption: "Output depends on method and key",
        hashing: "Even a tiny input change creates a very different hash",
    },
];

const encryptionFlow = [
    {
        icon: <FiFileText />,
        title: "Original readable data",
        text: "You start with normal readable information like a message, file or payment details.",
    },
    {
        icon: <FiKey />,
        title: "Encryption key is used",
        text: "An algorithm and a key are used to lock the data into an unreadable form.",
    },
    {
        icon: <FiLock />,
        title: "Ciphertext is produced",
        text: "The result is encrypted text or encrypted data, often called ciphertext.",
    },
    {
        icon: <FiUnlock />,
        title: "Authorized decryption",
        text: "Someone with the correct key can decrypt it back into the original readable data.",
    },
];

const hashingFlow = [
    {
        icon: <FiFileText />,
        title: "Original input is given",
        text: "You can hash text, a file, a password or almost any data.",
    },
    {
        icon: <FiCpu />,
        title: "Hash function runs",
        text: "A hash algorithm processes the input and creates a fixed output value.",
    },
    {
        icon: <FiCode />,
        title: "Hash is produced",
        text: "The output is a string that acts like a fingerprint of the original input.",
    },
    {
        icon: <FiCheckCircle />,
        title: "Compare later if needed",
        text: "If the input changes even slightly, the hash changes, so matching hashes strongly suggest matching input.",
    },
];

const realWorldExamples = [
    {
        title: "Example 1 - Sending a secret message",
        icon: <FiUser />,
        text: "If you want only the intended receiver to read a message, you encrypt it. The receiver decrypts it with the correct key.",
    },
    {
        title: "Example 2 - Website password storage",
        icon: <FiServer />,
        text: "Websites should not store your real password directly. They usually store a hash of the password instead. When you log in later, the password you type is hashed again and compared.",
    },
    {
        title: "Example 3 - Downloaded file verification",
        icon: <FiDatabase />,
        text: "A software company may publish a file hash so users can check whether the downloaded file is exactly the same and was not corrupted or altered.",
    },
    {
        title: "Example 4 - HTTPS on websites",
        icon: <FiShield />,
        text: "Encryption is used to protect the data moving between your browser and a secure website so others cannot easily read it while it travels.",
    },
];

const commonUses = [
    {
        title: "Where encryption is used",
        items: [
            "Secure messaging apps",
            "HTTPS websites",
            "Encrypted files and folders",
            "Laptop full disk encryption",
            "Online payments and banking",
            "Private communication between systems",
        ],
    },
    {
        title: "Where hashing is used",
        items: [
            "Password storage",
            "File integrity checking",
            "Digital signatures",
            "Data deduplication systems",
            "Blockchain style verification systems",
            "Detecting accidental or malicious data changes",
        ],
    },
];

const keyConcepts = [
    {
        icon: <FiKey />,
        title: "Key",
        text: "A key is a secret value used in encryption and decryption. If the wrong key is used, the original data cannot be recovered correctly.",
    },
    {
        icon: <FiLock />,
        title: "Ciphertext",
        text: "Ciphertext is the unreadable output produced after encryption.",
    },
    {
        icon: <FiRefreshCw />,
        title: "Hash function",
        text: "A hash function takes input and returns a fixed size output. It is designed so that small input changes produce very different hashes.",
    },
    {
        icon: <FiShield />,
        title: "Salt",
        text: "A salt is random extra data added before hashing passwords so identical passwords do not produce identical stored hashes.",
    },
];

const myths = [
    {
        title: "Myth - Encryption and hashing are basically the same",
        text: "They are not the same. Encryption protects data so it can later be read by authorized parties. Hashing creates a fingerprint and is not meant to reveal the original input again.",
    },
    {
        title: "Myth - Hashed passwords can simply be decrypted",
        text: "Proper password hashes are not meant to be decrypted. Attackers may try guessing passwords and hashing guesses, but that is different from decrypting.",
    },
    {
        title: "Myth - If data is hashed, it is always private",
        text: "Hashing is not always about secrecy. It is often about checking integrity or matching data. Privacy depends on context and correct usage.",
    },
    {
        title: "Myth - Encryption alone solves every security problem",
        text: "Encryption is powerful, but security also depends on keys, implementation, storage, authentication and correct system design.",
    },
];

const faqItems = [
    {
        question:
            "If hashing cannot be reversed, how do websites check passwords?",
        answer: "When you log in, the website hashes the password you entered and compares that new hash with the stored hash. It does not need to reverse the original hash.",
    },
    {
        question: "Why not encrypt passwords instead of hashing them?",
        answer: "Because if encrypted passwords are stored, someone with the decryption key could potentially recover all passwords. Hashing avoids storing a directly recoverable form.",
    },
    {
        question: "Can two different inputs ever create the same hash?",
        answer: "In theory, yes, because this is called a collision. Good modern hash functions are designed to make useful collisions extremely hard to find.",
    },
    {
        question: "Can encrypted data be safe forever?",
        answer: "No system is magical. Safety depends on strong algorithms, proper key handling, secure implementation and current attack capabilities.",
    },
    {
        question: "Is MD5 good for password hashing today?",
        answer: "No. MD5 is considered weak for modern security use. Stronger modern password hashing methods are preferred.",
    },
    {
        question: "Does hashing mean the data is hidden from everyone?",
        answer: "Not exactly. Hashing is not a direct secrecy tool like encryption. It is mainly used for verification and secure representation in specific cases such as passwords.",
    },
];

const miniExamples = [
    {
        title: "Tiny message example",
        left: "hello",
        right: "hello!",
        text: "These two inputs look almost the same to a human, but a hash function will produce very different outputs for them.",
    },
    {
        title: "Password example",
        left: "password123",
        right: "Password123",
        text: "Even a capitalization change creates a different hash. That is why exact input matters.",
    },
    {
        title: "File integrity example",
        left: "Original file",
        right: "Changed file",
        text: "If one byte changes inside a file, the hash can change drastically, which makes tampering easier to detect.",
    },
];

const EncryptionVsHashing = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiShield />
                            Security basics
                        </span>
                    </div>

                    <h1>
                        Encryption vs Hashing - Protecting Data in Different
                        Ways
                    </h1>

                    <p className="lead">
                        Encryption and hashing are two of the most important
                        concepts in computer security, but beginners often mix
                        them up. They both transform data, yet their goals are
                        very different. One is mainly for protecting readable
                        information from unauthorized access. The other is
                        mainly for integrity checking, matching and secure
                        storage patterns such as passwords.
                    </p>

                    <div className="shareWrap">
                        <ShareButtons />
                    </div>

                    <div className="quickGrid">
                        {quickCards.map((item) => (
                            <article key={item.title} className="quickCard">
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
                    <h2>Start with the simplest idea</h2>
                </div>

                <p>
                    Suppose you have a secret message. If you want the message
                    to travel safely and later be read by the right person, you
                    use encryption.
                </p>

                <p>
                    Now suppose you do not need to read the original value back,
                    but you want a dependable fingerprint of it so you can later
                    check whether it matches or whether it has changed. That is
                    where hashing comes in.
                </p>

                <div className="callout">
                    <span className="calloutIcon">
                        <FiCheckCircle />
                    </span>
                    <div>
                        <strong>Simple rule to remember</strong>
                        <p>
                            Encryption is for secrecy with recovery. Hashing is
                            for fingerprinting and verification without intended
                            recovery.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLayers />
                    </span>
                    <h2>Encryption vs hashing at a glance</h2>
                </div>

                <p>This table captures the core difference in a clean way.</p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Encryption</th>
                                <th>Hashing</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row) => (
                                <tr key={row.feature}>
                                    <td>{row.feature}</td>
                                    <td>{row.encryption}</td>
                                    <td>{row.hashing}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiLock />
                    </span>
                    <h2>How encryption works</h2>
                </div>

                <p>
                    Encryption starts with readable data called plaintext. An
                    algorithm and a key are used to convert that plaintext into
                    unreadable output called ciphertext. If someone has the
                    correct key, the ciphertext can be turned back into the
                    original readable information.
                </p>

                <div className="flowGrid">
                    {encryptionFlow.map((item, index) => (
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
                        <FiKey />
                    </span>
                    <div>
                        <strong>Key idea</strong>
                        <p>
                            Encryption is useful because the original data can
                            later be recovered by the authorized side.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiShield />
                    </span>
                    <h2>How hashing works</h2>
                </div>

                <p>
                    Hashing takes input data and runs it through a hash
                    function. The result is a fixed length output called a hash
                    or digest. The output is not meant to be converted back to
                    the original input.
                </p>

                <p>
                    A powerful property of hashing is that tiny input changes
                    usually create dramatically different outputs.
                </p>

                <div className="flowGrid">
                    {hashingFlow.map((item, index) => (
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

                <div className="miniGrid">
                    {miniExamples.map((item) => (
                        <article key={item.title} className="miniCard">
                            <h3>{item.title}</h3>
                            <div className="miniCompare">
                                <span>{item.left}</span>
                                <span>{item.right}</span>
                            </div>
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
                    <h2>
                        Real world examples that make the difference obvious
                    </h2>
                </div>

                <div className="examplesGrid">
                    {realWorldExamples.map((item) => (
                        <article key={item.title} className="exampleCard">
                            <span className="exampleIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiServer />
                    </span>
                    <h2>Where each one is commonly used</h2>
                </div>

                <div className="usageGrid">
                    {commonUses.map((group) => (
                        <article key={group.title} className="usageCard">
                            <h3>{group.title}</h3>
                            <ul className="bulletList">
                                {group.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="sectionIcon">
                        <FiKey />
                    </span>
                    <h2>Important terms related to the topic</h2>
                </div>

                <div className="termsGrid">
                    {keyConcepts.map((item) => (
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
                        <FiEye />
                    </span>
                    <h2>Why password hashing is such a big deal</h2>
                </div>

                <p>
                    Password storage is one of the most common places where
                    beginners first hear about hashing. A good website should
                    not store your real password in plain text. It should store
                    a protected representation instead.
                </p>

                <p>The normal idea is:</p>

                <ul className="bulletList">
                    <li>You create a password.</li>
                    <li>The system hashes it before storage.</li>
                    <li>
                        Later, when you log in, your entered password is hashed
                        again.
                    </li>
                    <li>
                        If the new hash matches the stored hash, access is
                        allowed.
                    </li>
                </ul>

                <div className="callout warning">
                    <span className="calloutIcon">
                        <FiAlertCircle />
                    </span>
                    <div>
                        <strong>Important security note</strong>
                        <p>
                            Good password handling usually also uses salt and
                            specialized password hashing methods. Plain fast
                            hashing alone is not enough for modern password
                            security.
                        </p>
                    </div>
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
                    Encryption and hashing both transform data, but they solve
                    different problems. Encryption hides readable information so
                    it can later be recovered by the right party. Hashing
                    creates a fingerprint that is used for verification,
                    matching and secure storage patterns such as passwords.
                </p>

                <p>
                    The easiest way to remember the difference is this:
                    encryption is for secret communication and protected storage
                    with recovery, while hashing is for fingerprints, integrity
                    and comparison.
                </p>
            </Styled.FinalCard>
        </Styled.Wrapper>
    );
};

export default EncryptionVsHashing;
