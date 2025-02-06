import useCurrentTheme from "@/hooks/useCurrentTheme";
import LogoDark from "@/assets/images/LogoDark.svg";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/images/Logo.svg";
import siteConfig from "@/site-config";

export default function SiteLogo() {
  const { currentTheme } = useCurrentTheme();
  const LogoToRender = currentTheme === "dark" ? LogoDark : Logo;

  return (
    <NavLink to="/">
      <img
        src={LogoToRender}
        alt={siteConfig.siteName}
        className="h-8 m-w-56 sm:max-w-none"
      />
    </NavLink>
  );
}
