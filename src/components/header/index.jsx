import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import blackBgLogo from "/logo.png";
import { FiGithub, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const THEME_LS_KEY = "passion4profession-blog-theme";

const Header = ({ handleSliderToggleClick, sliderOpen }) => {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") {
            return "dark";
        }

        return localStorage.getItem(THEME_LS_KEY) || "dark";
    });

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }

        localStorage.setItem(THEME_LS_KEY, theme);
    }, [theme]);

    const nextTheme = useMemo(() => {
        return theme === "light" ? "dark" : "light";
    }, [theme]);

    const handleToggle = () => {
        setTheme(nextTheme);
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div className="leftSide">
                    <NavLink className="logoNameWrapper" to="/">
                        <div className="logoWrapper">
                            {!logoLoaded ? (
                                <div className="logoSkeleton" />
                            ) : null}

                            <img
                                src={blackBgLogo}
                                alt="passion4profession blog"
                                onLoad={() => setLogoLoaded(true)}
                                style={{ opacity: logoLoaded ? 1 : 0 }}
                                loading="lazy"
                            />
                        </div>

                        <div className="nameWrapper">
                            <div className="title">Passion4Profession Blog</div>
                            <div className="subTitle">
                                fresh writing, notes, and technical essays
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className="rightSide">
                    <a
                        className="repoLink"
                        href="https://github.com/a2rp/passion4profession-blog"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View the source repository on GitHub"
                        title="View source repository"
                    >
                        <FiGithub aria-hidden="true" />
                        <span>Repo</span>
                    </a>
                    <button
                        type="button"
                        className="themeToggleBtn"
                        onClick={handleToggle}
                        aria-label={"Switch to " + nextTheme + " theme"}
                        title={"Switch to " + nextTheme + " theme"}
                    >
                        <span className="icon">
                            {theme === "light" ? <FiMoon /> : <FiSun />}
                        </span>

                        <span className="label">
                            {theme === "light" ? "Light" : "Dark"}
                        </span>
                    </button>

                    <button
                        type="button"
                        className="toggleButton"
                        onClick={handleSliderToggleClick}
                        aria-label={sliderOpen ? "Close blog menu" : "Open blog menu"}
                        aria-expanded={sliderOpen}
                        aria-controls="blog-navigation-drawer"
                        title={sliderOpen ? "Close blog menu" : "Browse articles"}
                    >
                        {sliderOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                    </button>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
