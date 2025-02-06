import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-lg font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        contained:
          "bg-primary text-white hover:bg-primary/90 transition duration-500 font-semibold tracking-wide ",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
        outline:
          "border border-input shadow-xs hover:bg-accent hover:text-accent-foreground border-2",

        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        icon: "bg-transparent hover:text-black hover:bg-black/50 dark:hover:text-white",
      },
      size: {
        small: "h-9 px-2",
        medium: "h-8 rounded-md px-3 text-xs",
        large: "h-10 px-12 py-7",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
      disableElevation: {
        true: "shadow-none",
        false: "shadow-xs hover:shadow-sm",
      },
    },
    defaultVariants: {
      variant: "contained",
      size: "medium",
      disableElevation: false,
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type BaseButtonProps = {
  asChild?: boolean;
} & ButtonVariantProps;

type ButtonAsButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsAnchorProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    className,
    variant,
    disableElevation,
    size,
    fullWidth,
    asChild = false,
    children,
    ...rest
  } = props;

  let Comp: React.ElementType;
  let refType: React.Ref<HTMLButtonElement | HTMLAnchorElement>;

  switch (true) {
    case asChild:
      Comp = Slot;
      refType = ref;
      break;
    case "href" in rest:
      Comp = "a";
      refType = ref as React.Ref<HTMLAnchorElement>;
      break;
    default:
      Comp = "button";
      refType = ref as React.Ref<HTMLButtonElement>;
      break;
  }

  return (
    <Comp
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
          disableElevation,
          className,
        }),
      )}
      ref={refType}
      {...rest}
    >
      {children}
    </Comp>
  );
});
Button.displayName = "Button";

export { Button };
export type { ButtonProps, ButtonAsButtonProps };
