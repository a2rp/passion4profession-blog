import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import GoToTop from "./components/goToTop";
import AppRoutes from "./AppRoutes";
import BlogArchiveNav from "./components/blogArchiveNav";

const App = () => {
    const location = useLocation();
    const scrollerRef = useRef(null);

    const [displaySlider, setDisplaySlider] = useState(true);

    const handleSliderToggleClick = () => {
        setDisplaySlider((prev) => !prev);
    };

    useEffect(() => {
        if (!scrollerRef.current) {
            return;
        }

        scrollerRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [location.pathname]);

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header handleSliderToggleClick={handleSliderToggleClick} />
            </Styled.Header>

            <Styled.Main>
                <div
                    className={`menuSlider ${displaySlider ? "displayMenuSlider" : "hideMenuSlider"}`}
                >
                    <BlogArchiveNav />
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
