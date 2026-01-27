import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useEffect, useContext, useState } from "react";
import { getDateMinusDays } from "../utils.js/date";
import { ExpensesContext } from "../store/expenses-context";
import { fetchExpenses } from "../utils.js/https";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const expenseCtx = useContext(ExpensesContext);
  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expenseCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No Expense Regitstered for the past 7 Days...."
    />
  );
}
export default RecentExpenses;
