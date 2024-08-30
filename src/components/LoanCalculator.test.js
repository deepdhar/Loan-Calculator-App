import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoanCalculator from './LoanCalculator';

test('calculates monthly payment', async () => {
  render(<LoanCalculator />);

  fireEvent.change(screen.getByLabelText(/loan amount/i), { target: { value: '10000' } });
  fireEvent.change(screen.getByLabelText(/interest rate/i), { target: { value: '5' } });
  fireEvent.change(screen.getByLabelText(/loan term/i), { target: { value: '10' } });

  fireEvent.click(screen.getByText(/calculate/i));

  await waitFor(() => {
    expect(screen.getByText(/estimated monthly payment/i)).toBeInTheDocument();
  });
});
