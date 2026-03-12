import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background: var(--color-bg);
        color: var(--color-text-primary);
    `,

    StandaloneWrapper: styled.div`
        min-height: 100vh;
        background: var(--color-bg);
        color: var(--color-text-primary);
    `,

    Header: styled.header`
        height: var(--header-height);
        overflow: hidden;
        background:
            linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.025),
                rgba(255, 255, 255, 0.01)
            ),
            var(--color-bg);
        border-bottom: 1px solid var(--color-border);
        backdrop-filter: blur(10px);
    `,

    Main: styled.main`
        height: 100%;
        overflow: hidden;
        position: relative;
        display: flex;
        background: transparent;

        .menuSlider {
            border-right: 1px solid var(--color-border);
            flex: 0 0 320px;
            width: 320px;
            position: relative;
            overflow: hidden;
            transition: var(--transition-normal);
            transition-property:
                width, flex, border-color, background-color, box-shadow,
                transform;
            background:
                linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0.02) 0%,
                    rgba(255, 255, 255, 0.01) 100%
                ),
                linear-gradient(
                    180deg,
                    var(--color-surface) 0%,
                    var(--color-surface-2) 100%
                );
            box-shadow: inset -1px 0 0 rgba(255, 255, 255, 0.02);

            @media (max-width: 700px) {
                position: absolute;
                left: 0;
                top: 0;
                width: 320px;
                height: 100%;
                z-index: 20;
                box-shadow: 12px 0 36px var(--color-shadow);
            }

            .searchWrapper {
                height: var(--header-height);
                width: 320px;
                padding: 8px 10px;
                border-bottom: 1px solid var(--color-border);
                background:
                    linear-gradient(
                        180deg,
                        rgba(255, 255, 255, 0.02),
                        rgba(255, 255, 255, 0.005)
                    ),
                    transparent;

                .searchInputHolder {
                    position: relative;
                    display: flex;
                    align-items: center;
                    height: 100%;
                }

                .searchIcon {
                    position: absolute;
                    left: 12px;
                    font-size: 16px;
                    color: var(--color-text-muted);
                    pointer-events: none;
                    opacity: 0.95;
                }

                .clearSearchButton {
                    position: absolute;
                    right: 8px;
                    width: 30px;
                    height: 30px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 999px;
                    background: var(--color-surface);
                    color: var(--color-text-secondary);
                    border: 1px solid var(--color-border);
                    cursor: pointer;
                    transition:
                        background var(--transition-fast),
                        color var(--transition-fast),
                        border-color var(--transition-fast),
                        transform var(--transition-fast),
                        box-shadow var(--transition-fast);
                }

                .clearSearchButton:hover {
                    background: var(--color-surface-3);
                    color: var(--color-text-primary);
                    border-color: var(--color-border-light);
                    box-shadow: 0 6px 16px var(--color-shadow);
                }

                .clearSearchButton:active {
                    transform: scale(0.96);
                }

                input {
                    width: 100%;
                    height: 100%;
                    padding: 10px 40px 10px 38px;
                    background: var(--color-surface-2);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-sm);
                    color: var(--color-text-primary);
                    outline: none;
                    transition:
                        border-color var(--transition-fast),
                        background-color var(--transition-fast),
                        color var(--transition-fast),
                        box-shadow var(--transition-fast);
                }

                input::placeholder {
                    color: var(--color-text-muted);
                    opacity: 1;
                }

                input:hover {
                    border-color: var(--color-border-light);
                }

                input:focus {
                    border-color: var(--color-primary);
                    background: var(--color-surface);
                    box-shadow: 0 0 0 4px rgba(125, 211, 252, 0.1);
                }
            }

            .menuSliderInner {
                height: calc(100% - var(--header-height));
                overflow-y: auto;
                width: 320px;
                display: flex;
                flex-direction: column;
                background: transparent;
            }

            .menuLink {
                display: flex;
                align-items: flex-start;
                gap: 12px;
                padding: 14px 16px;
                text-decoration: none;
                color: var(--color-text-secondary);
                border-bottom: 1px solid var(--color-border);
                background: transparent;
                transition:
                    background var(--transition-fast),
                    color var(--transition-fast),
                    border-color var(--transition-fast),
                    transform var(--transition-fast);
            }

            .menuLinkInitial {
                width: 38px;
                height: 38px;
                border-radius: var(--radius-sm);
                flex-shrink: 0;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: var(--color-surface-3);
                border: 1px solid var(--color-border);
                color: var(--color-text-primary);
                font-size: 15px;
                font-weight: 900;
                line-height: 1;
                transition:
                    background var(--transition-fast),
                    color var(--transition-fast),
                    border-color var(--transition-fast),
                    transform var(--transition-fast),
                    box-shadow var(--transition-fast);
                box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
            }

            .menuLinkContent {
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .menuLinkText {
                color: inherit;
                line-height: 1.35;
                font-size: 14px;
                font-weight: 700;
            }

            .menuLinkMeta {
                color: var(--color-text-muted);
                font-size: 12px;
                line-height: 1.45;
            }

            .menuLink:hover {
                background: rgba(255, 255, 255, 0.03);
                color: var(--color-text-primary);
                transform: translateX(2px);
            }

            .menuLink:hover .menuLinkInitial {
                background: var(--color-surface);
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 8px 18px var(--color-shadow);
            }

            .menuLink.active {
                background:
                    linear-gradient(
                        90deg,
                        rgba(125, 211, 252, 0.14),
                        rgba(125, 211, 252, 0.03)
                    ),
                    var(--color-surface);
                color: var(--color-text-primary);
                border-bottom-color: var(--color-border-light);
            }

            .menuLink.active .menuLinkInitial {
                background: var(--color-primary);
                color: var(--color-text-inverse);
                border-color: var(--color-primary);
                box-shadow: 0 10px 24px rgba(125, 211, 252, 0.14);
            }

            &.hideMenuSlider {
                flex: 0 0 0;
                width: 0;
                border-right: 0;
                box-shadow: none;

                @media (max-width: 700px) {
                    transform: translateX(-100%);
                }
            }

            &.displayMenuSlider {
                flex: 0 0 320px;
                width: 320px;

                @media (max-width: 700px) {
                    transform: translateX(0);
                }
            }
        }

        .contentWrapper {
            width: 100%;
            overflow: hidden;
            background: transparent;

            .contentInnerWrapper {
                position: relative;
                height: 100%;
                overflow-y: auto;
                background: transparent;
            }

            .contentGlow {
                position: sticky;
                top: 0;
                z-index: 0;
                height: 0;
                pointer-events: none;
                overflow: hidden;
            }

            .contentGlow::before {
                content: "";
                position: absolute;
                top: -220px;
                left: -120px;
                width: 460px;
                height: 460px;
                border-radius: 50%;
                background: radial-gradient(
                    circle,
                    rgba(125, 211, 252, 0.08),
                    transparent 68%
                );
                filter: blur(10px);
            }

            .contentGlow::after {
                content: "";
                position: absolute;
                top: -180px;
                right: -120px;
                width: 380px;
                height: 380px;
                border-radius: 50%;
                background: radial-gradient(
                    circle,
                    rgba(147, 197, 253, 0.06),
                    transparent 70%
                );
                filter: blur(14px);
            }

            .routesWrapper {
                /* border: 1px solid #f00; */
                position: relative;
                z-index: 1;
                min-height: 100vh;
            }

            .footerWrapper {
                position: relative;
                z-index: 1;
                flex-shrink: 0;
                border-top: 1px solid var(--color-border);
                background:
                    linear-gradient(
                        180deg,
                        rgba(255, 255, 255, 0.01),
                        transparent
                    ),
                    transparent;
            }
        }

        .topicWrapper {
            scroll-margin-top: calc(var(--header-height) + 12px);
        }

        .topicWrapper + .topicWrapper {
            margin-top: 6px;
        }

        .topicWrapper.a2rpFocusPulse {
            animation: a2rpFocusPulse 900ms ease;
        }

        @keyframes a2rpFocusPulse {
            0% {
                box-shadow: 0 0 0 0px rgba(125, 211, 252, 0.18);
                border-radius: var(--radius-md);
            }
            50% {
                box-shadow: 0 0 0 8px rgba(125, 211, 252, 0.1);
                border-radius: var(--radius-md);
            }
            100% {
                box-shadow: 0 0 0 0px rgba(125, 211, 252, 0);
                border-radius: var(--radius-md);
            }
        }

        html[data-theme="light"] & {
            .menuSlider {
                background:
                    linear-gradient(
                        180deg,
                        rgba(255, 255, 255, 0.8) 0%,
                        rgba(255, 255, 255, 0.62) 100%
                    ),
                    linear-gradient(
                        180deg,
                        var(--color-surface) 0%,
                        var(--color-surface-2) 100%
                    );
                box-shadow: inset -1px 0 0 rgba(15, 23, 42, 0.03);

                @media (max-width: 700px) {
                    box-shadow: 12px 0 36px var(--color-shadow);
                }

                .searchWrapper {
                    background:
                        linear-gradient(
                            180deg,
                            rgba(255, 255, 255, 0.7),
                            rgba(255, 255, 255, 0.28)
                        ),
                        transparent;
                }

                .searchWrapper input:focus {
                    box-shadow: 0 0 0 4px rgba(3, 105, 161, 0.1);
                }

                .menuLink:hover {
                    background: rgba(15, 23, 42, 0.035);
                }

                .menuLink.active {
                    background:
                        linear-gradient(
                            90deg,
                            rgba(3, 105, 161, 0.12),
                            rgba(3, 105, 161, 0.03)
                        ),
                        var(--color-surface);
                }

                .menuLink.active .menuLinkInitial {
                    box-shadow: 0 10px 24px rgba(3, 105, 161, 0.14);
                }
            }

            .contentWrapper {
                .contentGlow::before {
                    background: radial-gradient(
                        circle,
                        rgba(3, 105, 161, 0.08),
                        transparent 68%
                    );
                }

                .contentGlow::after {
                    background: radial-gradient(
                        circle,
                        rgba(29, 78, 216, 0.05),
                        transparent 70%
                    );
                }

                .footerWrapper {
                    background:
                        linear-gradient(
                            180deg,
                            rgba(15, 23, 42, 0.02),
                            transparent
                        ),
                        transparent;
                }
            }

            .topicWrapper.a2rpFocusPulse {
                animation: a2rpFocusPulseLight 900ms ease;
            }

            @keyframes a2rpFocusPulseLight {
                0% {
                    box-shadow: 0 0 0 0px rgba(3, 105, 161, 0.14);
                    border-radius: var(--radius-md);
                }
                50% {
                    box-shadow: 0 0 0 8px rgba(3, 105, 161, 0.08);
                    border-radius: var(--radius-md);
                }
                100% {
                    box-shadow: 0 0 0 0px rgba(3, 105, 161, 0);
                    border-radius: var(--radius-md);
                }
            }
        }
    `,
};
