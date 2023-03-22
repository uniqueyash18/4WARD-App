import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
const LoginReducer = createSlice({
  name: "AppStatus",
  initialState: {
    Status: false,
    userDetails: {},
  },
  reducers: {
    getLoginStatus: (state, action) => {
      state.Status = action.payload;
    },
    userData: async (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { getLoginStatus, userData } = LoginReducer.actions;
export default LoginReducer.reducer;
