import { type SiteConfig } from './types/site-config-types';

const siteConfig: SiteConfig = {
  siteName: 'Site Boilerplate',
  darkMode: true,
  // theme: {
  //   color: {
  //     primary: {
  //       light: '#ff0000',
  //       dark: '#3446eb',
  //     },
  //   },
  // },
  layout: {
    container: 'xl',
    header: {
      transparent: true,
      hideOnScroll: true,
      mainNav: true,
  },
  }
};

export default siteConfig;
