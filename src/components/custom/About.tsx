import { Typography } from "@/components/common/Typography/Typography";
import { Section } from "@/components/layout/Section/Section";
import { Button } from "@/components/common/Button/Button";
import { s3 } from "@/utils/s3";

export default function About() {
  return (
    <Section className="dark:bg-black" id="about">
      <div className="text-center">
        <Typography
          variant="h2"
          className="mb-6 inline-block border-b-2 border-b-[#DFDFDF] pb-4 tracking-wide text-[#333333] uppercase dark:text-white"
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          className="text-primary dark:text-secondary text-3xl"
        >
          We are an innventive company priding ourselves on quaility solutions.
        </Typography>
        <Typography
          variant="body1"
          className="text-3xl text-gray-500 dark:text-white"
        >
          We excel in web/mobile design &amp; development.
        </Typography>

        <div className="flex justify-center py-10">
          <img
            src={s3("img_aboutus.png")}
            alt="About Us"
            width={992}
            height={100}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <Button
          size={"large"}
          href="/about"
          className="dark:bg-primary rounded-[8px] px-6 uppercase hover:shadow-lg"
        >
          Find out more
        </Button>
      </div>
    </Section>
  );
}
