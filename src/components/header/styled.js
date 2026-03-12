import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        position: sticky;
        top: 0;
        z-index: 50;
        width: 100%;
        height: 100%;
        background: transparent;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                radial-gradient(
                    760px 220px at 15% 0%,
                    color-mix(in srgb, var(--color-primary) 10%, transparent),
                    transparent 70%
                ),
                radial-gradient(
                    680px 220px at 90% 0%,
                    color-mix(in srgb, var(--color-accent) 10%, transparent),
                    transparent 70%
                );
            opacity: 0.9;
        }
    `,

    Main: styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        position: relative;
        z-index: 1;

        .leftSide {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            flex: 1;
        }

        .toggleButtonLogoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            width: 100%;
        }

        .toggleButton {
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background:
                linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0.04),
                    rgba(255, 255, 255, 0.015)
                ),
                var(--color-surface-2);
            color: var(--color-text-primary);
            cursor: pointer;
            box-shadow: 0 10px 24px var(--color-shadow);
            transition:
                background var(--transition-fast),
                border-color var(--transition-fast),
                color var(--transition-fast),
                transform var(--transition-fast),
                box-shadow var(--transition-fast);
        }

        .toggleButton:hover {
            background:
                linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0.06),
                    rgba(255, 255, 255, 0.02)
                ),
                var(--color-surface-3);
            border-color: var(--color-border-light);
            box-shadow: 0 14px 28px var(--color-shadow);
        }

        .toggleButton:active {
            transform: translateY(1px);
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
            text-decoration: none;
            flex-shrink: 1;

            .logoWrapper {
                height: 48px;
                width: 48px;
                border-radius: var(--radius-sm);
                position: relative;
                overflow: hidden;
                background: var(--color-surface);
                border: 1px solid var(--color-border);
                flex-shrink: 0;
                box-shadow: 0 10px 24px var(--color-shadow);

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: contain;
                    display: block;
                    transition: opacity var(--transition-fast);
                    border-radius: inherit;
                }

                .logoSkeleton {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        90deg,
                        var(--color-surface-2),
                        var(--color-border),
                        var(--color-surface-2)
                    );
                    opacity: 0.6;
                }
            }

            .nameWrapper {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;

                .title {
                    font-weight: 800;
                    color: var(--color-text-primary);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: 15px;
                    line-height: 1.2;
                }

                .subTitle {
                    color: var(--color-text-muted);
                    font-size: 12px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 1.3;
                }

                @media (max-width: 780px) {
                    .subTitle {
                        display: none;
                    }
                }

                @media (max-width: 460px) {
                    display: none;
                }
            }
        }

        .rightSide {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .projectBadge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            min-height: 40px;
            padding: 0 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background:
                linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0.04),
                    rgba(255, 255, 255, 0.015)
                ),
                var(--color-surface-2);
            box-shadow: 0 10px 24px var(--color-shadow);

            .badgeIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: var(--color-primary);
                font-size: 15px;
            }

            .badgeText {
                font-size: 12px;
                font-weight: 800;
                letter-spacing: 0.03em;
                color: var(--color-text-secondary);
                text-transform: uppercase;
            }

            @media (max-width: 680px) {
                display: none;
            }
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 9px 12px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background:
                linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0.04),
                    rgba(255, 255, 255, 0.015)
                ),
                var(--color-surface-2);
            color: var(--color-text-primary);
            box-shadow: 0 10px 24px var(--color-shadow);
            transition:
                background var(--transition-fast),
                border-color var(--transition-fast),
                color var(--transition-fast),
                transform var(--transition-fast),
                box-shadow var(--transition-fast);

            .icon {
                font-size: 18px;
                color: var(--color-primary);
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

            .label {
                font-size: 13px;
                font-weight: 700;
                color: var(--color-text-secondary);
            }

            &:hover {
                background:
                    linear-gradient(
                        180deg,
                        rgba(255, 255, 255, 0.06),
                        rgba(255, 255, 255, 0.02)
                    ),
                    var(--color-surface-3);
                border-color: var(--color-border-light);
                box-shadow: 0 14px 28px var(--color-shadow);
            }

            &:active {
                transform: translateY(1px);
            }

            @media (max-width: 420px) {
                .label {
                    display: none;
                }
            }
        }

        html[data-theme="light"] & {
            .toggleButton,
            .themeToggleBtn {
                background:
                    linear-gradient(
                        180deg,
                        rgba(255, 255, 255, 0.82),
                        rgba(255, 255, 255, 0.42)
                    ),
                    var(--color-surface-2);
            }
        }
    `,
};
