import { ReactElement } from "react";

type WhatWeDoType = {
  title: string;
  icon: string;
  items: { label: string | ReactElement }[];
};

export const WhatWeData: WhatWeDoType[] = [
  {
    title: "Design",
    icon: "img_design_icon.png",
    items: [
      { label: "Website Design" },
      { label: "UX/UI Design" },
      { label: "Branding" },
      { label: "Graphic Design" },
    ],
  },
  {
    title: "consultancy",
    icon: "img_consultancy_icon.png",
    items: [
      { label: <>Analytics &amp; Tracking</> },
      { label: "Mobile Design" },
      { label: "Branding" },
      { label: "Banner Campaigns" },
    ],
  },
  {
    title: "development",
    icon: "img_development_icon.png",
    items: [
      { label: "eCommerce" },
      { label: "Sharepoint" },
      { label: "Branding" },
      { label: "Content Management Systems" },
      { label: "Wordpress" },
    ],
  },
];
