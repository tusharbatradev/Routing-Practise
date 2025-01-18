// features/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setBlockUsers: (state, action) => {
      state.push(action.payload)
    },
  },
});

export const { setBlockUsers } = userSlice.actions;

export default userSlice.reducer;
