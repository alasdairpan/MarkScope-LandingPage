const githubUrl = 'https://github.com/TensorBinge/MarkScope';

type HeroContent = {
  productName: string;
  eyebrow: string;
  title: string;
  supportingText: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  githubUrl: string;
};

type ProofItem = {
  title: string;
  description: string;
};

type FeatureStory = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  visualKey: string;
  visualAlt: string;
  callout: string;
};

type ShowcasePanel = {
  label: string;
  title: string;
  body: string;
  snippet: string;
};

type ComparisonItem = {
  title: string;
  body: string;
};

type LinkItem = {
  label: string;
  href: string;
};

export type SiteContent = {
  hero: HeroContent;
  proofItems: ProofItem[];
  featureStories: FeatureStory[];
  showcase: {
    eyebrow: string;
    title: string;
    body: string;
    highlights: string[];
    visualKey: string;
    visualAlt: string;
    panels: ShowcasePanel[];
  };
  whyMarkScope: {
    eyebrow: string;
    title: string;
    items: ComparisonItem[];
  };
  launchStatus: {
    eyebrow: string;
    title: string;
    body: string;
    githubCtaText: string;
    githubUrl: string;
    statusPoints: string[];
  };
  footer: {
    repositoryLabel: string;
    repositoryUrl: string;
    license: string;
    platformNote: string;
    attribution: string;
    links: LinkItem[];
  };
};

export const siteContent: SiteContent = {
  hero: {
    productName: 'MarkScope',
    eyebrow: 'Coming soon for iOS and Android',
    title: 'MarkScope is a Markdown app for iOS and Android.',
    supportingText:
      'Read CommonMark, GFM, KaTeX math, and abc notation offline with no account required.',
    primaryCtaText: 'Coming Soon for iOS and Android',
    primaryCtaHref: '#launch-status',
    secondaryCtaText: 'View on GitHub',
    githubUrl,
  },
  proofItems: [
    {
      title: 'CommonMark + GFM',
      description: 'Covers the Markdown most documents already rely on.',
    },
    {
      title: 'KaTeX math',
      description: 'Keeps technical notes and equations readable on mobile.',
    },
    {
      title: 'abc notation',
      description: 'Supports music-friendly Markdown without leaving the reader.',
    },
    {
      title: 'Offline and no account required',
      description: 'Open local files and keep reading without signing in.',
    },
  ],
  featureStories: [
    {
      id: 'reading-experience',
      eyebrow: 'Reading on mobile',
      title: 'A focused reader built for long-form Markdown.',
      body: 'MarkScope keeps the reading surface clear so notes, docs, and manuals stay comfortable on phones and tablets.',
      visualKey: 'reader-view',
      visualAlt: 'Reader-focused mobile interface preview for long-form Markdown.',
      callout: 'Reader-first layout with calm typography and mobile-friendly spacing.',
    },
    {
      id: 'math-and-music',
      eyebrow: 'Math and music notation',
      title: 'Bring the rich parts of Markdown with you.',
      body: 'Technical writing and tune sheets should survive the trip to mobile, not collapse into plain text.',
      visualKey: 'math-and-abc',
      visualAlt: 'Markdown preview featuring math and abc notation on mobile.',
      callout: 'KaTeX formulas and abc notation stay readable on the device you actually carry.',
    },
    {
      id: 'local-first',
      eyebrow: 'Local-first trust',
      title: 'Your documents stay local, readable, and inspectable.',
      body: 'MarkScope is being built as an open-source Markdown app with offline behavior and no account wall.',
      visualKey: 'offline-library',
      visualAlt: 'Local library and offline reading workflow on a mobile device.',
      callout: 'No cloud requirement, no login wall, no mystery about where files go.',
    },
  ],
  showcase: {
    eyebrow: 'Device showcase',
    title: 'Planned around real mobile reading moments.',
    body: 'The landing page will showcase the core reader, math-heavy documents, and abc-rich samples in a phone context.',
    highlights: ['Reader view', 'Math-heavy sample', 'abc notation sample'],
    visualKey: 'device-showcase',
    visualAlt: 'A set of mobile views showing MarkScope reading, math, and abc notation support.',
    panels: [
      {
        label: 'Reader sample',
        title: 'Long-form Markdown stays calm on small screens.',
        body: 'A first-version showcase should prove that the reader can handle structure, spacing, and code without turning into a dense wall of text.',
        snippet: `# Field Notes\n\n- CommonMark structure\n- Tables, lists, and code\n- Comfortable reading rhythm`,
      },
      {
        label: 'Math sample',
        title: 'Equations render as content, not as broken source.',
        body: 'Technical notes need more than plain text. MarkScope keeps formulas readable with KaTeX rendering on mobile.',
        snippet: `Euler's identity: $e^{i\\pi} + 1 = 0$\n\n$$\\int_0^1 x^2\\,dx = \\frac{1}{3}$$`,
      },
      {
        label: 'abc sample',
        title: 'Tune sheets belong in the same reader as the rest of your notes.',
        body: 'abc blocks are part of the product story because they are one of the clearest ways MarkScope differs from other mobile Markdown apps.',
        snippet: '```abc\nX:1\nT:Cooley\nM:4/4\nK:Em\n|:D2|EB{c}BA B2 EB|~B2 AB dBAG|',
      },
    ],
  },
  whyMarkScope: {
    eyebrow: 'Why MarkScope',
    title: 'A focused Markdown app built for mobile.',
    items: [
      {
        title: 'Math and abc support',
        body: 'It is shaped around the parts many mobile Markdown apps skip.',
      },
      {
        title: 'Offline and local-first',
        body: 'Open files directly and keep reading without an account dependency.',
      },
      {
        title: 'Open source under MIT',
        body: 'The product and its direction stay visible in public.',
      },
    ],
  },
  launchStatus: {
    eyebrow: 'In development',
    title: 'Coming soon for iOS and Android',
    body: 'MarkScope is in development for iOS and Android. Follow progress on GitHub while the first release takes shape.',
    githubCtaText: 'View on GitHub',
    githubUrl,
    statusPoints: [
      'Mobile-first Markdown reading',
      'Open source under MIT',
      'Public development on GitHub',
    ],
  },
  footer: {
    repositoryLabel: 'TensorBinge/MarkScope',
    repositoryUrl: githubUrl,
    license: 'MIT licensed',
    platformNote: 'Planned for iOS and Android',
    attribution: 'MarkScope is an open-source project from TensorBinge.',
    links: [
      { label: 'GitHub', href: githubUrl },
      { label: 'License', href: `${githubUrl}/blob/main/LICENSE` },
    ],
  },
};