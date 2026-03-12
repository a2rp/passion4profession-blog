import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 32px 24px;
    `,

    Hero: styled.section`
        margin-bottom: 28px;

        .badge {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            font-size: 12px;
            font-weight: 700;
            margin-bottom: 12px;
            color: var(--color-primary);
        }

        h1 {
            font-size: clamp(34px, 4vw, 52px);
            margin-bottom: 12px;
        }

        .lead {
            font-size: 16px;
            color: var(--color-text-secondary);
            max-width: 760px;
        }

        .shareRow {
            margin-top: 16px;
        }

        .heroGrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin-top: 26px;
        }

        .heroCard {
            padding: 20px;
            border: 1px solid var(--color-border);
            border-radius: 12px;
            background: var(--color-surface);
            transition: 0.25s;
        }

        .heroCard:hover {
            transform: translateY(-4px);
            border-color: var(--color-primary);
        }

        .heroCard svg {
            font-size: 22px;
            margin-bottom: 8px;
            color: var(--color-primary);
        }

        .heroCard h3 {
            margin-bottom: 6px;
        }

        @media (max-width: 900px) {
            .heroGrid {
                grid-template-columns: 1fr;
            }
        }
    `,

    Section: styled.section`
        margin-top: 36px;

        h2 {
            font-size: 26px;
            margin-bottom: 16px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.8;
            margin-bottom: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
            margin-top: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            padding: 18px;
            border-radius: 12px;
            background: var(--color-surface);
            transition: 0.25s;
        }

        .card:hover {
            transform: translateY(-4px);
            border-color: var(--color-primary);
        }

        .icon {
            font-size: 20px;
            color: var(--color-primary);
            margin-bottom: 8px;
        }

        .twoCol {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
            margin-top: 16px;
        }

        .box {
            border: 1px solid var(--color-border);
            border-radius: 12px;
            padding: 18px;
        }

        ul {
            padding-left: 16px;
            margin-top: 10px;
        }

        li {
            margin-bottom: 6px;
        }

        .faqItem {
            border: 1px solid var(--color-border);
            padding: 16px;
            border-radius: 10px;
            margin-bottom: 12px;
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .twoCol {
                grid-template-columns: 1fr;
            }
        }
    `,

    Final: styled.section`
        margin-top: 40px;
        padding: 24px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);

        h2 {
            margin-bottom: 12px;
        }

        p {
            line-height: 1.8;
            color: var(--color-text-secondary);
        }
    `,
};
