import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
export default function ExpenseForm() {
  return (
    <View>
      <Input label="Amount" textInputConfig={{ keyboardType: "decimal-pad" }} />
      <Input
        label="Date"
        textInputConfig={{ placeholder: "YYYY-MM-DD", maxLength: 10 }}
      />
      <Input
        label="Description"
        textInputConfig={{ multiline: true, autoCorrect: false }}
      />
    </View>
  );
}
