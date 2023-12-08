import Breadcrumbs from '../../src/components/Breadcrumbs';
import {render} from '@testing-library/react';
it('Should render component', () => {
  const RouteItems = [
    {
      title: 'Page One',
    },
    {
      title: 'Page Two',
    },
    {
      title: 'Page Three',
    },
  ];
  render(<Breadcrumbs breadcrumbs={RouteItems} />);
});
