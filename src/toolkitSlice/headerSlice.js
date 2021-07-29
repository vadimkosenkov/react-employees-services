import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    isAuthRoute: false,
  },
  reducers: {
    checkAuthRouteAction(state, action) {
      state.isAuthRoute = action.payload;
    },
    signOutAction(state) {
      state.isAuthRoute = true;
    },
  },
});

export default headerSlice.reducer;
export const { checkAuthRouteAction, signOutAction } = headerSlice.actions;
