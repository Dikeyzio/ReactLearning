import './ExpenseForm.css';
import {useState} from "react";
const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
   // const [userInput, setUserInput] = useState({
   //      enteredTitle: '',
   //      enteredAmount: '',
   //      enteredDate: '',
   //  });
   const titleChangeHandler = (event) => {
       setEnteredTitle(event.target.value);
       // setUserInput({
       //     ...userInput,
       //      enteredTitle: event.target.value
       //  })
       // setUserInput((prevState) => {
       //     return {...prevState, enteredTitle: event.target.value};
       // })
   };
   const amountChangeHandler = (event) => {
       setEnteredAmount(event.target.value);
       // setUserInput({
       //     ...userInput,
       //     enteredAmount: event.target.value
       // });
   };
   const dateChangeHandler = (event) => {
       setEnteredDate(event.target.value);
       // setUserInput({
       //     ...userInput,
       //     enteredDate: event.target.value
       // });
   };

   // const inputChangeHandle = (id, value) => {
   //     if (id === 'title') {
   //         setEnteredTitle(value);
   //     }else if(id === 'date') {
   //         setEnteredDate(value);
   //     }else {
   //         setEnteredAmount(value);
   //     }
   // }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        };
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        console.log(expenseData)
        props.onSaveExpenseData(expenseData);
    };


    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls' >
            <div className='new-expense__control'>
                <label> Title </label>
                <input
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                    type="text"/>
            </div>
            <div className='new-expense__control'>
                <label> Amount </label>
                <input
                    value={enteredAmount}
                    onChange={amountChangeHandler}
                    min="0.01"
                    step='0.01'
                    type="number"/>
            </div>
            <div className='new-expense__control'>
                <label> Date </label>
                <input
                    value={enteredDate}
                    onChange={dateChangeHandler}
                    min='2019-01-01'
                    max='2022-12-31'
                    type="date"/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit' >Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm
