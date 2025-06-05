import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Features',
      href: getPermalink('/#features'),
    },
    {
      text: 'Stakeholders',
      href: getPermalink('/#stakeholders'),
    },
    {
      text: 'Walkthrough/Demo',
      href: getPermalink('/#walkthrough'),
    },
    {
      text: 'Future',
      href: getPermalink('/#future'),
    },
    {
      text: 'FAQs',
      href: getPermalink('/#faqs'),
    },
  ]
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Contact: hello@bondtrials.com'}
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/bondtrials' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/sammymustafa/bond-prototype' },
  ]
};
