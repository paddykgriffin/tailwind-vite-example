import { Section } from "@/components/layout/Section/Section";
import { Typography } from "@/components/common/Typography/Typography";
import { Button } from "@/components/common/Button/Button";
import { Container } from "@/components/layout/Container/Container";
import { projects } from "@/components/custom/data";
import ProjectBlock from "@/components/custom/ProjectBlock";

export default function LatestWork() {
  return (
    <Section className="text-center dark:bg-black" id="work">
      <Typography
        variant="h2"
        className="mb-6 inline-block border-b-2 border-b-[#DFDFDF] pb-4 tracking-wide text-[#333333] uppercase dark:text-white"
      >
        Latest Work
      </Typography>

      <Typography
        variant="body1"
        className="pb-6 text-xl text-gray-500 md:text-3xl md:leading-[3rem] dark:text-white"
      >
        We created{" "}
        <span className="text-primary dark:text-secondary font-semibold">
          unique
        </span>{" "}
        experiences for our clients have a look around at some of our latest
        completed{" "}
        <span className="text-primary dark:text-secondary font-semibold">
          websites.
        </span>
      </Typography>

      <Container>
        <div className="grid gap-6 pb-12 md:grid-cols-3">
          {projects
            .filter((project) => project.showOnHome)
            .map((item, i) => (
              <ProjectBlock key={item.id} {...item} />
            ))}
        </div>
      </Container>

      <Button
        size={"large"}
        href="/latest-work"
        className="rounded-[4px] px-6 uppercase hover:shadow-lg"
      >
        View More Projects
      </Button>
    </Section>
  );
}
