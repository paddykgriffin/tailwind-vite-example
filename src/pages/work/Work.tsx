import HeroMini from "@/components/common/Hero/HeroMini";
import { Typography } from "@/components/common/Typography/Typography";
import Layout from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section/Section";
import { ProjectsData } from "@/data/data-work";
import { s3 } from "@/utils/s3";

const Work = () => {
  return (
    <Layout pageTitle="Latest Work">
      <HeroMini />
      <Section>
        <div className="pb-12 text-center">
          <Typography
            variant={"h1"}
            className="text-center text-black dark:text-white"
          >
            Latest Work
          </Typography>
        </div>

        <div className="grid gap-6 pb-12 md:grid-cols-2">
          {ProjectsData.map((item, i) => (
            <div key={i}>
              <img
                src={s3(item.image)}
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
      </Section>
    </Layout>
  );
};

export default Work;
