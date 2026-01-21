import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A Pair of Shoes",
    amount: 19.99,
    date: new Date("2026-01-15"),
  },
  {
    id: "e2",
    description: "A Pair of Trouser",
    amount: 29.99,
    date: new Date("2026-01-16"),
  },
  {
    id: "e3",
    description: "Coffee",
    amount: 2.5,
    date: new Date("2026-01-17"),
  },
  {
    id: "e4",
    description: "A Book",
    amount: 3.29,
    date: new Date("2026-01-18"),
  },
  {
    id: "e5",
    description: "A Headphone",
    amount: 5.78,
    date: new Date("2026-01-19"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}
export default ExpensesOutput;
