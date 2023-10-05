import type {VariantProps} from "tailwind-variants";

import {dataFocusVisibleClasses} from "../utils";
import {tv} from "../utils/tv";

/**
 * Slider wrapper **Tailwind Variants** component
 *
 * @example
 *
 * TODO: Add example here
 * const styles = slider()
 *
 * <span className={styles} />
 */
const slider = tv({
  slots: {
    base: "flex flex-col w-full gap-1",
    labelWrapper: "w-full flex justify-between",
    label: "",
    output: "",
    step: [
      "h-2",
      "w-[2px]",
      "absolute",
      "top-1/2",
      "bg-default-300/50",
      "data-[in-range=true]:bg-background/50",
      "-translate-x-1/2",
      "-translate-y-1/2",
    ],
    track: [
      "flex",
      "w-full",
      "relative",
      "rounded-full",
      "bg-default-300/50",
      "border-transparent",
    ],
    filler: "h-full absolute",
    thumb: [
      "rounded-full",
      "top-1/2",
      "flex",
      "justify-center",
      "items-center",
      "shadow-md",
      dataFocusVisibleClasses,
    ],
  },
  variants: {
    size: {
      sm: {
        track:
          "h-1 my-[calc((theme(spacing.5)-theme(spacing.1))/2)] border-x-[calc(theme(spacing.5)/2)]",
        label: "text-small",
        output: "text-small",
        thumb: "w-5 h-5 after:w-4 after:h-4",
        step: "data-[in-range=false]:bg-default-200",
      },
      md: {
        track:
          "h-3 my-[calc((theme(spacing.6)-theme(spacing.3))/2)] border-x-[calc(theme(spacing.6)/2)]",
        thumb: "w-6 h-6 after:w-5 after:h-5",
        label: "text-small",
        output: "text-small",
      },
      lg: {
        track:
          "h-7 my-[calc((theme(spacing.7)-theme(spacing.5))/2)] border-x-[calc(theme(spacing.7)/2)]",
        thumb: "h-7 w-7 after:w-5 after:h-5",
        label: "text-medium",
        output: "text-medium",
      },
    },
    color: {
      foreground: {
        filler: "bg-foreground",
        thumb: "bg-foreground",
        track: 'data-[thumb-count="1"]:border-s-foreground',
      },
      primary: {
        filler: "bg-primary",
        thumb: "bg-white",
        track: 'data-[thumb-count="1"]:border-s-primary',
      },
      secondary: {
        filler: "bg-secondary",
        thumb: "bg-white",
        track: 'data-[thumb-count="1"]:border-s-secondary',
      },
      success: {
        filler: "bg-success",
        thumb: "bg-success",
        track: 'data-[thumb-count="1"]:border-s-success',
      },
      warning: {
        filler: "bg-warning",
        thumb: "bg-warning",
        track: 'data-[thumb-count="1"]:border-s-warning',
      },
      danger: {
        filler: "bg-danger",
        thumb: "bg-danger",
        track: 'data-[thumb-count="1"]:border-s-danger',
      },
    },
    isDisabled: {
      false: {
        thumb: ["cursor-grab", "data-[dragging=true]:cursor-grabbing"],
      },
      true: {
        base: "opacity-disabled",
        thumb: "cursor-default",
      },
    },
    disableAnimation: {
      true: {
        thumb: "data-[dragging=true]:after:scale-100",
      },
      false: {
        thumb: "after:transition-all motion-reduce:after:transition-none",
      },
    },
  },
  compoundVariants: [
    {
      size: "sm",
      color: "foreground",
      class: {
        step: "data-[in-range=true]:bg-foreground",
      },
    },
    {
      size: "sm",
      color: "primary",
      class: {
        step: "data-[in-range=true]:bg-primary",
      },
    },
    {
      size: "sm",
      color: "secondary",
      class: {
        step: "data-[in-range=true]:bg-secondary",
      },
    },
    {
      size: "sm",
      color: "success",
      class: {
        step: "data-[in-range=true]:bg-success",
      },
    },
    {
      size: "sm",
      color: "warning",
      class: {
        step: "data-[in-range=true]:bg-warning",
      },
    },
    {
      size: "sm",
      color: "danger",
      class: {
        step: "data-[in-range=true]:bg-danger",
      },
    },
  ],
  defaultVariants: {
    size: "sm",
    color: "primary",
    isDisabled: false,
    disableAnimation: false,
  },
});

export type SliderVariantProps = VariantProps<typeof slider>;
export type SliderSlots = keyof ReturnType<typeof slider>;

export {slider};
