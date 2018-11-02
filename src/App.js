import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme'
import 'typeface-roboto';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        The start of something new
      </MuiThemeProvider>
      );
  }
}

export default App;
