import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import ProductsPage from './components/ProductsPage/ProductsPage';
import { AppContextProvider } from './appContext'

class App extends Component {
  render() {
    return (
      <Router>
        <AppContextProvider>
          <Route path="/" exact component={MainPage} />
          <Route path="/login/" component={LoginPage} />
          <Route path="/products/" component={ProductsPage} />
        </AppContextProvider>
      </Router>
    );
  }
}

export default App;
