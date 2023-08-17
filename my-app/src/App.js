import React from 'react';
import './App.css';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBook, faHome, faTimes, faFlask, faTag, faTv, faFile, faLink, faGlobe, faSlidersH, faFutbol, faCog, faUndo, faUsers, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

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
    {
      code: "54321",
      username: "User3",
      date: "2023-08-19",
      time: "10:15",
      amount: "€75",
      status: "In Progress",
    },
    //altri utenti spero facoltativi
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
          <span className="table-cell">{row.code}</span>
          <span className="table-cell">{row.username}</span>
          <span className="table-cell">{`${row.date} ${row.time}`}</span>
          <span className="table-cell">{row.amount}</span>
          <span className="table-cell">
            <div className={`status-${row.status.toLowerCase().replace(' ', '-')}`}>
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
      <div className="menu">
        <div className="menu-header">
          <img src={logo} alt="CoralMC Logo" className="logo" />
          CoralMC
        </div>
        <div className="bottom-icons">
          <FontAwesomeIcon icon={faSlidersH} className="bottom-icon" />
          <FontAwesomeIcon icon={faFutbol} className="bottom-icon" />
          <FontAwesomeIcon icon={faCog} className="bottom-icon" />
        </div>
        <button className="menu-item">
          <FontAwesomeIcon icon={faHome} />
          Control Panel
        </button>
        <button className="menu-item dropdown">
          <FontAwesomeIcon icon={faTimes} />
          Variables
        </button>
        <button className="menu-item">
          <FontAwesomeIcon icon={faFlask} />
          Settings<span className="arrow">▼</span>
        </button>
        <button className="menu-item dropdown">
          <FontAwesomeIcon icon={faTag} />
          Discounts <span className="arrow">▼</span>
        </button>
        <button className="menu-item dropdown">
          <FontAwesomeIcon icon={faTv} />
          Pages & CMS <span className="arrow">▼</span>
        </button>
        <div className="divider"></div>
        <button className="menu-item">
          <FontAwesomeIcon icon={faFile} />
          Docs
        </button>
        <button className="menu-item">
          <FontAwesomeIcon icon={faLink} />
          Dashboard
        </button>
        <button className="menu-item">
          <FontAwesomeIcon icon={faGlobe} />
          Help
        </button>
      </div>

      <div className="content">
        <div className="header">
          <FontAwesomeIcon icon={faHome} className="header-icon" />
          <span className="header-text">Control Panel</span>
          <FontAwesomeIcon icon={faArrowRight} className="header-arrow" />
          <span className="header-text">Dashboard</span>
        </div>

        <div className="rectangles">
          <div className="rectangle">
            <FontAwesomeIcon icon={faUsers} className="rectangle-icon" />
            <div className="rectangle-text">Staff Users</div>
            <div className="rectangle-number">14</div>
          </div>
          <div className="rectangle">
            <FontAwesomeIcon icon={faMoneyBill} className="rectangle-icon" />
            <div className="rectangle-text">Total in Sales</div>
            <div className="rectangle-number">200.000 Eur</div>
            <div className="rectangle-subtext">(all time)</div>
          </div>
          <div className="rectangle">
            <FontAwesomeIcon icon={faMoneyBill} className="rectangle-icon" />
            <div className="rectangle-text">Total in Sales</div>
            <div className="rectangle-number">200.000 Eur</div>
            <div className="rectangle-subtext">(Current Month)</div>
          </div>
          <div className="rectangle">
            <FontAwesomeIcon icon={faUndo} className="rectangle-icon" />
            <div className="rectangle-text">Average Payment</div>
            <div className="rectangle-number">13 EUR</div>
            <div className="rectangle-subtext">(current month)</div>
          </div>
        </div>

        <BigRectangle />
    <div className="big-rectangle-2">
    <FontAwesomeIcon icon={faUsers} className="staff-users-icon" />
    <div className="staff-users-text">Staff Users</div>
    <div className="staff-users-number">14</div>
    </div>


      </div>
    </div>
  );
}

export default App;
