import{c as o,j as r,F as a,S as l,a as c,b as t,d,e as s,f as n}from"./index-DapjcxwR.js";const i={Wrapper:o.div`
        width: 100%;
        color: var(--color-text-primary);
    `,HeroSection:o.section`
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid var(--color-border);
        background:
            linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 94%, transparent),
                color-mix(in srgb, var(--color-bg) 100%, transparent)
            ),
            transparent;

        .heroGlow {
            position: absolute;
            border-radius: 999px;
            filter: blur(60px);
            pointer-events: none;
            opacity: 0.42;
        }

        .heroGlowOne {
            width: 280px;
            height: 280px;
            top: -90px;
            left: 4%;
            background: rgba(125, 211, 252, 0.18);
        }

        .heroGlowTwo {
            width: 320px;
            height: 320px;
            right: 4%;
            bottom: -120px;
            background: rgba(147, 197, 253, 0.14);
        }

        .heroInner {
            width: 100%;
            max-width: var(--content-width);
            margin: 0 auto;
            padding: 56px 20px 48px;
            position: relative;
            z-index: 1;
        }

        .eyebrowRow {
            margin-bottom: 18px;
        }

        .eyebrowBadge {
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
            box-shadow: 0 10px 28px var(--color-shadow);
        }

        .eyebrowBadge svg {
            color: var(--color-primary);
            flex-shrink: 0;
        }

        h1 {
            font-size: clamp(34px, 5vw, 60px);
            line-height: 0.98;
            letter-spacing: -0.04em;
            margin-bottom: 16px;
        }

        .heroText {
            max-width: 760px;
            font-size: 16px;
            line-height: 1.8;
            color: var(--color-text-secondary);
            margin-bottom: 15px;
        }

        .metaRow {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 28px;

            @media (max-width: 700px) {
                grid-template-columns: 1fr;
            }
        }

        .metaCard {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 16px 18px;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border);
            background:
                linear-gradient(
                    180deg,
                    color-mix(in srgb, var(--color-surface-2) 92%, transparent),
                    color-mix(in srgb, var(--color-surface-3) 72%, transparent)
                ),
                transparent;
            box-shadow: 0 14px 32px var(--color-shadow);
        }

        .metaIcon {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .metaIcon svg {
            width: 18px;
            height: 18px;
        }

        .metaCard strong {
            display: block;
            margin-bottom: 4px;
            font-size: 14px;
        }

        .metaCard span:last-child {
            display: block;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        html[data-theme="light"] & {
            .heroGlowOne {
                background: rgba(3, 105, 161, 0.16);
            }

            .heroGlowTwo {
                background: rgba(29, 78, 216, 0.12);
            }
        }
    `,ContentSection:o.section`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 28px 20px 0;

        .contentGrid {
            display: grid;
            grid-template-columns: minmax(0, 1.6fr) minmax(280px, 0.9fr);
            gap: 18px;

            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }
        }

        .mainCard,
        .sideCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background:
                linear-gradient(
                    180deg,
                    var(--color-surface) 0%,
                    var(--color-surface-2) 100%
                ),
                transparent;
            box-shadow: 0 18px 40px var(--color-shadow);
            padding: 22px;
        }

        .sectionHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
        }

        .sectionIcon {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .sectionIcon svg {
            width: 18px;
            height: 18px;
        }

        h2 {
            font-size: 22px;
            line-height: 1.15;
        }

        p + p {
            margin-top: 12px;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.8;
            font-size: 15px;
        }

        .sourceLink {
            display: inline-flex;
            align-items: center;
            min-height: 42px;
            padding: 0 14px;
            margin-top: 12px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            text-decoration: none;
            font-weight: 700;
            word-break: break-word;
            transition:
                background var(--transition-fast),
                border-color var(--transition-fast),
                color var(--transition-fast),
                transform var(--transition-fast),
                box-shadow var(--transition-fast);
        }

        .sourceLink:hover {
            background: var(--color-primary);
            color: var(--color-text-inverse);
            border-color: var(--color-primary);
            text-decoration: none;
            transform: translateY(-1px);
            box-shadow: 0 10px 24px var(--color-shadow);
        }
    `,HighlightsSection:o.section`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 28px 20px 0;

        .sectionTitleRow {
            margin-bottom: 16px;
        }

        .sectionTitleRow h2 {
            font-size: 26px;
            line-height: 1.1;
            margin-bottom: 6px;
        }

        .sectionTitleRow p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.7;
        }

        .highlightGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .highlightCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background:
                linear-gradient(
                    180deg,
                    var(--color-surface) 0%,
                    var(--color-surface-2) 100%
                ),
                transparent;
            padding: 20px;
            box-shadow: 0 18px 40px var(--color-shadow);
            transition:
                transform var(--transition-fast),
                border-color var(--transition-fast),
                background var(--transition-fast),
                box-shadow var(--transition-fast);
        }

        .highlightCard:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background:
                linear-gradient(
                    180deg,
                    var(--color-surface-2) 0%,
                    var(--color-surface-3) 100%
                ),
                transparent;
            box-shadow: 0 22px 44px var(--color-shadow);
        }

        .highlightIcon {
            width: 44px;
            height: 44px;
            margin-bottom: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .highlightIcon svg {
            width: 20px;
            height: 20px;
        }

        .highlightCard h3 {
            font-size: 18px;
            line-height: 1.2;
            margin-bottom: 8px;
        }

        .highlightCard p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
        }
    `,PurposeSection:o.section`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 28px 20px 0;

        .purposeGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;

            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }
        }

        .purposeCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background:
                linear-gradient(
                    180deg,
                    var(--color-surface) 0%,
                    var(--color-surface-2) 100%
                ),
                transparent;
            box-shadow: 0 18px 40px var(--color-shadow);
            padding: 22px;
        }

        .sectionHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
        }

        .sectionIcon {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .sectionIcon svg {
            width: 18px;
            height: 18px;
        }

        h2 {
            font-size: 22px;
            line-height: 1.15;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.8;
            font-size: 15px;
        }

        p + p {
            margin-top: 12px;
        }

        .focusList {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 4px;
        }

        .focusList li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .focusList li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            box-shadow: 0 0 0 4px rgba(125, 211, 252, 0.08);
        }

        html[data-theme="light"] & {
            .focusList li::before {
                box-shadow: 0 0 0 4px rgba(3, 105, 161, 0.08);
            }
        }
    `,FooterNote:o.section`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 28px 20px 36px;

        .noteBox {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background:
                linear-gradient(
                    180deg,
                    color-mix(in srgb, var(--color-surface) 96%, transparent),
                    color-mix(in srgb, var(--color-surface-2) 100%, transparent)
                ),
                transparent;
            box-shadow: 0 18px 40px var(--color-shadow);
            padding: 22px;
        }

        .noteBox h2 {
            font-size: 22px;
            line-height: 1.15;
            margin-bottom: 10px;
        }

        .noteBox p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.8;
            max-width: 760px;
        }
    `},p=[{icon:r.jsx(a,{}),title:"New writing, not old archive restoration",text:"This project is for fresh blog posts, new ideas, and original writeups. It is separate from the refactored archive of older Blogger content."},{icon:r.jsx(t,{}),title:"Readable knowledge notes",text:"The writing style is simple, direct, and learning-focused so each post feels useful both for first-time reading and later revision."},{icon:r.jsx(s,{}),title:"Route-based article structure",text:"Each blog post lives on its own dedicated route, making the project easier to scale, organize, and expand over time."},{icon:r.jsx(n,{}),title:"Built for consistent publishing",text:"The structure is meant to support regular writing across computing, internet basics, software, and thoughtful technical essays."}],h=["Write new original blog posts in a cleaner format","Build a long-term knowledge archive around computing and technology","Keep every article easy to read and easy to revisit later","Create a scalable route-based blog structure","Publish practical notes, essays, and technical explanations regularly"],g=()=>r.jsxs(i.Wrapper,{children:[r.jsxs(i.HeroSection,{children:[r.jsx("div",{className:"heroGlow heroGlowOne"}),r.jsx("div",{className:"heroGlow heroGlowTwo"}),r.jsxs("div",{className:"heroInner",children:[r.jsx("div",{className:"eyebrowRow",children:r.jsxs("span",{className:"eyebrowBadge",children:[r.jsx(a,{}),"New Blog Project"]})}),r.jsx("h1",{children:"About this blog"}),r.jsx("p",{className:"heroText",children:"Passion4Profession Blog is the new writing space for fresh articles, structured notes, and original technical posts. It continues the broader Passion4Profession journey, but this time with a cleaner system built for regular publishing."}),r.jsx(l,{}),r.jsxs("p",{children:[r.jsx("br",{}),"This project focuses on new posts rather than rebuilding old ones."]}),r.jsxs("div",{className:"metaRow",children:[r.jsxs("div",{className:"metaCard",children:[r.jsx("span",{className:"metaIcon",children:r.jsx(c,{})}),r.jsxs("div",{children:[r.jsx("strong",{children:"Before"}),r.jsx("span",{children:"Old Blogger posts and archived notes"})]})]}),r.jsxs("div",{className:"metaCard",children:[r.jsx("span",{className:"metaIcon",children:r.jsx(a,{})}),r.jsxs("div",{children:[r.jsx("strong",{children:"Now"}),r.jsx("span",{children:"Fresh writing in a modern blog setup"})]})]})]})]})]}),r.jsx(i.ContentSection,{children:r.jsxs("div",{className:"contentGrid",children:[r.jsxs("section",{className:"mainCard",children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"sectionIcon",children:r.jsx(t,{})}),r.jsx("h2",{children:"What this site is"})]}),r.jsx("p",{children:"This site is the new writing side of the Passion4Profession ecosystem. Instead of restoring older posts, this repository is for publishing new content from scratch using a cleaner React-based structure."}),r.jsx("p",{children:"The goal is to keep writing simple, useful, and organized. Some posts may explain computing fundamentals, some may explore internet concepts, and some may be reflective technical essays. The common thread is clarity and usefulness."})]}),r.jsxs("section",{className:"sideCard",children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"sectionIcon",children:r.jsx(d,{})}),r.jsx("h2",{children:"Project relation"})]}),r.jsx("p",{children:"This project is the new blog companion to the older archive and refactored archive work."}),r.jsx("a",{href:"https://github.com/a2rp/passion4profession-blog",target:"_blank",rel:"noreferrer",className:"sourceLink",children:"github.com/a2rp/passion4profession-blog"})]})]})}),r.jsxs(i.HighlightsSection,{children:[r.jsxs("div",{className:"sectionTitleRow",children:[r.jsx("h2",{children:"Project highlights"}),r.jsx("p",{children:"What this new blog setup is designed to do"})]}),r.jsx("div",{className:"highlightGrid",children:p.map(e=>r.jsxs("article",{className:"highlightCard",children:[r.jsx("div",{className:"highlightIcon",children:e.icon}),r.jsx("h3",{children:e.title}),r.jsx("p",{children:e.text})]},e.title))})]}),r.jsx(i.PurposeSection,{children:r.jsxs("div",{className:"purposeGrid",children:[r.jsxs("section",{className:"purposeCard",children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"sectionIcon",children:r.jsx(s,{})}),r.jsx("h2",{children:"Why this exists"})]}),r.jsx("p",{children:"Older archives are useful, but new writing needs its own place. This project gives that space a cleaner structure, better routes, and more room to grow into a proper long-term technical blog."}),r.jsx("p",{children:"It is meant to be both a writing platform and a growing reference system, where every post adds one more useful piece to the larger knowledge archive."})]}),r.jsxs("section",{className:"purposeCard",children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"sectionIcon",children:r.jsx(n,{})}),r.jsx("h2",{children:"Current focus"})]}),r.jsx("ul",{className:"focusList",children:h.map(e=>r.jsx("li",{children:e},e))})]})]})}),r.jsx(i.FooterNote,{children:r.jsxs("div",{className:"noteBox",children:[r.jsx("h2",{children:"In simple words"}),r.jsx("p",{children:"This is the new blog home for writing fresh articles, notes, and technical ideas in a cleaner and more scalable structure."})]})})]});export{g as default};
