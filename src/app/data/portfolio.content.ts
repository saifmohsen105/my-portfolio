import type {
  AboutPoint,
  ApproachItem,
  CertificateItem,
  EducationItem,
  ExperienceRole,
  NavItem,
  ProjectCaseStudy,
  SiteProfile,
  TechItem,
} from '../models/portfolio.models';

export const SITE: SiteProfile = {
  name: 'Saif Mohsen Refai',
  firstName: 'Saif',
  role: 'Full-Stack Developer',
  headline: 'Angular + Node.js products that hold up in production.',
  positioning:
    'I build production e-commerce, marketplace, and SaaS surfaces with Angular, Node.js/Express, and Supabase/PostgreSQL — from SSR storefronts and vendor tools to admin APIs and bilingual corporate sites.',
  summary:
    'Full-Stack Developer with hands-on experience shipping production e-commerce, marketplace, and SaaS platforms using Angular, Node.js/Express, and Supabase/PostgreSQL/MySQL. Comfortable across frontend architecture (SSR, i18n, responsive UI), REST APIs, database work, and application security basics.',
  location: 'Cairo, Egypt',
  email: 'saifmohsen105@gmail.com',
  phone: '+20 1270720558',
  availability: 'Open to full-time roles and select freelance work',
  githubUrl: 'https://github.com/saifmohsen105',
  linkedinUrl: 'https://www.linkedin.com/in/saifmohsen105',
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/saifmohsen105',
      icon: 'github',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/saifmohsen105',
      icon: 'linkedin',
    },
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:saifmohsen105@gmail.com',
      icon: 'email',
    },
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/#about', exact: false },
  { label: 'Experience', href: '/#experience', exact: false },
  { label: 'Projects', href: '/#projects', exact: false },
  { label: 'Contact', href: '/#contact', exact: false },
];

export const TECH_STACK: TechItem[] = [
  { name: 'Angular', category: 'Frontend', icon: 'images/angular.png', featured: true },
  { name: 'TypeScript', category: 'Frontend', icon: 'images/ts.png', featured: true },
  { name: 'JavaScript', category: 'Frontend', icon: 'images/js.png', featured: true },
  { name: 'HTML5', category: 'Frontend', icon: 'images/html.png', featured: true },
  { name: 'CSS3', category: 'Frontend', icon: 'images/css.png', featured: true },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'images/tailwind.png', featured: true },
  { name: 'RxJS', category: 'Frontend', featured: true, icon: 'images/rxjs.png' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend', featured: true, icon: 'images/node.png' },
  { name: 'Express', category: 'Backend', featured: true },
  { name: 'Supabase', category: 'Backend', featured: true, icon: 'images/supabase.jpeg' },
  { name: 'Prisma', category: 'Backend' },
  { name: 'Sequelize', category: 'Backend' },
  { name: '.NET', category: 'Backend', icon: 'images/.net.png' },
  { name: 'PostgreSQL', category: 'Data', icon: 'images/postgre.png' },
  { name: 'MySQL', category: 'Data', icon: 'images/my-sql.png' },
  { name: 'SQL Server', category: 'Data', icon: 'images/sqlServer.png' },
  { name: 'Oracle SQL', category: 'Data', icon: 'images/oracle.png' },
  { name: 'Git', category: 'Tools', icon: 'images/git.png', featured: true },
  { name: 'GitHub', category: 'Tools', icon: 'images/githup.png' },
  { name: 'Postman', category: 'Tools', icon: 'images/postman.jpeg' },
  { name: 'Figma', category: 'Tools', icon: 'images/figma.png' },
];

