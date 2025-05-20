import { Project } from "@/types/common.types";
import { useParams } from "react-router-dom";
import { projects } from "./data";
import { Typography } from "../common/Typography/Typography";
import Layout from "../layout/Layout";
import { slugify } from "@/utils/slugify";
import HeroMini from "../common/Hero/HeroMini";
import { Section } from "../layout/Section/Section";
import { s3 } from "@/utils/s3";
import { LuChevronsLeft } from "react-icons/lu";
import { Button } from "../common/Button/Button";

const ProjectDetail = () => {
  // Get the route parameter
  const { name } = useParams<{ name: string }>();

  const item: Project | undefined = projects.find(
    (project) => slugify(project.name) === name,
  );

  if (!item)
    return (
      <Layout>
        <div className="mt-16 py-12">
          <Typography variant="h1" className="pb-6 text-center">
            Project not found!
          </Typography>
          <Typography variant="body1" className="text-center">
            try again later
          </Typography>
        </div>
      </Layout>
    );

  return (
    <Layout pageTitle={item.name}>
      <HeroMini />
      <Section>
        <Typography variant="h1" className="pb-6 text-center">
          {item.name}
        </Typography>
        <Typography
          variant="body1"
          className="pb-6 text-center text-xl leading-8 text-gray-500 dark:text-white"
        >
          {item.details.description}
        </Typography>

        <img
          src={s3(item.details.image)}
          alt=""
          className="mx-auto pb-12 text-center"
        />

        <div className="mx-auto max-w-(--breakpoint-md) pb-12 text-center text-lg leading-8 text-gray-500 dark:text-white [&_p]:pb-6">
          {item.details.bodyText}
        </div>

        <div className="text-center">
          <Button size={"large"} href="/latest-work" className="btn">
            <LuChevronsLeft className="mr-2 h-4 w-4" /> Back to projects
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default ProjectDetail;
