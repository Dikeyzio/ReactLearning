import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter
    from "../FilterExpenses/ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterExpenseDataHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })




    return (
        <Card className='expenses'>
            <ExpensesFilter
                yearToShow={filteredYear}
                onFilterExpenseData={filterExpenseDataHandler} />
            <ExpensesList items={filteredExpenses}
            />
        </Card>
    );
}

export default Expenses