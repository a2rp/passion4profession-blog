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
            opacity: 0.5;
        }

        .heroGlowOne {
            width: 280px;
            height: 280px;
            top: -80px;
            left: 2%;
            background: rgba(125, 211, 252, 0.16);
        }

        .heroGlowTwo {
            width: 340px;
            height: 340px;
            right: 2%;
            bottom: -120px;
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
            font-size: clamp(34px, 4.8vw, 60px);
            line-height: 1;
            letter-spacing: -0.04em;
            margin-bottom: 14px;
            max-width: 1000px;
        }

        .lead {
            max-width: 900px;
            font-size: 16px;
            line-height: 1.9;
            color: var(--color-text-secondary);
        }

        .shareWrap {
            margin-top: 18px;
            margin-bottom: 8px;
        }

        .heroStatsGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
            margin-top: 26px;

            @media (max-width: 980px) {
                grid-template-columns: 1fr;
            }
        }

        .heroStatCard {
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

        .heroStatCard:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: rgba(255, 255, 255, 0.04);
            box-shadow: 0 18px 36px var(--color-shadow);
        }

        .statIcon {
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

        .miniGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 18px;

            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            padding: 18px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: rgba(255, 255, 255, 0.02);
            transition:
                transform var(--transition-fast),
                border-color var(--transition-fast),
                background var(--transition-fast);
        }

        .miniCard:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: rgba(255, 255, 255, 0.035);
        }

        .miniCard h3 {
            font-size: 17px;
            margin-bottom: 8px;
            line-height: 1.3;
        }

        .flowGrid,
        .conceptGrid,
        .featureGrid,
        .examplesGrid,
        .mythGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
            margin-top: 16px;

            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }
        }

        .levelsGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
            margin-top: 16px;

            @media (max-width: 980px) {
                grid-template-columns: 1fr;
            }
        }

        .flowCard,
        .conceptCard,
        .featureCard,
        .exampleCard,
        .mythCard,
        .faqCard,
        .levelCard {
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
        .conceptCard:hover,
        .featureCard:hover,
        .exampleCard:hover,
        .mythCard:hover,
        .faqCard:hover,
        .levelCard:hover {
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
        .conceptIcon,
        .featureIcon,
        .levelIcon {
            width: 42px;
            height: 42px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-primary);
            box-shadow: 0 10px 24px var(--color-shadow);
        }

        .levelCard {
            display: flex;
            align-items: flex-start;
            gap: 14px;
        }

        .levelBody {
            min-width: 0;
        }

        .levelSubtitle {
            display: inline-block;
            margin-bottom: 8px;
            font-size: 12px;
            line-height: 1.3;
            color: var(--color-text-muted);
            font-weight: 700;
            letter-spacing: 0.02em;
        }

        .flowCard h3,
        .conceptCard h3,
        .featureCard h3,
        .exampleCard h3,
        .mythCard h3,
        .faqCard h3,
        .levelCard h3 {
            font-size: 17px;
            line-height: 1.3;
            margin-bottom: 8px;
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

        .bulletList {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 14px;
        }

        .bulletList li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            line-height: 1.8;
            font-size: 15px;
        }

        .bulletList li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 10px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            box-shadow: 0 0 0 4px rgba(125, 211, 252, 0.08);
        }

        .faqList {
            display: flex;
            flex-direction: column;
            gap: 14px;
            margin-top: 12px;
        }

        html[data-theme="light"] & {
            .bulletList li::before {
                box-shadow: 0 0 0 4px rgba(3, 105, 161, 0.08);
            }
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
            max-width: 1000px;
        }

        p + p {
            margin-top: 12px;
        }
    `,
};
