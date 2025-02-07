import { NavLink } from "react-router-dom";
import { MenuItem } from "../navigation/FooterMenuLinks";

interface Props {
  data: MenuItem[];
}

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
