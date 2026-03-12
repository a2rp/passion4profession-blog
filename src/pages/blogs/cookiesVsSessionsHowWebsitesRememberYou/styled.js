import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 28px 20px 40px;
        color: var(--color-text-primary);
    `,

    HeroCard: styled.section`
        position: relative;
        overflow: hidden;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
        background:
            linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.035),
                rgba(255, 255, 255, 0.015)
            ),
            linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-surface-2) 100%
            );
        box-shadow: 0 22px 56px var(--color-shadow);

        .heroGlow {
            position: absolute;
            border-radius: 999px;
            filter: blur(60px);
            pointer-events: none;
            opacity: 0.48;
        }

        .heroGlowOne {
            width: 280px;
            height: 280px;
            top: -90px;
            left: 2%;
            background: rgba(125, 211, 252, 0.16);
        }

        .heroGlowTwo {
            width: 340px;
            height: 340px;
            right: 2%;
            bottom: -130px;
            background: rgba(147, 197, 253, 0.12);
        }

        .heroInner {
            position: relative;
            z-index: 1;
            padding: 28px;
        }

        .badgeRow {
            margin-bottom: 16px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            min-height: 36px;
            padding: 0 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.03em;
            box-shadow: 0 10px 24px var(--color-shadow);
        }

        .badge svg {
            color: var(--color-primary);
        }

        h1 {
            font-size: clamp(34px, 5vw, 58px);
            line-height: 1;
            letter-spacing: -0.04em;
            margin-bottom: 14px;
            max-width: 980px;
        }

        .lead {
            max-width: 920px;
            font-size: 16px;
            line-height: 1.9;
            color: var(--color-text-secondary);
        }

        .shareWrap {
            margin-top: 18px;
            margin-bottom: 8px;
        }

        .heroQuickGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
            margin-top: 26px;

            @media (max-width: 980px) {
                grid-template-columns: 1fr;
            }
        }

        .heroQuickCard {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 18px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: rgba(255, 255, 255, 0.025);
            transition:
                transform var(--transition-fast),
                border-color var(--transition-fast),
                background var(--transition-fast),
                box-shadow var(--transition-fast);
        }

        .heroQuickCard:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: rgba(255, 255, 255, 0.04);
            box-shadow: 0 18px 36px var(--color-shadow);
        }

        .quickIcon {
            width: 44px;
            height: 44px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-primary);
        }

        strong {
            display: block;
            margin-bottom: 6px;
            font-size: 15px;
        }

        p {
            font-size: 14px;
            line-height: 1.75;
        }
    `,

    SectionCard: styled.section`
        margin-top: 20px;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
        background:
            linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.025),
                rgba(255, 255, 255, 0.01)
            ),
            linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-surface-2) 100%
            );
        box-shadow: 0 18px 44px var(--color-shadow);
        padding: 24px;

        .sectionHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 16px;
        }

        .sectionIcon {
            width: 42px;
            height: 42px;
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

        h2 {
            font-size: 26px;
            line-height: 1.15;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.9;
        }

        p + p {
            margin-top: 12px;
        }

        .callout {
            margin-top: 16px;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 16px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: rgba(255, 255, 255, 0.03);
        }

        .callout.soft {
            background: rgba(255, 255, 255, 0.02);
        }

        .callout.warning {
            background: rgba(255, 255, 255, 0.04);
        }

        .calloutIcon {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-primary);
        }

        .callout strong {
            display: block;
            margin-bottom: 6px;
            font-size: 15px;
            color: var(--color-text-primary);
        }

        .flowGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
            margin-top: 16px;

            @media (max-width: 1080px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            @media (max-width: 720px) {
                grid-template-columns: 1fr;
            }
        }

        .flowCard,
        .partCard,
        .requestCard,
        .exampleCard,
        .mythCard,
        .faqCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: rgba(255, 255, 255, 0.02);
            padding: 18px;
            transition:
                transform var(--transition-fast),
                border-color var(--transition-fast),
                background var(--transition-fast),
                box-shadow var(--transition-fast);
        }

        .flowCard:hover,
        .partCard:hover,
        .requestCard:hover,
        .exampleCard:hover,
        .mythCard:hover,
        .faqCard:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: rgba(255, 255, 255, 0.04);
            box-shadow: 0 16px 34px var(--color-shadow);
        }

        .flowTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
        }

        .flowIndex {
            min-width: 42px;
            height: 30px;
            padding: 0 10px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 800;
        }

        .flowIcon,
        .partIcon {
            width: 42px;
            height: 42px;
            margin-bottom: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-primary);
            box-shadow: 0 10px 24px var(--color-shadow);
        }

        .flowCard h3,
        .partCard h3,
        .requestCard h3,
        .exampleCard h3,
        .mythCard h3,
        .faqCard h3 {
            font-size: 17px;
            line-height: 1.3;
            margin-bottom: 8px;
        }

        .partsGrid,
        .examplesGrid,
        .mythGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 16px;

            @media (max-width: 1080px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .examplesGrid,
        .mythGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .requestGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
            margin-top: 16px;

            @media (max-width: 1200px) {
                grid-template-columns: 1fr;
            }
        }

        .codeBlock + .codeBlock {
            margin-top: 12px;
        }

        .codeBlock strong {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: var(--color-text-primary);
        }

        .codeBlock pre {
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
        }

        .tableWrap {
            margin-top: 16px;
            overflow-x: auto;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: var(--color-surface);
        }

        table {
            min-width: 760px;
            width: 100%;
            border-collapse: collapse;
        }

        th,
        td {
            padding: 14px 16px;
            text-align: left;
            border-bottom: 1px solid var(--color-border);
            vertical-align: top;
            font-size: 14px;
            line-height: 1.75;
        }

        th {
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-weight: 800;
        }

        td {
            color: var(--color-text-secondary);
        }

        .faqList {
            display: flex;
            flex-direction: column;
            gap: 14px;
            margin-top: 12px;
        }
    `,

    FinalCard: styled.section`
        margin-top: 20px;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
        background:
            linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.035),
                rgba(255, 255, 255, 0.015)
            ),
            linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-surface-2) 100%
            );
        box-shadow: 0 20px 48px var(--color-shadow);
        padding: 24px;

        h2 {
            font-size: 24px;
            line-height: 1.15;
            margin-bottom: 10px;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.9;
            max-width: 980px;
        }

        p + p {
            margin-top: 12px;
        }
    `,
};
