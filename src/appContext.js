import React, { createContext } from 'react';

const initialState = {
  user: {},
  products: [],
  isAuth: false,
};

const AppContext = createContext();

const reducer = (state, { type, data }) => {
  switch (type) {
    case 'setUser':
      localStorage.setItem('user', JSON.stringify(data));
      return {
        ...state,
        user: data,
      };
    case 'singin':
      localStorage.setItem('isAuth', 1);
      return {
        ...state,
        isAuth: true,
      };
    case 'singout':
      localStorage.setItem('isAuth', 0);
      return {
        ...state,
        isAuth: false,
      };
    case 'setProducts':
      return {
        ...state,
        products: data,
      };
    default:
      return state;
  }
};

function AppContextProvider(props) {

  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
