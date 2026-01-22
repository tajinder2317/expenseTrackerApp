import { createContext, useReducer } from "react";

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
  {
    id: "e6",
    description: "A Watch",
    amount: 15.99,
    date: new Date("2026-01-20"),
  },
  {
    id: "e7",
    description: "Lower",
    amount: 12.99,
    date: new Date("2025-12-21"),
  },
  {
    id: "e8",
    description: "Sunglasses",
    amount: 2.99,
    date: new Date("2025-12-22"),
  },
  {
    id: "e9",
    description: "Backpack",
    amount: 8.99,
    date: new Date("2025-12-23"),
  },
  {
    id: "e10",
    description: "Shoes",
    amount: 19.99,
    date: new Date("2025-12-24"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});
function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
        return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      ); 
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}
function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
 
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
export default ExpensesContextProvider;
