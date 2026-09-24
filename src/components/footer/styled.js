import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        padding: 18px clamp(14px, 3vw, 28px) 22px;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.025),
            rgba(255, 255, 255, 0.006)
        );

        .info {
            max-width: 720px;
            margin: 0 auto 16px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.7;
            text-align: center;
        }

        html[data-theme="light"] & {
            background: linear-gradient(
                180deg,
                rgba(15, 23, 42, 0.025),
                rgba(15, 23, 42, 0.006)
            );
        }
    `,

    Main: styled.footer`
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
        align-items: center;
        gap: 16px;
        padding-top: 15px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 12px;

        .copyright,
        .projectName,
        .linkGroups {
            min-width: 0;
        }

        .copyright a {
            color: var(--color-link);
            font-weight: 800;
            text-decoration: none;
            transition: color var(--transition-fast), text-shadow var(--transition-fast);
        }

        .copyright a:hover {
            color: var(--color-link-hover);
            text-shadow: 0 0 12px rgba(125, 211, 252, 0.45);
        }

        .projectName {
            color: var(--color-text-secondary);
            font-weight: 800;
            text-align: center;
        }

        .linkGroups {
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
            gap: 8px;
        }

        .linkGroup {
            display: inline-flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .linkGroup a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            color: var(--color-text-secondary);
            text-decoration: none;
            transition:
                border-color var(--transition-fast),
                color var(--transition-fast),
                box-shadow var(--transition-fast),
                text-shadow var(--transition-fast);
        }

        .linkGroup a:hover {
            border-color: var(--color-border-light);
            color: var(--color-primary);
            box-shadow: 0 8px 18px var(--color-shadow);
            text-shadow: 0 0 10px rgba(125, 211, 252, 0.45);
        }

        .linkGroup svg {
            width: 14px;
            height: 14px;
        }

        .srOnly {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        @media (max-width: 980px) {
            grid-template-columns: 1fr auto;

            .projectName {
                grid-column: 1 / -1;
                grid-row: 1;
                text-align: left;
            }

            .copyright {
                grid-column: 1;
                grid-row: 2;
            }

            .linkGroups {
                grid-column: 2;
                grid-row: 2;
            }
        }

        @media (max-width: 620px) {
            grid-template-columns: 1fr;

            .projectName,
            .copyright,
            .linkGroups {
                grid-column: 1;
                grid-row: auto;
            }

            .linkGroups {
                justify-content: flex-start;
            }
        }
    `,
};
