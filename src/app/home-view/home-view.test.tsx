import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import HomeView from './home-view';
import 'element-internals-polyfill';

test('renders HomeView component', () => {
  const wrapper = render(<HomeView />);
  expect(wrapper).toBeTruthy();
});