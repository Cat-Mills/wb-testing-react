import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';

// Add React Testing Library's Jest matchers
expect.extend(matchers);

// Clean up and reset components after each test
afterEach(() => {
  cleanup()
})
