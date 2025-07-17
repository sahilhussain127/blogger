const initialState = {
  global: false,
};

const loadingReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "LOADING_START":
      return { ...state, global: true };
    case "LOADING_END":
      return { ...state, global: false };
    default:
      return state;
  }
};

export default loadingReducer;
