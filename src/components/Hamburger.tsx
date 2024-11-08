import React from "react";

const Hamburger = ({hamburger_state,toggle}) => {
  return (
    <button className={hamburger_state ? "hamburger-button active" : "hamburger-button"} onClick={() => {
      toggle(!hamburger_state);
    }}>
      <div className="burger-bar" style={hamburger_state ? {opacity: 0}: {opacity: 1}}>
      </div>
    </button>
  )
}

export default Hamburger;