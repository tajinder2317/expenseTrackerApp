import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import Input from "./Input";
export default function ExpenseForm() {
  const [InputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Expense Date</Text>
      <View style={styles.row}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: InputValues.amount,
          }}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            keyboardType: "number-pad",
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: InputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: InputValues.description,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    height: "52%",
    justifyContent: "center",
    alignItems: "center",
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
