import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import blackBgLogo from "/images/blackBgLogo.png";
import { FiMoon, FiSun, FiEdit3 } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

const THEME_LS_KEY = "passion4profession-blog-theme";

const Header = ({ handleSliderToggleClick }) => {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem(THEME_LS_KEY);
        const initialTheme = storedTheme || "dark";
        setTheme(initialTheme);

        if (initialTheme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
    }, []);

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
                    <div className="toggleButtonLogoNameWrapper">
                        <button
                            type="button"
                            className="toggleButton"
                            onClick={handleSliderToggleClick}
                            aria-label="Toggle blog sidebar"
                            title="Toggle blog sidebar"
                        >
                            <IoIosMenu size={32} />
                        </button>

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
                                <div className="title">
                                    Passion4Profession Blog
                                </div>

                                <div className="subTitle">
                                    fresh writing, notes, and technical essays
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>

                <div className="rightSide">
                    <button
                        type="button"
                        className="themeToggleBtn"
                        onClick={handleToggle}
                        aria-label={`Switch to ${nextTheme} theme`}
                        title={`Switch to ${nextTheme} theme`}
                    >
                        <span className="icon">
                            {theme === "light" ? <FiMoon /> : <FiSun />}
                        </span>

                        <span className="label">
                            {theme === "light" ? "Light" : "Dark"}
                        </span>
                    </button>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
