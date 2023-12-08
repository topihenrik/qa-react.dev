import {render, screen, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Search} from '../../src/components/Search';

jest.mock('@docsearch/react/modal', () => ({
  __esModule: true,
  namedExport: jest.fn(),
  default: jest.fn(),
}));

test('Search Component', () => {
  let originalWindowAddEventListener;

  beforeAll(() => {
    // Mocking window.addEventListener since it's used in useEffect
    originalWindowAddEventListener = window.addEventListener;
    window.addEventListener = jest.fn();
  });

  afterAll(() => {
    window.addEventListener = originalWindowAddEventListener;
  });

  it('renders Search without errors', () => {
    render(<Search isOpen={false} onOpen={() => {}} onClose={() => {}} />);
    // Add assertions based on the rendered component
  });

  it('opens and closes the search modal', () => {
    render(<Search isOpen={false} onOpen={() => {}} onClose={() => {}} />);

    // Click on a trigger to open the modal
    act(() => {
      userEvent.click(screen.getByText('Open Search'));
    });

    // Assert that the modal is open
    expect(screen.getByTestId('docsearch-modal')).toBeInTheDocument();

    // Click on the close button to close the modal
    act(() => {
      userEvent.click(screen.getByText('Close'));
    });

    // Assert that the modal is closed
    expect(screen.queryByTestId('docsearch-modal')).not.toBeInTheDocument();
  });

  // Add more tests for other functionalities as needed
  // ...
});
