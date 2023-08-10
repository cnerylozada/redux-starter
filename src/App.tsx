import React, { useEffect } from "react";
import "./App.css";
import { store } from "./redux/store";
import { bugAdded, bugResolved } from "./redux/bugs.reducer";
import { projectAdded } from "./redux/projects.reducer";
import { fetchUserById } from "./redux/users.reducer";

function App() {
  store.dispatch(projectAdded({ name: "My first project" }));
  store.dispatch(bugAdded({ description: "My first bug" }));
  store.dispatch(fetchUserById(5));
  // store.dispatch(bugResolved({ id: 1 }));
  return <div className="App"></div>;
}

export default App;
