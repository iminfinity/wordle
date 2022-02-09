import { useContext } from "react";
import { ReactComponent as BackSpace } from "../../assets/backspace.svg";
import { GameContext } from "../../context/game.context";
import "./keyboard.scss";

const firstRow = "qwertyuiop";
const secondRow = "asdfghjkl";
const thirdRow = "zxcvbnm";

const KeyBoard: React.FC = () => {
  const { submitGuess, deleteKey, pressKey } = useContext(GameContext);

  return (
    <section className="keyboard">
      <div className="first-row">
        {firstRow.split("").map((letter) => (
          <button key={letter} onClick={() => pressKey(letter)}>
            {letter}
          </button>
        ))}
      </div>
      <div className="second-row">
        {secondRow.split("").map((letter) => (
          <button key={letter} onClick={() => pressKey(letter)}>
            {letter}
          </button>
        ))}
      </div>
      <div className="third-row">
        <button className="enter" onClick={() => submitGuess()}>
          Enter
        </button>
        {thirdRow.split("").map((letter) => (
          <button key={letter} onClick={() => pressKey(letter)}>
            {letter}
          </button>
        ))}
        <button className="backspace" onClick={() => deleteKey()}>
          <BackSpace />
        </button>
      </div>
    </section>
  );
};

export default KeyBoard;
