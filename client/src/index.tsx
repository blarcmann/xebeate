import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { GlobalContextProvider } from './context';
import reportWebVitals from './reportWebVitals';
import './styles/tailwind.css'
import './styles/uikit.css'
import './styles/style.css'

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Routes />
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
