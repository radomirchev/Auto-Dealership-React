import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Offers from './offers';
import 'element-internals-polyfill';

test('renders Offers component', () => {
  const wrapper = render(<Offers />);
  expect(wrapper).toBeTruthy();
});