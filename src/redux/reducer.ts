import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const bugsInitialState: {
  id: number;
  description: string;
  resolved: boolean;
}[] = [];

export const bugsSlice = createSlice({
  name: "bugs",
  initialState: bugsInitialState,
  reducers: {
    bugAdded: (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (state, action) => {
      const index = state.findIndex((_) => _.id === action.payload.id);
      state[index] = { ...state[index], resolved: true };
    },
  },
});

export const { bugAdded, bugResolved } = bugsSlice.actions;
