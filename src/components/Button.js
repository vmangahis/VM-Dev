import React from 'react'

const Button = ({button, buttonText}) => {
  return (
    <>
        <button className={button}>{buttonText}</button>
    </>
  )
}

export default Button;