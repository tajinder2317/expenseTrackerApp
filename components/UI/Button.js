import { StyleSheet, Pressable, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/style";

export default function Button({ style, children, onPress, mode }) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText,mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  button: { 
    borderRadius: 12,
    padding: 8,
    minWidth: 100,
    margin: 2,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
  flatText: {
    color: "rgba(132, 213, 250, 0.77)",
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: "rgba(249, 128, 94, 0.59)",
    borderRadius: 12,
  },
 
});
