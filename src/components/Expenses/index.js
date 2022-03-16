import "../ExpenseItem/ExpenseDate";
import ExpenseItem from "../ExpenseItem";
import Card from "../Card";
import ExpensesFilter from "../ExpensesFIlter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const expenseArray = [];
const Expenses = (props) => {
  const expenseItems = props.items;
  const [year, setYear] = useState("2022");

  const dateChangeHandler = (yearData) => {
    console.log(yearData);
    setYear(yearData);
  };

  const filteredExpense = expenseItems.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={year}
          onChangeDateFilter={dateChangeHandler}
        />
        <ExpensesList items={filteredExpense} />
      </Card>
    </li>
  );
};

export default Expenses;
