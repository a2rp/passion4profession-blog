import React, { useEffect, useRef, useState } from "react";
import { FiShare2, FiLink, FiCheck } from "react-icons/fi";
import { Styled } from "./styled";

const ShareButtons = () => {
    const [toastMessage, setToastMessage] = useState("");
    const toastTimerRef = useRef(null);

    const showToast = (message) => {
        setToastMessage(message);

        if (toastTimerRef.current) {
            clearTimeout(toastTimerRef.current);
        }

        toastTimerRef.current = setTimeout(() => {
            setToastMessage("");
        }, 2200);
    };

    const copyCurrentLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            showToast("Link copied");
        } catch (error) {
            console.error("Copy failed:", error);
            showToast("Could not copy link");
        }
    };

    const handleShare = async () => {
        const shareData = {
            title: document.title,
            text: document.title,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
                return;
            }

            await copyCurrentLink();
        } catch (error) {
            if (error?.name === "AbortError") {
                return;
            }

            console.error("Share failed:", error);

            try {
                await copyCurrentLink();
            } catch (copyError) {
                console.error("Fallback copy failed:", copyError);
                showToast("Could not share link");
            }
        }
    };

    const handleCopyLink = async () => {
        await copyCurrentLink();
    };

    useEffect(() => {
        return () => {
            if (toastTimerRef.current) {
                clearTimeout(toastTimerRef.current);
            }
        };
    }, []);

    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.ShareBtn type="button" onClick={handleShare}>
                    <FiShare2 />
                    <span>Share</span>
                </Styled.ShareBtn>

                <Styled.CopyBtn type="button" onClick={handleCopyLink}>
                    <FiLink />
                    <span>Copy Link</span>
                </Styled.CopyBtn>
            </Styled.Wrapper>

            <Styled.Toast className={toastMessage ? "show" : ""}>
                <FiCheck />
                <span>{toastMessage || "Link copied"}</span>
            </Styled.Toast>
        </Styled.Container>
    );
};

export default ShareButtons;
