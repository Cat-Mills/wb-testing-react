import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter.jsx';


const user = userEvent.setup();

test('renders initial text', () => {
  render(<Counter />);
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
});

test('increments the count', async () => {
  render(<Counter />);

  await user.click(screen.getByRole('button', {name: /increment/i }))

  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});
