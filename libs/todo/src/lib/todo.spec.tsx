import { render } from '@testing-library/react';

import Todo from './todo';

describe('Todo', () => {
  it('should render successfully', () => {
    const arr = [
      {
        id: 1,
        name: 'Asep'
      }
    ]
    const { baseElement } = render(<Todo prefix='Books' />);
    expect(baseElement).toBeTruthy();
  });
});
