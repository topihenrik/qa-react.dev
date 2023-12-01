import ButtonLink from '../../src/components/ButtonLink';
import {render, screen} from '@testing-library/react';

it('should render the component', async () => {
  render(<ButtonLink href="testref">ButtonLink render test!</ButtonLink>);
  expect(screen.getByText('ButtonLink render test!'));
});

it('applies correct CSS classes for primary type', () => {
  const {getByRole} = render(<ButtonLink href="testref" type="primary" />);
  expect(getByRole('link')).toHaveClass('bg-link');
});

it('applies correct CSS classes for secondary type', () => {
  const {getByRole} = render(<ButtonLink href="testref" type="secondary" />);
  expect(getByRole('link')).toHaveClass('text-primary');
});
