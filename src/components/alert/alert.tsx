import { useRef } from "react";
import "./alert.scss";

interface Props {
  message: string;
}

const Alert: React.FC<Props> = ({ message }) => {
  const alertRef = useRef<HTMLDivElement>(null);
  if (alertRef.current) {
    alertRef.current.innerHTML = message;
  }
  return (
    <div
      className="alert"
      style={{ visibility: message.length > 0 ? "visible" : "hidden" }}
      ref={alertRef}
    />
  );
};

export default Alert;
