import { mathOperations } from '../add';

describe('Add function', function () {
  it('should add up the numbers passed in', function () {
      expect(mathOperations(1, 2)).toBe(3);
  });
});
