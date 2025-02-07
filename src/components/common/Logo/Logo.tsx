import useCurrentTheme from "@/hooks/useCurrentTheme";
import LogoDark from "@/assets/images/LogoDark.svg";
import { NavLink } from "react-router-dom";
//import Logo from "@/assets/images/Logo.svg";
import siteConfig from "@/site-config";

export default function SiteLogo() {
  const { currentTheme } = useCurrentTheme();
  const LogoToRender = currentTheme === "dark" ? LogoDark : LogoDark;

  return (
    <NavLink to="/">
      <img
        src={LogoToRender}
        alt={siteConfig.siteName}
        className="m-w-56 h-8 sm:max-w-none"
      />
    </NavLink>
  );
}
