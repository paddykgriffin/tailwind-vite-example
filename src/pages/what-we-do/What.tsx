import HeroMini from "@/components/common/Hero/HeroMini";
import { Typography } from "@/components/common/Typography/Typography";
import Layout from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section/Section";
import { WhatWeDoData } from "./data";
import { s3 } from "@/utils/s3";
import { slugify } from "@/utils/slugify";

const What = () => {
  return (
    <Layout pageTitle="What We Do">
      <HeroMini />
      <Section>
        <div className="pb-12 text-center">
          <Typography
            variant={"h1"}
            className="pb-8 text-black dark:text-white"
          >
            What We Do
          </Typography>
          <Typography
            variant={"body1"}
            className="text-2xl leading-8 [&_br]:hidden md:[&_br]:block"
          >
            We provide a wide{" "}
            <span className="highlight">range of services,</span> see below some
            of the
            <br />
            main areas we provide in.
          </Typography>
        </div>

        {WhatWeDoData.map((item, i) => (
          <div
            id={`${slugify(item.title)}`}
            key={i}
            className={`flex flex-col items-center justify-center gap-12 border-b-2 border-gray-200 py-8 last:border-b-0 md:py-24 ${
              item.alignment ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="flex-1">
              <img
                src={s3(item.image)}
                alt={item.title}
                className="h-auto w-full"
              />
            </div>
            <div className="flex-1">
              <Typography variant={"h2"} className="text-secondary">
                {item.title}
              </Typography>

              <div className="flex flex-col gap-2">
                {item.content.map((text, index) => (
                  <Typography
                    key={index}
                    variant={"body1"}
                    className="leading-8"
                  >
                    {text}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Section>
    </Layout>
  );
};

export default What;
