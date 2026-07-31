export const WHATSAPP_URL = 'https://wa.me/2348104087998';
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Lasco Digital Solutions, I'd like to book a free strategy call about my marketing."
);

export const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/lascodigitalsolutions' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@lascodigitalsolutions_' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/balogun-lateef' },
  { label: 'WhatsApp', href: `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}` },
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'Social', href: '#social' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const PLATFORMS = [
  { name: 'Meta Ads', short: 'Meta' },
  { name: 'TikTok Ads', short: 'TikTok' },
  { name: 'Google Ads', short: 'Google' },
  { name: 'Snapchat Ads', short: 'Snapchat' },
];

export const SERVICES = [
  {
    slug: 'meta-ads',
    title: 'Meta Ads',
    icon: 'Megaphone',
    tagline: 'Facebook & Instagram campaigns that convert clicks into customers.',
    description:
      'We engineer Meta Ads campaigns across Facebook and Instagram that target the right audiences, lower your cost per acquisition, and scale profitably. From creative testing to retargeting funnels, every dollar is tracked to revenue.',
    bullets: ['Audience research & targeting', 'Creative testing frameworks', 'Retargeting & funnels', 'ROAS optimization'],
  },
  {
    slug: 'tiktok-ads',
    title: 'TikTok Ads',
    icon: 'Music2',
    tagline: 'Short-form video ads built for the scroll and the sale.',
    description:
      'We create and run TikTok Ads that tap into trending formats and native creative to reach younger, high-intent audiences. Our team handles scripting, creative production, and performance optimization for measurable growth.',
    bullets: ['Native video creative', 'Trend-led campaigns', 'Spark Ads & UGC', 'Cost-per-view optimization'],
  },
  {
    slug: 'google-ads',
    title: 'Google Ads',
    icon: 'Search',
    tagline: 'Capture demand the moment it’s searched.',
    description:
      'We manage Search, Performance Max, and Display campaigns that put your brand in front of buyers with intent. Keyword strategy, bid management, and landing page alignment drive qualified leads at a predictable cost.',
    bullets: ['Search & PMax', 'Keyword & bid strategy', 'Landing page alignment', 'Lead quality scoring'],
  },
  {
    slug: 'snapchat-ads',
    title: 'Snapchat Ads',
    icon: 'Ghost',
    tagline: 'Reach Gen Z audiences where they engage most.',
    description:
      'We run Snapchat Ads campaigns that leverage AR lenses, story ads, and precise audience filters to connect with younger demographics. Ideal for brands targeting Gen Z and millennial buyers in high-engagement environments.',
    bullets: ['Story & AR lens ads', 'Gen Z targeting', 'Engagement optimization', 'Brand & performance lift'],
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    icon: 'Share2',
    tagline: 'Content that builds community and compounds growth.',
    description:
      'We manage your social presence end-to-end — content planning, design, copy, scheduling, and engagement — to build a consistent brand voice and a loyal audience across every platform that matters to your business.',
    bullets: ['Content calendars', 'Design & copy', 'Community engagement', 'Monthly reporting'],
  },
  {
    slug: 'marketing-audit',
    title: 'Marketing Audit',
    icon: 'ClipboardCheck',
    tagline: 'Find the leaks before you scale the spend.',
    description:
      'We review your current campaigns, analytics, funnel, and creative to identify what’s working, what’s wasting budget, and where the biggest opportunities are. You get a clear, prioritized action plan to improve performance.',
    bullets: ['Account & funnel review', 'Wasted-spend analysis', 'Channel benchmarking', 'Prioritized action plan'],
  },
  {
    slug: 'marketing-strategy',
    title: 'Marketing Strategy',
    icon: 'Compass',
    tagline: 'A growth roadmap built on data, not guesswork.',
    description:
      'We build a full-funnel marketing strategy aligned to your business goals — channels, messaging, budgets, and KPIs — so every campaign ladders up to predictable, sustainable customer acquisition.',
    bullets: ['Goal & KPI mapping', 'Channel mix planning', 'Budget allocation', '90-day roadmap'],
  },
];