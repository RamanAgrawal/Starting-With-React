import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItem.css'
const ExpenseItems = (props) => {

    return (
        <>
            {
                props.expenses.map((value) => (
                    <div className="expense-item">
                        <ExpenseDate date={value.date}/>
                        <ExpenseDetails title={value.title} amount={value.amount}/>
                    </div>

                )
                )


            }
        </>
    )

}
export default ExpenseItems
