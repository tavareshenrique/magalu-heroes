import { describe, expect, it } from 'vitest';

import { isLastPage } from './isLastPage';

describe('isLastPage function', () => {
  it('should return true when offset + count is greater than or equal to total', () => {
    expect(isLastPage(90, 10, 100)).toBe(true);
    expect(isLastPage(95, 5, 100)).toBe(true);
    expect(isLastPage(100, 0, 100)).toBe(true);
  });

  it('should return false when offset + count is less than total', () => {
    expect(isLastPage(50, 10, 100)).toBe(false);
    expect(isLastPage(0, 10, 100)).toBe(false);
    expect(isLastPage(80, 19, 100)).toBe(false);
  });

  it('should return true when total is zero', () => {
    expect(isLastPage(0, 0, 0)).toBe(true);
  });
});
