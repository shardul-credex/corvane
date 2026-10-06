export const BRAND = 'Corvane'
export const DOMAIN = 'corvane.ai'

export const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Research', href: '#research' },
  { label: 'News', href: '#news' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#founder' },
  { label: 'Contact', href: '#contact' },
]

export const HERO = {
  superheader: 'INSTITUTIONAL FIXED-INCOME RESEARCH & ANALYTICS',
  headline: ['From ', 'market research', ' to ', 'security valuation.'],
  lede: `${BRAND} unifies research, screening, analysis, valuation, and reporting in a single workflow, helping fixed-income professionals move from market view to investment decision faster.`,
}

export const DEMO_STEPS = [
  {
    id: 'research',
    number: '01',
    tab: 'Research Reports',
    title: ['Your ', 'research', ', in one organized workspace'],
    copy: 'Browse and schedule macroeconomic, housing, and MBS reports in a single research workspace.',
  },
  {
    id: 'ask',
    number: '02',
    tab: 'Ask Corvane',
    title: ['Understand the market', ' and what to do next.'],
    copy: 'Move from a broad market update to specific investment ideas or investigate what is driving the market.',
  },
  {
    id: 'mbs',
    number: '03',
    tab: 'MBS Dashboard',
    title: ['Explore ', 'prepayments, pools, and flows', '.'],
    copy: 'Explore prepayments and performance at the pool and loan level, then screen pools and cohorts to understand the characteristics driving borrower behavior.',
  },
  {
    id: 'valuation',
    number: '04',
    tab: 'Valuation & Scenario Analysis',
    title: ['Value securities', ' and test your assumptions.'],
    copy: "Apply Corvane's proprietary valuation models, adjust prepayment and market assumptions, compare scenarios, and see how those changes affect price, risk, and relative value.",
  },
]

export const PRICING_PLANS = [
  {
    number: 'PLAN 01',
    name: 'Free Research',
    price: 'Free',
    priceNote: 'NO CARD REQUIRED',
    summary: '2 selected macro and rates reports in your inbox each month, with 3 research queries.',
    trial: null,
    features: [],
    cta: 'Get free research',
  },
  {
    number: 'PLAN 02',
    name: 'Macro & Rates',
    price: '$200',
    priceNote: 'PER USER / MONTH',
    summary: 'Understand market drivers, explore trade ideas, and ask your next question.',
    trial: '14-day free trial · card required',
    features: [
      { title: 'Macro, rates, and housing research' },
      { title: 'Treasury fair-value tools' },
      { title: 'Full research library' },
      { title: 'Custom and scheduled reports' },
      { title: '200 research queries per seat per month', note: 'Includes follow-up questions.' },
    ],
    cta: 'Start free trial',
  },
  {
    number: 'PLAN 03 · FULL PLATFORM',
    name: 'Agency MBS Platform',
    price: '$12,000',
    priceNote: 'PER USER / YEAR · PAID UPFRONT',
    summary: 'Research the MBS market, value pools, and compare bonds before you trade.',
    trial: '14-day evaluation · arranged after your demo',
    featured: true,
    features: [
      { title: 'Everything in Macro & Rates' },
      { title: 'Unlimited MBS, macro, and rates questions' },
      { title: 'Full MBS research platform', note: 'Collateral, prepayments, supply and demand, net flows, housing, and roll specialness.' },
      { title: 'Pool screening and bond comparison' },
      { title: 'Proprietary valuation and prepayment models', note: 'Fair value, relative value, and scenario analysis.' },
      { title: 'Hands-on setup and support' },
    ],
    cta: 'Book a demo',
    footnote: 'One-year agreement. Pricing is fixed for your contract term.',
  },
]

