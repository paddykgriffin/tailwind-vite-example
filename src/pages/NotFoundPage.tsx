import { Typography } from "@/components/common/Typography/Typography";
import Layout from "../components/layout/Layout";
import { Section } from "@/components/layout/Section/Section";

const NotFound = () => {
  return (
    <Layout pageTitle="Error">
      <Section>
        <Typography variant={"h1"}>Page Not Found</Typography>
      </Section>
    </Layout>
  );
};

export default NotFound;
