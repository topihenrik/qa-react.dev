import ButtonLink from '../../src/components/ButtonLink';
import {render, screen} from '@testing-library/react';

describe('ButtonLink', () => {
  it('Should render the component', async () => {
    render(<ButtonLink href="testref">ButtonLink render test!</ButtonLink>);
    expect(screen.getByText('ButtonLink render test!'));
  });

  it('Should apply correct CSS classes for primary type', () => {
    const {getByRole} = render(<ButtonLink href="testref" type="primary" />);
    expect(getByRole('link')).toHaveClass('bg-link');
  });

  it('Should apply correct CSS classes for secondary type', () => {
    const {getByRole} = render(<ButtonLink href="testref" type="secondary" />);
    expect(getByRole('link')).toHaveClass('text-primary');
  });
});