export const RESEARCH_POSTS = [
  {
    tag: 'INFLATION',
    title: ['July CPI: A Clean Inline Print,', 'Disinflation Trend Intact'],
    date: '2026-08-12',
    dateLabel: '12 Aug 2026',
    excerpt: 'Cooling shelter kept July CPI in line and the disinflation trend intact.',
  },
  {
    tag: 'TREASURY',
    title: ['Treasury Quarterly Refunding', 'Update — August 2026'],
    date: '2026-08-06',
    dateLabel: '06 Aug 2026',
    excerpt: 'Treasury held auction sizes steady; larger coupons may arrive in early 2027.',
  },
  {
    tag: 'FOMC',
    title: ["FOMC: Hawkish Hold, Dissents Flip", 'to the Hike Side'],
    date: '2026-07-29',
    dateLabel: '29 Jul 2026',
    excerpt: "Three hike dissents gave the Fed's rate hold a distinctly hawkish tilt.",
  },
]

export const FOUNDER = {
  name: 'Anaïs Howland, CFA',
  role: 'FOUNDER',
  bio: "Anaïs Howland, CFA, has spent the past decade in fixed income and AI. She was a quant analyst on Wells Fargo's $350B agency MBS portfolio, a PM on Google Treasury's $17B MBS/ABS book, and later an AI product lead within Google's consumer products, including Search and Gemini. She founded Corvane to create the platform she wished she had on the desk: one place to research markets, analyze and value securities, and decide which bonds to buy and sell, and why.",
  previously: [
    { label: 'WELLS FARGO', mark: 'WF' },
    { label: 'GOOGLE', mark: 'G' },
    { label: 'UC BERKELEY', mark: 'B' },
    { label: 'PARADIGM SHIFT AI', mark: 'P' },
  ],
}

export const FAQS = [
  {
    q: `What is ${BRAND}?`,
    a: `${BRAND} is a research, analytics, and valuation platform for fixed-income professionals. It brings market research, security analysis, quantitative models, and reporting into a single workflow.`,
  },
  {
    q: `Who is ${BRAND} built for?`,
    a: `${BRAND} is built for fixed-income investors, portfolio managers, analysts, researchers, and other institutional market professionals.`,
  },
  {
    q: 'What is included in the free research subscription?',
    a: 'The free subscription includes two selected macro and rates reports in your inbox each month and three follow-up chat queries per month. No card is required.',
  },
  {
    q: 'What is the difference between Macro & Rates and the Agency MBS Platform?',
    a: 'Macro & Rates covers interactive US and global macro, rates, and housing research. The Agency MBS Platform adds MBS research, screening, proprietary models, scenario analysis, and valuation.',
  },
  {
    q: 'How does the free trial work?',
    a: 'Macro & Rates includes a 14-day free trial with a card required. Your trial starts when you complete checkout. After the trial, billing is $200 per user each month, plus applicable tax. Cancel before the first charge to pay nothing. MBS evaluations are arranged after a demo and require an evaluation agreement.',
  },
  {
    q: 'What happens to my data?',
    a: `Your use of ${BRAND} is governed by the Terms of Service and Privacy Policy linked below. For questions about confidential data, retention, or an institutional data agreement, contact hello@${DOMAIN} before uploading sensitive information.`,
  },
  {
    q: `Can ${BRAND} help me create custom reports?`,
    a: `Yes. ${BRAND} supports custom report creation, scheduling, follow-up analysis, and investment-ready output.`,
  },
  {
    q: `What markets does ${BRAND} currently cover?`,
    a: `${BRAND} currently supports MBS and rates, with municipal, ABS, and corporate coverage planned next.`,
  },
  {
    q: `How does ${BRAND} use AI?`,
    a: `${BRAND} uses AI to help organize research, answer follow-up questions, generate reports, and connect analysis across the investment workflow.`,
  },
]

export const FOOTER_COLUMNS = [
  {
    label: 'PRODUCT',
    links: [
      { label: 'Platform', href: '#top' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Sign in', href: '#signin' },
      { label: 'Join', href: '#join' },
      { label: 'Early access', href: '#early-access' },
    ],
  },
  {
    label: 'COMPANY',
    links: [
      { label: 'About', href: '#founder' },
      { label: 'Research', href: '#research' },
      { label: 'News', href: '#news' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    label: 'LEGAL',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Data Processing Agreement', href: '#dpa' },
      { label: 'Third-Party Data Addendum', href: '#third-party' },
    ],
  },
]