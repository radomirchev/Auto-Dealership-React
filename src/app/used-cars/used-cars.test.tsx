import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import UsedCars from './used-cars';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders UsedCars component', () => {
  const wrapper = render(<UsedCars />);
  expect(wrapper).toBeTruthy();
});