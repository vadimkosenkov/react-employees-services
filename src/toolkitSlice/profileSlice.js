import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    employee: {},
    isEdit: false,
  },
  reducers: {
    getEmployeeDataAction(state, action) {
      state.employee = action.payload;
    },
    updateEmployeeAction(state, action) {
      state.employee = action.payload;
    },
    changeEditViewAction(state, action) {
      state.isEdit = action.payload;
    },
  },
});

export default profileSlice.reducer;
export const {
  getEmployeeDataAction,
  updateEmployeeAction,
  changeEditViewAction,
} = profileSlice.actions;
