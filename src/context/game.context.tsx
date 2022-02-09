import { createContext, FC, useContext, useState, useEffect } from "react";
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
};

export const GameContext = createContext<GameValues>(contextDefaultValues);

const GameContextProvider: FC = ({ children }) => {
  const { getAWord, checkIfWord } = useContext(WordContext);
  const [gameWord] = useState<string>(() => getAWord());
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [currentLayer, setCurrentLayer] = useState<number>(0);
  const [currentString, setCurrentString] = useState<string>("");

  const [layers, setLayers] = useState<string[][]>(() => {
    return new Array(6).fill(new Array(5).fill(""));
  });

  useEffect(() => {
    setLayers((prev) => {
      let i = 0;
      let word = new Array(5).fill("");
      for (const char of currentString.split("")) {
        word[i] = char;
        i++;
      }
      prev[currentLayer] = word;
      return prev;
    });
  }, [currentString, currentLayer]);

  const pressKey = (key: string) => {
    if (currentString.length >= 5) return;
    setCurrentString((prev) => {
      prev += key;
      return prev;
    });
  };

  const submitGuess = () => {
    let word = currentString;
    if (gameWord === word) setGameOver(true);
    else {
      if (checkIfWord(word)) {
        if (currentLayer === 6) {
          setGameOver(true);
          // lost the game logic
          return;
        }
        setCurrentLayer((prev) => prev + 1);
      } else {
        // not a word logic
      }
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
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameContextProvider;
