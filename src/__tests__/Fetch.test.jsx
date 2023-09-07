import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Fetch from '../components/Fetch.jsx';

const server = setupServer(
  //API is similar to Express!
  rest.get('/test', (req,res,ctx) => {
    return res(ctx.json('test data'))
  })

  //Can list more routes here

)
const user = userEvent.setup()

beforeAll(() => { server.listen() })
afterEach(() => { server.resetHandlers() })
afterAll(() => { server.close() })

test('should render with initial text', () => { 
  render(<Fetch requestURL="/test"/>)
  expect(screen.getByText(/no data/i)).toBeInTheDocument()
})

test('should fetch data from request URL', async () => {
  render(<Fetch requestURL="/test"/>)

  await user.click(screen.getByRole('button', {name: /get data/i}))

  expect(screen.getByText(/test data/i)).toBeInTheDocument()
})






















// const server = setupServer(
//   // API is similar to Express!
//   rest.get('/test', (req, res, ctx) => {
//     return res(ctx.json('test data'));
//   }),

//   // Can list more routes here
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// test('renders with initial text', () => {
//   render(<Fetch requestURL="/test" />);
//   expect(screen.getByText(/no data/i)).toBeInTheDocument();
// });

// test('fetches data from request URL', async () => {
//   render(<Fetch requestURL="/test" />);
//   const user = userEvent.setup();

//   await user.click(screen.getByRole('button', { name: /get data/i }));
//   expect(screen.getByText(/test data/i)).toBeInTheDocument();
// });
