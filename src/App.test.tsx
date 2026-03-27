import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App', () => {
  it('renders the public-facing landing contract', () => {
    render(<App />);

    const comingSoonLink = screen.getByRole('link', {
      name: 'Coming Soon for iOS and Android',
    });

    expect(screen.getByRole('heading', { name: 'MarkScope' })).toBeInTheDocument();
    expect(
      screen.getByText('MarkScope is a Markdown app for iOS and Android.'),
    ).toBeVisible();
    expect(
      screen.getByText(
        'Read CommonMark, GFM, KaTeX math, and abc notation offline with no account required.',
      ),
    ).toBeVisible();

    expect(comingSoonLink).toHaveAttribute('href', '#launch-status');
    expect(document.getElementById('launch-status')).toBeInTheDocument();

    const githubLinks = screen.getAllByRole('link', { name: 'View on GitHub' });

    expect(githubLinks.length).toBeGreaterThanOrEqual(2);
    githubLinks.forEach((link) => {
      expect(link).toBeVisible();
      expect(link).toHaveAttribute('href', 'https://github.com/TensorBinge/MarkScope');
    });

    expect(comingSoonLink).toBeVisible();

    expect(screen.getByText('CommonMark + GFM')).toBeVisible();
    const iosPreview = screen.getByLabelText('iOS reader preview');

    expect(iosPreview).toBeVisible();
    expect(screen.getByText('Markdown document')).toBeVisible();
    expect(within(iosPreview).getByText('Math and abc blocks stay readable in the reader.')).toBeVisible();
    expect(screen.getByLabelText('Android actions preview')).toBeVisible();
    expect(screen.getByText('Reader tools and quick settings')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Medium font size' })).toBeVisible();
    expect(screen.getByLabelText('Back action')).toBeVisible();
    expect(screen.getByLabelText('Table of contents action')).toBeVisible();
    expect(screen.getByLabelText('Search action')).toBeVisible();
    expect(screen.getByLabelText('Actions action')).toBeVisible();
    expect(screen.getByLabelText('Star file action')).toBeVisible();
    expect(screen.getByLabelText('Copy Markdown action')).toBeVisible();
    expect(screen.getByText('Star file')).toBeVisible();
    expect(screen.getByText('Copy Markdown')).toBeVisible();
    expect(screen.getByRole('heading', { name: /planned around real mobile reading moments/i })).toBeVisible();
    expect(screen.getByRole('heading', { name: /a focused markdown app built for mobile/i })).toBeVisible();
    expect(screen.getByRole('heading', { name: /coming soon for ios and android/i })).toBeVisible();
    expect(screen.getByText('TensorBinge/MarkScope')).toBeVisible();
  });
});