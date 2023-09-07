import { fireEvent, render, screen } from '@testing-library/react';
import SelectColor from '../components/SelectColor.jsx';


test('changes colors', () => { 
  render(<SelectColor/>)

  //Change the value of <select/> to 'green'
  fireEvent.change(screen.getByRole('combobox', {name: /select a color/i}), {target: {value: 'green'}
  })
  // Check that the <span/> has the text 'Green'
  expect(screen.getByText(/green/i, {selector: 'span'})).toBeInTheDocument()
})