export const EXPERIENCE: ExperienceRole[] = [
  {
    id: 'stint',
    company: 'Stint',
    role: 'Full-Stack Developer',
    employmentType: 'Hybrid',
    location: 'Cairo, Egypt',
    period: 'Sep 2025 — Present',
    summary:
      'Delivering production projects across e-commerce, marketplace, and corporate platforms — Angular SSR frontends, Express/Supabase backends, and bilingual product sites.',
    highlights: [
      'Home Expand — furniture ecommerce on Angular SSR, Express, and Supabase/PostgreSQL: admin panel, multi-variant catalog, product sets, and customizable products.',
      'E-Shary (SHARY) — multi-vendor marketplace: vendor B2B portal (auth, dashboard, inventory, orders), customer storefront customization, admin order UI, and targeted store API work.',
      'StintPort — bilingual (AR/EN) Angular 21 SSR corporate site for international trading, with compile-time i18n, lazy routes, and SEO baseline.',
      'Career In — career summit platform on Angular SSR, Express, and Sequelize/MySQL: employee registration, CV upload to S3, and post-register QR.',
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'MySQL', 'Sequelize'],
  },
  {
    id: 'exgate-co',
    company: 'EXGATE',
    role: 'Full-Stack Developer',
    employmentType: 'Remote',
    location: 'Remote',
    period: 'Jan 2026 — Jul 2026',
    summary:
      'Built bilingual corporate and consulting SaaS admin surfaces for the Saudi market — public Angular sites and admin dashboard/API work.',
    highlights: [
      'Excellence Gate — bilingual Angular 21 corporate site and multi-step idea-submission workflow with file-upload UI and Signals-based feedback; led a full UI redesign.',
      'Mustasharuna — consulting SaaS admin dashboard and REST APIs for consultant/company management, approval workflows, dispute handling, and bilingual (AR/EN) validation.',
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Supabase', 'Next.js'],
  },
  {
    id: 'webmaster',
    company: 'Web Master',
    role: 'Frontend Developer (Angular)',
    employmentType: 'Remote Internship',
    location: 'Remote',
    period: 'Apr 2025 — Sep 2025',
    summary:
      'Managed and optimized a dynamic e-commerce platform, keeping frontend and product data in sync.',
    highlights: [
      'Implemented advanced filtering and search to improve product discoverability.',
      'Maintained seamless frontend–database synchronization on a growing catalog.',
    ],
    technologies: ['Angular', 'TypeScript', 'REST APIs'],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    role: 'Full-Stack Developer',
    employmentType: 'Remote',
    location: 'Remote',
    period: 'Contract',
    summary:
      'Independent delivery of bilingual beauty ecommerce for UK/ES markets on Angular and Supabase.',
    highlights: [
      'F-misk — beauty & skincare ecommerce: rebuilt storefront presentation and catalog shape, EN/ES localization, and admin CMS work on Angular SSR + Supabase.',
    ],
    technologies: ['Angular', 'Express', 'Supabase', 'PostgreSQL', 'TypeScript'],
  },
];

/**
 * Projects grouped to match CV company order:
 * Stint → EXGATE → Freelance (+ Spartnix as additional work).
 */
export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'home-expand',
    title: 'Home Expand',
    subtitle: 'Home furniture ecommerce platform',
    description:
      'A custom furniture shop with an Angular SSR storefront, admin CMS, and Express API on Supabase — variants, product sets, COD checkout, and after-sale order tracking.',
    problem:
      'Furniture and custom goods cannot be sold as a single SKU-less product. Variants, sets, customization, and COD deposits had to stay consistent from catalog through checkout and tracking.',
    context:
      'Stint product. I own the catalog, checkout, tracking, email, and admin editor surfaces in the repo. Hosting/Vercel specifics were added by a teammate. Payment collection stays manual (COD + deposit); gateway insert is not enabled.',
    contribution:
      'Full-stack catalog, checkout validation, shipping fees, order tracking, transactional email, and admin editors.',
    role: 'Full-Stack Developer',
    company: 'Stint',
    category: 'Commerce',
    status: 'shipped',
    stack: ['Angular', 'Express', 'Supabase', 'PostgreSQL', 'Nodemailer', 'Tailwind CSS'],
    architecture: [
      'Angular SSR storefront + admin CMS with Express API mounted on the SSR server',
      'SKU-accurate variants, product sets with discounts, and customizable products',
      'Server-side cart validation (stock, SKU, set membership, discounts)',
      'Egypt governorate shipping fee table; public order numbers and QR tracking page',
      'Gmail SMTP branded customer confirmation + internal new-order email',
    ],
    challenges: [
      'Keeping cart, wishlist, checkout validation, and admin editors aligned on the same SKU/variant model.',
      'Fixing production defects such as variants not deleted on save and search against text columns after a jsonb→text migration.',
      'Shipping a reliable COD path without a live card gateway.',
    ],
    solutions: [
      'Used SKU as the cart/wishlist identity and validated totals on the server before order create.',
      'Built FormArray-based variant editors so SKU/price inputs keep focus and missing variants are deleted on save.',
      'Persisted order_number and shipping_fees, and exposed a public /order/:orderNumber page with QR.',
    ],
    features: [
      'Product variants, sets, media, and customizable product flows',
      'COD checkout with terms, shipping fees, and cart clear after success',
      'Public order tracking with QR codes',
      'Admin product editor, Chart.js dashboard, MetaService / Open Graph SEO',
    ],
    liveUrl: 'https://www.home-expand.com/',
  },
  {
    id: 'shary',
    title: 'E-Shary (SHARY)',
    subtitle: 'Multi-vendor B2B marketplace',
    description:
      'An Egyptian multi-vendor marketplace with a customer storefront, vendor hub, Angular admin console, and Node/Express API — covering catalog, cart, orders, and vendor operations.',
    problem:
      'Vendors and shoppers needed a working storefront and ops console on top of an existing backend — including product customization and B2B vendor workflows.',
    context:
      'Stint product. Primary store frontend committer with substantial admin UI and targeted API contributions. Payment gateway cores and original Bosta shipping were led by teammates.',
    contribution:
      'Vendor hub, storefront product/cart/wishlist, admin order/invoice UI, client cache, and store API extensions.',
    role: 'Full-Stack Developer — Store, Vendor & Admin',
    company: 'Stint',
    category: 'Commerce',
    status: 'shipped',
    stack: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'i18n'],
    surfaces: [
      {
        title: 'Vendor platform',
        body: 'Auth, dashboard shell, product editor, inventory, and vendor order management.',
      },
      {
        title: 'Customer storefront',
        body: 'Catalog, product details, customization, cart, wishlist, and checkout UX.',
      },
      {
        title: 'Admin & API',
        body: 'Order workflows, PDF invoices, bilingual validation, and store-service API increments.',
      },
    ],
    architecture: [
      'Angular vendor hub and vendor dashboard (auth, product editor, stock, orders)',
      'Customer storefront: product variations, customization, catalog filters, cart, wishlist',
      'Client-side caching with TTLs across store and vendor HTTP services',
      'Admin order management, refund actions, and PDF invoices (html2canvas / jsPDF)',
      'API work on main: wishlist flags, listing media, free shipping, category priority, offer-vs-stock validation, vendor FAQ endpoints',
    ],
    challenges: [
      'Keeping product customization, stock, and cart pricing consistent across shared Angular surfaces.',
      'Supporting bilingual (EN/AR) validation and vendor forms without fragmenting the shopping UX.',
      'Extending an existing API/domain model without owning the original payment or Bosta shipping cores.',
    ],
    solutions: [
      'Owned the vendor and shop UIs end to end with reactive forms, route guards, and i18n catalogs.',
      'Added a shared cache layer to cut repeat API reads on listing, FAQ, and order pages.',
      'Hardened admin and vendor forms with bilingual validators, password policy, and warehouse address checks.',
    ],
    features: [
      'Vendor registration, product editor, inventory, and order management UI',
      'Storefront product details, variations, customization, cart, and wishlist',
      'Admin pickup/delivered flows, status filters, refunds, and PDF invoices',
      'Store API extensions for wishlist, free shipping, category priority, and vendor FAQs',
    ],
    privateNote:
      'Carrier integration (NOW Shipping) and job-queue hardening exist on the team’s development line and are not claimed as production-main work here.',
  },
  {
    id: 'stintport',
    title: 'StintPort',
    subtitle: 'Corporate website — international trading',
    description:
      'A public English/Arabic website presenting StintPort’s trade and supply-chain services — Home, About, Contact, and nested Core Business industry pages.',
    problem:
      'The company needed a production-ready bilingual public site from an empty GitLab repo — not a client-only English landing page.',
    context:
      'Stint product. I built the Angular 21 SSR app on main: localization, routing, and the full page set. A teammate later added route-level MetaService, robots.txt, and production siteUrl.',
    contribution:
      'SSR foundation, compile-time EN/AR i18n, lazy routes, site shell, and Core Business industry section.',
    role: 'Full-Stack Developer',
    company: 'Stint',
    category: 'Marketing',
    status: 'shipped',
    stack: ['Angular', 'Angular SSR', '@angular/localize', 'Express', 'Tailwind CSS'],
    architecture: [
      'Standalone Angular 21 with SSR/hydration and Express server entry',
      'Compile-time i18n with locale-prefixed /en|/ar URLs and SSR-safe SwitchLanguageService',
      'Lazy Home/About/Contact routes and nested Core Business children',
      'Custom SvgLoader for SSR/static icon paths',
    ],
    challenges: [
      'Language switching must not touch window during SSR.',
      'Static hosting of localized builds needs production /index.html URL handling.',
      'Content IA had to go deeper than a single landing page across five industries.',
    ],
    solutions: [
      'Guarded language switching with isPlatformBrowser and stripped locale prefixes correctly.',
      'Appended /index.html in production for static localized hosting.',
      'Modeled industries as nested lazy routes with shared section components.',
    ],
    features: [
      'Home, About, Contact, and Core Business industry pages',
      'Responsive navbar with mobile menu and language toggle',
      'Shared CTAs, breadcrumbs, and SVG icon loading',
      'Baseline static SEO tags in index.html',
    ],
    liveUrl: 'https://www.stintport.com/ar/',
  },
  {
    id: 'career-in',
    title: 'Career In',
    subtitle: 'Career summit platform',
    description:
      'An Angular 21 SSR event site with an Express API and MySQL — landing page, language switching, and employee registration with PDF CV upload.',
    problem:
      'The event needed a public bilingual site and a registration write path that validates attendees, blocks duplicates, and stores CVs securely.',
    context:
      'Stint product. I introduced the SSR app and registration flow. A teammate later finished the ticket page, QR→employee route, Open Graph SEO, and remaining i18n keys.',
    contribution:
      'Angular SSR landing page, locale switching, and full-stack registration (validation, duplicates, S3 CV upload, QR popup).',
    role: 'Full-Stack Developer',
    company: 'Stint',
    category: 'Platform',
    status: 'shipped',
    stack: ['Angular', 'Express', 'Sequelize', 'MySQL', 'AWS S3', 'i18n'],
    architecture: [
      'Angular 21 SSR + Express API + Sequelize/MySQL',
      'Reactive registration form with Egyptian mobile and LinkedIn validation',
      'Duplicate detection on phone + university id; PDF CV ≤ 2MB to S3',
      'Compile-time Angular localize with /en /ar path switching',
    ],
    challenges: [
      'Keeping multipart upload handling clean instead of burying it inside the S3 helper.',
      'Production language URLs needed trailing-slash hardening.',
      'Post-register QR had to be usable without claiming the later check-in ticket system as mine.',
    ],
    solutions: [
      'Centralized multipart parsing in one middleware and validated files before upload.',
      'Hardened locale URLs for production static hosting.',
      'Shipped a post-register QR popup; a teammate later bound QR to the public ticket page.',
    ],
    features: [
      'Bilingual marketing landing page (countdown, partners, contact)',
      'Attendee registration with duplicate checks and S3 CV upload',
      'Language switcher and navbar/footer chrome',
      'Post-register QR popup',
    ],
    liveUrl: 'https://career-in.stinthub.com/ar/',
  },
  {
    id: 'exgate',
    title: 'Excellence Gate',
    subtitle: 'Corporate website — Saudi Arabia',
    description:
      'A bilingual Angular 21 SSR corporate website for a Saudi digital-solutions company — marketing pages plus Share Your Creativity, a 4-step idea-submission wizard.',
    problem:
      'Idea submissions needed structure without form fatigue, and the public site needed credible Arabic/English presentation including RTL.',
    context:
      'EXGATE engagement. I owned the Angular UI and redesign. A teammate added Supabase persistence (messages, ideas, file storage, RLS) after the wizard UI shipped.',
    contribution:
      'Bilingual marketing pages, 4-step reactive idea wizard, contact fields, and full UI/UX redesign.',
    role: 'Full-Stack Developer',
    company: 'EXGATE',
    category: 'Marketing',
    status: 'shipped',
    stack: ['Angular', 'Angular SSR', 'Tailwind CSS', 'Supabase', 'i18n'],
    architecture: [
      'Angular 21 SSR marketing site with compile-time i18n',
      'Share Your Creativity: parent FormGroup + step components + signals',
      'Contact form fields (service type/description) on the public site',
      'Visual system pass: Cairo/Montserrat, design tokens, responsive layouts, rebrand copy',
    ],
    challenges: [
      'Collecting complex idea data across four steps without losing validation clarity.',
      'Keeping i18n keys consistent across forms and pages.',
      'Restyling every route without breaking the existing information architecture.',
    ],
    solutions: [
      'Built a stepped reactive form with privacy modal, file-upload UI, and success/failure alerts.',
      'Fixed mismatched i18n keys and maintained locale catalogs across the site.',
      'Led a redesign pass across Home, About, Services, Contact, Portfolio, and the wizard.',
    ],
    features: [
      'Home, About, Services, Contact, Portfolio',
      '4-step idea submission wizard with privacy modal',
      'Bilingual (AR/EN) public site',
      'Responsive redesign and brand refresh',
    ],
    liveUrl: 'https://www.exgate.com.sa/ar/',
  },
  {
    id: 'mustasharuna',
    title: 'Mustasharuna',
    subtitle: 'Consulting SaaS platform',
    description:
      'A consulting marketplace with mobile/app APIs, payments/escrow, live sessions, and an Angular admin back office. My work is the admin vertical and the public marketing site.',
    problem:
      'Ops needed consultant KYC to stay consistent — documents, specialties, update requests, rates, and bilingual validation — plus a public site that matches the mobile app brand.',
    context:
      'EXGATE engagement. I became the primary post-scaffold owner of the Angular admin UI and a focused admin API contributor. The marketing site is a Next.js static export I ported from Angular.',
    contribution:
      'Angular admin ownership, consultant approval rules, rates module, dispute/analysis UI, and Next.js marketing site.',
    role: 'Full-Stack Developer — Admin & Marketing',
    company: 'EXGATE',
    category: 'Product',
    status: 'shipped',
    stack: ['Angular', 'Express', 'Prisma', 'Next.js', 'TypeScript', 'Chart.js'],
    surfaces: [
      {
        title: 'Admin dashboard',
        body: 'Consultant/company onboarding, documents, update requests, rates, disputes, and analysis charts.',
      },
      {
        title: 'Admin API',
        body: 'Approval gates, validation schemas, post-session services CRUD, and revenue/dispute reporting.',
      },
      {
        title: 'Marketing website',
        body: 'Next.js static export with AR/EN RTL, Universal Links sync, legal pages, and store CTAs.',
      },
    ],
    architecture: [
      'Angular 21 admin: consultants, companies, documents, rates, disputes, bilingual forms, in-session cache',
      'Express/Prisma admin APIs: approval requires approved specialty + document; update-request approve/reject',
      'Analysis report: daily successful-payment revenue + disputes by status with Chart.js',
      'Next.js 16 static marketing site with next-intl (AR default), env-specific AASA / Digital Asset Links sync',
    ],
    challenges: [
      'Admins could approve consultants who were not actually qualified.',
      'Update requests needed a real approve/reject workflow, not a status toggle.',
      'Static export cannot ship both environments’ Universal Links files from public/.',
    ],
    solutions: [
      'Enforced specialty + document checks in the admin controller and mirrored them in the dashboard UI.',
      'Shipped dedicated update-request routes and rejection-reason validation.',
      'Kept association files outside public/ and synced only the active env before build.',
    ],
    features: [
      'Consultant/company editors, document review, and bilingual validation',
      'Consultant rates admin module (API, seed, UI)',
      'Dispute admin context and analysis charting',
      'Bilingual Next.js marketing site with Universal Links pipeline',
    ],
    liveUrl: 'https://mustasharuna.com/ar/',
    privateNote: 'Payments, escrow, jobs, and live-session infra are teammates’ systems — not claimed here.',
  },
  {
    id: 'fmisk',
    title: 'F-misk',
    subtitle: 'Beauty & skincare ecommerce — UK / ES',
    description:
      'An Angular SSR + Supabase cosmetics shop with guest checkout — storefront presentation, catalog shape, and admin CMS history on the main line.',
    problem:
      'A large starter included customer-auth, promotions, nested categories, and mixed Arabic copy that did not match the real EN/ES guest-checkout product.',
    context:
      'Freelance engagement. Shipped main-line work covers the design system, localization direction, and marketing/catalog surfaces. A layered Express admin/API security boundary exists on the integration branch and is not claimed as production-main here.',
    contribution:
      'Storefront CSS system, EN/ES localization, About/home sections, catalog/product UI, and schema cleanup.',
    role: 'Full-Stack Developer',
    company: 'Freelance',
    category: 'Commerce',
    status: 'shipped',
    stack: ['Angular', 'Express', 'Supabase', 'PostgreSQL', 'TypeScript'],
    architecture: [
      'Global CSS design system (typography, theme buttons) replacing SCSS/Tailwind starter styling',
      'EN/ES localization direction for catalog and CMS models',
      'Guest-first cleanup: removed unused customer auth/account modules; promotions folded into product discounts',
      'Flattened category hierarchy (dropped unused parent_id); FAQ soft-delete',
    ],
    challenges: [
      'Dead modules and a schema that did not match guest checkout.',
      'Arabic fields after the product moved to Spanish/English.',
      'Keeping marketing/catalog UI coherent after a large teammate restructure.',
    ],
    solutions: [
      'Owned storefront presentation and catalog shape on the shipped main line.',
      'Aligned locales and message catalogs to EN/ES.',
      'Simplified promotions and categories to match how the shop actually sells.',
    ],
    features: [
      'About and home marketing sections',
      'Catalog and product-detail UI',
      'Wishlist and features routing',
      'Custom SVG loader and app bootstrap scrolling config',
    ],
    privateNote:
      'Express admin API, cookie auth, and July RLS hardening were developed on the integration branch and are not listed as production-main work.',
  },
  {
    id: 'spartnix',
    title: 'Spartnix',
    subtitle: 'Industrial marketing site — oil & gas spare parts',
    description:
      'A bilingual Angular SSR/prerender brochure site for an oil-and-gas spare-parts supplier — Home, About, Products, Solutions, and Contact.',
    problem:
      'Catalog, solutions process, and contact had to look credible in English and Arabic, including RTL — without a CMS or commerce backend.',
    context:
      'Additional marketing-site work outside the CV company list. I owned the public UI; a teammate added OG/Twitter tags and Arabic serve polish. Contact is mailto, not SMTP.',
    contribution:
      'Page composition, chrome, compile-time i18n, mailto contact form, and SVG/AOS motion.',
    role: 'Frontend Developer',
    company: 'Spartnix',
    category: 'Marketing',
    status: 'shipped',
    stack: ['Angular', 'Angular SSR', '@angular/localize', 'Tailwind CSS'],
    architecture: [
      'Angular SSR/prerender with compile-time EN/AR i18n',
      'Locale-prefixed language switching',
      'Static product catalog UI (cards, banners, sidebar)',
      'Validated contact form that opens a structured mailto',
    ],
    challenges: [
      'SSR-safe animation loading and SVG icon fallbacks.',
      'Keeping bilingual copy and RTL layout coherent across pages.',
      'Delivering a solutions narrative without a backend catalog.',
    ],
    solutions: [
      'Dynamically imported AOS on the client and shipped a custom SvgLoader with fallback.',
      'Grew messages.json / messages.ar.json and wired $localize across templates.',
      'Composed Solutions as static how-we-work steps and industry sections.',
    ],
    features: [
      'Home, About, Products, Solutions, Contact',
      'Responsive navbar, footer, breadcrumbs',
      'EN/AR localization',
      'Mailto contact form with validation',
    ],
    liveUrl: 'https://www.spartnix.com/en/',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'bachelor',
    degree: "Professional Bachelor's Degree in Information Technology",
    institution: '6 October Technology University',
  },
  {
    id: 'diploma',
    degree: 'Technical Diploma in Computer Programming',
    institution: 'MICA Egypt',
  },
];

