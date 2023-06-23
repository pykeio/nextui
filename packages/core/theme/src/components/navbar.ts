import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

import {dataFocusVisibleClasses} from "../utils";

/**
 * Card **Tailwind Variants** component
 *
 * @example
 * ```js
 * const {
 *  base,
 *  wrapper,
 *  toggle,
 *  srOnly,
 *  toggleIcon,
 *  brand,
 *  content,
 *  item,
 *  menu,
 *  menuItem
 * } = navbar({...})
 *
 * <nav className={base()} style={{ "--navbar-height": "4rem" }}>
 *    <header className={wrapper()}>
 *      <button className={toggle()}>
 *        <span className={srOnly()}>Open/Close menu</span>
 *        <span className={toggleIcon()} aria-hidden="true"/>
 *      </button>
 *      <div className={brand()}>Brand</div>
 *      <ul className={content()}>
 *        <li className={item()}>Item 1</li>
 *        <li className={item()}>Item 2</li>
 *        <li className={item()}>Item 3</li>
 *      </ul>
 *      <ul className={content()}>
 *        <li className={item()}>Login</li>
 *        <li className={item()}>Sign Up</li>
 *      </ul>
 *    </header>
 *    <ul className={menu()}>
 *      <li className={menuItem()}>Item 1</li>
 *      <li className={menuItem()}>Item 2</li>
 *      <li className={menuItem()}>Item 3</li>
 *   </ul>
 * </nav>
 * ```
 */
const navbar = tv({
  slots: {
    base: [
      "flex",
      "z-40",
      "w-full",
      "h-auto",
      "items-center",
      "justify-center",
      "border-b",
      "border-divider",
      // "data-[menu-open=true]:fixed",
      "data-[menu-open=true]:border-none",
    ],
    wrapper: [
      "z-40",
      "flex",
      "px-6",
      "w-full",
      "flex-row",
      "relative",
      "flex-nowrap",
      "items-center",
      "justify-between",
      "h-[var(--navbar-height)]",
    ],
    toggle: [
      "group",
      "flex",
      "items-center",
      "justify-center",
      "w-6",
      "h-full",
      "outline-none",
      "rounded-sm",
      "tap-highlight-transparent",
      // focus ring
      ...dataFocusVisibleClasses,
    ],
    srOnly: ["sr-only"],
    toggleIcon: [
      "w-full",
      "h-full",
      "pointer-events-none",
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "text-foreground",
      "group-data-[pressed=true]:opacity-70",
      "transition-opacity",
      // before - first line
      "before:content-['']",
      "before:block",
      "before:h-px",
      "before:w-6",
      "before:bg-current",
      "before:transition-transform",
      "before:duration-150",
      "before:-translate-y-1",
      "before:rotate-0",
      "group-data-[open=true]:before:translate-y-px",
      "group-data-[open=true]:before:rotate-45",
      // after - second line
      "after:content-['']",
      "after:block",
      "after:h-px",
      "after:w-6",
      "after:bg-current",
      "after:transition-transform",
      "after:duration-150",
      "after:translate-y-1",
      "after:rotate-0",
      "group-data-[open=true]:after:translate-y-0",
      "group-data-[open=true]:after:-rotate-45",
    ],
    brand: [
      "w-full",
      "flex",
      "flex-row",
      "flex-nowrap",
      "justify-start",
      "bg-transparent",
      "items-center",
      "no-underline",
      "text-base",
      "whitespace-nowrap",
      "box-border",
    ],
    content: [
      "flex",
      "w-full",
      "h-full",
      "flex-row",
      "flex-nowrap",
      "items-center",
      "gap-4",
      "data-[justify=start]:justify-start",
      "data-[justify=center]:justify-center",
      "data-[justify=end]:justify-end",
    ],
    item: [
      "text-base",
      "whitespace-nowrap",
      "box-border",
      // active
      "data-[active=true]:font-semibold",
    ],
    menu: [
      "z-30",
      "px-6",
      "pt-2",
      "fixed",
      "max-w-full",
      "top-[var(--navbar-height)]",
      "inset-x-0",
      "bottom-0",
      "w-screen",
      "flex-col",
      "gap-3",
      "overflow-y-auto",
    ],
    menuItem: ["text-lg"],
  },
  variants: {
    position: {
      static: {
        base: "static",
      },
      fixed: {
        base: "fixed top-0 inset-x-0",
      },
    },
    maxWidth: {
      sm: {
        wrapper: "max-w-[640px]",
      },
      md: {
        wrapper: "max-w-[768px]",
      },
      lg: {
        wrapper: "max-w-[1024px]",
      },
      xl: {
        wrapper: "max-w-[1280px]",
      },
      "2xl": {
        wrapper: "max-w-[1536px]",
      },
      full: {
        wrapper: "max-w-full",
      },
    },
    hideOnScroll: {
      true: {
        base: ["fixed", "top-0", "inset-x-0"],
      },
    },
    isBordered: {
      true: {},
    },
    isBlurred: {
      false: {
        base: "bg-background",
        menu: "bg-background",
      },
      true: {
        base: [
          "backdrop-blur-lg",
          "data-[menu-open=true]:backdrop-blur-xl",
          "backdrop-saturate-150",
          "bg-background/70",
        ],
        menu: ["backdrop-blur-xl", "backdrop-saturate-150", "bg-background/70"],
      },
    },
    disableAnimation: {
      true: {
        menu: ["hidden", "h-[calc(100dvh_-_var(--navbar-height)_-_1px)]", "data-[open=true]:flex"],
      },
    },
  },
  defaultVariants: {
    maxWidth: "lg",
    position: "fixed",
    isBlurred: true,
  },
});

export type NavbarVariantProps = VariantProps<typeof navbar>;
export type NavbarSlots = keyof ReturnType<typeof navbar>;

export {navbar};
