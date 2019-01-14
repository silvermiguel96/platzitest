import { number }  from '../number';

describe('Number comparison', () => {
  test('Greater than', () => {
    expect(number(2,2)).toBeGreaterThan(3);
  });
  test('Greater than or equal', () => {
    expect(number(2,2)).toBeGreaterThanOrEqual(4);
  });
  test('Less than', () => {
    expect(number(2,2)).toBeLessThan(5);
  });
  test('Less than or equal', () => {
    expect(number(2,2)).toBeLessThanOrEqual(5);
  });
  test('floats number', () => {
    expect(number(0.2,0.2)).toBeCloseTo(0.4);
  });
});