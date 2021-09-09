const initialState = {
  employees: [],
};

export const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EMPLOYEES_ROLES":
      return { ...state, employees: action.payload };
    case "SET_ROLE":
      const newEmployees = state.employees.map((e) =>
        e.id === action.payload.id ? { ...e, role: action.payload.role } : e
      );
      return { employees: [...newEmployees] };
    case "GET_FILTER_EMPLOYEES_ROLES":
      return { ...state, employees: action.payload };
    default:
      return state;
  }
};
