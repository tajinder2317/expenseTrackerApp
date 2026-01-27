import { useState, useLayoutEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense, updateExpense, deleteExpense } from "../utils.js/https";
import LoadingOverlay from "../components/UI/LoadingOverlay";
export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const expensesCtx = useContext(ExpensesContext);
  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    await deleteExpense(editedExpenseId);
    // setIsSubmitting(false )
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  async function confirmHandler(expenseData) {
    setIsSubmitting(true);
    if (isEditing) {
      await updateExpense(editedExpenseId, expenseData);
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      expensesCtx.addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  }
  if (isSubmitting) {
    return <LoadingOverlay />;
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedExpense}
      />

      <View style={styles.deleteContainer}>
        {isEditing && (
          <IconButton
            icon="trash"
            size={34}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    // alignContent:'space-evenly',
    // justifyContent: "center",
    width: "100%",
    height: "100%",
    // alignSelf: "center",
  },

  Button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deleteContainer: {
    flex: 1,
    marginTop: 200,
    paddingTop: 8,
    borderTopWidth: 2,
    minWidth: "80%",
    height: "15%",
    alignSelf: "center",
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
