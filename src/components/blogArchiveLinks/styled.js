import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
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

        .topRow {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            padding: 20px;
            border-bottom: 1px solid var(--color-border);
            background:
                linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0.03),
                    rgba(255, 255, 255, 0.01)
                ),
                transparent;
        }

        .iconWrap {
            width: 48px;
            height: 48px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-primary);
            box-shadow: 0 10px 24px var(--color-shadow);
        }

        .iconWrap svg {
            width: 20px;
            height: 20px;
        }

        .headingContent {
            min-width: 0;
        }

        .headingContent h2 {
            font-size: 20px;
            line-height: 1.2;
            color: var(--color-text-primary);
            margin-bottom: 6px;
        }

        .headingContent p {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-secondary);
        }

        .infoStrip {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            padding: 14px 20px;
            border-bottom: 1px solid var(--color-border);
            background: rgba(255, 255, 255, 0.015);
        }

        .infoItem {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            min-height: 34px;
            padding: 0 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 700;
        }

        .infoIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-primary);
        }

        .archiveList {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
        }

        .archiveItem + .archiveItem {
            border-top: 1px solid var(--color-border);
        }

        .archiveLink {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
            padding: 16px 20px;
            text-decoration: none;
            color: var(--color-text-secondary);
            transition:
                background var(--transition-fast),
                color var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast);
        }

        .archiveLink:hover {
            background:
                linear-gradient(
                    90deg,
                    rgba(125, 211, 252, 0.08),
                    rgba(125, 211, 252, 0.02)
                ),
                var(--color-surface-3);
            color: var(--color-text-primary);
            text-decoration: none;
        }

        .linkContent {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .linkType {
            font-size: 11px;
            line-height: 1.3;
            font-weight: 800;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            color: var(--color-primary);
        }

        .linkText {
            min-width: 0;
            font-size: 15px;
            line-height: 1.5;
            font-weight: 700;
            color: var(--color-text-primary);
        }

        .linkMeta {
            font-size: 12px;
            line-height: 1.45;
            color: var(--color-text-muted);
        }

        .linkIcon {
            width: 36px;
            height: 36px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-muted);
            transition:
                background var(--transition-fast),
                color var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast),
                box-shadow var(--transition-fast);
        }

        .archiveLink:hover .linkIcon {
            background: var(--color-primary);
            color: var(--color-text-inverse);
            border-color: var(--color-primary);
            transform: translate(2px, -2px);
            box-shadow: 0 10px 24px var(--color-shadow);
        }

        @media (max-width: 640px) {
            .topRow {
                padding: 16px;
            }

            .infoStrip {
                padding: 12px 16px;
            }

            .archiveLink {
                padding: 14px 16px;
            }

            .headingContent h2 {
                font-size: 18px;
            }

            .linkText {
                font-size: 14px;
            }
        }

        html[data-theme="light"] & {
            .topRow {
                background:
                    linear-gradient(
                        180deg,
                        rgba(255, 255, 255, 0.8),
                        rgba(255, 255, 255, 0.35)
                    ),
                    transparent;
            }

            .infoStrip {
                background: rgba(15, 23, 42, 0.02);
            }

            .archiveLink:hover {
                background:
                    linear-gradient(
                        90deg,
                        rgba(3, 105, 161, 0.08),
                        rgba(3, 105, 161, 0.02)
                    ),
                    var(--color-surface-3);
            }
        }
    `,
};
