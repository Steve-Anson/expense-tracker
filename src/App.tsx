import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 10, category: "Groceries" },
    { id: 2, description: "Cheese", amount: 20, category: "Groceries" },
    { id: 3, description: "Butter", amount: 30, category: "Groceries" },
    { id: 4, description: "Electricity", amount: 40, category: "Utilities" },
  ]);

  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm></ExpenseForm>
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>

      <ExpenseList
        expenses={filteredExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      ></ExpenseList>
    </div>
  );
};

export default App;
