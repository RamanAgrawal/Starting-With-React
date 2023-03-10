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
  const filteredExpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear
  }) 

  return (<>

    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.length===0 && <p>No expense in this year</p>}
      {filteredExpenses.length>0 && filteredExpenses.map((expense) => (
        <ExpenseItems 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} 
        />
      ))}
      

    </Card>
  </>
  );
}



export default Expenses;
