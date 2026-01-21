import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";
function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={style.container}>
      <Text>{periodName}</Text>
      <Text style={style.amount}>$ {expensesSum.toFixed(2)}</Text>
    </View>
  );
}
export default ExpensesSummary;

const style = StyleSheet.create({
  container: {
    padding: 16,
    margin: 20,
    backgroundColor: GlobalStyles.colors.accent500,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amount: {},
});
