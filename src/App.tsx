import React, { useEffect } from "react";
import "./App.css";
import { store } from "./redux/store";
import { bugAdded, bugResolved } from "./redux/reducer";

function App() {
  store.dispatch(bugAdded({ description: "My first bug" }));
  store.dispatch(bugResolved({ id: 1 }));
  console.log(store.getState());

  return <div className="App"></div>;
}

export default App;
