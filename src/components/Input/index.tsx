import React, { forwardRef, InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Input = forwardRef<HTMLInputElement, Props>(({ Icon, ...rest }, ref) => {
  return (
    <Container>
      {Icon && <Icon />}
      <input ref={ref} {...rest} />
    </Container>
  );
});

export default Input;
