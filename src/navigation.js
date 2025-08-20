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
      text: 'Workflow',
      href: getPermalink('/#workflow'),
    },
    {
      text: 'Demo',
      href: getPermalink('/#demo'),
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
    { text: 'Contact: hello@bondtrials.com'}
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/bondtrials' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/sammymustafa/bond-prototype' },
  ]
};
