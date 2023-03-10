import React from "react";
import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import './Expenses.css'
import { useState } from "react";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
    console.log(selectedYear);
  }
  return (<>

    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map((expense) => (
        <ExpenseItems 
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} 
        />
      ))
      }

    </Card>
  </>
  );
}



export default Expenses;