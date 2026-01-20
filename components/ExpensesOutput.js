import { View } from "react-native";
import ExpensesSummary from "./ExpensesOutput";
import ExpensesList from "./ExpensesList";
export default function ExpensesOutput({ expenses, expensesPeriod }) {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      discription: "A Pair of Shoes",
      amount: 19.99,
      date: new Date("2026-01-15"),
    },
    {
      id: "e2",
      discription: "A Pair of Trouser",
      amount: 29.99,
      date: new Date("2026-01-16"),
    },
    {
      id: "e3",
      discription: "Coffee",
      amount: 2.5,
      date: new Date("2026-01-17"),
    },
    {
      id: "e1",
      discription: "A Book",
      amount: 3.29,
      date: new Date("2026-01-18"),
    },
  ];

  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} PeriodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}
