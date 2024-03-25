import { createSlice } from "@reduxjs/toolkit";

// Load user data from local storage on initial load
const initialUserData = JSON.parse(localStorage.getItem("myUserData"));
const initialState = initialUserData || null;


const userSlice = createSlice({
  name: "user",
  initialState: initialState,

  reducers: {
    addUser: (state, action) => {
      const addUserData = action.payload; 
      localStorage.setItem("myUserData", JSON.stringify(addUserData));
      return addUserData;
    },
    removeUser: (state, action) => { 
      localStorage.removeItem("myUserData");
      return null;
    },
  },
});



export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
