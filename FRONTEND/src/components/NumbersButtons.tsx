interface NumberButton {
  onClick?: () => void;
  color: string;
  text: string;
}

const NumbersButton: React.FC<NumberButton> = ({
  onClick,
  color,
  text,
}) => {
  return (
    <div onClick={onClick} color={color} >{text}</div>
  );
}

export default NumbersButton;