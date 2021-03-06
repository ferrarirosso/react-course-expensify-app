import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test('should correctly add up one expenses', () => {
    const result = selectExpensesTotal([expenses[1]]);
    expect(result).toBe(109500);
});
  
test('should correctly add multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114323);
});
  