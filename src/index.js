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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toggle />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
