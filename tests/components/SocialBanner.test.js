import {render, screen} from '@testing-library/react';
import SocialBanner from '../../src/components/SocialBanner';

describe('SocialBanner', () => {
  it('Should render without errors', () => {
    render(<SocialBanner />);
    const bannerTextElement = screen.getByText('Support Ukraine 🇺🇦');
    const bannerLinkElement = screen.getByText(
      'Help Provide Humanitarian Aid to Ukraine'
    );
    expect(bannerTextElement).toBeInTheDocument();
    expect(bannerLinkElement).toBeInTheDocument();
  });

  it('Should render with correct link href', () => {
    render(<SocialBanner />);
    const bannerLinkElement = screen.getByText(
      'Help Provide Humanitarian Aid to Ukraine'
    );
    expect(bannerLinkElement).toHaveAttribute(
      'href',
      'https://opensource.fb.com/support-ukraine'
    );
  });
});
