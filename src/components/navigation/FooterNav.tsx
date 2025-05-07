import { NavLink } from "react-router-dom";

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
    path: "#",
  },
  {
    title: "Ecommerce",
    path: "#",
  },
  {
    title: "CMS",
    path: "#",
  },
  {
    title: "Hosting",
    path: "#",
  },
  {
    title: "SEO",
    path: "#",
  },
];

export const LinksTwo: Array<MenuItem> = [
  {
    title: "Company Information",
    path: "#",
  },
  {
    title: "What We've Done",
    path: "#",
  },
  {
    title: "Vacancies",
    path: "#",
  },
];

const FooterNav = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-2 pt-4">
      {data.map((item) => (
        <NavLink
          to={item.path}
          key={item.title}
          className="transition-all duration-500 hover:text-orange-500"
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default FooterNav;
