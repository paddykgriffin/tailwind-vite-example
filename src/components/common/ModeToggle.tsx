import useCurrentTheme from "@/hooks/useCurrentTheme";
import { Button } from "@/components/common/Button/Button";
import { Icon } from "@iconify/react";
import siteConfig from "@/site-config";

export function ModeToggle() {
  const { currentTheme, toogleTheme } = useCurrentTheme();

  if (siteConfig.darkMode === false) {
    return null;
  }

  return (
    <Button
      onClick={toogleTheme}
      variant="icon"
      size="icon"
      disableElevation
      className="ml-3 text-white rounded-xl dark:text-white hover:rounded-xl hover:cursor-pointer hover:text-white "
    >
      <Icon
        icon="line-md:moon"
        className={`size-6 transition-all ${
          currentTheme === "dark" ? "-rotate-90 scale-0" : "-rotate-0 scale-100"
        }`}
      />
      <Icon
        icon="line-md:sunny-filled-loop"
        className={`absolute size-6 transition-all ${
          currentTheme === "dark" ? "-rotate-90 scale-100" : "-rotate-0 scale-0"
        }`}
      />
      <span className="sr-only">
        {currentTheme === "dark" ? "Turn on light" : "Turn off light"}
      </span>
    </Button>
  );
}
