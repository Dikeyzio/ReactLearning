import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
    let expensesContent = 
        (props.items.map(expense =>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}/>))

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    return<ul className='expenses-list'>
        {expensesContent}
    </ul>
}

export default ExpensesList