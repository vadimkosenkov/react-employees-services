const initialState = {
  employees: [],
  isRow: false,
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EMPLOYEES":
      return { ...state, employees: action.payload };
    case "GET_FILTER_EMPLOYEES":
      return { ...state, employees: action.payload };
    case "CHANGE_CARD_VIEW":
      return { ...state, isRow: action.payload };
    default:
      return state;
  }
};
