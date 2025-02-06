import { Section } from "@/components/layout/Section/Section";
import { Typography } from "@/components/common/Typography/Typography";
import { Button } from "@/components/common/Button/Button";
import { WhatWeData } from "@/components/custom/Home/data/data-what";

import { Container } from "@/components/layout/Container/Container";

export default function What() {
  return (
    <Section
      className="bg-gray-100 text-center dark:bg-[#121212]"
      id="what-we-do"
    >
      <Typography
        variant="h2"
        className="mb-6 inline-block border-b-2 border-b-[#DFDFDF] pb-4 uppercase tracking-wide text-[#333333] dark:text-white"
      >
        What We Do
      </Typography>

      <Typography
        variant="body1"
        className="pb-6 text-3xl leading-[3rem] text-gray-500 dark:text-white"
      >
        We have gained a wealth of{" "}
        <span className="font-semibold text-primary dark:text-secondary">
          experience
        </span>{" "}
        and reputation over the last few years from{" "}
        <span className="font-semibold text-primary dark:text-secondary">
          developing market leading products
        </span>
      </Typography>

      <Container className="py-8">
        <div className="grid gap-16 md:grid-cols-3 md:gap-6">
          {WhatWeData.map((item, i) => (
            <div key={i} className="text-center">
              <div className="relative mx-auto mb-8 grid h-[160px] w-[160px] justify-center rounded-[50%] bg-primary text-center">
                <div className="col-start-1 row-start-1 flex items-center">
                  <img
                    src={item.icon}
                    width={64}
                    height={64}
                    alt="Icon"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>

              <Typography
                variant="h3"
                className="mb-4 font-bold uppercase dark:text-white"
              >
                {item.title}
              </Typography>

              <ul>
                {item.items.map((items, index) => (
                  <li
                    key={index}
                    className="py-2 text-xl text-gray-500 dark:text-white"
                  >
                    {items.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <Button
        size={"large"}
        href="#"
        target="_blank"
        className="rounded-[4px] px-6 uppercase hover:shadow-lg dark:bg-primary"
      >
        Find out more
      </Button>
    </Section>
  );
}
