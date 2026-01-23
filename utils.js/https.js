import axios from "axios";

const BACKEND_URL =
  "https://expensetrackapp-7eb39-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json";

export function storeExpense(expenseData) {
  return axios.post(BACKEND_URL + "/expenses.json", expenseData);
}
export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
  }
}
