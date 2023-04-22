import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 10, category: "Groceries" },
    { id: 2, description: "Cheese", amount: 20, category: "Groceries" },
    { id: 3, description: "Butter", amount: 30, category: "Groceries" },
    { id: 4, description: "Electricity", amount: 40, category: "Utilities" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      ></ExpenseList>
    </div>
  );
};

export default App;
