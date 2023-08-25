import { Container } from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Input = ({ Icon, ...rest }: Props) => {
  return (
    <Container>
      {Icon && <Icon />}
      <input {...rest} />
    </Container>
  );
};

export default Input;
