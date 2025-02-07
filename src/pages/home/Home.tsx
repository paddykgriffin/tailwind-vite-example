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

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Hero>
        <Background
          type="img"
          src="https://picsum.photos/id/1/1920/600"
          srcMobile="/images/hero-mobile.png"
        />
        <Content className="items-center text-center">
          <Title className="leading-18 m-5  text-white">Main Tagline</Title>
          <SubTitle className="m-5 text-white max-w-[900px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            molestiae laborum eum minima itaque praesentium.
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
