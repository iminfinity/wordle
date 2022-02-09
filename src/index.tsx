import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GameContextProvider from "./context/game.context";
import WordContextProvider from "./context/word.context";

ReactDOM.render(
  <React.StrictMode>
    <WordContextProvider>
      <GameContextProvider>
        <App />
      </GameContextProvider>
    </WordContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
