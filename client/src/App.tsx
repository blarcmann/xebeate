import React from 'react';
import logo from './logo.svg';
import { useGlobalContext } from './context';

function App() {
  const { state, dispatch } = useGlobalContext();

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  // };

  // const toggleMode = () => {
  //   dispatch({
  //     type: "TOGGLE_MODE",
  //   });
  // };

  // const addItem = () => {
  //   if (value.length > 0) {
  //     dispatch({
  //       type: "ADD_TODO",
  //       payload: value,
  //     });
  //     setValue("");
  //   }
  // };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
