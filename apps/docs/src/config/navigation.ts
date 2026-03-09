export type NavigationItem = {
  label: string;
  href: string;
};

export type NavigationSection = {
  title: string;
  key: string;
  items: NavigationItem[];
};

export const navigation: NavigationSection[] = [
  {
    title: 'Foundations',
    key: 'foundations',
    items: [
      { label: 'Overview', href: '/' },
      { label: 'Colors', href: '/colors' },
      { label: 'Spacing', href: '/spacing' },
      { label: 'Typography', href: '/typography' }
    ]
  },
  {
    title: 'Layout',
    key: 'layout',
    items: [
      { label: 'Breakpoints', href: '/layout/breakpoints' },
      { label: 'Containers', href: '/layout/containers' },
      { label: 'Grid', href: '/layout/grid' }
    ]
  },
  {
    title: 'Components',
    key: 'components',
    items: [
      { label: 'Buttons', href: '/components/buttons' },
      { label: 'Inputs', href: '/components/inputs' },
      { label: 'Cards', href: '/components/cards' }
    ]
  }
];