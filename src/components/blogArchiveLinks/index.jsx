import React from "react";
import { FiArrowUpRight, FiBookOpen, FiFeather, FiClock } from "react-icons/fi";
import { Styled } from "./styled";
import { blogRegistry } from "../../lib/blogRegistry";

const BlogArchiveLinks = () => {
    return (
        <Styled.Wrapper>
            <div className="topRow">
                <div className="iconWrap">
                    <FiBookOpen />
                </div>

                <div className="headingContent">
                    <h2>New Blog Posts</h2>
                    <p>
                        Fresh writing routes for the new Passion4Profession blog
                        project.
                    </p>
                </div>
            </div>

            <div className="infoStrip">
                <div className="infoItem">
                    <span className="infoIcon">
                        <FiFeather />
                    </span>
                    <span>New writing space</span>
                </div>

                <div className="infoItem">
                    <span className="infoIcon">
                        <FiClock />
                    </span>
                    <span>Testing routes and structure</span>
                </div>
            </div>

            <ul className="archiveList">
                {blogRegistry.map((post) => (
                    <li key={post.path} className="archiveItem">
                        <a href={post.path} className="archiveLink">
                            <div className="linkContent">
                                <span className="linkText">{post.title}</span>
                                <span className="linkMeta">{post.date}</span>
                            </div>

                            <span className="linkIcon">
                                <FiArrowUpRight />
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </Styled.Wrapper>
    );
};

export default BlogArchiveLinks;
