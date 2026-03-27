import { describe, expect, it } from 'vitest';

import { siteContent } from './siteContent';

describe('siteContent', () => {
  it('captures the approved landing-page content contract', () => {
    expect(siteContent.hero.title).toMatch(/MarkScope/i);
    expect(siteContent.hero.title).toMatch(/Markdown app/i);
    expect(siteContent.hero.title).toMatch(/iOS/i);
    expect(siteContent.hero.title).toMatch(/Android/i);

    expect(siteContent.hero.primaryCtaText).toBe('Coming Soon for iOS and Android');
    expect(siteContent.hero.githubUrl).toBe('https://github.com/TensorBinge/MarkScope');

    expect(siteContent.proofItems).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: 'CommonMark + GFM' }),
        expect.objectContaining({ title: 'KaTeX math' }),
        expect.objectContaining({ title: 'abc notation' }),
        expect.objectContaining({ title: 'Offline and no account required' }),
      ]),
    );

    expect(siteContent.featureStories).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          visualKey: expect.any(String),
          visualAlt: expect.any(String),
        }),
      ]),
    );

    expect(siteContent.showcase).toEqual(
      expect.objectContaining({
        visualKey: expect.any(String),
        visualAlt: expect.any(String),
      }),
    );

    const launchStatusCopy = [
      siteContent.launchStatus.eyebrow,
      siteContent.launchStatus.title,
      siteContent.launchStatus.body,
    ]
      .filter(Boolean)
      .join(' ');

    expect(launchStatusCopy).toMatch(/in development|coming soon/i);
  });
});