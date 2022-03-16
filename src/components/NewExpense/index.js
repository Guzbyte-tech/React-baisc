import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    };
    const [isEditing, setIsEditing] = useState(false);
    const addExpenseEventHandler = () => {
        setIsEditing(true);
    }

    const cancelExpenseHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={addExpenseEventHandler}> Add new Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelExpenseHandler} />}
        </div>
    );
}

export default NewExpense;