import LatestWork from "@/components/custom/Work";
import Layout from "../../components/layout/Layout";
import Contact from "@/components/custom/Contact";
import About from "@/components/custom/About";
import What from "@/components/custom/What";
import {
  Hero,
  Background,
  Content,
  Title,
  SubTitle,
  ScrollIcon,
} from "@/components/common/Hero/Hero";
import { s3 } from "@/utils/s3";

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Hero>
        <Background
          type="img"
          src={s3("hero.png")}
          srcMobile={s3("hero-mobile.png")}
        />
        <Content className="items-center text-center">
          <Title className="leading-18 text-white">
            Are you a growing company?
          </Title>
          <SubTitle className="mx-auto max-w-[900px] text-white">
            we can provide the right website for you to grow your business.
          </SubTitle>
        </Content>
        <ScrollIcon align="center" />
      </Hero>
      <About />
      <What />
      <LatestWork />
      <Contact />
    </Layout>
  );
};

export default Home;
