import { useContext } from "react";
import { GameContext } from "../../context/game.context";
import Alert from "../alert/alert";
import Layer from "../layer/layer";
import "./playground.scss";

const Playground: React.FC = () => {
  const { alertMessage } = useContext(GameContext);
  return (
    <main className="playground">
      {[0, 1, 2, 3, 4, 5].map((nthTry) => (
        <Layer id={nthTry} key={nthTry} />
      ))}
      <Alert message={alertMessage} />
    </main>
  );
};

export default Playground;
