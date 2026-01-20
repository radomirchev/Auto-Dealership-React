import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import ContactUs from './contact-us';
import 'element-internals-polyfill';

test('renders ContactUs component', () => {
  const wrapper = render(<ContactUs />);
  expect(wrapper).toBeTruthy();
});