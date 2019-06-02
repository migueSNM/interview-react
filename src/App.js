import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import RegularFont from './assets/fonts/Montserrat-Regular.ttf';
import BoldFont from './assets/fonts/Montserrat-Bold.ttf';
import './App.css';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import TechSection from './components/TechSection/TechSection';
import FollowSection from './components/FollowSection/FollowSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import RequirementsSection from './components/RequirementsSection/RequirementsSection';

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
        <WelcomeSection/>
        <TechSection/>
        <FollowSection/>
        <BenefitsSection/>
        <RequirementsSection/>
      </>
    );
  }
}

export default App;
