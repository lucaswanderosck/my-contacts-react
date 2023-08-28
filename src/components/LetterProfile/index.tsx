import { useState } from "react";
import { Container } from "./styles";

type Props = {
  letter: string;
};

const profileColors = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#e67e22",
  "#d35400",
  "#c0392b",
  "#7f8c8d",
];

const LetterProfile = ({ letter }: Props) => {
  const [color, setColor] = useState<string>(
    profileColors[Math.floor(Math.random() * profileColors.length)]
  );

  const changeColor = () => {
    const newColor =
      profileColors[Math.floor(Math.random() * profileColors.length)];
    setColor(newColor);
  };

  return (
    <Container style={{ backgroundColor: color }} onClick={changeColor}>
      {letter[0].toUpperCase()}
    </Container>
  );
};

export default LetterProfile;
