import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiBookOpen, FiSearch, FiX, FiFeather, FiClock } from "react-icons/fi";
import { Styled } from "./styled";
import { blogRegistry } from "../../lib/blogRegistry";

const BlogArchiveNav = () => {
    const location = useLocation();
    const activeItemRef = useRef(null);
    const listRef = useRef(null);
    const [search, setSearch] = useState("");

    const filteredRoutes = useMemo(() => {
        const trimmed = search.trim().toLowerCase();

        const matchedRoutes = !trimmed
            ? blogRegistry
            : blogRegistry.filter((item) => {
                  return (
                      item.title.toLowerCase().includes(trimmed) ||
                      item.date.toLowerCase().includes(trimmed)
                  );
              });

        return [...matchedRoutes].sort((a, b) => {
            const aIsDraft = a.date === "Draft route";
            const bIsDraft = b.date === "Draft route";

            if (aIsDraft && bIsDraft) return 0;
            if (aIsDraft) return 1;
            if (bIsDraft) return -1;

            return new Date(b.date) - new Date(a.date);
        });
    }, [search]);

    useEffect(() => {
        const listEl = listRef.current;
        const activeEl = activeItemRef.current;

        if (!listEl || !activeEl) {
            return;
        }

        const listRect = listEl.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();

        const currentScrollTop = listEl.scrollTop;
        const activeOffsetTop =
            activeRect.top - listRect.top + currentScrollTop;

        const targetScrollTop =
            activeOffsetTop -
            listEl.clientHeight / 2 +
            activeEl.clientHeight / 2;

        const maxScrollTop = listEl.scrollHeight - listEl.clientHeight;
        const nextScrollTop = Math.max(
            0,
            Math.min(targetScrollTop, maxScrollTop),
        );

        listEl.scrollTo({
            top: nextScrollTop,
            behavior: "smooth",
        });
    }, [location.pathname, filteredRoutes]);

    const handleClearSearch = () => {
        setSearch("");
    };

    return (
        <Styled.Wrapper>
            <div className="headerBlock">
                <div className="headerIcon">
                    <FiBookOpen />
                </div>

                <div className="headerContent">
                    <h2>Blog Posts</h2>
                    <p>Browse the current routes for the new blog setup.</p>
                </div>
            </div>

            <div className="infoRow">
                <div className="infoPill">
                    <span className="pillIcon">
                        <FiFeather />
                    </span>
                    <span>Engineering insights</span>
                </div>

                <div className="infoPill">
                    <span className="pillIcon">
                        <FiClock />
                    </span>
                    <span>Technical articles</span>
                </div>
            </div>

            <div className="searchBox">
                <FiSearch className="searchIcon" />

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search blog posts..."
                    aria-label="Search blog posts"
                />

                {search.trim() ? (
                    <button
                        type="button"
                        className="clearButton"
                        onClick={handleClearSearch}
                        aria-label="Clear search"
                        title="Clear search"
                    >
                        <FiX />
                    </button>
                ) : null}
            </div>

            <ul className="navList" ref={listRef}>
                {filteredRoutes.length ? (
                    filteredRoutes.map((item) => {
                        const firstLetter = item.title.charAt(0).toUpperCase();
                        const isActive = location.pathname === item.path;

                        return (
                            <li key={item.path} className="navItem">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive: navIsActive }) =>
                                        `navLink ${navIsActive ? "active" : ""}`
                                    }
                                    ref={isActive ? activeItemRef : null}
                                >
                                    <span className="initialBadge">
                                        {firstLetter}
                                    </span>

                                    <span className="textGroup">
                                        <span className="title">
                                            {item.title}
                                        </span>
                                        <span className="metaText">
                                            {item.date}
                                        </span>
                                    </span>
                                </NavLink>
                            </li>
                        );
                    })
                ) : (
                    <li className="emptyState">
                        No blog posts match your search.
                    </li>
                )}
            </ul>
        </Styled.Wrapper>
    );
};

export default BlogArchiveNav;
