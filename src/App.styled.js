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

        .menuOverlay {
            position: absolute;
            inset: 0;
            z-index: 19;
            width: 100%;
            height: 100%;
            padding: 0;
            border: 0;
            background: rgba(0, 0, 0, 0.48);
            backdrop-filter: blur(5px);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            cursor: default;
            transition:
                opacity 240ms ease,
                visibility 0s linear 240ms;
        }

        .menuOverlayVisible {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transition:
                opacity 240ms ease,
                visibility 0s;
        }

        .menuSlider {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 20;
            display: flex;
            flex-direction: column;
            width: min(380px, calc(100vw - 24px));
            height: 100%;
            overflow: hidden;
            border-left: 1px solid var(--color-border);
            background:
                radial-gradient(
                    420px 300px at 100% 0%,
                    color-mix(in srgb, var(--color-primary) 10%, transparent),
                    transparent 72%
                ),
                linear-gradient(
                    180deg,
                    var(--color-surface) 0%,
                    var(--color-surface-2) 100%
                );
            box-shadow: -24px 0 70px var(--color-shadow);
            transform: translateX(105%);
            visibility: hidden;
            pointer-events: none;
            transition:
                transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
                visibility 0s linear 300ms;
        }

        .menuSlider.displayMenuSlider {
            transform: translateX(0);
            visibility: visible;
            pointer-events: auto;
            transition:
                transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
                visibility 0s;
        }

        .drawerHeader {
            min-height: 78px;
            padding: 14px 16px 14px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            border-bottom: 1px solid var(--color-border);
            background: rgba(255, 255, 255, 0.018);
        }

        .drawerHeading {
            display: flex;
            flex-direction: column;
            gap: 4px;
            min-width: 0;
        }

        .drawerEyebrow {
            color: var(--color-primary);
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.14em;
        }

        .drawerTitle {
            color: var(--color-text-primary);
            font-size: 16px;
            font-weight: 800;
        }

        .drawerCloseButton {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm);
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            font-size: 20px;
            cursor: pointer;
            transition:
                color var(--transition-fast),
                border-color var(--transition-fast),
                background var(--transition-fast),
                transform var(--transition-fast);
        }

        .drawerCloseButton:hover {
            color: var(--color-text-primary);
            border-color: var(--color-border-light);
            background: var(--color-surface-3);
        }

        .drawerCloseButton:active {
            transform: scale(0.96);
        }

        .drawerNav {
            min-height: 0;
            flex: 1;
        }

        .drawerNav > aside {
            width: 100%;
            height: 100%;
            border: 0;
            border-radius: 0;
            box-shadow: none;
            background: transparent;
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
                    rgba(200, 200, 200, 0.08),
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
                    rgba(193, 193, 193, 0.06),
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

            .blogHeroImage {
                position: relative;
                height: clamp(210px, 27vw, 380px);
                margin: -1px -1px 0;
                overflow: hidden;
                border-radius: calc(var(--radius-xl) - 1px)
                    calc(var(--radius-xl) - 1px) 0 0;
                background: var(--color-surface-2);
            }

            .blogHeroImage::after {
                position: absolute;
                inset: 0;
                content: "";
                background: linear-gradient(
                    90deg,
                    rgba(8, 10, 14, 0.2),
                    transparent 75%
                );
                pointer-events: none;
            }

            .blogHeroImage img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            @media (max-width: 700px) {
                .blogHeroImage {
                    height: clamp(190px, 52vw, 280px);
                }
            }
        }

        .topicWrapper + .topicWrapper {
            margin-top: 6px;
        }

        .topicWrapper.a2rpFocusPulse {
            animation: a2rpFocusPulse 900ms ease;
        }

        @keyframes a2rpFocusPulse {
            0% {
                box-shadow: 0 0 0 0px rgba(200, 200, 200, 0.18);
                border-radius: var(--radius-md);
            }
            50% {
                box-shadow: 0 0 0 8px rgba(200, 200, 200, 0.1);
                border-radius: var(--radius-md);
            }
            100% {
                box-shadow: 0 0 0 0px rgba(200, 200, 200, 0);
                border-radius: var(--radius-md);
            }
        }

        html[data-theme="light"] & {
            .menuSlider {
                background:
                    radial-gradient(
                        420px 300px at 100% 0%,
                        rgba(100, 100, 100, 0.08),
                        transparent 72%
                    ),
                    linear-gradient(
                        180deg,
                        var(--color-surface) 0%,
                        var(--color-surface-2) 100%
                    );
            }

            .drawerHeader {
                background: rgba(255, 255, 255, 0.52);
            }

            .contentWrapper {
                .contentGlow::before {
                    background: radial-gradient(
                        circle,
                        rgba(100, 100, 100, 0.08),
                        transparent 68%
                    );
                }

                .contentGlow::after {
                    background: radial-gradient(
                        circle,
                        rgba(92, 92, 92, 0.05),
                        transparent 70%
                    );
                }

                .footerWrapper {
                    background:
                        linear-gradient(
                            180deg,
                            rgba(23, 23, 23, 0.02),
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
                    box-shadow: 0 0 0 0px rgba(100, 100, 100, 0.14);
                    border-radius: var(--radius-md);
                }
                50% {
                    box-shadow: 0 0 0 8px rgba(100, 100, 100, 0.08);
                    border-radius: var(--radius-md);
                }
                100% {
                    box-shadow: 0 0 0 0px rgba(100, 100, 100, 0);
                    border-radius: var(--radius-md);
                }
            }
        }
    `,
};
