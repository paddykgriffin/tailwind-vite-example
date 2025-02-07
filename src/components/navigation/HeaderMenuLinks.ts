export interface MenuItem {
  title: string;
  path: string;
  target?: string;
}

export const primaryMenuLinks: Array<MenuItem> = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About Us',
    path: '/about',
  },
  {
    title: 'Services',
    path: '/',
  },
  {
    title: 'Case Studies',
    path: '/',
  },
  {
    title: 'Contact',
    path: '/',
  },
];
