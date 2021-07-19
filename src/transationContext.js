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

  function updateTransation(obj) {
    dispatch({
      type: "UPDATE_ITEM",
      payload: {
        amount: obj.amount,
        des: obj.des,
        id: obj.id,
      },
    });
  }
  function delTransation(obj) {
    dispatch({
      type: "DEL_ITEM",
      payload: {
        amount: obj.amount,
        des: obj.des,
        id: obj.id,
      },
    });
  }

  return (
    <TransationContext.Provider
      value={{
        transations: state,
        addTransation,
        updateTransation,
        delTransation,
      }}
    >
      {children}
    </TransationContext.Provider>
  );
};
