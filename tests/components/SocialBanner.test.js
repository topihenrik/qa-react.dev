import {render, screen, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SocialBanner from '../../src/components/SocialBanner';

// Rendering Test
test('renders SocialBanner without errors', () => {
  render(<SocialBanner />);
  const bannerTextElement = screen.getByText('Support Ukraine 🇺🇦');
  const bannerLinkElement = screen.getByText(
    'Help Provide Humanitarian Aid to Ukraine'
  );
  expect(bannerTextElement).toBeInTheDocument();
  expect(bannerLinkElement).toBeInTheDocument();
});

// Link Href Test
test('renders SocialBanner with correct link href', () => {
  render(<SocialBanner />);
  const bannerLinkElement = screen.getByText(
    'Help Provide Humanitarian Aid to Ukraine'
  );
  expect(bannerLinkElement).toHaveAttribute(
    'href',
    'https://opensource.fb.com/support-ukraine'
  );
});
