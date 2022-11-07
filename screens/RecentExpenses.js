import { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import ErrorOverlay from '../components/UI/ErrorOverlay';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../utils/date';
import { fetchExpenses } from '../utils/http';

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const expensesCtx = useContext(ExpensesContext);

  // const [fetchedExpenses, setFetchedExpenses] = useState([]);
  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError('Could not fetch expenses');
      }
      //setFetchedExpenses(expenses);
      setIsFetching(false);
    };
    getExpenses();
  }, []);

  // const errorHandler = () => {
  //   setError(null);
  // };

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
