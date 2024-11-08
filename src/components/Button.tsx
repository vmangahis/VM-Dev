const Button = ({button,behavior ,buttonText}) => {
  return (
    <>
        <button className={button} onClick={behavior ? behavior : ''}>{buttonText}</button>
    </>
  )
}

export default Button;