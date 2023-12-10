import PageHeading from '../../src/components/PageHeading';
import {render, screen} from '@testing-library/react';

describe('PaheHeading', () => {
  it('Should render the title', () => {
    const props = {
      title: 'Test title',
      breadcrumbs: [],
    };
    render(<PageHeading {...props} />);
    expect(screen.getByText('Test title'));
  });
  it('Should render the description', () => {
    const props = {
      title: 'Test title',
      description: 'Test description',
      breadcrumbs: [],
    };
    render(<PageHeading {...props} />);
    expect(screen.getByText('Test description'));
  });
  it('Should render the status', () => {
    const props = {
      title: 'Test title',
      status: 'Test status',
      breadcrumbs: [],
    };
    render(<PageHeading {...props} />);
    expect(screen.getByText('—Test status'));
  });
});
