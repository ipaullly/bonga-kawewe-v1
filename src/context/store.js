import React from "react";
import { reducer, initialState } from './reducer'

export const Context = React.createContext();
export const Store = props => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);
  
  return (
    <Context.Provider value={{ globalState, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};