import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import MyAccount from './my-account';
import 'element-internals-polyfill';

test('renders MyAccount component', () => {
  const wrapper = render(<MyAccount />);
  expect(wrapper).toBeTruthy();
});