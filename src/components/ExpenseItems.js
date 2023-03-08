import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItem.css'
const ExpenseItems = (props) => {
   const removeItem=(e)=>{
             
             const parent=e.target.parentElement.parentElement;
             parent.removeChild(e.target.parentElement)
    }
    return (
        <>
            {
                props.expenses.map((value) => (
                    <div className="expense-item">
                        <ExpenseDate date={value.date}/>
                        <ExpenseDetails title={value.title} amount={value.amount}/>
                        <button onClick={removeItem}>delete</button>
                    </div>

                )
                )


            }
        </>
    )

}
export default ExpenseItems
