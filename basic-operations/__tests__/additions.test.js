import { add } from '../math-operations';

describe('Add function', function () {
  it('should add up the numbers passed in', function () {
      expect(add(1, 2)).toBe(3);
  });
});
