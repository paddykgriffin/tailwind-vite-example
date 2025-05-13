import { Button } from "@/components/common/Button/Button";
import HeroMini from "@/components/common/Hero/HeroMini";
import MapComponent from "@/components/common/Map";
import { Typography } from "@/components/common/Typography/Typography";
import Layout from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section/Section";
import { JobsData, OfficeData } from "@/data/data-contact";
import { cn } from "@/lib/utils";

const titleClass = cn("mb-2 font-bold uppercase text-primary dark:text-white");
const textClass = cn("text-black dark:text-white");

const Contact = () => {
  return (
    <Layout pageTitle="Latest Work">
      <HeroMini />
      <Section>
        <div className="pb-12 text-center">
          <Typography
            variant={"h1"}
            className="pb-8 text-center text-black dark:text-white"
          >
            Contact
          </Typography>
          <Typography variant={"body1"} className="text-2xl leading-8">
            Why not get in touch! You are only a few clicks away.
          </Typography>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="alert mb-9 rounded-xl bg-red-900 p-4 mr-18p">
              this form is for illustration only
            </div>
            <form action="" className="pr-18">
              <div className="pb-8">
                <label
                  htmlFor=""
                  className="text-primary dark:text-secondary block pb-2 text-xl font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 bg-gray-100 p-3 text-black"
                  placeholder="enter name"
                />
              </div>

              <div className="pb-8">
                <label
                  htmlFor=""
                  className="text-primary dark:text-secondary block pb-2 text-xl font-medium"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-200 bg-gray-100 p-3 text-black"
                  placeholder="enter email"
                />
              </div>

              <div className="pb-8">
                <label
                  htmlFor=""
                  className="text-primary dark:text-secondary block pb-2 text-xl font-medium"
                >
                  Phone number
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-200 bg-gray-100 p-3 text-black"
                  placeholder="enter number"
                />
              </div>

              <div className="pb-8">
                <label
                  htmlFor=""
                  className="text-primary dark:text-secondary block pb-2 text-xl font-medium"
                >
                  Comment/Message
                </label>
                <textarea
                  cols={10}
                  rows={10}
                  className="w-full border border-gray-200 bg-gray-100 p-3 text-black"
                />
              </div>

              <div className="pb-8">
                <Button size={"large"}>Send</Button>
              </div>
            </form>
          </div>
          <div>
            <MapComponent />

            <div className="bg-gray-100 p-4 text-center dark:bg-stone-900">
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
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
