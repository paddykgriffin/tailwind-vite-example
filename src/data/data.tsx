import { ReactElement } from "react";

type PanelBox = {
  image: string;
  title: string | ReactElement;
  linkLabel: string;
  linkHref: string;
};

export const PanelData: PanelBox[] = [
  {
    title: <>What We&lsquo;ve Done</>,
    image: "img_cta_whatwedone.jpg",
    linkLabel: "Check out our past work",
    linkHref: "#",
  },
  {
    title: " Contact Us",
    image: "img_cta_contact.jpg",
    linkLabel: "  Call Us Today for a quote",
    linkHref: "#",
  },
  {
    title: "Vacancies",
    image: "img_cta_vacancies.jpg",
    linkLabel: " See what jobs are available",
    linkHref: "#",
  },
];
