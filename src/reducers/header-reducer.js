const initialState = {
  isAuthRoute: false,
};

export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_AUTH_ROUTE":
      return { isAuthRoute: action.payload };
    default:
      return state;
  }
};
