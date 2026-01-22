import { Pressable, StyleSheet, View, Text, Platform } from "react-native";
import { GlobalStyles } from "../../constants/style";
import { getFormatDate } from "../../utils.js/date";
import { useNavigation } from "@react-navigation/native";
export default function ExpenseItem({id, description, date, amount,  }) {
  const navigation = useNavigation();
  function expensePressHandler() {
    navigation.navigate("ManageExpense",{
      expenseId: id 
    });
  }
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.description, styles.textBase]}>
            {description}
          </Text>
          <Text style={styles.date}>{getFormatDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: Platform.OS === "ios" ? 20 : 12,
    marginVertical: 8,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: "hidden",
  },
  textBase: {
    color: GlobalStyles.colors.primary700,
    fontSize: Platform.OS === "ios" ? 14 : 16,
  },
  date: {
    fontSize: Platform.OS === "ios" ? 12 : 14,
  },
  amountContainer: {
    paddingHorizontal: 5,
    paddingVertical: Platform.OS === "ios" ? 10 : 8,
    marginLeft: 14,
    minWidth: 65,
    backgroundColor: GlobalStyles.colors.primary50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  description: {
    fontSize: Platform.OS === "ios" ? 14 : 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amount: {
    color: "black",
    fontWeight: "bold",
    fontSize: Platform.OS === "ios" ? 13 : 16,
  },
});
