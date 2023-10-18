import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bugsSlice } from "./bugs.reducer";
import { projectsSlice } from "./projects.reducer";
import { counterReducer } from "./counter.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const combinedReducers = combineReducers({
  // bugs: bugsSlice.reducer,
  // projects: projectsSlice.reducer,
  counter: counterReducer,
});
const rootReducer = combinedReducers;
export type RootState = ReturnType<typeof rootReducer>;
export type DispatchFunc = () => AppDispatch
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: combinedReducers,
});


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: DispatchFunc = useDispatch;
