import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Homepage from './homepage';
import 'element-internals-polyfill';

test('renders Homepage component', () => {
  const wrapper = render(<Homepage />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});