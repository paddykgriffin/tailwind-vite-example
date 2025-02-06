import { NavLink } from "react-router-dom";
import { primaryMenuLinks } from "../navigation/HeaderMenuLinks";

const HeaderNav = () => {
  return (
    <div className="gap-4 flex text-gray-500 ">
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
