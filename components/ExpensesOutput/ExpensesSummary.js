import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";
function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={style.container}>
      <Text style={style.period}>{periodName}</Text>
      <Text style={style.amount}>$ {expensesSum.toFixed(2)}</Text>
    </View>
  );
}
export default ExpensesSummary;

const style = StyleSheet.create({
  container: {
    padding: 20,
    margin: 18,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  period: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "serif",
    color: GlobalStyles.colors.primary500,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontSize: 16,
    fontWeight: "bold",
  },
});
