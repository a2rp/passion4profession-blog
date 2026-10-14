import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    FiArrowUpRight,
    FiBookOpen,
    FiCompass,
    FiHome,
    FiMapPin,
} from "react-icons/fi";
import { blogRegistry } from "../../lib/blogRegistry";
import { Styled } from "./styled";

const latestPosts = [...blogRegistry]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

const NotFound = () => {
    const location = useLocation();

    return (
        <Styled.Wrapper>
            <Styled.Hero>
                <div className="heroCopy">
                    <div className="eyebrow">
                        <FiCompass aria-hidden="true" />
                        <span>Page not found</span>
                    </div>

                    <p className="errorCode" aria-label="Error 404">
                        404
                    </p>

                    <h1>This page took a wrong turn.</h1>

                    <p className="description">
                        The link may be outdated, or the page may have moved.
                        Let’s get you back to something useful.
                    </p>

                    <div className="requestedPath">
                        <span>Requested address</span>
                        <code>{location.pathname}</code>
                    </div>

                    <div className="actions">
                        <NavLink to="/" className="primaryButton">
                            <FiHome aria-hidden="true" />
                            <span>Back to home</span>
                        </NavLink>

                        <NavLink
                            to={latestPosts[0]?.path ?? "/"}
                            className="secondaryButton"
                        >
                            <FiBookOpen aria-hidden="true" />
                            <span>Read the latest</span>
                        </NavLink>
                    </div>
                </div>

                <div className="visual" aria-hidden="true">
                    <img
                        src={`${import.meta.env.BASE_URL}images/not-found-illustration.png`}
                        alt=""
                    />
                    <div className="visualCaption">
                        <FiMapPin />
                        <span>Signal lost. A new path awaits.</span>
                    </div>
                </div>
            </Styled.Hero>

            <Styled.Recommendations>
                <div className="sectionHeading">
                    <div>
                        <span className="sectionEyebrow">Find your next read</span>
                        <h2>Start somewhere good</h2>
                    </div>
                    <p>Here are a few recent articles from the archive.</p>
                </div>

                <div className="postGrid">
                    {latestPosts.map((post, index) => (
                        <NavLink
                            to={post.path}
                            className="postCard"
                            key={post.path}
                        >
                            <span className="postNumber">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="postTitle">{post.title}</span>
                            <span className="postMeta">
                                <span>{post.date}</span>
                                <FiArrowUpRight aria-hidden="true" />
                            </span>
                        </NavLink>
                    ))}
                </div>
            </Styled.Recommendations>
        </Styled.Wrapper>
    );
};

export default NotFound;
