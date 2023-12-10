import Breadcrumbs from '../../src/components/Breadcrumbs';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Breadcrumbs', () => {
  it('Should render component', () => {
    const RouteItems = [
      {
        title: 'Page One',
        path: 'path1',
      },
      {
        title: 'Page Two',
        path: 'path2',
      },
      {
        title: 'Page Three',
        path: 'path2',
      },
    ];
    render(<Breadcrumbs breadcrumbs={RouteItems} />);

    expect(screen.getByText('Page One'));
    expect(screen.getByText('Page Two'));
    expect(screen.getByText('Page Three'));
  });

  it('Should skip breadcrumb if specified', () => {
    const RouteItems = [
      {
        title: 'Page One',
        path: 'path1',
        skipBreadcrumb: true,
      },
      {
        title: 'Page Two',
        path: 'path2',
      },
    ];
    render(<Breadcrumbs breadcrumbs={RouteItems} />);

    expect(() => screen.getByText('Page One')).toThrow();
    expect(screen.getByText('Page Two'));
  });
});
