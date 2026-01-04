import { ButtonProps } from "../types/PortfolioTypes";

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
