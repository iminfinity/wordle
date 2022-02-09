import { createContext, FC } from "react";
import { targetWords } from "./data/targetWords";
import { dicionary } from "./data/dictionary";

interface ContextValues {
  getAWord: () => string;
  checkIfWord: (word: string) => boolean;
}

const contextDefaultValues: ContextValues = {
  getAWord: () => "",
  checkIfWord: () => false,
};

export const WordContext = createContext<ContextValues>(contextDefaultValues);

const WordContextProvider: FC = ({ children }) => {
  const getAWord = () => {
    const randomNumber = Math.floor(Math.random() * targetWords.length);

    return targetWords[randomNumber];
  };

  const checkIfWord = (word: string) => {
    for (let i = 0; i < dicionary.length; i++) {
      if (dicionary[i] === word) return true;
    }

    return false;
  };

  const value = {
    getAWord,
    checkIfWord,
  };
  return <WordContext.Provider value={value}>{children}</WordContext.Provider>;
};

export default WordContextProvider;
