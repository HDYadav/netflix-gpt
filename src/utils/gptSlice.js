import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false
  },

  reducers: {
    toggelSerarchViews: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggelSerarchViews } = gptSlice.actions;


export default gptSlice.reducer;