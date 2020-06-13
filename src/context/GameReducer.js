export default (state, action) => {
  switch (action.type) {
    case "createNewGameScene":
      return {
        ...state,
        currentGenres: action.payload,
      };
    case "SHUFFLE_SMURFS":
      return {
        ...state,
        randomSmurfs: action.payload,
      };
    case "GET_DUPLICATED_SMURF_LIST":
      return {
        ...state,
        duplicatedSmurfs: action.payload,
      };

    case "UPDATE_FINAL_SMURFS":
      return {
        ...state,
        finalSmurfs: action.payload,
      };
    case "ADD_TO_OPEN_SMURFS":
      return {
        ...state,
        openSmurfs: [...state.openSmurfs, action.payload],
      };
    case "RESET_OPEN_SMURFS":
      return {
        ...state,
        openSmurfs: action.payload,
      };
    default:
      return state;
  }
};
