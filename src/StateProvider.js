import React, { createContext, useContext, useReducer } from "react";
// const { FormHelperText } = require("@material-ui/core")

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//Provide the state from provider


export const useStateValue = () => useContext(StateContext);
