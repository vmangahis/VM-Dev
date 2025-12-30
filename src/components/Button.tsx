import { ButtonProps } from "../types/portfoliotypes";

const Button = ({ button, behavior, buttonText }: ButtonProps) => {
  return (
    <>
      <button className={button} onClick={behavior}>
        {buttonText}
      </button>
    </>
  );
};

export default Button;
