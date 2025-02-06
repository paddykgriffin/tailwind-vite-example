import React, { ReactElement } from "react";

type WhatWeDoType = {
  title: string;
  icon: string;
  items: { label: string | ReactElement }[];
};

export const WhatWeData: WhatWeDoType[] = [
  {
    title: "Design",
    icon: "/images/img_design_icon.png",
    items: [
      { label: "Website Design" },
      { label: "UX/UI Design" },
      { label: "Branding" },
      { label: "Graphic Design" },
    ],
  },
  {
    title: "consultancy",
    icon: "/images/img_consultancy_icon.png",
    items: [
      { label: <>Analytics &amp; Tracking</> },
      { label: "Mobile Design" },
      { label: "Branding" },
      { label: "Banner Campaigns" },
    ],
  },
  {
    title: "development",
    icon: "/images/img_development_icon.png",
    items: [
      { label: "eCommerce" },
      { label: "Sharepoint" },
      { label: "Branding" },
      { label: "Content Management Systems" },
      { label: "Wordpress" },
    ],
  },
];
