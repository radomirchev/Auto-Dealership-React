import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Register from './register';
import 'element-internals-polyfill';

test('renders Register component', () => {
  const wrapper = render(<Register />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});