
const ExpenseDetails = (props) => {

    return (<>
        <div className="expense-item__description">
            <h2 className='expense-item h2'>{props.title}</h2>
        </div>
        <div className='expense-item__price ' >{props.amount}</div>
    </>
    )
}
export default ExpenseDetails;
