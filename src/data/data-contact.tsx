type OfficeBlock = {
  title: string;
  address: string;
  phone: string;
  emails: {
    label: string;
    email: string;
  }[];
};

type JobsBlock = {
  title: string;
  emails: {
    label: string;
    email: string;
  }[];
  link: string;
};

export const OfficeData: OfficeBlock[] = [
  {
    title: "Our Office",
    address: "123 Pixel Street, Dublin, A00 34T5",
    phone: "ddddd",
    emails: [
      {
        label: "Sales",
        email: "sales@companyname.ie",
      },
      {
        label: "Support",
        email: "support@companyname.ie",
      },
    ],
  },
];

export const JobsData: JobsBlock[] = [
  {
    title: "Jobs",
    link: "dddd",
    emails: [
      {
        label: "Jobs",
        email: "jobs@companyname.ie",
      },
    ],
  },
];
