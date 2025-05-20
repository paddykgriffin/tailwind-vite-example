import { Typography } from "@/components/common/Typography/Typography";
import Layout from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section/Section";
//import React from "react";
import { s3 } from "@/utils/s3";
import { PanelData } from "@/data/data";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import HeroMini from "@/components/common/Hero/HeroMini";

const About = () => {
  return (
    <Layout pageTitle="About">
      <HeroMini />
      <Section>
        <div className="flex flex-col gap-4 border-b border-gray-300 pb-12 lg:grid lg:items-center">
          <Typography
            variant="h1"
            className="pb-6 text-center text-black sm:text-left md:pb-0 dark:text-white"
          >
            About Us
          </Typography>
          <Typography
            variant={"body1"}
            className="col-start-1 col-end-3 text-center md:text-left md:leading-[2.5rem] dark:text-white"
          >
            Amet ad tempor fugiat amet dolor id enim sint ut occaecat cillum
            sint commodo deserunt. Sunt cupidatat duis ut ex esse incididunt
            deserunt est ipsum labore pariatur. Enim ea in eiusmod incididunt
            nostrud qui nisi exercitation. Est aute mollit nulla cupidatat elit
            qui nostrud reprehenderit labore cupidatat. Nulla enim quis
            reprehenderit mollit sit ipsum voluptate excepteur enim pariatur
            esse. Excepteur cillum velit aliqua et eiusmod dolore officia
            pariatur nulla laboris fugiat. Dolore Lorem adipisicing aliquip
            dolore cillum qui incididunt eu.
          </Typography>
          <img
            className="col-start-8 col-end-12"
            src={s3("img_sample.jpg")}
            alt="sample image"
            width={500}
            height={100}
          />
        </div>

        <div
          className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 xl:px-24"
          id="more"
        >
          {PanelData.map((item, i) => (
            <div className="panel shadow-lg drop-shadow-xl" key={i}>
              <img
                className=""
                src={s3(item.image)}
                alt="sample image"
                width={500}
                height={100}
              />
              <div className="bg-black/80 p-4 dark:bg-white/20">
                <Typography
                  variant="h4"
                  className="pb-2 text-2xl text-white md:text-xl"
                >
                  {item.title}
                </Typography>
                <NavLink
                  to={item.linkHref}
                  className="block text-lg text-white transition-all duration-500 hover:translate-x-5 md:text-base"
                >
                  {item.linkLabel}
                  <FaAngleRight className="inline-block" />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default About;
