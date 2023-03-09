import './ExpenseForm.css'

const ExpenseForm=()=>{
    const editValue=(e)=>{
        console.log(e.target.value);
    }
return <form action="">
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Type</label>
            <input type="text" onChange={editValue}/>
        </div>
        <div className="new-expense__control">
            <label>amount</label>
            <input type="number" onChange={editValue}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min='2020-02-16' onChange={editValue}/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
    </div>

</form>
}

export default ExpenseForm