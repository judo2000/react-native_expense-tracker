import axios from 'axios';

export const storeExpense = (expenseData) => {
  axios.post(
    'https://rn-expense-tracker-baf33-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
};
