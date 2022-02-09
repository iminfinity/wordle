import "./tile.scss";

interface Props {
  character: string;
}

const Tile: React.FC<Props> = ({ character }) => {
  return <li className="tile">{character}</li>;
};

export default Tile;
