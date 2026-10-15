import{c as t,u as l,j as r,p as c,N as i,q as x,F as m,s as g,g as h,b as v}from"./index-BdrWH-1y.js";const s={Wrapper:t.div`
        width: min(100%, 1380px);
        margin: 0 auto;
        padding: clamp(24px, 4vw, 58px);

        @media (max-width: 640px) {
            padding: 20px 16px 32px;
        }
    `,Hero:t.section`
        display: grid;
        grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
        align-items: stretch;
        gap: clamp(20px, 3vw, 44px);
        padding: clamp(24px, 4vw, 52px);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        background:
            radial-gradient(
                circle at 5% 0%,
                rgba(255, 255, 255, 0.055),
                transparent 40%
            ),
            linear-gradient(145deg, var(--color-surface), var(--color-surface-2));
        box-shadow: 0 24px 70px var(--color-shadow);

        .heroCopy {
            min-width: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding: 8px 0;
        }

        .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border: 1px solid var(--color-border);
            border-radius: 999px;
            background: var(--color-surface-3);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }

        .eyebrow svg {
            color: var(--color-primary);
            font-size: 15px;
        }

        .errorCode {
            margin: 22px 0 4px;
            color: var(--color-text-primary);
            font-size: clamp(72px, 9vw, 118px);
            font-weight: 900;
            letter-spacing: -0.09em;
            line-height: 0.92;
            text-shadow: 0 12px 42px var(--color-shadow);
        }

        h1 {
            max-width: 570px;
            margin-top: 16px;
            font-size: clamp(30px, 3.4vw, 46px);
            line-height: 1.08;
            letter-spacing: -0.055em;
        }

        .description {
            max-width: 520px;
            margin-top: 16px;
            color: var(--color-text-secondary);
            font-size: 16px;
            line-height: 1.75;
        }

        .requestedPath {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px 12px;
            max-width: 100%;
            margin-top: 20px;
            padding: 10px 13px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm);
            background: rgba(0, 0, 0, 0.12);
        }

        .requestedPath span {
            color: var(--color-text-muted);
            font-size: 12px;
            font-weight: 700;
        }

        .requestedPath code {
            max-width: 100%;
            overflow-wrap: anywhere;
            color: var(--color-text-primary);
            font-size: 12px;
        }

        .actions {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 24px;
        }

        .actions a {
            min-height: 46px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            padding: 0 16px;
            border: 1px solid var(--color-border-light);
            border-radius: var(--radius-sm);
            font-size: 14px;
            font-weight: 800;
            text-decoration: none;
            transition:
                transform var(--transition-fast),
                background var(--transition-fast),
                border-color var(--transition-fast),
                box-shadow var(--transition-fast);
        }

        .actions a:hover {
            transform: translateY(-2px);
            text-decoration: none;
        }

        .actions svg {
            font-size: 17px;
        }

        .primaryButton {
            background: var(--color-primary);
            color: var(--color-text-inverse);
            box-shadow: 0 10px 26px var(--color-shadow);
        }

        .primaryButton:hover {
            background: var(--color-primary-hover);
            color: var(--color-text-inverse);
            border-color: var(--color-primary-hover);
        }

        .secondaryButton {
            background: var(--color-surface-3);
            color: var(--color-text-primary);
        }

        .secondaryButton:hover {
            background: var(--color-surface);
            color: var(--color-text-primary);
            border-color: var(--color-border-strong);
        }

        .visual {
            position: relative;
            min-height: 390px;
            overflow: hidden;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: #101010;
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .visual::after {
            content: "";
            position: absolute;
            inset: 45% 0 0;
            pointer-events: none;
            background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.42));
        }

        .visual img {
            width: 100%;
            height: 100%;
            min-height: 390px;
            object-fit: cover;
            display: block;
        }

        .visualCaption {
            position: absolute;
            z-index: 1;
            right: 16px;
            bottom: 16px;
            left: 16px;
            display: flex;
            align-items: center;
            gap: 9px;
            width: fit-content;
            padding: 10px 13px;
            border: 1px solid rgba(255, 255, 255, 0.16);
            border-radius: 999px;
            background: rgba(15, 15, 15, 0.78);
            color: #f4f4f4;
            font-size: 12px;
            font-weight: 700;
            backdrop-filter: blur(12px);
        }

        .visualCaption svg {
            color: #d0d0d0;
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;

            .heroCopy {
                padding: 4px 0 0;
            }

            .visual,
            .visual img {
                min-height: clamp(250px, 46vw, 390px);
            }
        }

        @media (max-width: 520px) {
            gap: 22px;
            padding: 22px 18px 18px;

            .errorCode {
                margin-top: 18px;
                font-size: 76px;
            }

            h1 {
                font-size: 32px;
            }

            .description {
                font-size: 15px;
            }

            .actions {
                width: 100%;
            }

            .actions a {
                flex: 1 1 100%;
            }

            .visual,
            .visual img {
                min-height: 230px;
            }
        }
    `,Recommendations:t.section`
        margin-top: clamp(30px, 4vw, 48px);

        .sectionHeading {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 18px;
        }

        .sectionEyebrow {
            color: var(--color-text-muted);
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        h2 {
            margin-top: 5px;
            font-size: clamp(22px, 2.3vw, 30px);
            letter-spacing: -0.04em;
        }

        .sectionHeading > p {
            max-width: 360px;
            color: var(--color-text-muted);
            font-size: 14px;
            text-align: right;
        }

        .postGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
        }

        .postCard {
            min-height: 150px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
            overflow: hidden;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background:
                linear-gradient(145deg, rgba(255, 255, 255, 0.025), transparent),
                var(--color-surface);
            color: var(--color-text-primary);
            text-decoration: none;
            transition:
                transform var(--transition-fast),
                border-color var(--transition-fast),
                background var(--transition-fast),
                box-shadow var(--transition-fast);
        }

        .postCard:hover {
            transform: translateY(-3px);
            border-color: var(--color-border-light);
            background: var(--color-surface-2);
            color: var(--color-text-primary);
            text-decoration: none;
            box-shadow: 0 14px 32px var(--color-shadow);
        }

        .postNumber {
            color: var(--color-text-muted);
            font-size: 11px;
            font-weight: 900;
            letter-spacing: 0.12em;
        }

        .postTitle {
            max-width: 92%;
            margin-top: 12px;
            color: var(--color-text-primary);
            font-size: 15px;
            font-weight: 800;
            line-height: 1.45;
        }

        .postMeta {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-top: auto;
            padding-top: 15px;
            color: var(--color-text-muted);
            font-size: 12px;
        }

        .postMeta svg {
            color: var(--color-primary);
            font-size: 16px;
        }

        @media (max-width: 760px) {
            .sectionHeading {
                align-items: flex-start;
                flex-direction: column;
            }

            .sectionHeading > p {
                text-align: left;
            }

            .postGrid {
                grid-template-columns: 1fr;
            }

            .postCard {
                min-height: 130px;
            }
        }
    `},d=[...v].sort((o,e)=>new Date(e.date)-new Date(o.date)).slice(0,3),f=()=>{var e,n;const o=l();return r.jsxs(s.Wrapper,{children:[r.jsxs(s.Hero,{children:[r.jsxs("div",{className:"heroCopy",children:[r.jsxs("div",{className:"eyebrow",children:[r.jsx(c,{"aria-hidden":"true"}),r.jsx("span",{children:"Page not found"})]}),r.jsx("p",{className:"errorCode","aria-label":"Error 404",children:"404"}),r.jsx("h1",{children:"This page took a wrong turn."}),r.jsx("p",{className:"description",children:"The link may be outdated, or the page may have moved. Let’s get you back to something useful."}),r.jsxs("div",{className:"requestedPath",children:[r.jsx("span",{children:"Requested address"}),r.jsx("code",{children:o.pathname})]}),r.jsxs("div",{className:"actions",children:[r.jsxs(i,{to:"/",className:"primaryButton",children:[r.jsx(x,{"aria-hidden":"true"}),r.jsx("span",{children:"Back to home"})]}),r.jsxs(i,{to:(n=(e=d[0])==null?void 0:e.path)!=null?n:"/",className:"secondaryButton",children:[r.jsx(m,{"aria-hidden":"true"}),r.jsx("span",{children:"Read the latest"})]})]})]}),r.jsxs("div",{className:"visual","aria-hidden":"true",children:[r.jsx("img",{src:"/passion4profession-blog/images/not-found-illustration.png",alt:""}),r.jsxs("div",{className:"visualCaption",children:[r.jsx(g,{}),r.jsx("span",{children:"Signal lost. A new path awaits."})]})]})]}),r.jsxs(s.Recommendations,{children:[r.jsxs("div",{className:"sectionHeading",children:[r.jsxs("div",{children:[r.jsx("span",{className:"sectionEyebrow",children:"Find your next read"}),r.jsx("h2",{children:"Start somewhere good"})]}),r.jsx("p",{children:"Here are a few recent articles from the archive."})]}),r.jsx("div",{className:"postGrid",children:d.map((a,p)=>r.jsxs(i,{to:a.path,className:"postCard",children:[r.jsx("span",{className:"postNumber",children:String(p+1).padStart(2,"0")}),r.jsx("span",{className:"postTitle",children:a.title}),r.jsxs("span",{className:"postMeta",children:[r.jsx("span",{children:a.date}),r.jsx(h,{"aria-hidden":"true"})]})]},a.path))})]})]})};export{f as default};
