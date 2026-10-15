import styled from "styled-components";

export const Styled = {
    Wrapper: styled.main`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: clamp(28px, 4vw, 58px) clamp(18px, 4vw, 48px) 72px;
        color: var(--color-text-primary);

        .pageIntro {
            max-width: 900px;
            margin: 0 auto 38px;
        }

        .eyebrow,
        .sectionEyebrow {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            color: var(--color-primary);
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.15em;
        }

        .eyebrow {
            margin-bottom: 16px;
        }

        .eyebrow svg {
            width: 16px;
            height: 16px;
        }

        .pageIntro h1 {
            margin: 0 0 12px;
            font-size: clamp(40px, 6.5vw, 76px);
            letter-spacing: -0.055em;
            line-height: 0.98;
        }

        .pageIntro p {
            max-width: 720px;
            color: var(--color-text-secondary);
            font-size: clamp(16px, 1.8vw, 19px);
            line-height: 1.7;
        }

        .listingSection {
            max-width: 1240px;
            margin: 0 auto;
        }

        .sectionHeading {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 18px;
            margin-bottom: 20px;
        }

        .sectionHeading h2 {
            margin-top: 7px;
            font-size: clamp(24px, 3vw, 34px);
            letter-spacing: -0.04em;
        }

        .totalCount {
            flex-shrink: 0;
            color: var(--color-text-muted);
            font-size: 13px;
        }

        .controls {
            display: flex;
            gap: 12px;
            margin-bottom: 10px;
        }

        .searchControl,
        .sortControl {
            min-height: 50px;
            display: flex;
            align-items: center;
            gap: 11px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm);
            background:
                linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0.025),
                    rgba(255, 255, 255, 0.008)
                ),
                var(--color-surface-2);
            color: var(--color-text-muted);
        }

        .searchControl {
            position: relative;
            flex: 1;
            padding: 0 14px;
        }

        .searchControl > svg,
        .sortControl > svg {
            width: 17px;
            height: 17px;
            flex-shrink: 0;
            color: var(--color-primary);
        }

        .searchControl input {
            min-width: 0;
            height: 48px;
            padding: 0;
            border: 0;
            border-radius: 0;
            outline: none;
            background: transparent;
            box-shadow: none;
            color: var(--color-text-primary);
        }

        .searchControl input:focus {
            outline: none;
            border: 0;
            box-shadow: none;
        }

        .searchControl input::placeholder {
            color: var(--color-text-muted);
        }

        .searchControl button {
            width: 30px;
            height: 30px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            border-radius: 50%;
            color: var(--color-text-secondary);
            background: var(--color-surface);
        }

        .searchControl button svg {
            width: 15px;
            height: 15px;
        }

        .sortControl {
            padding: 0 12px;
        }

        .sortControl > span {
            color: var(--color-text-muted);
            font-size: 12px;
            font-weight: 700;
        }

        .sortControl select {
            width: auto;
            min-width: 132px;
            height: 46px;
            padding: 0 24px 0 0;
            border: 0;
            border-radius: 0;
            outline: none;
            color: var(--color-text-primary);
            background-color: transparent;
            box-shadow: none;
            font-size: 13px;
            font-weight: 700;
        }

        .sortControl select:focus {
            outline: none;
            box-shadow: none;
        }

        .resultsLine {
            min-height: 32px;
            display: flex;
            align-items: center;
            color: var(--color-text-muted);
            font-size: 12px;
        }

        .featuredArticle {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
            min-height: 310px;
            overflow: hidden;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background:
                linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-primary) 5%, transparent),
                    transparent 58%
                ),
                var(--color-surface);
            color: var(--color-text-primary);
            text-decoration: none;
            box-shadow: 0 22px 54px var(--color-shadow);
            transition:
                border-color var(--transition-fast),
                transform var(--transition-fast),
                box-shadow var(--transition-fast);
        }

        .featuredArticle:hover {
            color: var(--color-text-primary);
            text-decoration: none;
            border-color: var(--color-border-light);
            transform: translateY(-2px);
            box-shadow: 0 28px 62px var(--color-shadow);
        }

        .featuredImage,
        .cardImage {
            position: relative;
            overflow: hidden;
            background: var(--color-surface-3);
        }

        .featuredImage {
            min-height: 310px;
        }

        .featuredImage img,
        .cardImage img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 500ms ease;
        }

        .featuredArticle:hover .featuredImage img,
        .articleCard:hover .cardImage img {
            transform: scale(1.035);
        }

        .featuredImage::after {
            position: absolute;
            inset: 45% 0 0;
            content: "";
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.55), transparent);
            pointer-events: none;
        }

        .featuredLabel {
            position: absolute;
            z-index: 1;
            left: 18px;
            bottom: 18px;
            padding: 8px 11px;
            border: 1px solid rgba(255, 255, 255, 0.26);
            border-radius: 999px;
            color: #fff;
            background: rgba(10, 10, 10, 0.58);
            backdrop-filter: blur(10px);
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.12em;
        }

        .featuredCopy {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding: clamp(22px, 3vw, 42px);
        }

        .articleMeta {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 15px;
        }

        .articleType,
        .dateMeta {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: var(--color-text-muted);
            font-size: 12px;
        }

        .articleType {
            padding: 6px 9px;
            border: 1px solid var(--color-border);
            border-radius: 999px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            font-weight: 700;
        }

        .articleType svg,
        .dateMeta svg {
            width: 14px;
            height: 14px;
            color: var(--color-primary);
        }

        .featuredCopy h2 {
            margin: 0 0 13px;
            font-size: clamp(26px, 3.3vw, 42px);
            line-height: 1.08;
            letter-spacing: -0.045em;
        }

        .featuredCopy > p {
            display: -webkit-box;
            overflow: hidden;
            margin: 0;
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.75;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
        }

        .readLink {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-top: 21px;
            color: var(--color-primary);
            font-size: 13px;
            font-weight: 800;
        }

        .readLink svg {
            width: 16px;
            height: 16px;
            transition: transform var(--transition-fast);
        }

        .featuredArticle:hover .readLink svg {
            transform: translate(2px, -2px);
        }

        .articleGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
            margin-top: 22px;
        }

        .articleCard {
            display: flex;
            min-width: 0;
            flex-direction: column;
            overflow: hidden;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: var(--color-surface);
            color: var(--color-text-primary);
            text-decoration: none;
            box-shadow: 0 16px 38px var(--color-shadow);
            transition:
                border-color var(--transition-fast),
                transform var(--transition-fast),
                box-shadow var(--transition-fast);
        }

        .articleCard:hover {
            color: var(--color-text-primary);
            text-decoration: none;
            border-color: var(--color-border-light);
            transform: translateY(-3px);
            box-shadow: 0 22px 46px var(--color-shadow);
        }

        .cardImage {
            aspect-ratio: 16 / 10;
        }

        .cardImageIcon {
            position: absolute;
            right: 12px;
            bottom: 12px;
            width: 34px;
            height: 34px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.28);
            border-radius: 50%;
            color: #fff;
            background: rgba(10, 10, 10, 0.55);
            backdrop-filter: blur(8px);
            opacity: 0;
            transform: translateY(4px);
            transition:
                opacity var(--transition-fast),
                transform var(--transition-fast);
        }

        .cardImageIcon svg {
            width: 16px;
            height: 16px;
        }

        .articleCard:hover .cardImageIcon {
            opacity: 1;
            transform: translateY(0);
        }

        .cardCopy {
            display: flex;
            flex: 1;
            flex-direction: column;
            gap: 10px;
            padding: 17px 18px 19px;
        }

        .cardCopy h3 {
            display: -webkit-box;
            overflow: hidden;
            margin: 0;
            font-size: clamp(16px, 1.5vw, 19px);
            line-height: 1.38;
            letter-spacing: -0.025em;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
        }

        .pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 8px;
            margin: 30px 0 0;
        }

        .pageNumber,
        .pageArrow {
            width: 42px;
            height: 42px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm);
            color: var(--color-text-secondary);
            background: var(--color-surface-2);
            font-size: 13px;
            font-weight: 800;
            transition:
                color var(--transition-fast),
                background var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast);
        }

        .pageNumber:hover:not(:disabled),
        .pageArrow:hover:not(:disabled) {
            color: var(--color-text-primary);
            border-color: var(--color-border-light);
            background: var(--color-surface-3);
            transform: translateY(-1px);
        }

        .pageNumber.active {
            color: var(--color-text-inverse);
            border-color: var(--color-primary);
            background: var(--color-primary);
        }

        .pageNumber.active:hover {
            color: var(--color-text-inverse);
            background: var(--color-primary-hover);
        }

        .pageArrow svg {
            width: 18px;
            height: 18px;
        }

        .pageArrow:disabled {
            opacity: 0.38;
            cursor: not-allowed;
        }

        .emptyState {
            display: flex;
            min-height: 250px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 28px;
            border: 1px dashed var(--color-border-light);
            border-radius: var(--radius-lg);
            text-align: center;
            background: var(--color-surface);
        }

        .emptyIcon {
            width: 52px;
            height: 52px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 14px;
            border: 1px solid var(--color-border);
            border-radius: 50%;
            color: var(--color-primary);
            background: var(--color-surface-2);
        }

        .emptyIcon svg {
            width: 20px;
            height: 20px;
        }

        .emptyState h3 {
            margin-bottom: 6px;
            font-size: 20px;
        }

        .emptyState p {
            color: var(--color-text-muted);
            font-size: 14px;
        }

        @media (max-width: 900px) {
            .featuredArticle {
                grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
            }

            .articleGrid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }

        @media (max-width: 680px) {
            .featuredArticle {
                grid-template-columns: 1fr;
            }

            .featuredImage {
                min-height: 0;
                aspect-ratio: 16 / 10;
            }

            .featuredCopy {
                padding: 22px;
            }

            .featuredCopy h2 {
                font-size: 28px;
            }

            .articleGrid {
                gap: 12px;
            }

            .cardCopy {
                padding: 14px;
            }
        }

        @media (max-width: 500px) {
            .controls {
                align-items: stretch;
                flex-direction: column;
            }

            .sortControl {
                justify-content: space-between;
            }

            .articleGrid {
                grid-template-columns: 1fr;
            }

            .cardImage {
                aspect-ratio: 16 / 9;
            }

            .sectionHeading {
                align-items: flex-start;
                flex-direction: column;
                gap: 8px;
            }

            .totalCount {
                order: -1;
            }
        }
    `,
};