const initialState = {
  employee: {},
  isEdit: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EMPLOYEE_DATA":
      return { ...state, employee: action.payload };
    case "UPDATE_EMPLOYEE_DATA":
      return { ...state, employee: action.payload };
    case "SET_EDIT_VIEW":
      return { ...state, isEdit: action.payload };
    default:
      return state;
  }
};
