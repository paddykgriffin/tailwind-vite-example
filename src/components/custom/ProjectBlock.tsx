import { s3 } from "@/utils/s3";
import { Typography } from "../common/Typography/Typography";
import { Project } from "@/types/common.types";
import { Link } from "react-router-dom";
import { slugify } from "@/utils/slugify";

const ProjectBlock = ({ name, thumbnail, details }: Project) => {
  return (
    <Link
      to={`/latest-work/${slugify(name)}`}
      className="group flex flex-col items-center"
    >
      <img
        src={s3(thumbnail)}
        alt={name}
        className="transition-all duration-300 group-hover:scale-105 group-hover:opacity-30"
        style={{ width: "100%", height: "auto" }}
      />
      <Typography
        variant="h3"
        className="pt-4 group-hover:text-yellow-500 dark:text-white dark:group-hover:text-yellow-500"
      >
        {name}
      </Typography>
      <Typography
        variant="body1"
        className="text-gray-500 group-hover:text-yellow-500 dark:text-white dark:group-hover:text-yellow-500"
      >
        {details.description}
      </Typography>
    </Link>
  );
};

export default ProjectBlock;
