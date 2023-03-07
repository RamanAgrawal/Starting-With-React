
import './ExpenseItem.css'
const ExpenseItems = (props) => {

    return (
        <>
            {
                props.expenses.map((value) => (
                    <div className="expense-item">
                        <div>{value.date.toISOString()}</div>
                        <div className="expense-item__description">
                            <h2 className='expense-item h2'>{value.title}</h2>
                        </div>
                        <div className='expense-item__price ' >{value.amount}</div>
                    </div>

                )
                )


            }
        </>
    )

}
export default ExpenseItems
