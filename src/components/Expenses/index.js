import "../ExpenseItem/ExpenseDate";
import ExpenseItem from "../ExpenseItem";
import Card from "../Card";
import ExpensesFilter from "../ExpensesFIlter";
import { useState } from "react";

const expenseArray = [];
const Expenses = (props) => {
  const expenseItems = props.items;
  const [year, setYear] = useState("2020");

  const dateChangeHandler = (yearData) => {
    console.log(yearData);
    setYear(yearData);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={year}
          onChangeDateFilter={dateChangeHandler}
        />

        {expenseItems.map((expense) => (
          <ExpenseItem 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
         />
        ))}

        <ExpenseItem
          title={expenseItems[0].title}
          amount={expenseItems[0].amount}
          date={expenseItems[0].date}
        />

      </Card>
    </div>
  );
};

export default Expenses;
