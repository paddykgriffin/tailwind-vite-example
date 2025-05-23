import { ModeToggle } from "@/components/common/ModeToggle";
import HeaderNav from "@/components/navigation/HeaderNav";
import { Container } from "../Container/Container";
import Logo from "@/components/common/Logo/Logo";
import SidebarNav from "@/components/navigation/SidebarNav";
import { useHeader } from "./HeaderContext";
import siteConfig from "@/site-config";
import { cn } from "@/lib/utils";
//import React from "react";
import { useRef } from "react";

export default function Header() {
  const { isNavTransparent, isNavVisible } = useHeader();
  const mainNavRef = useRef<HTMLElement>(null);
  const { mainNav } = siteConfig.layout.header;

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 mr-[var(--removed-body-scroll-bar-size)] transition-[top] duration-300"
      id="main-header"
      style={{
        top: !isNavVisible ? -(mainNavRef.current?.offsetHeight || "80px") : 0,
      }}
    >
      <nav
        id="primary-nav"
        ref={mainNavRef}
        className={cn("transition-all duration-300", {
          "bg-transparent": isNavTransparent,
          "bg-primary dark:bg-primary": !isNavTransparent,
        })}
      >
        <Container
          className={cn(
            "flex flex-wrap items-center justify-between gap-2 p-8",
            {
              "p-8": isNavTransparent,
              "p-2": !isNavTransparent,
            },
          )}
          maxWidth="4xl"
        >
          <div className="max-h-16 md:max-h-12">
            <Logo />
          </div>

          {mainNav && (
            <div className="hidden w-full items-center md:w-auto xl:flex">
              <HeaderNav />
              <ModeToggle />
            </div>
          )}

          <div className="block pt-2 xl:hidden">
            <SidebarNav />
          </div>
        </Container>
      </nav>
    </header>
  );
}
