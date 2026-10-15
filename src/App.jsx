import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import GoToTop from "./components/goToTop";
import AppRoutes from "./AppRoutes";
import BlogArchiveNav from "./components/blogArchiveNav";

const App = () => {
    const location = useLocation();
    const scrollerRef = useRef(null);
    const [displaySlider, setDisplaySlider] = useState(false);

    const handleSliderToggleClick = () => {
        setDisplaySlider((prev) => !prev);
    };

    const closeSlider = () => {
        setDisplaySlider(false);
    };

    useEffect(() => {
        if (!scrollerRef.current) {
            return;
        }

        scrollerRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        setDisplaySlider(false);
    }, [location.pathname]);

    useEffect(() => {
        if (!displaySlider) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setDisplaySlider(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [displaySlider]);

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header
                    handleSliderToggleClick={handleSliderToggleClick}
                    sliderOpen={displaySlider}
                />
            </Styled.Header>

            <Styled.Main>
                <button
                    type="button"
                    className={
                        "menuOverlay " + (displaySlider ? "menuOverlayVisible" : "")
                    }
                    onClick={closeSlider}
                    aria-label="Close blog menu"
                    aria-hidden={!displaySlider}
                    tabIndex={-1}
                />

                <div
                    id="blog-navigation-drawer"
                    className={
                        "menuSlider " + (displaySlider ? "displayMenuSlider" : "hideMenuSlider")
                    }
                    role="region"
                    aria-label="Blog navigation"
                    aria-hidden={!displaySlider}
                >
                    <div className="drawerHeader">
                        <div className="drawerHeading">
                            <span className="drawerEyebrow">BLOG LIBRARY</span>
                            <span className="drawerTitle">Browse articles</span>
                        </div>

                        <button
                            type="button"
                            className="drawerCloseButton"
                            onClick={closeSlider}
                            aria-label="Close blog menu"
                            title="Close menu"
                        >
                            <FiX />
                        </button>
                    </div>

                    <div className="drawerNav">
                        <BlogArchiveNav onNavigate={closeSlider} />
                    </div>
                </div>

                <div className="contentWrapper">
                    <div className="contentInnerWrapper" ref={scrollerRef}>
                        <div className="contentGlow" />

                        <div className="routesWrapper">
                            <AppRoutes />
                        </div>

                        <div className="footerWrapper">
                            <Footer />
                        </div>

                        <GoToTop scrollerRef={scrollerRef} />
                    </div>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
