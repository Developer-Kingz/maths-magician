import calculate from './Calculate';

describe('calculate function', () => {
  it('should clear the calculator data object when buttonName is "AC"', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should update the next number when buttonName is a number', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '7');
    expect(result).toEqual({
      total: '10',
      next: '57',
      operation: '+',
    });
  });

  it('should handle the decimal point correctly when buttonName is "."', () => {
    const result1 = calculate({ total: '10', next: '5', operation: '+' }, '.');
    expect(result1).toEqual({
      total: '10',
      next: '5.',
      operation: '+',
    });

    const result2 = calculate({ total: '10', next: '5.7', operation: '+' }, '.');
    expect(result2).toEqual({
      total: '10',
      next: '5.7',
      operation: '+',
    });
  });

  it('should handle operation button when there is no total but there is a next', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '+');
    expect(result).toEqual({ total: '5', next: null, operation: '+' });
  });

  it('should handle operation button when there is a total but no next', () => {
    const result = calculate({ total: '10', next: null, operation: '-' }, '+');
    expect(result).toEqual({
      total: '10',
      next: null,
      operation: '+',
    });
  });

  it('should handle operation button when there is an existing operation', () => {
    const result = calculate({ total: '10', next: '5', operation: '-' }, '+');
    expect(result).toEqual({
      total: '5',
      next: null,
      operation: '+',
    });
  });

  it('should toggle the sign of the number when buttonName is "+/-"', () => {
    const result = calculate({ total: '10', next: '5', operation: null }, '+/-');
    expect(result).toEqual({
      total: '10',
      next: '-5',
      operation: null,
    });
  });

  it('should handle "=" button without valid next and operation', () => {
    const result = calculate({ total: '10', next: null, operation: '+' }, '=');
    expect(result).toEqual({});
  });

  it('should handle "=" button with valid next and operation', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(result).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });
});
