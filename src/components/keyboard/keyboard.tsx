import { useEffect } from "react";
import { ReactComponent as BackSpace } from "../../assets/backspace.svg";
import "./keyboard.scss";

interface Props {}

const firstRow = "qwertyuiop";
const secondRow = "asdfghjkl";
const thirdRow = "zxcvbnm";

const KeyBoard: React.FC<Props> = () => {
  return (
    <section className="keyboard">
      <div className="first-row">
        {firstRow.split("").map((letter) => (
          <button>{letter}</button>
        ))}
      </div>
      <div className="second-row">
        {secondRow.split("").map((letter) => (
          <button>{letter}</button>
        ))}
      </div>
      <div className="third-row">
        <button className="enter">Enter</button>
        {thirdRow.split("").map((letter) => (
          <button>{letter}</button>
        ))}
        <button className="backspace">
          <BackSpace />
        </button>
      </div>
    </section>
  );
};

export default KeyBoard;
