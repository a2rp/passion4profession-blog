import React from "react";
import {
    FiEdit3,
    FiBookOpen,
    FiLayers,
    FiClock,
    FiFeather,
    FiExternalLink,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../shareButton";

const projectHighlights = [
    {
        icon: <FiEdit3 />,
        title: "New writing, not old archive restoration",
        text: "This project is for fresh blog posts, new ideas, and original writeups. It is separate from the refactored archive of older Blogger content.",
    },
    {
        icon: <FiBookOpen />,
        title: "Readable knowledge notes",
        text: "The writing style is simple, direct, and learning-focused so each post feels useful both for first-time reading and later revision.",
    },
    {
        icon: <FiLayers />,
        title: "Route-based article structure",
        text: "Each blog post lives on its own dedicated route, making the project easier to scale, organize, and expand over time.",
    },
    {
        icon: <FiFeather />,
        title: "Built for consistent publishing",
        text: "The structure is meant to support regular writing across computing, internet basics, software, and thoughtful technical essays.",
    },
];

const focusPoints = [
    "Write new original blog posts in a cleaner format",
    "Build a long-term knowledge archive around computing and technology",
    "Keep every article easy to read and easy to revisit later",
    "Create a scalable route-based blog structure",
    "Publish practical notes, essays, and technical explanations regularly",
];

const About = () => {
    return (
        <Styled.Wrapper>
            <Styled.HeroSection>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="eyebrowRow">
                        <span className="eyebrowBadge">
                            <FiEdit3 />
                            New Blog Project
                        </span>
                    </div>

                    <h1>About this blog</h1>

                    <p className="heroText">
                        Passion4Profession Blog is the new writing space for
                        fresh articles, structured notes, and original technical
                        posts. It continues the broader Passion4Profession
                        journey, but this time with a cleaner system built for
                        regular publishing.
                    </p>

                    <ShareButtons />

                    <p>
                        <br />
                        This project focuses on new posts rather than rebuilding
                        old ones.
                    </p>

                    <div className="metaRow">
                        <div className="metaCard">
                            <span className="metaIcon">
                                <FiClock />
                            </span>
                            <div>
                                <strong>Before</strong>
                                <span>
                                    Old Blogger posts and archived notes
                                </span>
                            </div>
                        </div>

                        <div className="metaCard">
                            <span className="metaIcon">
                                <FiEdit3 />
                            </span>
                            <div>
                                <strong>Now</strong>
                                <span>
                                    Fresh writing in a modern blog setup
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Styled.HeroSection>

            <Styled.ContentSection>
                <div className="contentGrid">
                    <section className="mainCard">
                        <div className="sectionHead">
                            <span className="sectionIcon">
                                <FiBookOpen />
                            </span>
                            <h2>What this site is</h2>
                        </div>

                        <p>
                            This site is the new writing side of the
                            Passion4Profession ecosystem. Instead of restoring
                            older posts, this repository is for publishing new
                            content from scratch using a cleaner React-based
                            structure.
                        </p>

                        <p>
                            The goal is to keep writing simple, useful, and
                            organized. Some posts may explain computing
                            fundamentals, some may explore internet concepts,
                            and some may be reflective technical essays. The
                            common thread is clarity and usefulness.
                        </p>
                    </section>

                    <section className="sideCard">
                        <div className="sectionHead">
                            <span className="sectionIcon">
                                <FiExternalLink />
                            </span>
                            <h2>Project relation</h2>
                        </div>

                        <p>
                            This project is the new blog companion to the older
                            archive and refactored archive work.
                        </p>

                        <a
                            href="https://github.com/a2rp/passion4profession-blog"
                            target="_blank"
                            rel="noreferrer"
                            className="sourceLink"
                        >
                            github.com/a2rp/passion4profession-blog
                        </a>
                    </section>
                </div>
            </Styled.ContentSection>

            <Styled.HighlightsSection>
                <div className="sectionTitleRow">
                    <h2>Project highlights</h2>
                    <p>What this new blog setup is designed to do</p>
                </div>

                <div className="highlightGrid">
                    {projectHighlights.map((item) => (
                        <article key={item.title} className="highlightCard">
                            <div className="highlightIcon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.HighlightsSection>

            <Styled.PurposeSection>
                <div className="purposeGrid">
                    <section className="purposeCard">
                        <div className="sectionHead">
                            <span className="sectionIcon">
                                <FiLayers />
                            </span>
                            <h2>Why this exists</h2>
                        </div>

                        <p>
                            Older archives are useful, but new writing needs its
                            own place. This project gives that space a cleaner
                            structure, better routes, and more room to grow into
                            a proper long-term technical blog.
                        </p>

                        <p>
                            It is meant to be both a writing platform and a
                            growing reference system, where every post adds one
                            more useful piece to the larger knowledge archive.
                        </p>
                    </section>

                    <section className="purposeCard">
                        <div className="sectionHead">
                            <span className="sectionIcon">
                                <FiFeather />
                            </span>
                            <h2>Current focus</h2>
                        </div>

                        <ul className="focusList">
                            {focusPoints.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </Styled.PurposeSection>

            <Styled.FooterNote>
                <div className="noteBox">
                    <h2>In simple words</h2>
                    <p>
                        This is the new blog home for writing fresh articles,
                        notes, and technical ideas in a cleaner and more
                        scalable structure.
                    </p>
                </div>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default About;
