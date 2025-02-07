import { Section } from "@/components/layout/Section/Section";
import { Typography } from "@/components/common/Typography/Typography";
import MapComponent from "./Map";
import {
  OfficeData,
  JobsData,
} from "@/data/data-contact";
import { cn } from "@/lib/utils";

export default function Contact() {
  const titleClass = cn(
    "mb-2 font-bold uppercase text-primary dark:text-white"
  );

  const textClass = cn("text-black dark:text-white");

  return (
    <Section className="bg-gray-100 text-center dark:bg-[#121212]" id="contact">
      <Typography
        variant="h2"
        className="inline-block border-b-2 border-b-[#DFDFDF] pb-4 uppercase tracking-wide text-[#333333] dark:text-white"
      >
        Contact US
      </Typography>

      <div className="grid gap-6 md:pt-16 md:grid-cols-2">
        <div className="col-start-1 row-start-1 flex flex-col items-center">
          <div className="py-6">
            {OfficeData.map((item, i) => (
              <div key={i} className="w-full py-6">
                <Typography variant="h3" className={titleClass}>
                  {item.title}
                </Typography>

                <Typography variant="body1" className={textClass}>
                  {item.address}
                </Typography>
                {item.emails.map((items, index) => (
                  <div key={index} className={textClass}>
                    {items.label} {items.email}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="py-6">
            {JobsData.map((item, i) => (
              <div key={i} className="w-full">
                <Typography variant="h3" className={titleClass}>
                  {item.title}
                </Typography>

                {item.emails.map((items, index) => (
                  <div key={index} className={textClass}>
                    {items.label} {items.email}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <MapComponent />
        </div>
      </div>
    </Section>
  );
}
