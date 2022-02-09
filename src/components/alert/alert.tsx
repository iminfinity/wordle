import "./alert.scss";

interface Props {
  message: string;
}

const Alert: React.FC<Props> = ({ message }) => {
  return (
    <div
      className="alert"
      style={{ visibility: message.length > 0 ? "visible" : "hidden" }}
    >
      {message}
    </div>
  );
};

export default Alert;
