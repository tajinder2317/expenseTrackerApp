import { FlatList, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";
import ExpenseItem from "./ExpenseItem";
function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
      style={styles.expenses}
    />
  );
}
const styles = StyleSheet.create({
  expenses: {
    padding: 15,
    margin: 5,
    borderRadius: 15,
    backgroundColor: GlobalStyles.colors.primary50,
  },
});
