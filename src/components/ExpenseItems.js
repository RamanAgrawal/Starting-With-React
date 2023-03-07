
import './ExpenseItem.css'
const ExpenseItems = () => {


    const expenseDate = new Date(2023, 2, 3);
    const expenseDescription = 'pizza hut'
    const expensePrice = 600
    const LocationOfExpenditure = 'Bhilai'

    return (<div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2 className='expense-item h2'>{expenseDescription}</h2>
            <h2>{LocationOfExpenditure}</h2></div>
        <div className='expense-item__price ' >{expensePrice}</div>
    </div>
    )
}
export default ExpenseItems
