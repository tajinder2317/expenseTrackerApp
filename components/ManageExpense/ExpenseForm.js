import { Alert, View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import Input from "./Input";
import Button from "../UI/Button";
import { getFormatDate } from "../../utils.js/date";
export default function ExpenseForm({
  submitButtonLabel,
  onCancel,
  onSubmit,
  defaultValues,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormatDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: false },
      };
    });
  }
  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      //show error
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
    }
    onSubmit(expenseData);
  }
  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Expense Date</Text>
        <View style={styles.ipContainer}>
        <View style={styles.row}>
          <Input
            label="Amount"
            textInputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: inputChangeHandler.bind(this, "amount"),
              value: inputs.amount.value,
            }}
          />
          <Input
            label="Date"
            textInputConfig={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              keyboardType: "number-pad",
              onChangeText: inputChangeHandler.bind(this, "date"),
              value: inputs.date.value,
            }}
          />
        </View>
        <Input
          label="Description"
          style={styles.descriptionInput}
          textInputConfig={{
            multiline: true,
            scrollEnabled: true,
            autoCorrect: false,
            onChangeText: inputChangeHandler.bind(this, "description"),
            value: inputs.description.value,
          }}
        />
        </View>
        {formIsInvalid && (
          <Text style={styles.errorText}>
            Invalid input values - Please check Your Entered data!
          </Text>
        )}
        <View style={styles.Button}>
          <View>
            <Button mode="flat" onPress={onCancel}>
              Cancel
            </Button>
          </View>
          <View>
            <Button onPress={submitHandler}>{submitButtonLabel}</Button>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    
    flex: 1,
    paddingHorizontal: 16,
    // justifyContent: "center",
    // alignItems: "center",
    marginHorizontal: 4,
    width: "100%",
  },
  label: {
    fontSize: 20,
    fontFamily: "serif",
    fontWeight: "bold",
    alignSelf: "start",
    color: "#888",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionInput: {
    width: 200, // Ensure it spans the full width of the parent container
    backgroundColor: "#fff",
    // padding: 10,
    borderRadius: 6,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlignVertical: "top",
    marginBottom: 26,
    maxHeight: 120, // Limit the maximum height of the input
    overflow: "hidden",
  },
  errorText: {
    color: "red",
    padding: 4,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 8,
    // borderWidth: 1,
  },
  container:{
    flex:1,
    // justifyContent:"center",
    alignItems:"center",
    maxHeight:"80%",
  },
  ipContainer:{
    
  },
  Button: {
    // flex: 1,
    flexDirection: "column",
    // paddingHorizontal: 16,
     alignItems: "center",
    // justifyContent: "space-between",
  },
});
