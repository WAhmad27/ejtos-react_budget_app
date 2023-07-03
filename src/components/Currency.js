import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    });
  };

  const currencyStyle = {
    backgroundColor: 'lightgreen',
    borderRadius: '5px',
    padding: '0.5rem',
  };

  const selectStyle = {
    backgroundColor: 'lightgreen',
    color: 'white',
    borderRadius: '3px',
    padding: '0.3rem',
    border: 'none',
    width: '100%', // Adjust the width as desired
  };

//   const columnStyle = {
//     flex: '5',
//     maxWidth: '75%', // Adjust the max-width as desired
//   };

  return (  
        <div className="alert alert-secondary" style={currencyStyle}>
          <select
            name="Currency"
            id="Currency"
            onChange={(event) => changeCurrency(event.target.value)}
            style={selectStyle}
          >
            <option value="$">Currency ($ Dollar)</option>
            <option value="£">Currency (£ Pound)</option>
            <option value="€">Currency (€ Euro)</option>
            <option value="₹">Currency (₹ India)</option>
          </select>
        </div>
  );
};

export default Currency;
