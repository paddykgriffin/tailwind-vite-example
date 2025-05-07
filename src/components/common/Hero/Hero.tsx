import React, { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Typography,
  TypographyProps,
} from "@/components/common/Typography/Typography";
import type { HTMLProps } from "@/types/common.types";
import { Container } from "@/components/layout/Container/Container";
import { Skeleton } from "@/components/ui/skeleton";
import {
  HeroContextType,
  ContentProps,
  BackgroundProps,
  HeroComposition,
  ScrollIconProps,
} from "./hero.interfaces";
import { LuChevronDown, LuMouse } from "react-icons/lu";

import useWindowSize from "@/hooks/useWindowSize";

const HeroContext = React.createContext<HeroContextType | undefined>(undefined);

const useHeroContext = () => {
  const context = React.useContext(HeroContext);
  if (context === undefined) {
    throw new Error("useHeroContext must be used within a Hero Component");
  }
  return context;
};

export interface HeroProps extends HTMLProps<"section"> {
  children: ReactNode;
}
const Background = ({
  type,
  src,
  srcMobile,
  subPageHero,
  imageAlt = "Hero Banner",
  hideSkeleton = false,
  hideTransparentLayer = false,
}: BackgroundProps) => {
  const { isLoaded, setIsLoaded } = useHeroContext();
  const mediaRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleLoad = () => {
      if (mediaRef.current) {
        setTimeout(() => setIsLoaded(true), 300);
      }
    };

    const currentMediaRef = mediaRef.current;

    if (currentMediaRef) {
      if (type === "img") {
        if ((currentMediaRef as HTMLImageElement).complete) {
          handleLoad();
        } else {
          (currentMediaRef as HTMLImageElement).onload = handleLoad;
        }
      }
    }
  }, [type, setIsLoaded]);

  const mediaClass = cn(
    "col-start-1 row-start-1 h-auto lg:h-[80vh] xl:h-[90vh] w-full transition-opacity duration-500",
    {
      "opacity-0": !isLoaded,
      "opacity-100": isLoaded,
      "lg:h-[14vh] xl:h-[14vh]": subPageHero === true,
    },
  );

  const { width } = useWindowSize();

  return (
    <>
      {!isLoaded && !hideSkeleton && (
        <Skeleton
          className={cn(
            "inset-0 z-10 col-start-1 row-start-1 h-[40vh] w-full transition-all duration-500 md:h-[60vh] lg:h-[95vh] xl:h-[95vh]",
          )}
        />
      )}{" "}
      {type === "img" ? (
        width && width <= 640 ? (
          <img
            alt={imageAlt}
            src={srcMobile || src}
            ref={mediaRef as React.RefObject<HTMLImageElement>}
            className={mediaClass}
            width={600}
            style={{ width: "100%" }}
          />
        ) : (
          <img
            alt={imageAlt}
            src={src}
            ref={mediaRef as React.RefObject<HTMLImageElement>}
            className={mediaClass}
            width={992}
            style={{ width: "100%" }}
          />
        )
      ) : null}
      {!hideTransparentLayer && (
        <div
          className={cn(
            "inset-0 col-start-1 row-start-1 bg-black/70 transition-opacity duration-500",
            {
              "opacity-0": !isLoaded,
              "opacity-100": isLoaded,
            },
          )}
          aria-hidden="true"
        />
      )}
    </>
  );
};

const Content = ({ children, className }: ContentProps) => {
  const { isLoaded } = useHeroContext();
  if (!isLoaded) return null;
  return (
    <div className={cn("col-start-1 row-start-1 flex items-center", className)}>
      <Container className="py-0">{children}</Container>
    </div>
  );
};

const Title = ({ children, className, ...props }: TypographyProps) => (
  <Typography variant="h1" {...props} className={cn("text-4xl", className)}>
    {children}
  </Typography>
);

const SubTitle = ({ children, className, ...props }: TypographyProps) => (
  <Typography
    variant="body1"
    {...props}
    className={cn("text-2xl font-light", className)}
  >
    {children}
  </Typography>
);

const ScrollIcon = ({ className, align = "right" }: ScrollIconProps) => {
  const { isLoaded, heroBannerRef } = useHeroContext();

  const scrollToBottom = () => {
    if (heroBannerRef.current) {
      const sectionBottom =
        heroBannerRef.current.getBoundingClientRect().bottom;

      window.scrollTo({
        top: window.scrollY + sectionBottom,
        behavior: "smooth",
      });
    }
  };

  if (!isLoaded) return null;

  let alignClass = "";
  switch (align) {
    case "left":
      alignClass = "justify-start";
      break;
    case "center":
      alignClass = "justify-center";
      break;
    case "right":
      alignClass = "justify-end";
      break;
    default:
      alignClass = "justify-end";
  }

  return (
    <div className="col-start-1 row-start-1 flex items-end">
      <Container className="animate-fade-down animate-duration-1000 sm:mb-0 md:mb-6 md:block lg:mb-14">
        <div className={cn("flex", alignClass)}>
          <button
            onClick={scrollToBottom}
            type="button"
            className={cn(
              "animate-[bounce_4s_infinite] cursor-pointer",
              className,
            )}
          >
            <div className="z-20 flex flex-col items-center gap-2">
              <Typography variant="body2" className="font-semibold text-white">
                scroll
              </Typography>
              <LuMouse className="h-10 w-10 text-white" />
              <LuChevronDown className="h-6 w-10 text-white" />
            </div>
          </button>
        </div>
      </Container>
    </div>
  );
};

const Hero: React.FC<HeroProps> & HeroComposition = Object.assign(
  ({ children, className, ...props }: HeroProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const heroBannerRef = useRef<HTMLDivElement>(null);

    return (
      <HeroContext.Provider value={{ isLoaded, setIsLoaded, heroBannerRef }}>
        <section
          id="hero-banner"
          ref={heroBannerRef}
          className={cn("relative grid w-full", className)}
          {...props}
        >
          {children}
        </section>
      </HeroContext.Provider>
    );
  },
  {
    Background,
    Content,
    Title,
    SubTitle,
    ScrollIcon,
  },
);

export { Hero, Background, Content, Title, SubTitle, ScrollIcon };
