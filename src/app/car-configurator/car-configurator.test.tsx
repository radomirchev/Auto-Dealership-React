import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import CarConfigurator from './car-configurator';
import 'element-internals-polyfill';

test('renders CarConfigurator component', () => {
  const wrapper = render(<CarConfigurator />);
  expect(wrapper).toBeTruthy();
});