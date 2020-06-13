import React, { createContext, useReducer } from "react";
import AppReducer from "./GameReducer";

const initialState = {
  openSmurfs: [],
  randomSmurfs: [],
  duplicatedSmurfs: [
    { name: "sirinbaba", close: true, complete: false },
    { name: "sirine", close: true, complete: false },
    { name: "guclu", close: true, complete: false },
    { name: "gozluklu", close: true, complete: false },
    { name: "sakaci", close: true, complete: false },
    { name: "somurtkan", close: true, complete: false },
    { name: "hayalci", close: true, complete: false },
    { name: "sakar", close: true, complete: false },
    { name: "obur", close: true, complete: false },
    { name: "asci", close: true, complete: false },
    { name: "suslu", close: true, complete: false },
    { name: "usta", close: true, complete: false },
    { name: "muzisyen", close: true, complete: false },
    { name: "bebek", close: true, complete: false },
    { name: "ciftci", close: true, complete: false },
    { name: "sirinbaba", close: true, complete: false },
    { name: "sirine", close: true, complete: false },
    { name: "guclu", close: true, complete: false },
    { name: "gozluklu", close: true, complete: false },
    { name: "sakaci", close: true, complete: false },
    { name: "somurtkan", close: true, complete: false },
    { name: "hayalci", close: true, complete: false },
    { name: "sakar", close: true, complete: false },
    { name: "obur", close: true, complete: false },
    { name: "asci", close: true, complete: false },
    { name: "suslu", close: true, complete: false },
    { name: "usta", close: true, complete: false },
    { name: "muzisyen", close: true, complete: false },
    { name: "bebek", close: true, complete: false },
    { name: "ciftci", close: true, complete: false },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function createNewGameScene(id) {
    dispatch({
      type: "CREATE_NEW_GAME_SCENE",
      payload: id,
    });
  }

  const getShuffledSmurfs = (duplicatedarray) => {
    let currentIndex = duplicatedarray.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = duplicatedarray[currentIndex];
      duplicatedarray[currentIndex] = duplicatedarray[randomIndex];
      duplicatedarray[randomIndex] = temporaryValue;
    }
    dispatch({ type: "SHUFFLE_SMURFS", payload: duplicatedarray });
  };

  function updateRandomSmurfs(finalarray) {
    console.log("updateRandomSmurfs", finalarray);
    dispatch({
      type: "SHUFFLE_SMURFS",
      payload: finalarray,
    });
  }

  function addToOpenSmurfs(smurftoadd) {
    dispatch({
      type: "ADD_TO_OPEN_SMURFS",
      payload: smurftoadd,
    });
  }

  function resetOpenSmurfs() {
    console.log("addToOpenSmurfs");
    dispatch({
      type: "RESET_OPEN_SMURFS",
      payload: [],
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        smurfs: state.smurfs,
        duplicatedSmurfs: state.duplicatedSmurfs,
        randomSmurfs: state.randomSmurfs,
        finalSmurfs: state.finalSmurfs,
        openSmurfs: state.openSmurfs,
        createNewGameScene,
        getShuffledSmurfs,
        updateRandomSmurfs,
        addToOpenSmurfs,
        resetOpenSmurfs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
