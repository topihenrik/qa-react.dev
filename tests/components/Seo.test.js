import {render, screen} from '@testing-library/react';
import Seo from './Seo';
import {siteConfig} from '../siteConfig';

const defaultProps = {
  title: 'Test Title',
  titleForTitleTag: 'Test Title for Title Tag',
  description: 'Test Description',
  image: '/test-image.png',
  isHomePage: false,
  searchOrder: 123,
};

// Rendering Test
test('renders Seo without errors', () => {
  render(<Seo {...defaultProps} />);
  // Add additional assertions as needed
});

// Meta Tag Tests
test('renders correct title tag', () => {
  render(<Seo {...defaultProps} />);
  const titleTag = screen.getByTitle('Test Title for Title Tag – React');
  expect(titleTag).toBeInTheDocument();
});

test('renders correct description meta tag', () => {
  render(<Seo {...defaultProps} />);
  const descriptionMetaTag = screen.getByMetaTag({
    name: 'description',
    content: 'Test Description',
  });
  expect(descriptionMetaTag).toBeInTheDocument();
});

test('renders correct canonical link', () => {
  render(<Seo {...defaultProps} />);
  const canonicalLink = screen.getByLink({
    rel: 'canonical',
    href: `https://${siteConfig.languageCode}.react.dev/test-path`,
  });
  expect(canonicalLink).toBeInTheDocument();
});

// Add more tests for other meta tags and links as needed
// ...

// Test for Language-Specific Links
test('renders correct alternate language links', () => {
  render(<Seo {...defaultProps} />);
  const languageLinks = screen.getAllByRole('link', {
    name: /alternate language/i,
  });
  expect(languageLinks).toHaveLength(siteConfig.deployedTranslations.length);
  // Add additional assertions as needed
});

// Test for Search Order Meta Tag
test('renders correct search order meta tag', () => {
  render(<Seo {...defaultProps} />);
  const searchOrderMetaTag = screen.getByMetaTag({
    name: 'algolia-search-order',
    content: '123',
  });
  expect(searchOrderMetaTag).toBeInTheDocument();
});

// Test for Font Preload Links
test('renders correct font preload links', () => {
  render(<Seo {...defaultProps} />);
  const fontPreloadLinks = screen.getAllByRole('link', {name: /preload font/i});
  expect(fontPreloadLinks).toHaveLength(8); // Adjust based on the actual number of preload links
  // Add additional assertions as needed
});
