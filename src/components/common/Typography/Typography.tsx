import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import type React from "react";
import { ElementType, forwardRef } from "react";

const typograhyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 mb-4",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      h6: "scroll-m-20 text-base font-semibold tracking-tight",
      body1: "text-lg leading-7 mb-4",
      body2: "text-sm leading-6",
    },
    textColor: {
      default: "text-black dark:text-white",
      muted: "text-muted",
      primary: "text-primary",
      secondary: "text-secondary",
    },
    align: {
      none: "",
      left: "text-left",
      right: "text-right",
      center: "text-center",
    },
  },
  defaultVariants: {
    variant: "body1",
    textColor: "default",
    align: "none",
  },
});

type TypograhyVariants = VariantProps<typeof typograhyVariants>;

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    TypograhyVariants {
  component?: ElementType;
}

const variantMapping: Record<
  NonNullable<TypograhyVariants["variant"]>,
  ElementType
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    { className, variant, textColor, align, component, children, ...props },
    ref,
  ) => {
    const Component = component || (variant && variantMapping[variant]) || "p";

    return (
      <Component
        ref={ref}
        className={cn(
          typograhyVariants({ variant, textColor, align, className }),
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Typography.displayName = "Typography";
