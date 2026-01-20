import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import NewCars from './new-cars';
import 'element-internals-polyfill';

test('renders NewCars component', () => {
  const wrapper = render(<NewCars />);
  expect(wrapper).toBeTruthy();
});