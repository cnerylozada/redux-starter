import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { store } from "./redux/store";

function App() {
  // store.dispatch({
  //   type: "bugAdded",
  //   payload: { description: "My first bug" },
  // });
  // console.log(store.getState());
  useEffect(() => {
    console.log("xxx");
  }, []);
  return <div className="App"></div>;
}

export default App;
