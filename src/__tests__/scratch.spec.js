import { fibonacci, fiboEvenSum } from '@/scratch.js';

describe(fibonacci, () => {
  it('should return fibonacci', () => {
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
  it('should be able to start from a defined number', () => {
    expect(fibonacci(10, 3)).toEqual([3, 5, 8, 13, 21, 34, 55, 89, 144, 233]);
  });
});

describe(fiboEvenSum, () => {
  it('should add all even nums', () => {
    expect(fiboEvenSum(10)).toBe(188);
  });
});
