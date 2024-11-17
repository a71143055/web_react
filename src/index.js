import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import './chp03/Book.css'
import reportWebVitals from './reportWebVitals';
import Library from './chp03/Library';
import Book from './chp03/Book';
import Clock from './chp04/Clock';
import CommentList from './chp05/CommentList';
import Notification from './chp06/Notification';
import NotificationList from './chp06/NotificationList';
import Accommodate from './chp07/Accommodate';
import Toggle from './chp08/Toggle';
import MyButton from './chp08/MyButton';
import Toggle2 from './chp08/Toggle2';
import ClickButton from './chp08/ClickButton';
import Counter from './chp08/Counter';
import InputTest from './chp08/InputTest';
import ConfirmButton from './chp08/ConfirmButton';
import ConfirmButton2 from './chp08/ConfirmButton2';
import ConfirmButton3 from './chp08/ConfirmButton3';
import AppNumberList from './chp10/AppNumberList';
import StudentAttendance from './chp10/StudentAttendance';
import AppStudentAttendance from './chp10/AppStudentAttendance';
// import AttendanceCard from './chp10/AttendanceCard';
import AttendanceCard from './chp10/avatarAttendance/AttendanceCard'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AttendanceCard />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
