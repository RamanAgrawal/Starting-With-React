import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm=(props)=>{

    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredAmount,setEnteredAmount]=useState('')
    const [enteredDate,setEnteredDate]=useState('')
    const TitleChangeHandler=(e)=>{
        setEnteredTitle(e.target.value);
    }
    const AmountChangeHandler=(e)=>{
        setEnteredAmount(e.target.value);
    }
    const DateChangeHandler=(e)=>{
        setEnteredDate(e.target.value);
    }
    const SubmitHandler =(e)=>{
        e.preventDefault();
        const expenseData={
            
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onNewExpense(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        // console.log(expenseData);
    }
    const showForm=(e)=>{
        e.target.previousElementSibling.style.display="block"
        e.target.style.display="none"
        console.log(e.target.previousElementSibling);
    }
    const hideForm=(e)=>{
        e.target.parentElement.parentElement.style.display="none"
        e.target.parentElement.parentElement.nextElementSibling.style.display=""
    }
return <><form action="" onSubmit={SubmitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Type</label>
            <input type="text" value={enteredTitle} onChange={TitleChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>amount</label>
            <input type="number" value={enteredAmount} onChange={AmountChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min='2020-02-16' value={enteredDate} onChange={DateChangeHandler}/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button onClick={hideForm}>Cancel</button>
        <button type='submit'>Add Expense</button>
    </div>
    

</form>
<button className='new-expense__actions' onClick={showForm}>Add Expense</button>
</>
}

export default ExpenseForm
