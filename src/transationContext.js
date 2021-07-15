import React, { createContext, useReducer } from "react";
import TransationReducer from "./transationReducer";

const iniTransation = [];

export const TransationContext = createContext(iniTransation);

export const TransationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransationReducer, iniTransation);

  function addTransation(obj) {
    dispatch({
      type: "ADD",
      payload: {
        amount: obj.amount,
        des: obj.des,
        id: new Date().getTime().toString(),
      },
    });
  }

  return (
    <TransationContext.Provider value={{ transations: state, addTransation }}>
      {children}
    </TransationContext.Provider>
  );
};
