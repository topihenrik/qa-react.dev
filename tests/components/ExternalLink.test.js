import {ExternalLink} from '../../src/components/ExternalLink';
import {render, screen} from '@testing-library/react';

describe('ExternalLink', () => {
  it('Should render the content', () => {
    const props = {
      href: 'https://www.google.com/',
      children: 'Test link',
    };

    render(<ExternalLink {...props} />);

    expect(screen.getByText('Test link'));
  });

  it('Should set the target correctly', () => {
    const props = {
      href: 'https://www.google.com/',
      target: '_self',
      children: 'Test link',
    };

    render(<ExternalLink {...props} />);

    expect(document.querySelector('a').target).toBe('_self');
  });

  it('Should set the href correctly', () => {
    const props = {
      href: 'https://www.google.com/',
      children: 'Test link',
    };

    render(<ExternalLink {...props} />);

    expect(document.querySelector('a').href).toBe('https://www.google.com/');
  });
});
