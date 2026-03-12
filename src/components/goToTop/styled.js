import styled from "styled-components";

export const Styled = {
    Button: styled.button`
        position: fixed;
        right: 22px;
        bottom: 22px;
        z-index: 9999;

        width: 50px;
        height: 50px;

        display: grid;
        place-items: center;

        border-radius: 16px;
        border: 1px solid var(--color-border);

        background:
            linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.05),
                rgba(255, 255, 255, 0.015)
            ),
            var(--color-surface-2);

        color: var(--color-text-primary);

        backdrop-filter: blur(8px);

        box-shadow:
            0 16px 44px var(--color-shadow),
            inset 0 0 0 1px rgba(255, 255, 255, 0.02);

        cursor: pointer;

        transition:
            transform var(--transition-fast),
            opacity var(--transition-fast),
            border-color var(--transition-fast),
            background var(--transition-fast),
            box-shadow var(--transition-fast);

        svg {
            width: 20px;
            height: 20px;
        }

        &.hide {
            opacity: 0;
            pointer-events: none;
            transform: translateY(12px) scale(0.96);
        }

        &.show {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0) scale(1);
        }

        &:hover {
            transform: translateY(-3px);
            border-color: var(--color-border-light);

            background:
                linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0.07),
                    rgba(255, 255, 255, 0.02)
                ),
                var(--color-surface);

            box-shadow:
                0 20px 52px var(--color-shadow),
                0 0 0 1px rgba(255, 255, 255, 0.03);
        }

        &:active {
            transform: translateY(-1px) scale(0.98);
        }

        @media (max-width: 640px) {
            right: 16px;
            bottom: 16px;
            width: 46px;
            height: 46px;
        }

        html[data-theme="light"] & {
            background:
                linear-gradient(
                    180deg,
                    rgba(15, 23, 42, 0.06),
                    rgba(15, 23, 42, 0.02)
                ),
                var(--color-surface-2);

            box-shadow:
                0 14px 36px rgba(0, 0, 0, 0.08),
                inset 0 0 0 1px rgba(0, 0, 0, 0.04);
        }
    `,
};
