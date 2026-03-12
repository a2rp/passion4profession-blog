import styled from "styled-components";

export const Styled = {
    Container: styled.div`
        position: relative;
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    `,

    Wrapper: styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
    `,

    ShareBtn: styled.button`
        min-height: 42px;
        padding: 0 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border-radius: var(--radius-sm);
        border: 1px solid
            color-mix(in srgb, var(--color-primary) 42%, var(--color-border));
        background:
            linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 24%, transparent),
                color-mix(in srgb, var(--color-primary) 12%, transparent)
            ),
            var(--color-surface-2);
        color: var(--color-text-primary);
        font-size: 14px;
        font-weight: 800;
        line-height: 1;
        cursor: pointer;
        box-shadow: 0 12px 28px var(--color-shadow);
        transition:
            background var(--transition-fast),
            border-color var(--transition-fast),
            color var(--transition-fast),
            transform var(--transition-fast),
            box-shadow var(--transition-fast);

        svg {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
            color: var(--color-primary);
        }

        &:hover {
            background:
                linear-gradient(
                    180deg,
                    color-mix(in srgb, var(--color-primary) 34%, transparent),
                    color-mix(in srgb, var(--color-primary) 16%, transparent)
                ),
                var(--color-surface);
            border-color: color-mix(
                in srgb,
                var(--color-primary) 58%,
                var(--color-border-light)
            );
            transform: translateY(-1px);
            box-shadow: 0 16px 32px var(--color-shadow);
        }

        &:active {
            transform: translateY(0);
        }
    `,

    CopyBtn: styled.button`
        min-height: 42px;
        padding: 0 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--color-border);
        background:
            linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.035),
                rgba(255, 255, 255, 0.015)
            ),
            var(--color-surface-2);
        color: var(--color-text-primary);
        font-size: 14px;
        font-weight: 800;
        line-height: 1;
        cursor: pointer;
        box-shadow: 0 10px 24px var(--color-shadow);
        transition:
            background var(--transition-fast),
            border-color var(--transition-fast),
            color var(--transition-fast),
            transform var(--transition-fast),
            box-shadow var(--transition-fast);

        svg {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
            color: var(--color-text-secondary);
        }

        &:hover {
            background:
                linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0.05),
                    rgba(255, 255, 255, 0.02)
                ),
                var(--color-surface-3);
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            box-shadow: 0 14px 28px var(--color-shadow);
        }

        &:active {
            transform: translateY(0);
        }
    `,

    Toast: styled.div`
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        min-height: 40px;
        padding: 0 12px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--color-border);
        background:
            linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.04),
                rgba(255, 255, 255, 0.015)
            ),
            var(--color-surface);
        color: var(--color-text-primary);
        box-shadow: 0 14px 28px var(--color-shadow);
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transform: translateY(-6px);
        transition:
            opacity var(--transition-fast),
            transform var(--transition-fast);

        svg {
            width: 15px;
            height: 15px;
            color: var(--color-primary);
            flex-shrink: 0;
        }

        span {
            font-size: 13px;
            font-weight: 700;
            line-height: 1;
        }

        &.show {
            opacity: 1;
            transform: translateY(0);
        }

        html[data-theme="light"] & {
            background:
                linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0.82),
                    rgba(255, 255, 255, 0.5)
                ),
                var(--color-surface);
        }
    `,
};
