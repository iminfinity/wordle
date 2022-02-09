import { useContext } from "react";
import { GameContext } from "../../context/game.context";
import Tile from "../tile/tile";
import "./layer.scss";

interface Props {
  id: number;
}

const Layer: React.FC<Props> = ({ id }) => {
  const { layers, currentLayer, currentString } = useContext(GameContext);

  if (currentLayer === id) {
    return (
      <ul className="layer">
        {new Array(5)
          .fill("")
          .map((item, index) =>
            currentString.length > index ? currentString[index] : item
          )
          .map((character, index) => (
            <Tile character={character} key={index} />
          ))}
      </ul>
    );
  }

  return (
    <ul className="layer">
      {layers[id].map((character, index) => (
        <Tile character={character} key={index} />
      ))}
    </ul>
  );
};

export default Layer;
