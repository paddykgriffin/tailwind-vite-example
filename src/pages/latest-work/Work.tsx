import HeroMini from "@/components/common/Hero/HeroMini";
import { Typography } from "@/components/common/Typography/Typography";
import Layout from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section/Section";

import { Outlet } from "react-router-dom";

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

        <div className="grid gap-6 pb-12 md:grid-cols-2 lg:grid-cols-3">
          <Outlet />
        </div>
      </Section>
    </Layout>
  );
};

export default Work;
