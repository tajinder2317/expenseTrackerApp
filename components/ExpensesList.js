import { FlatList } from "react-native";

function renderExpenseItem(itemData){
    return <Text>{itemData.item}</Text>
}

export default function ExpensesList({ expenses }) {
  return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={}/>;
}
