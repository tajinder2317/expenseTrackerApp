import { Text, TextInput, View, StyleSheet } from "react-native";
export default function Input({ label, textInputConfig }) {
  let inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: "#888",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#fff",
    padding: 6,
    width: "100%",
    borderRadius: 6,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  inputMultiline: {
    // minWidth: "100%",
    // height: 200,
    flex: 1,
    minHeight: 80,
    maxHeight: 200,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    textAlign: "left",
    width: 330,
    textAlignVertical: "top",
    marginBottom: 26,
    overflow: "hidden",

  },
});
