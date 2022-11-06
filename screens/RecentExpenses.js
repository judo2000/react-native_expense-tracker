import { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../utils/date';
import { fetchExpenses } from '../utils/http';

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  // const [fetchedExpenses, setFetchedExpenses] = useState([]);
  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      //setFetchedExpenses(expenses);
      expensesCtx.setExpenses(expenses);
    };
    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod='Last 7 Days'
      fallbackText='No expenses registered for the last 7 days.'
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
