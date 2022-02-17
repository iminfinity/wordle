import { createContext, FC, useContext, useState } from "react";
import { WordContext } from "./word.context";

interface GameValues {
  gameWord: string;
  gameOver: boolean;
  currentLayer: number;
  currentString: string;
  updateLayer: () => void;
  pressKey: (key: string) => void;
  submitGuess: () => void;
  deleteKey: () => void;
  layers: string[][];
  alertMessage: string;
}

const contextDefaultValues: GameValues = {
  gameWord: "",
  gameOver: false,
  currentLayer: 0,
  currentString: "",
  updateLayer: () => {},
  pressKey: (key: string) => {},
  submitGuess: () => {},
  deleteKey: () => {},
  layers: [],
  alertMessage: "",
};

export const GameContext = createContext<GameValues>(contextDefaultValues);

const GameContextProvider: FC = ({ children }) => {
  const { getAWord, checkIfWord } = useContext(WordContext);
  const [gameWord] = useState<string>(() => getAWord());
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [currentLayer, setCurrentLayer] = useState<number>(0);
  const [currentString, setCurrentString] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string>("");

  const [layers, setLayers] = useState<string[][]>(() => {
    return new Array(6).fill(new Array(5).fill(""));
  });

  const pressKey = (key: string) => {
    if (currentString.length >= 5) return;
    setCurrentString((prev) => {
      prev += key;
      return prev;
    });
  };

  const submitGuess = () => {
    let word = currentString;
    let layer = currentLayer;
    if (currentString.length < 5) {
      return;
    }
    if (gameWord === word) {
      setGameOver(true);
      setAlertMessage("You Won");
      return;
    }
    const result = checkIfWord(word);
    switch (result) {
      case true:
        setCurrentString("");
        setAlertMessage("Try Again");
        setLayers((prev) => {
          prev[layer] = word.split("");
          return prev;
        });
        if (currentLayer === 5) {
          setGameOver(true);
          setAlertMessage(`Game Over. <br/>The word was <b>${gameWord}</b>`);
        }
        setCurrentLayer((prev) => prev + 1);
        break;
      case false:
        setAlertMessage("Not a word");
        setCurrentString("");
        break;
      default:
        break;
    }
  };

  const deleteKey = () => {
    if (currentString.length === 0) return;
    setCurrentString((prev) => {
      const result = prev
        .split("")
        .slice(0, prev.length - 1)
        .join("");
      return result;
    });
  };

  const updateLayer = () => setCurrentLayer((prev) => prev + 1);

  const value: GameValues = {
    gameWord,
    gameOver,
    currentLayer,
    currentString,
    updateLayer,
    pressKey,
    submitGuess,
    deleteKey,
    layers,
    alertMessage,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameContextProvider;
