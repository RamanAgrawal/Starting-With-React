import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm=()=>{

    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredAmount,setEnteredAmount]=useState('')
    const [enteredDate,setEnteredDate]=useState('')
    const TitleChangeHandler=(e)=>{
        setEnteredTitle(e.target.value);
        console.log(e.target.value);
    }
    const AmountChangeHandler=(e)=>{
        setEnteredAmount(e.target.value);
        console.log(e.target.value);
    }
    const DateChangeHandler=(e)=>{
        setEnteredDate(e.target.value);
        console.log(e.target.value);
    }
return <form action="">
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Type</label>
            <input type="text" onChange={TitleChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>amount</label>
            <input type="number" onChange={AmountChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min='2020-02-16' onChange={DateChangeHandler}/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
    </div>

</form>
}

export default ExpenseForm
