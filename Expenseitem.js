import React, { useState, useEffect } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  const [selectedYear, setSelectedYear] = useState('');

  const selectYearHandler = (year) => {
    setSelectedYear(year);
  };

  const clickHandler = () => {
    console.log('Clicked!!!');
  };

  const deleteExpenseHandler = () => {
    const expenseItem = document.querySelector('.expense-item');
    expenseItem.remove();
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    if (selectedYear === '') {
      return true; // Show all expenses when no year is selected
    } else {
      return expense.date.getFullYear().toString() === selectedYear;
    }
  });

  return (
    <div className='expense-item'>
      <div className='expense-item_filter'>
        <label>Filter by year:</label>
        <select value={selectedYear} onChange={(event) => selectYearHandler(event.target.value)}>
          <option value="">All</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          {/* Add more years as needed */}
        </select>
      </div>
      {filteredExpenses.map((expense) => (
        <div key={expense.id}>
          <ExpenseDate date={expense.date} />
          <div className='expense-item_description'>
            <h2>{expense.title}</h2>
            <div className='expense-item_price'>${expense.amount}</div>
          </div>
          <button onClick={clickHandler}>Change Title</button>
          <button onClick={deleteExpenseHandler}>Delete Expense</button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseItem;