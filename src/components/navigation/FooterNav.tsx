import { NavLink, useLocation, useNavigate } from "react-router-dom";

interface Props {
  data: MenuItem[];
}

export interface MenuItem {
  title: string;
  path: string;
  target?: string;
}

export const LinksOne: Array<MenuItem> = [
  {
    title: "Web Design & Development",
    path: "/what-we-do#web-design",
  },
  {
    title: "Ecommerce",
    path: "/what-we-do#ecommerce",
  },
  {
    title: "CMS",
    path: "/what-we-do#cms",
  },
  {
    title: "SEO",
    path: "/what-we-do#seo",
  },
];

export const LinksTwo: Array<MenuItem> = [
  {
    title: "Company Information",
    path: "/about#more",
  },
  {
    title: "What We've Done",
    path: "/about#more",
  },
  {
    title: "Vacancies",
    path: "/about#more",
  },
];

const FooterNav = ({ data }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent, path: string) => {
    const [pathname, hash] = path.split("#");

    if (pathname === location.pathname && hash) {
      e.preventDefault();
      const anchor = document.getElementById(hash);
      if (anchor) {
        window.scrollTo({
          top: anchor.getBoundingClientRect().top + window.scrollY - 100,
          behavior: "smooth",
        });
      }
    } else if (hash) {
      e.preventDefault();
      navigate(pathname + "#" + hash);
      // Delay scroll until after navigation
      setTimeout(() => {
        const anchor = document.getElementById(hash);
        if (anchor) {
          window.scrollTo({
            top: anchor.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth",
          });
        }
      }, 100); // Adjust timeout if needed
    }
  };

  return (
    <div className="flex flex-col gap-2 pt-4">
      {data.map((item) => (
        <NavLink
          to={item.path}
          key={item.title}
          className="transition-all duration-500 hover:text-orange-500"
          onClick={(e) => handleClick(e, item.path)}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default FooterNav;
