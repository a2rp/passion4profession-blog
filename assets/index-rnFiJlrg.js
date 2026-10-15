import{c as L,r as x,b as R,j as e,F as b,a as v,d as E,e as F,N as w,f as y,g as j,h as P,i as T}from"./index-BdrWH-1y.js";const M={Wrapper:L.main`
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
    `},h=4,C=a=>new Date(a).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),N=a=>"/passion4profession-blog/images/blog-heroes/"+a.thumbnail,O=()=>{const[a,g]=x.useState(""),[s,k]=x.useState("newest"),[l,n]=x.useState(1),t=x.useMemo(()=>{const r=a.trim().toLowerCase();return R.filter(o=>o.title.toLowerCase().includes(r)||o.date.toLowerCase().includes(r)||o.excerpt.toLowerCase().includes(r)).sort((o,p)=>s==="oldest"?new Date(o.date)-new Date(p.date):s==="title-asc"?o.title.localeCompare(p.title):s==="title-desc"?p.title.localeCompare(o.title):new Date(p.date)-new Date(o.date))},[a,s]),c=Math.ceil(t.length/h),d=(l-1)*h,m=t.slice(d,d+h),i=m[0],u=m.slice(1),I=r=>{g(r.target.value),n(1)},S=r=>{k(r.target.value),n(1)},A=t.length?d+1:0,z=Math.min(d+h,t.length);return e.jsxs(M.Wrapper,{children:[e.jsxs("header",{className:"pageIntro",children:[e.jsxs("div",{className:"eyebrow",children:[e.jsx(b,{"aria-hidden":"true"}),e.jsx("span",{children:"PASSION4PROFESSION JOURNAL"})]}),e.jsx("h1",{children:"Ideas worth keeping."}),e.jsx("p",{children:"Clear, practical writing on computing, software, and the technology we use every day."})]}),e.jsxs("section",{className:"listingSection","aria-labelledby":"articles-title",children:[e.jsxs("div",{className:"sectionHeading",children:[e.jsxs("div",{children:[e.jsx("span",{className:"sectionEyebrow",children:"THE ARTICLE LIBRARY"}),e.jsx("h2",{id:"articles-title",children:"Explore the latest writing"})]}),e.jsxs("span",{className:"totalCount",children:[t.length," ",t.length===1?"article":"articles"]})]}),e.jsxs("div",{className:"controls",children:[e.jsxs("label",{className:"searchControl",children:[e.jsx(v,{"aria-hidden":"true"}),e.jsx("input",{type:"search",value:a,onChange:I,placeholder:"Search articles...","aria-label":"Search articles"}),a?e.jsx("button",{type:"button",onClick:()=>{g(""),n(1)},"aria-label":"Clear article search",title:"Clear search",children:e.jsx(E,{})}):null]}),e.jsxs("label",{className:"sortControl",children:[e.jsx(F,{"aria-hidden":"true"}),e.jsx("span",{children:"Sort"}),e.jsxs("select",{value:s,onChange:S,"aria-label":"Sort articles",children:[e.jsx("option",{value:"newest",children:"Newest first"}),e.jsx("option",{value:"oldest",children:"Oldest first"}),e.jsx("option",{value:"title-asc",children:"Title: A to Z"}),e.jsx("option",{value:"title-desc",children:"Title: Z to A"})]})]})]}),e.jsx("div",{className:"resultsLine","aria-live":"polite",children:t.length?e.jsxs("span",{children:["Showing ",A,"–",z," of ",t.length]}):e.jsxs("span",{children:["No articles match “",a,"”."]})}),i?e.jsxs(e.Fragment,{children:[e.jsxs(w,{to:i.path,className:"featuredArticle","aria-label":"Read "+i.title,children:[e.jsxs("div",{className:"featuredImage",children:[e.jsx("img",{src:N(i),alt:"",fetchPriority:"high"}),e.jsx("span",{className:"featuredLabel",children:"FEATURED ARTICLE"})]}),e.jsxs("div",{className:"featuredCopy",children:[e.jsxs("div",{className:"articleMeta",children:[e.jsxs("span",{className:"articleType",children:[e.jsx(b,{"aria-hidden":"true"}),"Latest writing"]}),e.jsxs("span",{className:"dateMeta",children:[e.jsx(y,{"aria-hidden":"true"}),C(i.date)]})]}),e.jsx("h2",{children:i.title}),e.jsx("p",{children:i.excerpt}),e.jsxs("span",{className:"readLink",children:["Read article",e.jsx(j,{"aria-hidden":"true"})]})]})]}),u.length?e.jsx("div",{className:"articleGrid",children:u.map(r=>e.jsxs(w,{to:r.path,className:"articleCard",children:[e.jsxs("div",{className:"cardImage",children:[e.jsx("img",{src:N(r),alt:"",loading:"lazy"}),e.jsx("span",{className:"cardImageIcon",children:e.jsx(j,{"aria-hidden":"true"})})]}),e.jsxs("div",{className:"cardCopy",children:[e.jsxs("span",{className:"dateMeta",children:[e.jsx(y,{"aria-hidden":"true"}),C(r.date)]}),e.jsx("h3",{children:r.title})]})]},r.path))}):null,c>1?e.jsxs("nav",{className:"pagination","aria-label":"Article pages",children:[e.jsx("button",{type:"button",className:"pageArrow",onClick:()=>n(r=>Math.max(1,r-1)),disabled:l===1,"aria-label":"Previous page",children:e.jsx(P,{})}),Array.from({length:c},(r,f)=>f+1).map(r=>e.jsx("button",{type:"button",className:r===l?"pageNumber active":"pageNumber",onClick:()=>n(r),"aria-current":r===l?"page":void 0,"aria-label":"Page "+r,children:r},r)),e.jsx("button",{type:"button",className:"pageArrow",onClick:()=>n(r=>Math.min(c,r+1)),disabled:l===c,"aria-label":"Next page",children:e.jsx(T,{})})]}):null]}):e.jsxs("div",{className:"emptyState",children:[e.jsx("span",{className:"emptyIcon",children:e.jsx(v,{"aria-hidden":"true"})}),e.jsx("h3",{children:"No articles found"}),e.jsx("p",{children:"Try another title or date to find a post."})]})]})]})};export{O as default};
