import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RegularFont from './assets/fonts/Montserrat-Regular.ttf';
import BoldFont from './assets/fonts/Montserrat-Bold.ttf';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import rootReducer from './reducers'

const GlobalStyles = createGlobalStyle`
  body{
    @font-face {
      font-family: 'Montserrat';
      src: url('${RegularFont}') format('opentype');
    }

    @font-face {
      font-family: 'Montserrat-Bold';
      src: url('${BoldFont}') format('opentype');
    }

  } 
`
const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <GlobalStyles/>
          <Route path="/" exact component={MainPage} />
          <Route path="/login/" component={LoginPage} />
        </Router>
      </Provider>
    );
  }
}

export default App;
