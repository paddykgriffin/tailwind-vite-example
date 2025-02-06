import { Section } from "@/components/layout/Section/Section";
import { Typography } from "@/components/common/Typography/Typography";
import { Button } from "@/components/common/Button/Button";
import { Container } from "@/components/layout/Container/Container";
import { ProjectsData } from "@/components/custom/Home/data/data-work";


export default function LatestWork() {
  return (
    <Section className="text-center dark:bg-black" id="work">
      <Typography
        variant="h2"
        className="mb-6 inline-block border-b-2 border-b-[#DFDFDF] pb-4 uppercase tracking-wide text-[#333333] dark:text-white"
      >
        Latest Work
      </Typography>

      <Typography
        variant="body1"
        className="pb-6 text-3xl leading-[3rem] text-gray-500 dark:text-white"
      >
        We created{" "}
        <span className="font-semibold text-primary dark:text-secondary">
          unique
        </span>{" "}
        experiences for some of our clients have a look around at some of our
        latest completed{" "}
        <span className="font-semibold text-primary dark:text-secondary">
          websites.
        </span>
      </Typography>

      <Container>
        <div className="grid gap-6 pb-12 md:grid-cols-4">
          {ProjectsData.map((item, i) => (
            <div key={i}>
              <img
                src={item.image}
                width={264}
                height={100}
                alt={item.title}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography variant="h3" className="pt-4 dark:text-white">
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                className="text-gray-500 dark:text-white"
              >
                {item.subtitle}
              </Typography>
            </div>
          ))}
        </div>
      </Container>

      <Button
        size={"large"}
        href="/latest-work"
        target="_blank"
        className="rounded-[4px] px-6 uppercase hover:shadow-lg"
      >
        View More Projects
      </Button>
    </Section>
  );
}
