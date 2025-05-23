import { Button } from "@/components/common/Button/Button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { LuHouse, LuMenu } from "react-icons/lu";
import { ModeToggle } from "@/components/common/ModeToggle";
import { primaryMenuLinks } from "@/components/navigation/HeaderNav";
import { NavLink } from "react-router-dom";

export default function SidebarNav() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button
          variant={"icon"}
          size={"icon"}
          disableElevation
          className={cn(
            "size-7 text-white transition-all hover:text-white dark:text-white",
          )}
        >
          <LuMenu className="h-8 w-8 transition-all" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"} className={cn("w-screen p-0 sm:w-[450px]")}>
        <SheetHeader className="hidden px-6 py-6">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>use links to navigate</SheetDescription>
        </SheetHeader>
        <div className="mt-14">
          <div className="flex items-center justify-between border-t border-gray-300 px-6 py-3">
            <Button
              variant={"icon"}
              size={"icon"}
              disableElevation
              className={cn("size-7 text-black transition-all dark:text-white")}
            >
              <NavLink to="/#" onClick={handleLinkClick}>
                <LuHouse className="h-8 w-8" />
              </NavLink>
            </Button>
            <ModeToggle />
          </div>
          <nav>
            <ul>
              {primaryMenuLinks.map((item) => (
                <li key={item.title} className={cn("border-b border-gray-300")}>
                  <div className="flex items-center">
                    <NavLink
                      onClick={handleLinkClick}
                      to={item.path}
                      className={cn(
                        `aria-[current=page]:text-primary grow px-6 py-4 text-black transition-colors hover:bg-gray-100 aria-[current=page]:font-bold dark:text-white dark:hover:bg-gray-700`,
                      )}
                    >
                      {item.title}
                    </NavLink>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
