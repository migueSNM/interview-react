import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import MyFont from './assets/fonts/Montserrat-Regular.ttf';
import './App.css';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import TechSection from './components/TechSection/TechSection';

const GlobalStyles = createGlobalStyle`
  body{
    @font-face {
      font-family: 'Montserrat';
      src: url('${MyFont}') format('opentype');
    }
  }
  
`

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles/>
        <WelcomeSection/>
        <TechSection/>
      </>
    );
  }
}

export default App;
