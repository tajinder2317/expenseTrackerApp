import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { getDateMinusDays } from "../utils.js/date";
import { ExpensesContext } from "../store/expenses-context";
import { fetchExpenses } from "../utils.js/https";
import { useEffect } from "react";
function RecentExpenses() {
  const expenseCtx = useContext(ExpensesContext);
  useEffect(()=>{
    fetchExpenses();
  },[])
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
