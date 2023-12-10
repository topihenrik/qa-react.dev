import {render} from '@testing-library/react';
import Tag from '../../src/components/Tag';
import renderer from 'react-test-renderer';

describe('Tag', () => {
  it('Should render correctly', () => {
    const tree = renderer.create(<Tag variant="foundation" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render without errors', () => {
    render(<Tag variant="foundation" />);
  });

  it('Should apply correct CSS classes for foundation variant', () => {
    const {getByText} = render(<Tag variant="foundation" />);
    expect(getByText('Foundation')).toHaveClass('bg-yellow-50');
  });

  it('Should apply correct CSS classes for intermediate variant', () => {
    const {getByText} = render(<Tag variant="intermediate" />);
    expect(getByText('Intermediate')).toHaveClass('bg-purple-40');
  });
});
