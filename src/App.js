import React, {useState, useEffect} from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { retrieveUsers } from "./slices/users";
import { can } from './helper';
function App() {
  const dispatch = useDispatch();

  const users = useSelector(state => state.users);
  
  useEffect(() => {
      console.log("OK");
      dispatch(retrieveUsers());
  }, []);

  const handleclick = () => {
    console.log( can("hello"));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={handleclick}>Click Me</button>
        </p>
        {
          users && users.map((user, index) => (
            <li key={index}>{user.first_name}</li>
          ))
        }
      </header>
    </div>
  );
}

export default App;
