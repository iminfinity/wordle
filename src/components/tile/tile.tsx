import { useContext } from "react";
import { GameContext } from "../../context/game.context";
import "./tile.scss";

interface Props {
  character: string;
  index: number;
  current?: boolean;
  layerIndex: number;
}

const Tile: React.FC<Props> = ({ character, index, current, layerIndex }) => {
  const { gameWord, currentLayer, gameOver } = useContext(GameContext);

  const getClassName = () => {
    if (current && !gameOver) return "current";
    if (currentLayer < layerIndex) return "";
    if (gameWord.split("")[index] === character) {
      return "correct";
    }
    if (gameWord.includes(character)) {
      return "misplaced";
    } else {
      return "wrong";
    }
  };

  return <li className={`tile ${getClassName()}`}>{character}</li>;
};

export default Tile;
