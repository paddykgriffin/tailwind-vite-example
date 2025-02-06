import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import { useEffect } from "react";
import type React from "react";
import { HeaderProvider } from "./Header/HeaderContext";
import siteConfig from "@/site-config";

interface LayoutProps {
  children: React.ReactNode;
  emptyPage?: boolean;
  pageTitle?: string;
  disableTransparentHeader?: boolean;
}

const Layout = ({
  pageTitle,
  emptyPage,
  children,
  disableTransparentHeader,
}: LayoutProps) => {
  useEffect(() => {
    if (import.meta.env.REACT_APP_PROJECT_NAME) {
      document.title = `${pageTitle} | ${
        import.meta.env.REACT_APP_PROJECT_NAME
      }`;
    } else {
      document.title = `${pageTitle} | ${import.meta.env.REACT_APP_SLUG}`;
    }
  }, [pageTitle]);

  useEffect(() => {
    if (!siteConfig.layout.header.transparent || disableTransparentHeader) {
      setTimeout(() => {
        const header = document.getElementById("main-header");
        const siteMain = document.getElementById("site-main");
        if (header && siteMain) {
          siteMain.style.marginTop = `${header.offsetHeight}px`;
        }
      }, 50);
    }
  }, [disableTransparentHeader]);

  return (
    <>
      {emptyPage ? (
        children
      ) : (
        <div id="site-wrapper" className="flex flex-col h-screen">
          <HeaderProvider disableTransparentHeader={disableTransparentHeader}>
            <Header />
          </HeaderProvider>
          <main id="site-main" className="h-auto flex-1">
            {children}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
