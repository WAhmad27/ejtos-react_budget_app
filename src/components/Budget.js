import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch,Currency } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        const newBudget = parseInt(event.target.value);
        const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);

        if (newBudget <= 20000) {
            if (newBudget >= totalExpenses) {
                dispatch({ type: 'SET_BUDGET', payload: newBudget });
            } else {
                alert('You cannot reduce the budget value lower than the spending');
                event.target.value = budget.toString(); // Reset the input value to the current budget
            }
        } else {
            alert("The value cannot exceed remaining funds £30");
            event.target.value = budget; // Reset the input value to the current budget
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency}</span>
            <input
                type="number"
                id="budget"
                name="budget"
                min="10"
                max="20000"
                step="10"
                value={budget}
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;