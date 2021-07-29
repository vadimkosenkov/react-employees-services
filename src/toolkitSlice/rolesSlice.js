import { createSlice } from "@reduxjs/toolkit";

const rolesSlice = createSlice({
  name: "roles",
  initialState: {
    employees: [],
  },
  reducers: {
    getEmployeeDataAction(state, action) {
      state.employees = action.payload;
    },
    sendRoleAction(state, action) {
      const newEmployees = state.employees.map((e) =>
        e.id === action.payload.id ? { ...e, role: action.payload.role } : e
      );
      state.employees = newEmployees;
    },
    getFilterEmployeesAction(state, action) {
      state.employees = action.payload;
    },
  },
});

export default rolesSlice.reducer;
export const {
  getEmployeeDataAction,
  sendRoleAction,
  getFilterEmployeesAction,
} = rolesSlice.actions;
