import useScrollTrigger from "@/hooks/useScrollTrigger";
import React from "react";
import { Button } from "./Button/Button";
import { cn } from "@/lib/utils";
import { LuChevronUp } from "react-icons/lu";

const ScrollToTop = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={cn(
        "fixed right-5 mr-[var(--removed-body-scroll-bar-size)] hidden transition-[bottom] duration-500 md:block",
        {
          "bottom-5 opacity-0": !trigger,
          "bottom-12 opacity-100": trigger,
        },
      )}
    >
      <Button
        size={"icon"}
        onClick={handleClick}
        className="rounded-full bg-primary/80 shadow-md hover:bg-primary"
        type="button"
        onKeyUp={(event: React.KeyboardEvent<HTMLButtonElement>) => {
          if (event.key === "Enter" || event.key === " ") {
            handleClick();
          }
        }}
        aria-label="Scroll to top"
      >
        <LuChevronUp className="size-5 text-white" />
      </Button>
    </div>
  );
};

export default ScrollToTop;
