import {FC} from "react";

interface Button{
  button: string;
  behavior : () => void; 
  buttonText: string;
}

const Button: FC<Button> = ({button,behavior ,buttonText}) => {
  return (
    <>
        <button className={button} onClick={behavior}>{buttonText}</button>
    </>
  )
}

export default Button;