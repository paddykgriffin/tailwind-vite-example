import { projects } from "@/components/custom/data";
import ProjectBlock from "./ProjectBlock";

const ProjectList = () => {
  return (
    <>
      {projects.map((item) => (
        <ProjectBlock key={item.id} {...item} />
      ))}
    </>
  );
};

export default ProjectList;
