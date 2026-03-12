import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        padding: 14px 18px 18px;
        background:
            linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.015),
                rgba(255, 255, 255, 0.005)
            ),
            transparent;

        .info {
            text-align: center;
            margin-bottom: 10px;
            font-size: 12px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            padding: 0 8px;
        }

        html[data-theme="light"] & {
            background:
                linear-gradient(
                    180deg,
                    rgba(15, 23, 42, 0.02),
                    rgba(15, 23, 42, 0.005)
                ),
                transparent;
        }
    `,

    Main: styled.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 14px 0 0;
        border-top: 1px solid var(--color-border);
        font-size: 12px;
        color: var(--color-text-muted);

        .left,
        .center,
        .right {
            min-width: 0;
        }

        .center {
            color: var(--color-text-secondary);
            font-weight: 700;
            text-align: center;
        }

        .right a,
        a {
            color: var(--color-link);
            font-weight: 700;
            text-decoration: none;
            transition: color var(--transition-fast);
        }

        .right a:hover,
        a:hover {
            color: var(--color-link-hover);
            text-decoration: underline;
            text-underline-offset: 3px;
        }

        @media (max-width: 700px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;

            .center {
                text-align: left;
            }
        }
    `,
};
