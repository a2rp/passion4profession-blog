import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
    FiArrowUpRight,
    FiBookOpen,
    FiCalendar,
    FiChevronLeft,
    FiChevronRight,
    FiSearch,
    FiSliders,
    FiX,
} from "react-icons/fi";
import { blogRegistry } from "../../lib/blogRegistry";
import { Styled } from "./styled";

const PAGE_SIZE = 4;

const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

const getThumbnail = (post) =>
    import.meta.env.BASE_URL + "images/blog-heroes/" + post.thumbnail;

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("newest");
    const [currentPage, setCurrentPage] = useState(1);

    const sortedPosts = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        const filtered = blogRegistry.filter((post) => {
            return (
                post.title.toLowerCase().includes(query) ||
                post.date.toLowerCase().includes(query) ||
                post.excerpt.toLowerCase().includes(query)
            );
        });

        return filtered.sort((a, b) => {
            if (sortOrder === "oldest") {
                return new Date(a.date) - new Date(b.date);
            }

            if (sortOrder === "title-asc") {
                return a.title.localeCompare(b.title);
            }

            if (sortOrder === "title-desc") {
                return b.title.localeCompare(a.title);
            }

            return new Date(b.date) - new Date(a.date);
        });
    }, [searchQuery, sortOrder]);

    const pageCount = Math.ceil(sortedPosts.length / PAGE_SIZE);
    const pageStart = (currentPage - 1) * PAGE_SIZE;
    const pagePosts = sortedPosts.slice(pageStart, pageStart + PAGE_SIZE);
    const featuredPost = pagePosts[0];
    const cardPosts = pagePosts.slice(1);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
        setCurrentPage(1);
    };

    const firstResult = sortedPosts.length ? pageStart + 1 : 0;
    const lastResult = Math.min(pageStart + PAGE_SIZE, sortedPosts.length);

    return (
        <Styled.Wrapper>
            <header className="pageIntro">
                <div className="eyebrow">
                    <FiBookOpen aria-hidden="true" />
                    <span>PASSION4PROFESSION JOURNAL</span>
                </div>

                <h1>Ideas worth keeping.</h1>
                <p>
                    Clear, practical writing on computing, software, and the
                    technology we use every day.
                </p>
            </header>

            <section className="listingSection" aria-labelledby="articles-title">
                <div className="sectionHeading">
                    <div>
                        <span className="sectionEyebrow">THE ARTICLE LIBRARY</span>
                        <h2 id="articles-title">Explore the latest writing</h2>
                    </div>
                    <span className="totalCount">
                        {sortedPosts.length} {sortedPosts.length === 1 ? "article" : "articles"}
                    </span>
                </div>

                <div className="controls">
                    <label className="searchControl">
                        <FiSearch aria-hidden="true" />
                        <input
                            type="search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search articles..."
                            aria-label="Search articles"
                        />
                        {searchQuery ? (
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchQuery("");
                                    setCurrentPage(1);
                                }}
                                aria-label="Clear article search"
                                title="Clear search"
                            >
                                <FiX />
                            </button>
                        ) : null}
                    </label>

                    <label className="sortControl">
                        <FiSliders aria-hidden="true" />
                        <span>Sort</span>
                        <select
                            value={sortOrder}
                            onChange={handleSortChange}
                            aria-label="Sort articles"
                        >
                            <option value="newest">Newest first</option>
                            <option value="oldest">Oldest first</option>
                            <option value="title-asc">Title: A to Z</option>
                            <option value="title-desc">Title: Z to A</option>
                        </select>
                    </label>
                </div>

                <div className="resultsLine" aria-live="polite">
                    {sortedPosts.length ? (
                        <span>
                            Showing {firstResult}–{lastResult} of {sortedPosts.length}
                        </span>
                    ) : (
                        <span>No articles match “{searchQuery}”.</span>
                    )}
                </div>

                {featuredPost ? (
                    <>
                        <NavLink
                            to={featuredPost.path}
                            className="featuredArticle"
                            aria-label={"Read " + featuredPost.title}
                        >
                            <div className="featuredImage">
                                <img
                                    src={getThumbnail(featuredPost)}
                                    alt=""
                                    fetchPriority="high"
                                />
                                <span className="featuredLabel">FEATURED ARTICLE</span>
                            </div>

                            <div className="featuredCopy">
                                <div className="articleMeta">
                                    <span className="articleType">
                                        <FiBookOpen aria-hidden="true" />
                                        Latest writing
                                    </span>
                                    <span className="dateMeta">
                                        <FiCalendar aria-hidden="true" />
                                        {formatDate(featuredPost.date)}
                                    </span>
                                </div>

                                <h2>{featuredPost.title}</h2>
                                <p>{featuredPost.excerpt}</p>

                                <span className="readLink">
                                    Read article
                                    <FiArrowUpRight aria-hidden="true" />
                                </span>
                            </div>
                        </NavLink>

                        {cardPosts.length ? (
                            <div className="articleGrid">
                                {cardPosts.map((post) => (
                                    <NavLink
                                        to={post.path}
                                        className="articleCard"
                                        key={post.path}
                                    >
                                        <div className="cardImage">
                                            <img
                                                src={getThumbnail(post)}
                                                alt=""
                                                loading="lazy"
                                            />
                                            <span className="cardImageIcon">
                                                <FiArrowUpRight aria-hidden="true" />
                                            </span>
                                        </div>

                                        <div className="cardCopy">
                                            <span className="dateMeta">
                                                <FiCalendar aria-hidden="true" />
                                                {formatDate(post.date)}
                                            </span>
                                            <h3>{post.title}</h3>
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        ) : null}

                        {pageCount > 1 ? (
                            <nav className="pagination" aria-label="Article pages">
                                <button
                                    type="button"
                                    className="pageArrow"
                                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                                    disabled={currentPage === 1}
                                    aria-label="Previous page"
                                >
                                    <FiChevronLeft />
                                </button>

                                {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                                    (page) => (
                                        <button
                                            type="button"
                                            key={page}
                                            className={
                                                page === currentPage
                                                    ? "pageNumber active"
                                                    : "pageNumber"
                                            }
                                            onClick={() => setCurrentPage(page)}
                                            aria-current={page === currentPage ? "page" : undefined}
                                            aria-label={"Page " + page}
                                        >
                                            {page}
                                        </button>
                                    ),
                                )}

                                <button
                                    type="button"
                                    className="pageArrow"
                                    onClick={() =>
                                        setCurrentPage((page) => Math.min(pageCount, page + 1))
                                    }
                                    disabled={currentPage === pageCount}
                                    aria-label="Next page"
                                >
                                    <FiChevronRight />
                                </button>
                            </nav>
                        ) : null}
                    </>
                ) : (
                    <div className="emptyState">
                        <span className="emptyIcon">
                            <FiSearch aria-hidden="true" />
                        </span>
                        <h3>No articles found</h3>
                        <p>Try another title or date to find a post.</p>
                    </div>
                )}
            </section>
        </Styled.Wrapper>
    );
};

export default Home;