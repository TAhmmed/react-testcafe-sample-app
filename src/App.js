import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './Member';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Member name={'test'}/>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
