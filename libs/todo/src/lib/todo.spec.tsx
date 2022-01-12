import { render } from '@testing-library/react';

import Todo from './todo';

describe("Test", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn(() => {
        return {
          matches: true,
          addListener: jest.fn(),
          removeListener: jest.fn()
        };
      })
    });
  });
  it('should render successfully', () => {
    const { baseElement } = render(<Todo prefix='Books' />);
    expect(baseElement).toBeTruthy();
  });
});
