import React, { createContext, useReducer } from "react";
import AppReducer from "./GameReducer";

const initialState = {
  openSmurfs: [],
  randomSmurfs: [],
  duplicatedSmurfs: [
    { name: "caillou", close: true, complete: false },
    { name: "sirine", close: true, complete: false },
    { name: "goat", close: true, complete: false },
    { name: "gozluklu", close: true, complete: false },
    { name: "snoopy", close: true, complete: false },
    { name: "sheep", close: true, complete: false },
    { name: "mrbean", close: true, complete: false },
    { name: "masha", close: true, complete: false },
    { name: "woody", close: true, complete: false },
    { name: "cakmaktas", close: true, complete: false },
    { name: "simpson", close: true, complete: false },
    { name: "mabelpines", close: true, complete: false },
    { name: "patronbebek", close: true, complete: false },
    { name: "bebek", close: true, complete: false },
    { name: "minions", close: true, complete: false },
    { name: "caillou", close: true, complete: false },
    { name: "sirine", close: true, complete: false },
    { name: "goat", close: true, complete: false },
    { name: "gozluklu", close: true, complete: false },
    { name: "snoopy", close: true, complete: false },
    { name: "sheep", close: true, complete: false },
    { name: "mrbean", close: true, complete: false },
    { name: "masha", close: true, complete: false },
    { name: "woody", close: true, complete: false },
    { name: "cakmaktas", close: true, complete: false },
    { name: "simpson", close: true, complete: false },
    { name: "mabelpines", close: true, complete: false },
    { name: "patronbebek", close: true, complete: false },
    { name: "bebek", close: true, complete: false },
    { name: "minions", close: true, complete: false },
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
