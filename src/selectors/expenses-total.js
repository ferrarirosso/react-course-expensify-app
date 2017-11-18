// Get total expenses
export default (expenses) => {
    return expenses.reduce((prevVal, expense) => prevVal + expense.amount, 0); 
};
  