/*import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch, Currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;*/
import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  const increaseAllocation = () => {
    const expense = {
      name: props.name,
      cost: 10,
    };
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  const decreaseAllocation = () => {
    const expense = {
      name: props.name,
      cost: 10,
    };
    dispatch({
      type: 'RED_EXPENSE',
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <button
          style={{
            backgroundColor: 'green',
            borderRadius: '50%',
            width: '2.5em',
            height: '2.5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={increaseAllocation}
        >
          <TiPlus size="1.5em" color="white" />
        </button>
      </td>
      <td>
        <button
          style={{
            backgroundColor: 'red',
            borderRadius: '50%',
            width: '2.5em',
            height: '2.5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={decreaseAllocation}
        >
          <TiMinus size="1.5em" color="white" />
        </button>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </td>
    </tr>
  );
};

export default ExpenseItem;
