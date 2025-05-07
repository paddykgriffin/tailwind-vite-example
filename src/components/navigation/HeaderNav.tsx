import { NavLink } from "react-router-dom";

interface MenuItem {
  title: string;
  path: string;
  target?: string;
}

export const primaryMenuLinks: Array<MenuItem> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "What We Do",
    path: "/what-we-do",
  },
  {
    title: "Latest Work",
    path: "/latest-work",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const HeaderNav = () => {
  return (
    <div className="flex gap-4 text-gray-500">
      {primaryMenuLinks.map((item) => (
        <NavLink
          className="text-white dark:text-white"
          to={item.path}
          key={item.title}
          style={{
            textDecoration: "none",
          }}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default HeaderNav;
