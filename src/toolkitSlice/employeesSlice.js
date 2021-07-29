import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
    isRow: false,
  },
  reducers: {
    getEmployeesAction(state, action) {
      state.employees = action.payload;
    },
    getFilterEmployeesAction(state, action) {
      state.employees = action.payload;
    },
    changeCardViewAction(state, action) {
      state.isRow = action.payload;
    },
  },
});

export default employeesSlice.reducer;
export const {
  getEmployeesAction,
  getFilterEmployeesAction,
  changeCardViewAction,
} = employeesSlice.actions;
