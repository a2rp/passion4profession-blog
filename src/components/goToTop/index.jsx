import React, { useEffect, useState } from "react";
import { Styled } from "./styled";
import { FiArrowUp } from "react-icons/fi";

const GoToTop = ({ scrollerRef }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const scroller = scrollerRef?.current;
        if (!scroller) return;

        const onScroll = () => {
            const top = scroller.scrollTop || 0;
            setVisible(top > 320);
        };

        onScroll();
        scroller.addEventListener("scroll", onScroll);

        return () => scroller.removeEventListener("scroll", onScroll);
    }, [scrollerRef]);

    const scrollToTop = () => {
        const scroller = scrollerRef?.current;
        if (!scroller) return;

        scroller.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Styled.Button
            type="button"
            onClick={scrollToTop}
            className={visible ? "show" : "hide"}
            aria-label="Scroll to top"
            title="Scroll to top"
        >
            <FiArrowUp />
        </Styled.Button>
    );
};

export default GoToTop;
