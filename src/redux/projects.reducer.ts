import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const projectsInitialState: {
  id: number;
  name: string;
}[] = [];

export const projectsSlice = createSlice({
  name: "projects",
  initialState: projectsInitialState,
  reducers: {
    projectAdded: (state, action) => {
      state.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

export const { projectAdded } = projectsSlice.actions;
