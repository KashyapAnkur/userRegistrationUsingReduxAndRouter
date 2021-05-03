import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './May3/Assignment/Registration';
import Login from './May3/Assignment/Login';
import Logout from './May3/Assignment/Logout';
import Member from './May3/Assignment/Member';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Registration />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route exact path="/member/:username/:password/:email">
          <Member />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
