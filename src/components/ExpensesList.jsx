import ExpenseItems from "./ExpenseItems";
import './ExpensesList.css'
const ExpensesList = props => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list_fallback">No Expenses in This Year</h2>
    }
    let expenseContent = <ul className="expenses-list">
        {
            <ul className="expenses-list">
                {
                    props.items.map((expense) => (
                        <ExpenseItems
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                }
            </ul>
        }
    </ul>
    if (props.items.length === 1) {
        return <>{expenseContent}
        <h2 className="expenses-list_fallback">Only one expense please add some more</h2>
        </>
    }

    return<>{expenseContent}</>
}

export default ExpensesList