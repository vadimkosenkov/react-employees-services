const initialState = {
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, isAuthenticated: action.payload };
    default:
      return state;
  }
};
