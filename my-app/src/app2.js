import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const BigRectangle = () => {
  const rows = [
    {
      code: "12345",
      username: "User1",
      date: "2023-08-17",
      time: "12:30",
      amount: "€100",
      status: "Completed",
    },
    {
      code: "67890",
      username: "User2",
      date: "2023-08-18",
      time: "11:45",
      amount: "€50",
      status: "Pending",
    },
    // Aggiungi altre righe come desideri
  ];

  return (
    <div className="big-rectangle">
      <div className="table-header-bar">
        <FontAwesomeIcon icon={faBook} className="table-header-icon" />
        <span className="table-header">CODE</span>
        <span className="table-header">USERNAME</span>
        <span className="table-header">DATE&TIME</span>
        <span className="table-header">AMOUNT</span>
        <span className="table-header">STATUS</span>
      </div>
      {rows.map((row, index) => (
        <div className="table-row" key={index}>
          <span className="table-cell">
            <FontAwesomeIcon icon={faBook} />
            {row.code}
          </span>
          <span className="table-cell">{row.username}</span>
          <span className="table-cell">{`${row.date} ${row.time}`}</span>
          <span className="table-cell">{row.amount}</span>
          <span className="table-cell">
            <div className={`status-${row.status.toLowerCase()}`}>
              {row.status}
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>My React Application</h1>
      <BigRectangle />
    </div>
  );
}

export default App;
