/**
 * Site navigation. Shared by Navigation.tsx, Footer.tsx and the hub pages so
 * that adding a page in one place updates every menu.
 */

export interface NavItem {
  name: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  title?: string;
  items: NavItem[];
}

export interface NavMenu {
  label: string;
  href?: string;
  groups: NavGroup[];
}

export const productLinks: NavItem[] = [
  { name: "Identify", href: "/identify", description: "LLM-based EHR screening" },
  { name: "Engage", href: "/engage", description: "Meta and Google ads, voice and SMS outreach" },
  { name: "Consent", href: "/consent", description: "AI-powered informed consent support" },
  { name: "Implementation", href: "/implementation", description: "The 4 to 6 weeks, week by week" },
  { name: "Integrations", href: "/integrations", description: "EHRs, CTMS and eRegulatory" },
  { name: "Pricing", href: "/pricing", description: "No integration fee, plus a per-randomized-patient fee" },
  { name: "Security", href: "/security", description: "HIPAA and SOC 2 Type I compliant" },
];

export const audienceLinks: NavItem[] = [
  { name: "Research sites", href: "/for/research-sites" },
  { name: "Site networks", href: "/for/site-networks" },
  { name: "Physician groups", href: "/for/physician-groups" },
  { name: "FQHCs and community sites", href: "/for/fqhcs-and-community-sites" },
  { name: "CROs", href: "/for/cros" },
  { name: "Sponsors", href: "/for/sponsors" },
];

export const therapeuticLinks: NavItem[] = [
  { name: "Oncology", href: "/oncology" },
  { name: "Obesity and metabolic", href: "/obesity-and-metabolic" },
  { name: "Cardiology", href: "/cardiology" },
  { name: "Neurology and Alzheimer's", href: "/neurology-and-alzheimers" },
  { name: "Dermatology", href: "/dermatology" },
  { name: "Pain", href: "/pain" },
  { name: "Gastroenterology", href: "/gastroenterology" },
  { name: "Psychiatry", href: "/psychiatry" },
];

export const geographyLinks: NavItem[] = [
  { name: "Texas", href: "/clinical-trial-recruitment/texas" },
  { name: "Florida", href: "/clinical-trial-recruitment/florida" },
  { name: "Arizona", href: "/clinical-trial-recruitment/arizona" },
  { name: "Nevada", href: "/clinical-trial-recruitment/nevada" },
  { name: "Utah", href: "/clinical-trial-recruitment/utah" },
  { name: "Southeast", href: "/clinical-trial-recruitment/southeast" },
  { name: "Midwest", href: "/clinical-trial-recruitment/midwest" },
];

export const integrationLinks: NavItem[] = [
  { name: "Epic", href: "/integrations/epic" },
  { name: "Oracle Health (Cerner)", href: "/integrations/oracle-cerner" },
  { name: "MEDITECH", href: "/integrations/meditech" },
  { name: "athenahealth", href: "/integrations/athenahealth" },
  { name: "eClinicalWorks", href: "/integrations/eclinicalworks" },
  { name: "CRIO", href: "/integrations/crio" },
  { name: "RealTime", href: "/integrations/realtime" },
  { name: "Advarra Clinical Conductor", href: "/integrations/advarra-clinical-conductor" },
  { name: "Veeva SiteVault", href: "/integrations/veeva-sitevault" },
];

export const compareLinks: NavItem[] = [
  { name: "Bond vs Trially", href: "/compare/bond-vs-trially" },
  { name: "Bond vs Tempus (Deep 6)", href: "/compare/bond-vs-tempus-deep-6" },
  { name: "Bond vs Alleviate Health", href: "/compare/bond-vs-alleviate-health" },
  { name: "Bond vs Hippocratic AI and Grove", href: "/compare/bond-vs-hippocratic-ai-and-grove" },
  { name: "Bond vs Inato", href: "/compare/bond-vs-inato" },
  { name: "Bond vs media recruitment", href: "/compare/bond-vs-media-recruitment" },
  { name: "Bond vs manual chart review", href: "/compare/bond-vs-manual-chart-review" },
  { name: "All recruitment software, one table", href: "/compare/clinical-trial-recruitment-software" },
];

export const resourceLinks: NavItem[] = [
  { name: "Guides", href: "/guides", description: "Screen failure, EHR recruitment, IRB rules" },
  { name: "Templates", href: "/templates", description: "Scripts, checklists and questionnaires" },
  { name: "Glossary", href: "/glossary", description: "30 recruitment terms, defined" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "State of Trial Enrollment report", href: "/report" },
  { name: "Newsletter", href: "/newsletter" },
];

export const navMenus: NavMenu[] = [
  { label: "Product", groups: [{ items: productLinks }] },
  {
    label: "Solutions",
    groups: [
      { title: "By audience", items: audienceLinks },
      { title: "By therapeutic area", items: therapeuticLinks },
      {
        title: "By location",
        items: [{ name: "All locations", href: "/clinical-trial-recruitment" }, ...geographyLinks],
      },
    ],
  },
  { label: "Compare", href: "/compare", groups: [{ items: compareLinks }] },
  { label: "Resources", groups: [{ items: resourceLinks }] },
];

export const demoHref = "/book-a-demo";
export const calComHref = "https://cal.com/rishabhgoel/bond-health-demo?overlayCalendar=true";
export const trustCenterHref = "https://app.vanta.com/bondtrials.com/trust/xlbm8nojavvhspm2l3q3pj";
