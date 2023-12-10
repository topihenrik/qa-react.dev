import Button from '../../src/components/Button';
import {render, fireEvent, screen} from '@testing-library/react';

describe('Button', () => {
  it('Should render the component', async () => {
    render(<Button className={'btn-click'}>Click me!</Button>);
    expect(screen.getByText('Click me!'));
  });

  it('Should call onClick function', async () => {
    const mockCallback = jest.fn(() => {});

    render(
      <Button className={'btn-click'} onClick={mockCallback}>
        Click me!
      </Button>
    );

    fireEvent.click(screen.getByText('Click me!'));

    expect(mockCallback.mock.calls).toHaveLength(1);
  });
});
