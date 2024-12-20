interface Props {
  button: string;
  behavior: () => void;
  buttonText: string;
}

const Button = ({ button, behavior, buttonText }: Props) => {
  return (
    <>
      <button className={button} onClick={behavior}>
        {buttonText}
      </button>
    </>
  );
};

export default Button;
