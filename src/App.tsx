import { useContext, useEffect } from "react";
import "./App.scss";
import KeyBoard from "./components/keyboard/keyboard";
import Playground from "./components/playground/playground";
import { GameContext } from "./context/game.context";

function App() {
  const { submitGuess, deleteKey, pressKey } = useContext(GameContext);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        submitGuess();
      }
      if (event.key === "Backspace" || event.key === "Delete") {
        deleteKey();
      }
      if (event.key.match(/^[a-z]$/)) {
        pressKey(event.key);
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [submitGuess, deleteKey, pressKey]);

  return (
    <div className="app">
      <Playground />
      <KeyBoard />
    </div>
  );
}

export default App;
