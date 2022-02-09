import Alert from "../alert/alert";
import Layer from "../layer/layer";
import "./playground.scss";

const Playground: React.FC = () => {
  return (
    <main className="playground">
      <Alert message={""} />
      {[0, 1, 2, 3, 4, 5].map((nthTry) => (
        <Layer id={nthTry} key={nthTry} />
      ))}
    </main>
  );
};

export default Playground;
