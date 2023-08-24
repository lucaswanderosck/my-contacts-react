import { Container } from "./styles";

type Props = {
  letter: string;
};

const colors = [
    "#1abc9c", // verde turquesa
    "#2ecc71", // esmeralda
    "#3498db", // azul petróleo
    "#9b59b6", // roxo ametista
    "#34495e", // azul aço
    "#16a085", // verde malva
    "#2980b9", // azul belize
    "#8e44ad", // roxo wisteria
    "#2c3e50", // azul do ar
    "#e67e22", // laranja cenoura
    "#d35400", // laranja abóbora
    "#c0392b", // vermelho escarlate
    "#7f8c8d", // cinza concreto
];

const LetterProfile = ({ letter }: Props) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return <Container style={{ backgroundColor: randomColor }}>{letter[0]}</Container>;
};

export default LetterProfile;
