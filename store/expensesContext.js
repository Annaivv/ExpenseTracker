import { createContext, useReducer } from "react";

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
  {
    id: "e6",
    description: "Skirt",
    amount: 20.38,
    date: new Date("2023-11-16"),
  },
  {
    id: "e7",
    description: "Apples",
    amount: 6.99,
    date: new Date("2023-11-22"),
  },
  {
    id: "e8",
    description: "A book",
    amount: 14.0,
    date: new Date("2023-11-23"),
  },
  {
    id: "e9",
    description: "Another book",
    amount: 18.22,
    date: new Date("2023-11-23"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
}

function ExpensesConextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesConextProvider;
