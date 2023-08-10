import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bugsSlice } from "./bugs.reducer";
import { projectsSlice } from "./projects.reducer";
import { usersSlice } from "./users.reducer";

export const store = configureStore({
  reducer: {
    entities: combineReducers({
      bugs: bugsSlice.reducer,
      projects: projectsSlice.reducer,
    }),
    users: usersSlice.reducer,
  },
});
