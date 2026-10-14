import styled from "styled-components";

export const Styled = {
    Wrapper: styled.aside`
        width: 300px;
        height: 100%;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background:
            linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-surface-2) 100%
            ),
            transparent;
        box-shadow: 0 20px 50px var(--color-shadow);
        overflow: hidden;
        display: flex;
        flex-direction: column;

        .searchBox {
            position: relative;
            padding: 14px 18px;
            border-bottom: 1px solid var(--color-border);
            background: transparent;
        }

        .searchIcon {
            position: absolute;
            left: 30px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--color-text-muted);
            font-size: 16px;
            pointer-events: none;
        }

        .searchBox input {
            width: 100%;
            height: 44px;
            padding: 0 40px 0 40px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
        }

        .searchBox input:focus {
            border-color: var(--color-primary);
            background: var(--color-surface);
            box-shadow: 0 0 0 4px rgba(200, 200, 200, 0.1);
        }

        .clearButton {
            position: absolute;
            right: 26px;
            top: 50%;
            transform: translateY(-50%);
            width: 28px;
            height: 28px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            transition:
                background var(--transition-fast),
                color var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast);
        }

        .clearButton:hover {
            background: var(--color-surface);
            color: var(--color-text-primary);
            border-color: var(--color-border-light);
        }

        .navList {
            list-style: none;
            margin: 0;
            padding: 0;
            overflow-y: auto;
            flex: 1;
            scroll-behavior: smooth;
        }

        .navItem + .navItem {
            border-top: 1px solid var(--color-border);
        }

        .navLink {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            width: 100%;
            padding: 14px 16px;
            text-decoration: none;
            color: var(--color-text-secondary);
            transition:
                background var(--transition-fast),
                color var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast);
        }

        .navLink:hover {
            background:
                linear-gradient(
                    90deg,
                    rgba(200, 200, 200, 0.08),
                    rgba(200, 200, 200, 0.02)
                ),
                var(--color-surface-3);
            color: var(--color-text-primary);
            text-decoration: none;
        }

        .navLink.active {
            background:
                linear-gradient(
                    90deg,
                    rgba(200, 200, 200, 0.14),
                    rgba(200, 200, 200, 0.03)
                ),
                var(--color-surface);
            color: var(--color-text-primary);
            box-shadow: inset 3px 0 0 var(--color-primary);
        }

        .initialBadge {
            width: 36px;
            height: 36px;
            flex-shrink: 0;
            border-radius: var(--radius-sm);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            font-size: 14px;
            font-weight: 900;
            line-height: 1;
            transition:
                background var(--transition-fast),
                color var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast),
                box-shadow var(--transition-fast);
        }

        .navLink:hover .initialBadge {
            background: var(--color-surface-2);
            border-color: var(--color-border-light);
            transform: translateY(-1px);
        }

        .navLink.active .initialBadge {
            background: var(--color-primary);
            color: var(--color-text-inverse);
            border-color: var(--color-primary);
            box-shadow: 0 10px 24px rgba(200, 200, 200, 0.14);
        }

        .textGroup {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
            justify-content: center;
        }

        .title {
            font-size: 14px;
            line-height: 1.45;
            font-weight: 700;
            color: inherit;
            word-break: break-word;
        }

        .metaText {
            font-size: 12px;
            line-height: 1.45;
            color: var(--color-text-muted);
        }

        .emptyState {
            padding: 18px;
            color: var(--color-text-muted);
            font-size: 14px;
            line-height: 1.6;
        }

        @media (max-width: 640px) {
            .searchBox {
                padding: 12px 16px;
            }

            .searchIcon {
                left: 28px;
            }

            .clearButton {
                right: 24px;
            }

            .navLink {
                padding: 12px 14px;
            }

            .title {
                font-size: 13px;
            }
        }

        html[data-theme="light"] & {
            .searchBox input:focus {
                box-shadow: 0 0 0 4px rgba(100, 100, 100, 0.1);
            }

            .navLink:hover {
                background:
                    linear-gradient(
                        90deg,
                        rgba(100, 100, 100, 0.08),
                        rgba(100, 100, 100, 0.02)
                    ),
                    var(--color-surface-3);
            }

            .navLink.active {
                background:
                    linear-gradient(
                        90deg,
                        rgba(100, 100, 100, 0.12),
                        rgba(100, 100, 100, 0.03)
                    ),
                    var(--color-surface);
            }

            .navLink.active .initialBadge {
                box-shadow: 0 10px 24px rgba(100, 100, 100, 0.14);
            }
        }
    `,
};