export const CERTIFICATES: CertificateItem[] = [
  { id: 'angular', title: 'Frontend Angular', issuer: 'Route' },
  { id: 'dotnet', title: 'Backend .NET', issuer: 'Route' },
  { id: 'c', title: 'C Programming', issuer: 'NTI' },
  { id: 'java', title: 'Java Certification', issuer: 'Microsoft' },
  { id: 'oracle', title: 'SQL Oracle', issuer: 'Oracle Academy' },
];

export const ABOUT_POINTS: AboutPoint[] = [
  {
    title: 'Storefronts & vendor tools',
    body: 'I own Angular commerce surfaces end to end — catalog, cart, vendor dashboards, and the validation that keeps SKUs and stock honest.',
  },
  {
    title: 'Admin + API slices',
    body: 'When ops need a back office, I ship the Angular admin and the Express/Prisma or Supabase admin APIs that enforce the rules.',
  },
  {
    title: 'Bilingual SSR delivery',
    body: 'Compile-time i18n, locale URLs, and SSR-safe language switching across marketing and product sites.',
  },
];

export const APPROACH: ApproachItem[] = [
  {
    title: 'Start from the workflow',
    body: 'Before components and routes, I map who uses the product and what they need to finish — admins, vendors, shoppers, or attendees.',
  },
  {
    title: 'Keep identity consistent',
    body: 'SKU, variant, order number, or approval status — the same rule should hold in the UI, the validator, and the database write.',
  },
  {
    title: 'Own the boundary you ship',
    body: 'Frontend and API boundaries stay intentional. Privileged work belongs on the server; the SPA gets typed contracts and clear errors.',
  },
  {
    title: 'Fix what production exposes',
    body: 'Upsert-vs-delete, jsonb-vs-text, duplicate approvals, stock races — I debug the boring failures that break real operators.',
  },
];
