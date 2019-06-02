import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import RegularFont from './assets/fonts/Montserrat-Regular.ttf';
import BoldFont from './assets/fonts/Montserrat-Bold.ttf';
import './App.css';
import MainPage from './components/MainPage/MainPage';

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

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles/>
        <MainPage/>
      </>
    );
  }
}

export default App;
