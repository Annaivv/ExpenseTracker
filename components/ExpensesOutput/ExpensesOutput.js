import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-01-19"),
  },
  {
    id: "e2",
    description: "Skirt",
    amount: 20.38,
    date: new Date("2023-11-16"),
  },
  {
    id: "e3",
    description: "Apples",
    amount: 6.99,
    date: new Date("2023-11-22"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.0,
    date: new Date("2023-11-23"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.22,
    date: new Date("2023-11-23"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
